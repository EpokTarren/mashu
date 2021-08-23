import { resolve } from 'path';
import { readdirSync, lstatSync, existsSync, readFileSync } from 'fs';
import * as Discord from 'discord.js';
import { Client, Message } from './client';
import { Command, CommandResolvable } from './command';

/**
 * Options for initializing a handler.
 */
export interface HandlerOptions {
	/**
	 * Directory containing commands or subfolders with commands.
	 */
	dir: string;
	/**
	 * Prefix for the bot to use.
	 */
	prefix: string;
	/**
	 * Channel for bot to log errors to.
	 */
	errorChannel?: string;
	/**
	 * Wheter to enable help command.
	 */
	enableHelp?: boolean;
	/**
	 * The ids of the bot owners.
	 */
	owners?: string[];
	/**
	 * Replacer for descriptions, replaces the first value with the second value in category path.
	 * @example
	 * ```ts
	 * // descriptions are in /src/commands/ and built commands /build/commands/
	 * // thus replace "build" with "commands"
	 * { descriptionReplacer: ['build', 'commands'] }
	 * ```
	 */
	descriptionReplacer?: [build: string, src: string];
}

/**
 * Description and commands names of a category.
 */
export interface CategoryData {
	description: string;
	commands: string[];
}

interface InternalClient extends Client {
	handler: Handler;
}

interface InternalHandler extends Handler {
	prefix: string;
	help: Discord.MessageEmbedOptions[];
	client: Client;
	errorChannel: string;
}

/**
 * Command handler.
 */
export class Handler {
	/**
	 * Prefix that the handler uses.
	 */
	public readonly prefix: string;

	/**
	 * Help data.
	 */
	public readonly help: Discord.MessageEmbedOptions[];

	/**
	 * The client the handler is attacheted to.
	 */
	public readonly client: Client;

	/**
	 * The channel to which the bot errors.
	 */
	public readonly errorChannel: string;

	protected owners: string[];

	protected options: HandlerOptions;

	protected dir: string;

	protected aliases: Map<string, string>;

	protected commands: Map<string, Command>;

	protected locations: Map<string, string>;

	/**
	 * A map of categories and their metadata.
	 */
	public readonly categories: Map<string, CategoryData>;

	private loadCommand(path: string, parent?: string): void {
		const command = new Command(require(path) as CommandResolvable, this.prefix, parent);

		for (const alias of command.aliases.concat([command.name]))
			if (this.aliases.get(alias.toLowerCase()) !== undefined)
				throw new Error(`Two commands may not be aliased by the same name "${alias}"`);

		this.commands.set(command.name, command);

		for (const alias of command.aliases.concat([command.name])) this.aliases.set(alias.toLowerCase(), command.name);

		const category = this.categories.get(command.category) || {
			description: command.category,
			commands: [],
		};

		if (!command.hidden)
			this.categories.set(command.category, {
				description: category.description,
				commands: [...category.commands, command.name],
			});

		this.locations.set(command.name, path);

		delete require.cache[require.resolve(path)];
	}

	private loadCommands(dir: string): void {
		readdirSync(dir).forEach((path) => {
			const absolute = resolve(dir, path);
			if (path.endsWith('.js')) this.loadCommand(absolute);
			else if (lstatSync(absolute).isDirectory()) {
				const [build, src] = this.options.descriptionReplacer as [string, string];
				const readme = resolve(absolute, 'README.md').replace(build, src);
				if (existsSync(readme)) {
					const category = this.categories.get(path) || { description: '', commands: [] };
					category.description = readFileSync(readme).toString();
					this.categories.set(path, category);
				}
				readdirSync(absolute).forEach((file) => {
					if (file.endsWith('.js')) this.loadCommand(resolve(absolute, file), path);
				});
			}
		});
	}

	/**
	 * Reloads all commands
	 */
	public reloadAll(): void {
		this.client.removeListener('message', this.handle.bind(this));
		new Handler(this.options, this.client);
	}

	private clearCommand(name: string) {
		const command = this.commands.get(name as string) as Command;
		const category = this.categories.get(command.category) as CategoryData;

		category.commands = category.commands.splice(category.commands.indexOf(command.name), 1);
		this.categories.set(command.category, category);
		this.commands.delete(command.name);

		for (const alias of command.aliases.concat([command.name])) this.aliases.delete(alias.toLowerCase());
	}

