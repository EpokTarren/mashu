---
title: InteractionCommand
layout: default
permalink: /interactioncommand/
---
[mashujs](/readme/) / [Exports](/modules/) / InteractionCommand

# Interface: InteractionCommand

A command that is exclusively a slash command

## Hierarchy

- [`BaseCommand`](/basecommand/)

  ↳ **`InteractionCommand`**

## Table of contents

### Properties

- [aliases](/interactioncommand/#aliases)
- [arguments](/interactioncommand/#arguments)
- [botPermissions](/interactioncommand/#botpermissions)
- [category](/interactioncommand/#category)
- [description](/interactioncommand/#description)
- [detailed](/interactioncommand/#detailed)
- [examples](/interactioncommand/#examples)
- [guildOnly](/interactioncommand/#guildonly)
- [hidden](/interactioncommand/#hidden)
- [interaction](/interactioncommand/#interaction)
- [name](/interactioncommand/#name)
- [parseArgs](/interactioncommand/#parseargs)
- [permissions](/interactioncommand/#permissions)

### Methods

- [run](/interactioncommand/#run)

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

• **interaction**: ``"only"``

Whether the command is suitable to be a message interaction.

#### Overrides

[BaseCommand](/basecommand/).[interaction](/basecommand/#interaction)

#### Defined in

[command.ts:118](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L118)

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

• `Optional` **parseArgs**: `undefined`

Whether to parse arguments for plain message command invocations.

#### Overrides

[BaseCommand](/basecommand/).[parseArgs](/basecommand/#parseargs)

#### Defined in

[command.ts:120](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L120)

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

▸ **run**(`msg`): `void` \| `Promise`<`void`\>

Commands execution function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | [`Interaction`](/interaction/) |

#### Returns

`void` \| `Promise`<`void`\>

#### Overrides

[BaseCommand](/basecommand/).[run](/basecommand/#run)

#### Defined in

[command.ts:116](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L116)
