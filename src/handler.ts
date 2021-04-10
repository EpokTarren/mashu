import { resolve } from 'path';
import { readdirSync, lstatSync, existsSync, readFileSync } from 'fs';
import * as Discord from 'discord.js';
import { Client, Message } from './client';
import { Command, CommandResolvable } from './command';

export interface HandlerOptions {
	dir: string;
	prefix: string;
	errorChannel?: string;
	enableHelp?: boolean;
	owners?: string[];
	descriptionReplacer?: [build: string, src: string];
}

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

export class Handler {
	public readonly prefix: string;

	public readonly help: Discord.MessageEmbedOptions[];

	public readonly client: Client;

	public readonly errorChannel: string;

	protected owners: string[];

	protected options: HandlerOptions;

	protected dir: string;

	protected aliases: Map<string, string>;

	protected commands: Map<string, Command>;

	protected locations: Map<string, string>;

	public readonly categories: Map<string, CategoryData>;

	private loadCommand(path: string, parent?: string): void {
		const command = new Command(require(path) as CommandResolvable, this.prefix, parent);

		for (const alias of command.aliases.concat([command.name]))
			if (this.aliases.get(alias.toLowerCase()) !== undefined)
				throw new Error(`Two commands may not be aliased by the same name "${alias}"`);

		this.commands.set(command.name, command);

		for (const alias of command.aliases.concat([command.name]))
			this.aliases.set(alias.toLowerCase(), command.name);

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

	public reloadAll(): void {
		this.client.removeListener('message', this.handle.bind(this));
		new Handler(this.options, this.client);
	}

	public reloadCommand(alias: string): boolean {
		const command = this.aliases.get(alias);
		const location = this.locations.get(command as string);
		return location ? (this.loadCommand(location), true) : false;
	}

	public getCommand(alias: string): Command | undefined {
		const command = this.commands.get(this.aliases.get(alias) as string);
		return command?.hidden ? undefined : command;
	}

	public async handle(message: Discord.Message): Promise<void> {
		if (!message.content.startsWith(this.prefix)) return;
		const args = message.content.slice(this.prefix.length).trim().split(/\s+/);
		const command = this.commands.get(this.aliases.get(args[0].toLowerCase()) as string);
		if (!command) return;

		if (command.guildOnly && !message.guild) return;

		if (message.member && !message.member.permissions.has(command.permissions.bitfield)) {
			message.channel.send({
				embed: {
					title: 'You lack the permissions to use that command.',
					description: 'You need: ' + command.permissionsText,
				},
			});
			return;
		}

		if (message.guild?.me && !message.guild.me.permissions.has(command.botPermissions.bitfield)) {
			message.channel.send({
				embed: {
					title: 'I lack the permissions to use that command.',
					description: 'I need: ' + command.permissionsText,
					footer: { text: 'If you believe this is in error contact server administrators.' },
				},
			});
			return;
		}

		command.run(message as Message, args).catch(this.reportError.bind(this));
	}

	public reportError(err: Error): void {
		if (this.errorChannel) {
			const channel = this.client.channels.resolve(this.errorChannel) as Discord.TextChannel;
			if (channel)
				channel.send({
					embed: {
						title: 'Error occured',
						description: err.message,
					},
				});
			else (this as InternalHandler).errorChannel = '';
		}
	}

	public isOwner(id: string): boolean {
		return this.owners.includes(id);
	}

	constructor(
		{
			prefix,
			dir,
			enableHelp,
			errorChannel,
			owners = [],
			descriptionReplacer = ['', ''],
		}: HandlerOptions,
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
