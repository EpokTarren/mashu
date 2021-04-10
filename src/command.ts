import { Permissions, PermissionString } from 'discord.js';
import { Message } from './client';

export type ExampleResolvable = string | ((prefix: string) => string);

export interface CommandResolvable {
	run: (msg: Message, args: string[]) => Promise<void> | void;
	name: string;
	description: string;
	hidden?: boolean;
	aliases?: string[];
	category?: string;
	detailed?: string;
	examples?: ExampleResolvable[];
	guildOnly?: boolean;
	permissions?: PermissionString[];
	botPermissions?: PermissionString[];
}

const commaReduce = (acc: string, perm: string) => `${acc}, ${perm}`;
const listReduce = (acc: string, value: string) => `${acc}• ${value}\n`;
const legible = (perm: PermissionString) =>
	perm
		.toLowerCase()
		.replace('_', ' ')
		.replace(/(^| )./g, (str) => str.toUpperCase());

export interface CommandMetadata {
	readonly name: string;
	readonly description: string;
	readonly aliases: string[];
	readonly category: string;
	readonly detailed: string;
	readonly examples: string[];
	readonly guildOnly: boolean;
	readonly permissions: string[];
	readonly botPermissions: string[];
}

export class Command {
	public readonly run: (msg: Message, args: string[]) => Promise<void>;
	public readonly name: string;
	public readonly description: string;

	public readonly help: string;
	public readonly shortHelp: string;

	public readonly aliases: string[];
	public readonly category: string;
	public readonly detailed: string;
	public readonly examples: string[];

	public readonly hidden: boolean;
	public readonly guildOnly: boolean;
	public readonly permissions: Permissions;
	public readonly botPermissions: Permissions;

	public readonly permissionsText: string;
	public readonly botPermissionsText: string;

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

	constructor(
		{
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
		}: CommandResolvable,
		prefix = '${prefix}',
		directory = ''
	) {
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

		this.permissionsText = this.permissions.bitfield
			? permissions.map(legible).reduce(commaReduce).trim()
			: '';

		this.botPermissions = new Permissions(botPermissions);

		this.botPermissionsText = this.botPermissions.bitfield
			? botPermissions.map(legible).reduce(commaReduce).trim()
			: '';

		this.help =
			`${description}\n` +
			(this.aliases[0] ? `**Aliases**\n${this.aliases.reduce(listReduce, '')}` : '') +
			(this.examples
				? `**Examples**\n${this.examples
						.map((v) => `\`${v}\``)
						.reduce(listReduce, '')
						.trim()}`
				: '') +
			(this.permissions
				? `**Permissions**${this.permissions.toArray().reduce(listReduce, '')}`
				: '') +
			(this.botPermissions
				? `**Bot Permissions**${this.botPermissions.toArray().reduce(listReduce, '')}`
				: '');

		this.shortHelp = `**${this.name}**: ${description}`;
	}
}
