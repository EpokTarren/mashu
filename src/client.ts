import * as Discord from 'discord.js';
import { Handler, HandlerOptions } from './handler';

/**
 * Options used to instantiate a client.
 */
export type ClientOptions = Discord.ClientOptions & HandlerOptions;

/**
 * Client connected to the Disocrd api.
 */
export class Client extends Discord.Client {
	/**
	 * The command handler that handles messages.
	 */
	readonly handler: Handler;

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
}
