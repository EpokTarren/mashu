---
title: Command
layout: default
permalink: /command/
---
[mashujs](/) / [Exports](/modules/) / Command

# Class: Command

Reprsents a command.

**`example`** 
```ts
const max = Math.pow(2, 32);
export = new Command({
	async run(message, args) {
		let n = parseInt(args[1]) || 6;
		if (n > max) n = max;
		else if (n < 2) n = 6;

		const roll = Math.floor(Math.random() * n) + 1;

		message.channel.send(`You rolled ${roll}`);
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
});

```

## Table of contents

### Constructors

- [constructor](/command/#constructor)

### Properties

- [aliases](/command/#aliases)
- [botPermissions](/command/#botpermissions)
- [botPermissionsText](/command/#botpermissionstext)
- [category](/command/#category)
- [description](/command/#description)
- [detailed](/command/#detailed)
- [examples](/command/#examples)
- [guildOnly](/command/#guildonly)
- [help](/command/#help)
- [hidden](/command/#hidden)
- [name](/command/#name)
- [permissions](/command/#permissions)
- [permissionsText](/command/#permissionstext)
- [run](/command/#run)
- [shortHelp](/command/#shorthelp)

### Methods

- [metadata](/command/#metadata)

## Constructors

### constructor

\+ **new Command**(`command`: [*CommandResolvable*](/interfaces/commandresolvable/) \| [*Command*](/command/), `prefix?`: *string*, `directory?`: *string*): [*Command*](/command/)

Creates an instance of a command.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`command` | [*CommandResolvable*](/interfaces/commandresolvable/) \| [*Command*](/command/) | - | The commandresolvable.   |
`prefix` | *string* | '${prefix}' | Preifx that is currently in use.   |
`directory` | *string* | '' | Name of the parent folder.    |

**Returns:** [*Command*](/command/)

Defined in: [command.ts:219](https://github.com/EpokTarren/mashu/blob/97910c8/src/command.ts#L219)

## Properties

### aliases

• `Readonly` **aliases**: *string*[]

Aliases of the command.

Defined in: [command.ts:163](https://github.com/EpokTarren/mashu/blob/97910c8/src/command.ts#L163)

___

### botPermissions

• `Readonly` **botPermissions**: *Permissions*

Permissions the bot needs to execute the command.

Defined in: [command.ts:192](https://github.com/EpokTarren/mashu/blob/97910c8/src/command.ts#L192)

___

### botPermissionsText

• `Readonly` **botPermissionsText**: *string*

Permissions needed to execute the command as a string.

Defined in: [command.ts:201](https://github.com/EpokTarren/mashu/blob/97910c8/src/command.ts#L201)

___

### category

• `Readonly` **category**: *string*

Category the command is in.

Defined in: [command.ts:167](https://github.com/EpokTarren/mashu/blob/97910c8/src/command.ts#L167)

___

### description

• `Readonly` **description**: *string*

Short description of the command.

Defined in: [command.ts:149](https://github.com/EpokTarren/mashu/blob/97910c8/src/command.ts#L149)

___

### detailed

• `Readonly` **detailed**: *string*

Detailed description of the command.

Defined in: [command.ts:171](https://github.com/EpokTarren/mashu/blob/97910c8/src/command.ts#L171)

___

### examples

• `Readonly` **examples**: *string*[]

Examples of the command in use.

Defined in: [command.ts:175](https://github.com/EpokTarren/mashu/blob/97910c8/src/command.ts#L175)

___

### guildOnly

• `Readonly` **guildOnly**: *boolean*

If the command is avilable only in guilds.

Defined in: [command.ts:184](https://github.com/EpokTarren/mashu/blob/97910c8/src/command.ts#L184)

___

### help

• `Readonly` **help**: *string*

Help text describing the command.

Defined in: [command.ts:154](https://github.com/EpokTarren/mashu/blob/97910c8/src/command.ts#L154)

___

### hidden

• `Readonly` **hidden**: *boolean*

Wheter the command is hidden.

Defined in: [command.ts:180](https://github.com/EpokTarren/mashu/blob/97910c8/src/command.ts#L180)

___

### name

• `Readonly` **name**: *string*

Name of the command.

Defined in: [command.ts:145](https://github.com/EpokTarren/mashu/blob/97910c8/src/command.ts#L145)

___

### permissions

• `Readonly` **permissions**: *Permissions*

Permissions needed to use the command.

Defined in: [command.ts:188](https://github.com/EpokTarren/mashu/blob/97910c8/src/command.ts#L188)

___

### permissionsText

• `Readonly` **permissionsText**: *string*

Permissions needed to use the command as a string.

Defined in: [command.ts:197](https://github.com/EpokTarren/mashu/blob/97910c8/src/command.ts#L197)

___

### run

• `Readonly` **run**: (`msg`: [*Message*](/interfaces/message/), `args`: *string*[]) => *Promise*<void\>

Commands execution function.

#### Type declaration:

▸ (`msg`: [*Message*](/interfaces/message/), `args`: *string*[]): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`msg` | [*Message*](/interfaces/message/) |
`args` | *string*[] |

**Returns:** *Promise*<void\>

Defined in: [command.ts:141](https://github.com/EpokTarren/mashu/blob/97910c8/src/command.ts#L141)

Defined in: [command.ts:141](https://github.com/EpokTarren/mashu/blob/97910c8/src/command.ts#L141)

___

### shortHelp

• `Readonly` **shortHelp**: *string*

Short help text for summary viewing of the command.

Defined in: [command.ts:158](https://github.com/EpokTarren/mashu/blob/97910c8/src/command.ts#L158)

## Methods

### metadata

▸ **metadata**(): [*CommandMetadata*](/interfaces/commandmetadata/)

Get the metadata of a comman.

**Returns:** [*CommandMetadata*](/interfaces/commandmetadata/)

Metadata of the command.

Defined in: [command.ts:207](https://github.com/EpokTarren/mashu/blob/97910c8/src/command.ts#L207)
