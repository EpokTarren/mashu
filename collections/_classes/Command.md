---
title: Command
layout: default
permalink: /command/
---
[mashujs](/readme/) / [Exports](/modules/) / Command

# Class: Command

Represents a command.

**`example`**
```ts
const max = Math.pow(2, 32);
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
	examples: [
		(prefix) => `${prefix}roll`,
		(prefix) => `${prefix}r 1000`,
		(prefix) => `${prefix}d 1000000`,
	],
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

## Table of contents

### Constructors

- [constructor](/command/#constructor)

### Properties

- [aliases](/command/#aliases)
- [arguments](/command/#arguments)
- [botPermissions](/command/#botpermissions)
- [botPermissionsText](/command/#botpermissionstext)
- [category](/command/#category)
- [description](/command/#description)
- [detailed](/command/#detailed)
- [examples](/command/#examples)
- [guildOnly](/command/#guildonly)
- [help](/command/#help)
- [hidden](/command/#hidden)
- [interaction](/command/#interaction)
- [name](/command/#name)
- [parseArgs](/command/#parseargs)
- [permissions](/command/#permissions)
- [permissionsText](/command/#permissionstext)
- [run](/command/#run)
- [shortHelp](/command/#shorthelp)

### Methods

- [metadata](/command/#metadata)

## Constructors

### constructor

• **new Command**(`command`, `prefix?`, `directory?`)

Creates an instance of a command.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `command` | [`MessageCommand`](/messagecommand/) \| [`IntractableCommand`](/intractablecommand/) \| [`InteractionCommand`](/interactioncommand/) \| [`Command`](/command/) | `undefined` | The command resolvable. |
| `prefix` | `string` | `'${prefix}'` | Prefix that is currently in use. |
| `directory` | `string` | `''` | Name of the parent folder. |

#### Defined in

[command.ts:345](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L345)

## Properties

### aliases

• `Readonly` **aliases**: `string`[]

Aliases of the command.

#### Defined in

[command.ts:259](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L259)

___

### arguments

• `Readonly` **arguments**: [`Argument`](/argument/)[]

Interaction arguments

#### Defined in

[command.ts:294](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L294)

___

### botPermissions

• `Readonly` **botPermissions**: `Permissions`

Permissions the bot needs to execute the command.

#### Defined in

[command.ts:308](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L308)

___

### botPermissionsText

• `Readonly` **botPermissionsText**: `string`

Permissions needed to execute the command as a string.

#### Defined in

[command.ts:317](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L317)

___

### category

• `Readonly` **category**: `string`

Category the command is in.

#### Defined in

[command.ts:264](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L264)

___

### description

• `Readonly` **description**: `string`

Short description of the command.

#### Defined in

[command.ts:244](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L244)

___

### detailed

• `Readonly` **detailed**: `string`

Detailed description of the command.

#### Defined in

[command.ts:269](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L269)

___

### examples

• `Readonly` **examples**: `string`[]

Examples of the command in use.

#### Defined in

[command.ts:274](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L274)

___

### guildOnly

• `Readonly` **guildOnly**: `boolean`

If the command is available only in guilds.

#### Defined in

[command.ts:284](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L284)

___

### help

• `Readonly` **help**: `string`

Help text describing the command.

#### Defined in

[command.ts:249](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L249)

___

### hidden

• `Readonly` **hidden**: `boolean`

Whether the command is hidden.

#### Defined in

[command.ts:279](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L279)

___

### interaction

• `Readonly` **interaction**: ``"off"`` \| ``"on"`` \| ``"only"``

Whether the command is suitable to be a message interaction.

#### Defined in

[command.ts:289](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L289)

___

### name

• `Readonly` **name**: `string`

Name of the command.

#### Defined in

[command.ts:239](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L239)

___

### parseArgs

• `Readonly` **parseArgs**: `boolean`

Whether to parse arguments for plain message command invocations.

#### Defined in

[command.ts:299](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L299)

___

### permissions

• `Readonly` **permissions**: `Permissions`

Permissions needed to use the command.

#### Defined in

[command.ts:304](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L304)

___

### permissionsText

• `Readonly` **permissionsText**: `string`

Permissions needed to use the command as a string.

#### Defined in

[command.ts:313](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L313)

___

### run

• `Readonly` **run**: (`msg`: [`IntractableMessage`](/modules/#intractablemessage), `args`: `string`[]) => `Promise`<`void`\>

Commands execution function.

#### Type declaration

▸ (`msg`, `args`): `Promise`<`void`\>

Commands execution function.

##### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | [`IntractableMessage`](/modules/#intractablemessage) |
| `args` | `string`[] |

##### Returns

`Promise`<`void`\>

#### Defined in

[command.ts:234](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L234)

___

### shortHelp

• `Readonly` **shortHelp**: `string`

Short help text for summary viewing of the command.

#### Defined in

[command.ts:254](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L254)

## Methods

### metadata

▸ **metadata**(): [`CommandMetadata`](/commandmetadata/)

Get the metadata of a command.

#### Returns

[`CommandMetadata`](/commandmetadata/)

Metadata of the command.

#### Defined in

[command.ts:323](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L323)
