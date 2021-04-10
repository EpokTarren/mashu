import * as Discord from 'discord.js';
import { Handler, HandlerOptions } from './handler';

export type ClientOptions = Discord.ClientOptions & HandlerOptions;

export class Client extends Discord.Client {
	readonly handler: Handler;

	constructor(options: ClientOptions) {
		super(options);
		this.handler = new Handler(options, this);
	}
}

export interface Message extends Discord.Message {
	client: Client;
}
