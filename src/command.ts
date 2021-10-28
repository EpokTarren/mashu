import { Permissions, PermissionString } from 'discord.js';
import { Message, Interaction, IntractableMessage } from './client';

/**
 * Resolvable to an example, either a string or a function that resolves to a string.
 */
export type ExampleResolvable = string | ((prefix: string) => string);

export type ArgumentType = 'Boolean' | 'Channel' | 'Integer' | 'Mentionable' | 'Role' | 'String' | 'User';

export interface Argument {
	name: string;
	description: string;
	type: ArgumentType;
	required?: boolean;
	choices?: { name: string; value: string | number }[];
}

export interface BaseCommand {
	/**
	 * Commands execution function.
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	run: (msg: any, args: string[]) => Promise<void> | void;

	/**
	 * Name of the command.
	 */
	name: string;

	/**
	 * Short description of the command.
	 */
	description: string;

	/**
	 * Whether the command is hidden.
	 */
	hidden?: boolean;

	/**
	 * Aliases of the command.
	 */
	aliases?: string[];

	/**
	 * Category the command is in.
	 */
	category?: string;

	/**
	 * Detailed description of the command.
	 */
	detailed?: string;

	/**
	 * Examples of the command in use.
	 */
	examples?: ExampleResolvable[];

	/**
	 * If the command is available only in guilds.
	 */
	guildOnly?: boolean;

	/**
	 * Whether the command is suitable to be a message interaction.
	 */
	interaction: 'off' | 'on' | 'only';

	/**
	 * Command arguments
	 */
	arguments?: Argument[];

	/**
	 * Whether to parse arguments for plain message command invocations.
	 */
	parseArgs?: boolean;

	/**
	 * Permissions needed to use the command.
	 */
	permissions?: PermissionString[];

	/**
	 * Permissions the bot needs to execute the command.
	 */
	botPermissions?: PermissionString[];
}

export interface MessageCommand extends BaseCommand {
	run: (msg: Message, args: string[]) => Promise<void> | void;
	interaction: 'off';
}

/**
 * A command that is optionally a slash command
 */
export interface IntractableCommand extends BaseCommand {
	/**
	 * Commands execution function.
	 */
	run: (msg: IntractableMessage) => Promise<void> | void;

	interaction: 'on';
}

/**
 * A command that is exclusively a slash command
 */
export interface InteractionCommand extends BaseCommand {
	/**
	 * Commands execution function.
	 */
	run: (msg: Interaction) => Promise<void> | void;

	interaction: 'only';

	parseArgs?: never;
}

const commaReduce = (acc: string, perm: string) => `${acc}, ${perm}`;
const listReduce = (acc: string, value: string) => `${acc}• ${value}\n`;
const legible = (perm: PermissionString) =>
	perm
		.toLowerCase()
		.replace('_', ' ')
		.replace(/(^| )./g, (str) => str.toUpperCase());

/**
 * The metadata of a command.
 */
export interface CommandMetadata {
	/**
	 * Name of the command.
	 */
	readonly name: string;

	/**
	 * Short description of the command.
	 */
	readonly description: string;

	/**
	 * Aliases of the command.
	 */
	readonly aliases: string[];

	/**
	 * Category the command is in.
	 */
	readonly category: string;

	/**
	 * Detailed description of the command.
	 */
	readonly detailed: string;

	/**
	 * Examples of the command in use.
	 */
	readonly examples: string[];

	/**
	 * If the command is available only in guilds.
	 */
	readonly guildOnly: boolean;

	/**
	 * Whether the command is suitable to be a message interaction.
	 */
	readonly interaction: 'off' | 'on' | 'only';

	/**
	 * Interaction arguments
	 */
	readonly arguments: Argument[];

	/**
	 * Permissions needed to use the command as human readable.
	 */
	readonly permissions: string[];

	/**
	 * Permissions the bot needs as human readable.
	 */
	readonly botPermissions: string[];
}

/**
 * Represents a command.
 * @example
 * ```ts
 * const max = Math.pow(2, 32);
 * export = new Command({
 * 	async run(message) {
 * 		let n = message.options.getInteger('n') || 6;
 *
 * 		if (n > max) n = max;
 * 		else if (n < 2) n = 6;
 *
 * 		const roll = Math.floor(Math.random() * n) + 1;
 *
 * 		message.reply(`You rolled ${roll}`);
 * 	},
 * 	name: 'Roll',
 * 	aliases: ['R', 'Dice', 'D'],
 * 	description: 'Roll an n-sided die.',
 * 	detailed: 'Roll a number between 1 and n.',
 * 	examples: [
 * 		(prefix) => `${prefix}roll`,
 * 		(prefix) => `${prefix}r 1000`,
 * 		(prefix) => `${prefix}d 1000000`,
 * 	],
 * 	arguments: [
 * 		{
 * 			type: 'Integer',
 * 			name: 'n',
 * 			description: 'Max roll value.',
 * 			required: false,
 * 		},
 * 	],
 * 	parseArgs: true,
 *	interaction: 'on',
 * });
 *
 * ```
 */
