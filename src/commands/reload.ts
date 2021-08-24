import { MessageCommand } from '../command';

const reload: MessageCommand = {
	run: async (message, args) => {
		if (!message.client.handler.isOwner(message.author.id)) return;

		const color = Number(process.env.MASHUCOLOR) || 0xff80cc;

		if (message.client.handler.reloadCommand(args[1])) {
			message.channel.send({
				embeds: [{ title: 'Reload complete', description: 'Reloaded command successfully', color }],
			});
		} else if (args[1] === 'all') {
			message.client.handler.reloadAll();
			message.channel.send({
				embeds: [{ title: 'Reload complete', description: 'Reloaded all commands', color }],
			});
		} else {
			message.channel.send({
				embeds: [
					{
						title: 'Unable to reload command.',
						color: Number(process.env.MASHUERRORCOLOR) || 0xff8080,
					},
				],
			});
		}
	},
	name: 'Reload',
	description: 'Reloads a specific or all commands.',
	hidden: true,
	interaction: 'off',
};

export = reload;