	/**
	 * Reloads a command by alias or name.
	 * @param alias - An alias of the command to be reloaded.
	 * @returns wheter a command was reloaded or not.
	 */
	public reloadCommand(alias: string): boolean {
		const command = this.aliases.get(alias);
		const location = this.locations.get(command as string);
		return location ? (this.clearCommand(command as string), this.loadCommand(location), true) : false;
	}

	/**
	 * Gets a command by name or alias.
	 * @param alias - The name or alias of the command.
	 * @returns A command.
	 */
	public getCommand(alias: string): Command | undefined {
		const command = this.commands.get(this.aliases.get(alias) as string);
		return command?.hidden ? undefined : command;
	}

	/**
	 * Runs a command if the message contains a command.
	 * @param message - The message to be handled.
	 */
	public async handle(message: Discord.Message): Promise<void> {
		if (!message.content.startsWith(this.prefix)) return;
		const args = message.content.slice(this.prefix.length).trim().split(/\s+/);
		const command = this.commands.get(this.aliases.get(args[0].toLowerCase()) as string);
		if (!command) return;

		if (command.guildOnly && !message.guild) return;

		if (message.member && !message.member.permissions.has(command.permissions.bitfield)) {
			message.channel.send({
				embeds: [
					{
						title: 'You lack the permissions to use that command.',
						description: 'You need: ' + command.permissionsText,
					},
				],
			});
			return;
		}

		if (message.guild?.me && !message.guild.me.permissions.has(command.botPermissions.bitfield)) {
			message.channel.send({
				embeds: [
					{
						title: 'I lack the permissions to use that command.',
						description: 'I need: ' + command.permissionsText,
						footer: { text: 'If you believe this is in error contact server administrators.' },
					},
				],
			});
			return;
		}

		command.run(message as Message, args).catch(this.reportError.bind(this));
	}

	/**
	 * Reports an error to the set error channel.
	 * @param err - Error to report.
	 */
	public reportError(err: Error): void {
		if (this.errorChannel) {
			const channel = this.client.channels.resolve(this.errorChannel) as Discord.TextChannel;
			if (channel)
				channel.send({
					embeds: [{ title: 'Error occured', description: err.message }],
				});
			else (this as InternalHandler).errorChannel = '';
		}
	}

	/**
	 * Check wheter a user is an owner.
	 * @param id - ID of the user.
	 * @returns Wheter a user is an owner.
	 */
	public isOwner(id: string): boolean {
		return this.owners.includes(id);
	}

	/**
	 * Constructs a handler instance.
	 * @param param0 - Options for the handler.
	 * @param client - Client that the handler will attatch to.
	 */
	constructor(
		{ prefix, dir, enableHelp, errorChannel, owners = [], descriptionReplacer = ['', ''] }: HandlerOptions,
		client: Discord.Client
	) {
		(client as InternalClient).handler = this;
		this.client = client as Client;
		this.client.on && this.client.on('message', this.handle.bind(this));

		this.options = { prefix, dir, enableHelp, errorChannel, owners, descriptionReplacer };

		this.prefix = prefix || '!';

		if (!dir) throw new Error('No command directory provided.');

		this.dir = dir;

		this.aliases = new Map<string, string>();

		this.commands = new Map<string, Command>();

		this.categories = new Map<string, CategoryData>();

		this.locations = new Map<string, string>();

		this.loadCommand(resolve(__dirname, 'commands', 'reload.js'), 'System');

		if (enableHelp !== false) this.loadCommand(resolve(__dirname, 'commands', 'help.js'), 'System');

		this.loadCommands(this.dir);

		this.errorChannel = errorChannel || '';

		this.owners = owners;

		this.help = Array.from(this.categories, (v) => ({
			name: v[0] || 'Uncategorised',
			commands: v[1].commands,
			description: v[1].description,
		}))
			.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
			.reduce(
				(acc, { name, commands, description }) => [
					...acc,
					commands.length > 25
						? {
								title: name,
								description: commands
									.sort()
									.map((name) => this.commands.get(name) as Command)
									.filter((command) => command && !command.hidden)
									.reduce((acc, command) => `${acc}\n${command.shortHelp}`, '')
									.trim(),
						  }
						: {
								title: name,
								description,
								fields: commands
									.map((name) => this.commands.get(name) as Command)
									.filter((command) => command && !command.hidden)
									.map(
										(command): Discord.EmbedFieldData => ({
											name: command.name,
											value: command.description,
										})
									),
						  },
				],
				[] as Discord.MessageEmbedOptions[]
			);
	}
}
