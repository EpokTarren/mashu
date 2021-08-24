import * as Discord from 'discord.js';
import { Handler, HandlerOptions } from './handler';

/**
 * Options used to instantiate a client.
 */
export type ClientOptions = Discord.ClientOptions & HandlerOptions;

/**
 * Client connected to the Discord api.
 */
export class Client extends Discord.Client {
	/**
	 * The command handler that handles messages.
	 */
	readonly handler: Handler;

	/**
	 * Init slash commands
	 * @param token - Your login token
	 */
	public async loadSlashCommands(token: string): Promise<void> {
		await this.handler.loadSlashCommands(token);
	}

	/**
	 * Instantiates a new client with a handler.
	 * @param options - Options used to generate the handler.
	 */
	constructor(options: ClientOptions) {
		super(options);
		this.handler = new Handler(options, this);
	}
}

/**
 * A message emitted by the command handler.
 */
export interface Message extends Discord.Message {
	/**
	 * The client that emitted the message.
	 */
	client: Client;

	/**
	 * Arguments triggered by the message
	 */
	args: string[];

	options: {
		getBoolean(name: string, required: true): boolean;
		getBoolean(name: string, required?: boolean): boolean | undefined;
		getChannel(name: string, required: true): Discord.Channel;
		getChannel(name: string, required?: boolean): Discord.Channel | undefined;
		getInteger(name: string, required: true): number;
		getInteger(name: string, required?: boolean): number | undefined;
		getMentionable(name: string, required: true): Discord.User | Discord.GuildMember | Discord.Role;
		getMentionable(name: string, required?: boolean): Discord.User | Discord.GuildMember | Discord.Role | undefined;
		getRole(name: string, required: true): Discord.Role;
		getRole(name: string, required?: boolean): Discord.Role | undefined;
		getString(name: string, required: true): string;
		getString(name: string, required?: boolean): string | undefined;
		getUser(name: string, required: true): Discord.User;
		getUser(name: string, required?: boolean): Discord.User | undefined;
	};
}

/**
 * An interaction emitted by the command handler.
 */
export interface Interaction extends Discord.CommandInteraction {
	/**
	 * The client that emitted the message.
	 */
	client: Client;
	channel: Discord.TextBasedChannels;
}

export interface MessageOrInteraction {
	isMessage(): this is Message & MessageOrInteraction;
	isInteraction(): this is Interaction & MessageOrInteraction;
}

export type IntractableMessage = (Message | Interaction) & MessageOrInteraction;

export function IntractableMessage(content: Message | Interaction): IntractableMessage {
	const message = Object.hasOwnProperty.call(content, 'author');
	return Object.assign(content, { isMessage: () => message, isInteraction: () => !message });
}
