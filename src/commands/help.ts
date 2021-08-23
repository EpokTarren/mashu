import { CommandResolvable } from '../command';

const help: CommandResolvable = {
	run: async (message, args) => {
		const footer = { text: process.env.HELPFOOTER, iconURL: process.env.HELPFOOTERICON };
		const color = process.env.MASHUCOLOR ? Number(process.env.MASHUCOLOR) : 0xff80cc;
		if (args[1]) {
			const command = message.client.handler.getCommand(args[1]);
			if (command) {
				message.channel.send({
					embeds: [{ title: command.name, description: command.help, color, footer }],
				});
				return;
			}
		}
		message.channel.send({ embeds: [{ description: 'Delivering commandlist.', color, footer }] });
		message.client.handler.help.forEach((embed) =>
			message.author.send({ embeds: [Object.assign(embed, { color, footer })] })
		);
	},
	name: 'Help',
	description: 'Provides help functionality.',
	detailed: 'Provides a command list or help for a specific command.',
	hidden: true,
	category: 'System',
};

export = help;
