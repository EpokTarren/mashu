import { resolve } from 'path';
import { readdirSync, lstatSync, existsSync, readFileSync } from 'fs';

import * as Discord from 'discord.js';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { SlashCommandBuilder } from '@discordjs/builders';
import { ApplicationCommandOptionWithChoicesBase } from '@discordjs/builders/dist/interactions/slashCommands/mixins/CommandOptionWithChoices';

import { Client, Message, Interaction, IntractableMessage } from './client';
import { Command, InteractionCommand, Argument, IntractableCommand, MessageCommand } from './command';

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
	 * Whether to enable help command.
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
	 * The client the handler is attached to.
	 */
	public readonly client: Client;

	/**
	 * The channel to which the bot errors.
	 */
	public readonly errorChannel?: Discord.TextChannel;

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
		const proto: MessageCommand | IntractableCommand | InteractionCommand = require(path);

		if (proto.interaction === 'only') {
			if (typeof proto.name === 'undefined') throw new TypeError('Command name must be a string.');

			proto.name = '__interaction__' + proto.name;

			if (this.aliases.get(proto.name.toLowerCase()) !== undefined)
				throw new Error(`Two commands may not be aliased by the same name "${proto.name}"`);

			this.commands.set(proto.name, new Command(proto, this.prefix, parent));

			return;
		}

		const command = new Command(proto, this.prefix, parent);

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
	 * @returns whether a command was reloaded or not.
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

		if (message.member?.permissions.has(command.permissions.bitfield) === false) {
			message.channel
				.send({
					embeds: [
						{
							title: 'You lack the permissions to use that command.',
							description: 'You need: ' + command.permissionsText,
							color: Number(process.env.MASHUERRORCOLOR) || 0xff8080,
						},
					],
				})
				.catch();
			return;
		}

		if (message.guild?.me?.permissions.has(command.botPermissions.bitfield) === false) {
			message.channel
				.send({
					embeds: [
						{
							title: 'I lack the permissions to use that command.',
							description: 'I need: ' + command.permissionsText,
							color: Number(process.env.MASHUERRORCOLOR) || 0xff8080,
							footer: { text: 'If you believe this is in error contact your server administrators.' },
						},
					],
				})
				.catch();
			return;
		}

		(message as Message).args = args;

		const parsedArguments = new Map<string, unknown>();

		if (command.parseArgs)
			try {
				for (const [index, arg] of command.arguments.entries()) {
					const i = index + 1;
					const value = args[i];

					if (!value && arg.required)
						throw new Error(`Incorrect arguments provided you must provide ${arg.name} as argument number ${i}.`);

					switch (arg.type) {
						case 'Boolean':
							parsedArguments.set(arg.name, ['yes', 'true', 'agree', 'ok', 'okay'].includes(value.toLowerCase()));
							break;
						case 'Channel': {
							const channel = message.guild?.channels.resolve(value.replace(/\D+/g, ''));

							if ((!channel || !channel.isText()) && arg.required)
								throw new Error(
									`Incorrect arguments provided you must provide a valid channel or channel ID for ${arg.name} as argument number ${i}.`
								);

							parsedArguments.set(arg.name, channel);

							break;
						}
						case 'Integer': {
							const num = parseInt(value);

							if (arg.required && isNaN(num))
								throw new Error(
									`Incorrect arguments provided you must provide a valid base 10 for ${arg.name} as argument number ${i}.`
								);

							parsedArguments.set(arg.name, num);
							break;
						}
						case 'Mentionable': {
							const id = value.replace(/\D+/g, '');
							const mentionable =
								message.guild?.members.resolve(id) ??
								message.guild?.roles.resolve(id) ??
								message.client.users.resolve(id);

							if (arg.required && !mentionable)
								throw new Error(
									`Incorrect arguments provided you must provide a valid mentionable or mentionable ID for ${arg.name} as argument number ${i}.`
								);

							parsedArguments.set(arg.name, mentionable);
							break;
						}
						case 'Role': {
							const role = message.guild?.roles.resolve(value.replace(/\D+/g, ''));

							if (arg.required && !role)
								throw new Error(
									`Incorrect arguments provided you must provide a valid mentionable or mentionable ID for ${arg.name} as argument number ${i}.`
								);

							parsedArguments.set(arg.name, role);
							break;
						}
						case 'String':
							parsedArguments.set(arg.name, value);
							break;
						case 'User': {
							const user = message.client.users.resolve(value.replace(/\D+/g, ''));

							if (arg.required && !user)
								throw new Error(
									`Incorrect arguments provided you must provide a valid user or user ID for ${arg.name} as argument number ${i}.`
								);

							parsedArguments.set(arg.name, user);
							break;
						}
					}
				}
			} catch (error) {
				message.reply({
					embeds: [
						{
							title: 'Incorrect command usage.',
							description: error.message || error,
							color: Number(process.env.MASHUERRORCOLOR) || 0xff8080,
						},
					],
				});
				return;
			}

		const get = (name: string): unknown => parsedArguments.get(name);

		(message as Message).options = {
			getBoolean: get as Message['options']['getBoolean'],
			getChannel: get as Message['options']['getChannel'],
			getInteger: get as Message['options']['getInteger'],
			getMentionable: get as Message['options']['getMentionable'],
			getRole: get as Message['options']['getRole'],
			getString: get as Message['options']['getString'],
			getUser: get as Message['options']['getUser'],
		};

		command.run(IntractableMessage(message as Message), args).catch(this.reportError.bind(this));
	}

	/**
	 * Reports an error to the set error channel.
	 * @param err - Error to report.
	 */
	public reportError(err: Error): void {
		if (this.errorChannel) {
			if (this.errorChannel)
				this.errorChannel.send({
					embeds: [{ title: 'Error occurred', description: err.message }],
				});
		}
	}

	/**
	 * Check whether a user is an owner.
	 * @param id - ID of the user.
	 * @returns Whether a user is an owner.
	 */
	public isOwner(id: string): boolean {
		return this.owners.includes(id);
	}

	private slashCommandAliases: Map<string, string> = new Map();

	/**
	 * Init slash commands
	 * @param token - Your login token
	 */
	public async loadSlashCommands(token: string): Promise<void> {
		if (!this.client?.user?.id) throw new Error('No client id available.');
		if (!token) throw new Error('No token available.');

		const commands = Array.from(this.commands)
			.filter(([, command]) => command.interaction !== 'off')
			.map(([name, command]): [internalName: string, name: string, command: Command] => [
				name,
				name
					.replace(/^__interaction__/, '')
					.replace(/^[A-Z]+/, (match) => match.toLowerCase())
					.replace(/[A-Z]+/g, (match) => '-' + match.toLowerCase()),
				command,
			]);

		commands.forEach(([internalName, name]) => this.slashCommandAliases.set(internalName, name));

		const rest = new REST({ version: '9' }).setToken(token);

		const typeToMethodName: Record<
			Argument['type'],
			| 'addBooleanOption'
			| 'addChannelOption'
			| 'addIntegerOption'
			| 'addMentionableOption'
			| 'addRoleOption'
			| 'addStringOption'
			| 'addUserOption'
		> = {
			Boolean: 'addBooleanOption',
			Channel: 'addChannelOption',
			Integer: 'addIntegerOption',
			Mentionable: 'addMentionableOption',
			Role: 'addRoleOption',
			String: 'addStringOption',
			User: 'addUserOption',
		};

		const body: SlashCommandBuilder[] = commands.map(([, name, command]) => {
			const slash = new SlashCommandBuilder().setName(name).setDescription(command.description);

			for (const argument of command.arguments)
				slash[typeToMethodName[argument.type]](
					/*
					 * TypeScript cannot deduce a type implicitly but will error when a type is provided.
					 * The deduced type still exists in the error message and is too large for practical use.
					 * All the types have setName, setDescription, and setRequired, but not all have addChoice.
					 * Hence there is a check to make sure addChoice exists before calling the function.
					 */
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-expect-error
					(option: ApplicationCommandOptionWithChoicesBase<string | number>) => {
						option.setName(argument.name).setDescription(argument.description).setRequired(!!argument.required);
						option.addChoice && argument.choices?.forEach(({ name, value }) => option.addChoice(name, value));
						return option;
					}
				);

			return slash;
		});

		/*
		 * This shouldn't need to be casted this way, my IDE thinks the types are fine,
		 * I know this is the intended way to use this function see example usage https://discord.js.org/#/docs/main/13.1.0/general/welcome,
		 * Yet when compiling it throws a type error, I hate this, I shouldn't have to write code like this, this sucks.
		 */
		await rest.put((Routes.applicationCommands(this.client.user.id) as unknown) as '/${string}', { body });
	}

	/**
	 * Runs a command if the message contains a command.
	 * @param interaction - The message to be handled.
	 */
	public async handleInteraction(interaction: Discord.Interaction): Promise<void> {
		if (!interaction.isCommand()) return;

		const command = this.commands.get(this.aliases.get(interaction.commandName) as string);

		if (!command || (command.guildOnly && !interaction.guild)) return;

		if (
			interaction.guild?.members
				.resolve(interaction.member?.user?.id ?? '')
				?.permissions.has(command.permissions.bitfield) === false
		) {
			interaction.reply({
				embeds: [
					{
						title: 'You lack the permissions to use that command.',
						description: 'You need: ' + command.permissionsText,
					},
				],
			});
			return;
		}

		if (interaction.guild?.me?.permissions.has(command.botPermissions.bitfield) === false) {
			interaction.reply({
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

		command.run(IntractableMessage(interaction as Interaction), []).catch(this.reportError.bind(this));
	}

	/**
	 * Constructs a handler instance.
	 * @param options - Options for the handler.
	 * @param client - Client that the handler will attach to.
	 */
	constructor(
		{ prefix, dir, enableHelp, errorChannel = '', owners = [], descriptionReplacer = ['', ''] }: HandlerOptions,
		client: Discord.Client
	) {
		((client as unknown) as { handler: Handler }).handler = this;
		this.client = client as Client;
		this.client.on?.('messageCreate', this.handle.bind(this));
		this.client.on?.('interactionCreate', this.handleInteraction.bind(this));

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

		this.errorChannel = this.client.channels?.resolve(errorChannel) as Discord.TextChannel;

		this.owners = owners;

		this.help = Array.from(this.categories, (v) => ({
			name: v[0] || 'None',
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
