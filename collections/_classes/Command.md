---
title: Command
layout: default
permalink: /command/
---
[mashujs](/) / [Exports](/modules/) / Command

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

- [constructor](/Command/#constructor)

### Properties

- [aliases](/Command/#aliases)
- [arguments](/Command/#arguments)
- [botPermissions](/Command/#botpermissions)
- [botPermissionsText](/Command/#botpermissionstext)
- [category](/Command/#category)
- [description](/Command/#description)
- [detailed](/Command/#detailed)
- [examples](/Command/#examples)
- [guildOnly](/Command/#guildonly)
- [help](/Command/#help)
- [hidden](/Command/#hidden)
- [interaction](/Command/#interaction)
- [name](/Command/#name)
- [parseArgs](/Command/#parseargs)
- [permissions](/Command/#permissions)
- [permissionsText](/Command/#permissionstext)
- [run](/Command/#run)
- [shortHelp](/Command/#shorthelp)

### Methods

- [metadata](/Command/#metadata)

## Constructors

### constructor

• **new Command**(`command`, `prefix?`, `directory?`)

Creates an instance of a command.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `command` | [`MessageCommand`](/MessageCommand/) \| [`IntractableCommand`](/IntractableCommand/) \| [`InteractionCommand`](/InteractionCommand/) \| [`Command`](/Command/) | `undefined` | The command resolvable. |
| `prefix` | `string` | `'${prefix}'` | Prefix that is currently in use. |
| `directory` | `string` | `''` | Name of the parent folder. |

#### Defined in

[command.ts:357](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L357)

## Properties

### aliases

• `Readonly` **aliases**: `string`[]

Aliases of the command.

#### Defined in

[command.ts:271](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L271)

___

### arguments

• `Readonly` **arguments**: [`Argument`](/Argument/)[]

Interaction arguments

#### Defined in

[command.ts:306](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L306)

___

### botPermissions

• `Readonly` **botPermissions**: `Permissions`

Permissions the bot needs to execute the command.

#### Defined in

[command.ts:320](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L320)

___

### botPermissionsText

• `Readonly` **botPermissionsText**: `string`

Permissions needed to execute the command as a string.

#### Defined in

[command.ts:329](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L329)

___

### category

• `Readonly` **category**: `string`

Category the command is in.

#### Defined in

[command.ts:276](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L276)

___

### description

• `Readonly` **description**: `string`

Short description of the command.

#### Defined in

[command.ts:256](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L256)

___

### detailed

• `Readonly` **detailed**: `string`

Detailed description of the command.

#### Defined in

[command.ts:281](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L281)

___

### examples

• `Readonly` **examples**: `string`[]

Examples of the command in use.

#### Defined in

[command.ts:286](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L286)

___

### guildOnly

• `Readonly` **guildOnly**: `boolean`

If the command is available only in guilds.

#### Defined in

[command.ts:296](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L296)

___

### help

• `Readonly` **help**: `string`

Help text describing the command.

#### Defined in

[command.ts:261](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L261)

___

### hidden

• `Readonly` **hidden**: `boolean`

Whether the command is hidden.

#### Defined in

[command.ts:291](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L291)

___

### interaction

• `Readonly` **interaction**: ``"off"`` \| ``"on"`` \| ``"only"``

Whether the command is suitable to be a message interaction.

#### Defined in

[command.ts:301](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L301)

___

### name

• `Readonly` **name**: `string`

Name of the command.

#### Defined in

[command.ts:251](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L251)

___

### parseArgs

• `Readonly` **parseArgs**: `boolean`

Whether to parse arguments for plain message command invocations.

#### Defined in

[command.ts:311](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L311)

___

### permissions

• `Readonly` **permissions**: `Permissions`

Permissions needed to use the command.

#### Defined in

[command.ts:316](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L316)

___

### permissionsText

• `Readonly` **permissionsText**: `string`

Permissions needed to use the command as a string.

#### Defined in

[command.ts:325](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L325)

___

### run

• `Readonly` **run**: (`msg`: [`IntractableMessage`](/modules/#intractablemessage), `args`: [`InteractionCommandArgument`](/modules/#interactioncommandargument)[]) => `Promise`<`void`\>

Commands execution function.

#### Type declaration

▸ (`msg`, `args`): `Promise`<`void`\>

Commands execution function.

##### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | [`IntractableMessage`](/modules/#intractablemessage) |
| `args` | [`InteractionCommandArgument`](/modules/#interactioncommandargument)[] |

##### Returns

`Promise`<`void`\>

#### Defined in

[command.ts:246](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L246)

___

### shortHelp

• `Readonly` **shortHelp**: `string`

Short help text for summary viewing of the command.

#### Defined in

[command.ts:266](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L266)

## Methods

### metadata

▸ **metadata**(): [`CommandMetadata`](/CommandMetadata/)

Get the metadata of a command.

#### Returns

[`CommandMetadata`](/CommandMetadata/)

Metadata of the command.

#### Defined in

[command.ts:335](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L335)
