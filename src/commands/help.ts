import { Message, Interaction } from '../client';
import { IntractableCommand } from '../command';

const help: IntractableCommand = {
	run: async (message) => {
		const footer = { text: process.env.HELPFOOTER, iconURL: process.env.HELPFOOTERICON };
		const color = process.env.MASHUCOLOR ? Number(process.env.MASHUCOLOR) : 0xff80cc;
		const command = message.client.handler.getCommand(message.options.getString('command') ?? '');

		if (command) message.reply({ embeds: [{ title: command.name, description: command.help, color, footer }] });
		else {
			message.reply({ embeds: [{ description: 'Delivering command list through direct messages.', color, footer }] });

			const user = message.client.users.resolve((message as Interaction).user?.id ?? (message as Message).author?.id);

			for (const embed of message.client.handler.help)
				await user?.send({ embeds: [Object.assign(embed, { color, footer })] });
		}
	},
	name: 'Help',
	description: 'Provides help functionality.',
	detailed: 'Provides a command list or help for a specific command.',
	hidden: true,
	interaction: 'on',
	arguments: [
		{
			type: 'String',
			name: 'command',
			description: 'The command you need help with.',
			required: false,
		},
	],
	parseArgs: true,
	category: 'System',
};

export = help;
