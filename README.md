# MashuJS

MashuJS is a command handler for [discord.js](https://discord.js.org/#/) written in TypeScript for [astolto](https://github.com/EpokTarren/astolto).

# Getting started

The client provided is an extension of discord.js [client](https://discord.js.org/#/docs/main/stable/class/Client) that has a handler attached. You can also view the [documentation page](https://mashu.tarren.moe/) for more extensive docs.

```sh
# with npm
npm install mashujs discord.js
# with yarn
yarn add mashujs discord.js
```

Initialise a client and pass it to a handler

```js
const { Client } = require('mashujs');
const { resolve } = require('path');

const client = new Client({
	disableMentions: 'everyone',
	dir: resolve(__dirname, 'commands'),
	owners: ['your id'],
	prefix: 'a;',
	enableHelp: true,
	errorChannel: 'Some channel id',
});

client.once('ready', () => {
	client.handler.loadSlashCommands();
});

client.login('your bot token');
```

Simple example command

```ts
const max = 1 << 32;
export = new Command({
	async run(message) {
		let n = message.options.getInteger('n') || 6;

		if (n > max) n = max;
		else if (n < 2) n = 6;

		const roll = Math.floor(Math.random() * n) + 1;

		message.reply(`You rolled ${roll}`);
	},
	name: 'Roll',
	aliases: ['R', 'Dice', 'D'],
	description: 'Roll an n-sided die.',
	detailed: 'Roll a number between 1 and n.',
	examples: [(prefix) => `${prefix}roll`, (prefix) => `${prefix}r 1000`, (prefix) => `${prefix}d 1000000`],
	arguments: [
		{
			type: 'Integer',
			name: 'n',
			description: 'Max roll value.',
			required: false,
		},
	],
	parseArgs: true,
	interaction: 'on',
});
```

You can set some environment variables to change the styling of output

```ts
process.env.HELPFOOTER; // Footer text for help command
process.env.HELPFOOTERICON; // Footer icon for help command
process.env.MASHUCOLOR; // Default color for built in commands default "0xff80cc"
process.env.MASHUERRORCOLOR; // Error color for built in error logging default "0xff8080"
process.env.MASHUDEBUGGUILD; // Guild to limit testing of slash command pushes to, default is undefined
```

# Docs generation

Default `.mashurc.json` config can be generated by running

```sh
npx mashujs --new
```

After that edit your config.

## Properties

- `prefix`, Prefix to use when generating examples.
- `input`, Path to command locations.
- `output`, Path to docs folder.
- `readme`, Path to the readme.md for the bot as a whole and will export as index.md.
- `descriptions`, Will include a description beneath the title if one exists in the command categories folder as README.md.
- `descriptionReplacer`, Replace build path with src path to locate README files, ["build", "src"]
- `titles`, Whether or not to include jekyll titles.
- `permalink`, Whether or not to include jekyll permalinks.
- `layout`, Jekyll layout for command pages.
- `homeHeader`, Jekyll header options for index.md such as; "layout: home".

# License

MashuJS is licensed under [MIT](./LICENSE).
