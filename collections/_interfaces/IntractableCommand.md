---
title: IntractableCommand
layout: default
permalink: /intractablecommand/
---
[mashujs](/readme/) / [Exports](/modules/) / IntractableCommand

# Interface: IntractableCommand

A command that is optionally a slash command

## Hierarchy

- [`BaseCommand`](/basecommand/)

  ↳ **`IntractableCommand`**

## Table of contents

### Properties

- [aliases](/intractablecommand/#aliases)
- [arguments](/intractablecommand/#arguments)
- [botPermissions](/intractablecommand/#botpermissions)
- [category](/intractablecommand/#category)
- [description](/intractablecommand/#description)
- [detailed](/intractablecommand/#detailed)
- [examples](/intractablecommand/#examples)
- [guildOnly](/intractablecommand/#guildonly)
- [hidden](/intractablecommand/#hidden)
- [interaction](/intractablecommand/#interaction)
- [name](/intractablecommand/#name)
- [parseArgs](/intractablecommand/#parseargs)
- [permissions](/intractablecommand/#permissions)

### Methods

- [run](/intractablecommand/#run)

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

• **interaction**: ``"on"``

Whether the command is suitable to be a message interaction.

#### Overrides

[BaseCommand](/basecommand/).[interaction](/basecommand/#interaction)

#### Defined in

[command.ts:106](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L106)

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

▸ **run**(`msg`): `void` \| `Promise`<`void`\>

Commands execution function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | [`IntractableMessage`](/modules/#intractablemessage) |

#### Returns

`void` \| `Promise`<`void`\>

#### Overrides

[BaseCommand](/basecommand/).[run](/basecommand/#run)

#### Defined in

[command.ts:104](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L104)