export class Command {
	/**
	 * Commands execution function.
	 */
	public readonly run: (msg: IntractableMessage, args: string[]) => Promise<void>;

	/**
	 * Name of the command.
	 */
	public readonly name: string;

	/**
	 * Short description of the command.
	 */
	public readonly description: string;

	/**
	 * Help text describing the command.
	 */
	public readonly help: string;

	/**
	 * Short help text for summary viewing of the command.
	 */
	public readonly shortHelp: string;

	/**
	 * Aliases of the command.
	 */
	public readonly aliases: string[];

	/**
	 * Category the command is in.
	 */
	public readonly category: string;

	/**
	 * Detailed description of the command.
	 */
	public readonly detailed: string;

	/**
	 * Examples of the command in use.
	 */
	public readonly examples: string[];

	/**
	 * Whether the command is hidden.
	 */
	public readonly hidden: boolean;

	/**
	 * If the command is available only in guilds.
	 */
	public readonly guildOnly: boolean;

	/**
	 * Whether the command is suitable to be a message interaction.
	 */
	public readonly interaction: 'off' | 'on' | 'only';

	/**
	 * Interaction arguments
	 */
	public readonly arguments: Argument[];

	/**
	 * Whether to parse arguments for plain message command invocations.
	 */
	public readonly parseArgs: boolean;

	/**
	 * Permissions needed to use the command.
	 */
	public readonly permissions: Permissions;
	/**
	 * Permissions the bot needs to execute the command.
	 */
	public readonly botPermissions: Permissions;

	/**
	 * Permissions needed to use the command as a string.
	 */
	public readonly permissionsText: string;
	/**
	 * Permissions needed to execute the command as a string.
	 */
	public readonly botPermissionsText: string;

	/**
	 * Get the metadata of a command.
	 * @returns Metadata of the command.
	 */
	public metadata(): CommandMetadata {
		return {
			name: this.name,
			description: this.description,
			aliases: this.aliases,
			category: this.category,
			detailed: this.detailed,
			examples: this.examples,
			guildOnly: this.guildOnly,
			interaction: this.interaction,
			arguments: this.arguments,
			permissions: this.permissionsText.split(', '),
			botPermissions: this.botPermissionsText.split(', '),
		};
	}

	/**
	 * Creates an instance of a command.
	 * @param command - The command resolvable.
	 * @param prefix - Prefix that is currently in use.
	 * @param directory - Name of the parent folder.
	 */
	constructor(
		command: MessageCommand | IntractableCommand | InteractionCommand | Command,
		prefix = '${prefix}',
		directory = ''
	) {
		const {
			run,
			name,
			description,
			hidden = false,
			aliases = [],
			category = '',
			detailed = '',
			examples = [],
			guildOnly = false,
			interaction = 'off',
			parseArgs = false,
			permissions = [],
			botPermissions = [],
		} = command;

		if (typeof run !== 'function') throw new TypeError('run is not a function.');

		if (typeof name !== 'string') throw new TypeError('Command name must be a string.');

		if (typeof description !== 'string') throw new TypeError('Command description must be a string.');

		this.run =
			run.constructor.name === 'AsyncFunction'
				? (run as Command['run'])
				: async (m: IntractableMessage, a: string[]) => (run as Command['run'])(m, a);

		this.name = name;

		this.description = description;

		this.aliases = aliases;

		this.category = directory || category;

		this.detailed = detailed || description;

		this.examples = examples.map((example) =>
			typeof example === 'string' ? example.replace('${prefix}', prefix) : example(prefix)
		);

		this.hidden = hidden;

		this.guildOnly = guildOnly;

		this.interaction = interaction;

		this.arguments = command.arguments || [];

		this.parseArgs = parseArgs;

		if (command.constructor.name !== 'Command') {
			this.permissions = new Permissions(permissions);

			this.botPermissions = new Permissions(botPermissions);

			this.permissionsText = this.permissions.bitfield
				? (permissions as PermissionString[]).map(legible).reduce(commaReduce).trim()
				: '';
			this.botPermissionsText = this.botPermissions.bitfield
				? (botPermissions as PermissionString[]).map(legible).reduce(commaReduce).trim()
				: '';
		} else {
			this.permissionsText = (command as Command).permissionsText;
			this.botPermissionsText = (command as Command).botPermissionsText;
			this.permissions = (command as Command).permissions;
			this.botPermissions = (command as Command).botPermissions;
		}

		this.help =
			`${description}\n` +
			(this.aliases[0] ? `**Aliases**\n${this.aliases.reduce(listReduce, '')}` : '') +
			(this.examples
				? `**Examples**\n${this.examples
						.map((v) => `\`${v}\``)
						.reduce(listReduce, '')
						.trim()}`
				: '') +
			(this.permissions.bitfield ? `\n**Permissions**${this.permissions.toArray().reduce(listReduce, '')}` : '') +
			(this.botPermissions.bitfield
				? `\n**Bot Permissions**${this.botPermissions.toArray().reduce(listReduce, '')}`
				: '');

		this.shortHelp = `**${this.name}**: ${description}`;
	}
}
