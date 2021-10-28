---
title: MessageCommand
layout: default
permalink: /messagecommand/
---
[mashujs](/readme/) / [Exports](/modules/) / MessageCommand

# Interface: MessageCommand

## Hierarchy

- [`BaseCommand`](/basecommand/)

  ↳ **`MessageCommand`**

## Table of contents

### Properties

- [aliases](/messagecommand/#aliases)
- [arguments](/messagecommand/#arguments)
- [botPermissions](/messagecommand/#botpermissions)
- [category](/messagecommand/#category)
- [description](/messagecommand/#description)
- [detailed](/messagecommand/#detailed)
- [examples](/messagecommand/#examples)
- [guildOnly](/messagecommand/#guildonly)
- [hidden](/messagecommand/#hidden)
- [interaction](/messagecommand/#interaction)
- [name](/messagecommand/#name)
- [parseArgs](/messagecommand/#parseargs)
- [permissions](/messagecommand/#permissions)

### Methods

- [run](/messagecommand/#run)

## Properties

### aliases

• `Optional` **aliases**: `string`[]

Aliases of the command.

#### Inherited from

[BaseCommand](/basecommand/).[aliases](/basecommand/#aliases)

#### Defined in

[command.ts:44](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L44)

___

### arguments

• `Optional` **arguments**: [`Argument`](/argument/)[]

Command arguments

#### Inherited from

[BaseCommand](/basecommand/).[arguments](/basecommand/#arguments)

#### Defined in

[command.ts:74](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L74)

___

### botPermissions

• `Optional` **botPermissions**: `PermissionString`[]

Permissions the bot needs to execute the command.

#### Inherited from

[BaseCommand](/basecommand/).[botPermissions](/basecommand/#botpermissions)

#### Defined in

[command.ts:89](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L89)

___

### category

• `Optional` **category**: `string`

Category the command is in.

#### Inherited from

[BaseCommand](/basecommand/).[category](/basecommand/#category)

#### Defined in

[command.ts:49](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L49)

___

### description

• **description**: `string`

Short description of the command.

#### Inherited from

[BaseCommand](/basecommand/).[description](/basecommand/#description)

#### Defined in

[command.ts:34](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L34)

___

### detailed

• `Optional` **detailed**: `string`

Detailed description of the command.

#### Inherited from

[BaseCommand](/basecommand/).[detailed](/basecommand/#detailed)

#### Defined in

[command.ts:54](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L54)

___

### examples

• `Optional` **examples**: [`ExampleResolvable`](/modules/#exampleresolvable)[]

Examples of the command in use.

#### Inherited from

[BaseCommand](/basecommand/).[examples](/basecommand/#examples)

#### Defined in

[command.ts:59](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L59)

___

### guildOnly

• `Optional` **guildOnly**: `boolean`

If the command is available only in guilds.

#### Inherited from

[BaseCommand](/basecommand/).[guildOnly](/basecommand/#guildonly)

#### Defined in

[command.ts:64](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L64)

___

### hidden

• `Optional` **hidden**: `boolean`

Whether the command is hidden.

#### Inherited from

[BaseCommand](/basecommand/).[hidden](/basecommand/#hidden)

#### Defined in

[command.ts:39](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L39)

___

### interaction

• **interaction**: ``"off"``

Whether the command is suitable to be a message interaction.

#### Overrides

[BaseCommand](/basecommand/).[interaction](/basecommand/#interaction)

#### Defined in

[command.ts:94](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L94)

___

### name

• **name**: `string`

Name of the command.

#### Inherited from

[BaseCommand](/basecommand/).[name](/basecommand/#name)

#### Defined in

[command.ts:29](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L29)

___

### parseArgs

• `Optional` **parseArgs**: `boolean`

Whether to parse arguments for plain message command invocations.

#### Inherited from

[BaseCommand](/basecommand/).[parseArgs](/basecommand/#parseargs)

#### Defined in

[command.ts:79](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L79)

___

### permissions

• `Optional` **permissions**: `PermissionString`[]

Permissions needed to use the command.

#### Inherited from

[BaseCommand](/basecommand/).[permissions](/basecommand/#permissions)

#### Defined in

[command.ts:84](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L84)

## Methods

### run

▸ **run**(`msg`, `args`): `void` \| `Promise`<`void`\>

Commands execution function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | [`Message`](/message/) |
| `args` | `string`[] |

#### Returns

`void` \| `Promise`<`void`\>

#### Overrides

[BaseCommand](/basecommand/).[run](/basecommand/#run)

#### Defined in

[command.ts:93](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L93)
