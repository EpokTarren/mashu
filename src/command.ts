import { Permissions, PermissionString } from 'discord.js';
import { Message } from './client';

/**
 * Resolvable to an example, either a string or a function that resolves to a string.
 */
export type ExampleResolvable = string | ((prefix: string) => string);

/**
 * Resolvable to a command.
 */
export interface CommandResolvable {
	/**
	 * Commands execution function.
	 */
	run: (msg: Message, args: string[]) => Promise<void> | void;
	/**
	 * Name of the command.
	 */
	name: string;
	/**
	 * Short description of the command.
	 */
	description: string;
	/**
	 * Wheter the command is hidden.
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
	 * If the command is avilable only in guilds.
	 */
	guildOnly?: boolean;
	/**
	 * Permissions needed to use the command.
	 */
	permissions?: PermissionString[];
	/**
	 * Permissions the bot needs to execute the command.
	 */
	botPermissions?: PermissionString[];
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
	 * If the command is avilable only in guilds.
	 */
	readonly guildOnly: boolean;
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
 * Reprsents a command.
 * @example
 * ```ts
 * const max = Math.pow(2, 32);
 * export = new Command({
 * 	async run(message, args) {
 * 		let n = parseInt(args[1]) || 6;
 * 		if (n > max) n = max;
 * 		else if (n < 2) n = 6;
 *
 * 		const roll = Math.floor(Math.random() * n) + 1;
 *
 * 		message.channel.send(`You rolled ${roll}`);
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
 * });
 *
 * ```
 */
export class Command {
	/**
	 * Commands execution function.
	 */
	public readonly run: (msg: Message, args: string[]) => Promise<void>;
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
	 * Wheter the command is hidden.
	 */
	public readonly hidden: boolean;
	/**
	 * If the command is avilable only in guilds.
	 */
	public readonly guildOnly: boolean;
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
	 * Get the metadata of a comman.
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
			permissions: this.permissionsText.split(', '),
			botPermissions: this.botPermissionsText.split(', '),
		};
	}

	/**
	 * Creates an instance of a command.
	 * @param command - The commandresolvable.
	 * @param prefix - Preifx that is currently in use.
	 * @param directory - Name of the parent folder.
	 */
	constructor(command: CommandResolvable | Command, prefix = '${prefix}', directory = '') {
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
			permissions = [],
			botPermissions = [],
		} = command;

		if (typeof run !== 'function') throw new TypeError('run is not a function.');
		if (run.constructor.name === 'AsyncFunction') this.run = run as Command['run'];
		else this.run = async (m, a) => run(m, a);
		if (typeof name !== 'string') throw new TypeError('Command name must be a string.');
		this.name = name;
		if (typeof name !== 'string') throw new TypeError('Command description must be a string.');
		this.description = description;

		this.aliases = aliases;
		this.category = directory || category;
		this.detailed = detailed || description;

		this.examples = examples.map((resolvable) =>
			typeof resolvable === 'string' ? resolvable.replace('${prefix}', prefix) : resolvable(prefix)
		);

		this.hidden = Boolean(hidden);

		this.guildOnly = Boolean(guildOnly);

		this.permissions = new Permissions(permissions);

		this.botPermissions = new Permissions(botPermissions);

		if (command.constructor.name !== 'Command') {
			this.permissionsText = this.permissions.bitfield
				? (permissions as PermissionString[]).map(legible).reduce(commaReduce).trim()
				: '';
			this.botPermissionsText = this.botPermissions.bitfield
				? (botPermissions as PermissionString[]).map(legible).reduce(commaReduce).trim()
				: '';
		} else {
			this.permissionsText = ((command as unknown) as Command).permissionsText;
			this.botPermissionsText = ((command as unknown) as Command).botPermissionsText;
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
			(this.permissions ? `**Permissions**${this.permissions.toArray().reduce(listReduce, '')}` : '') +
			(this.botPermissions ? `**Bot Permissions**${this.botPermissions.toArray().reduce(listReduce, '')}` : '');

		this.shortHelp = `**${this.name}**: ${description}`;
	}
}
