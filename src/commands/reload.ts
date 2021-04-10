import { CommandResolvable } from '../command';

export = {
	run: async (message, args) => {
		if (!message.client.handler.isOwner(message.author.id)) return;
		const command = args[1] && message.client.handler.getCommand(args[1]);
		const color = process.env.MASHUCOLOR ? Number(process.env.MASHUCOLOR) : 0xff80cc;
		if (command) {
			message.client.handler.reloadCommand(command.name);
			message.channel.send({
				embed: { title: 'Reload complete', description: 'Reloaded ' + command.name, color },
			});
		} else if (args[1] === 'all') {
			message.client.handler.reloadAll();
			message.channel.send({
				embed: { title: 'Reload complete', description: 'Reloaded all commands', color },
			});
		}
	},
	name: 'Reload',
	description: 'Reloads a specific or all commands.',
	hidden: true,
} as CommandResolvable;
