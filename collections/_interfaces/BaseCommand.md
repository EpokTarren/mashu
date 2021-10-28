---
title: BaseCommand
layout: default
permalink: /basecommand/
---
[mashujs](/readme/) / [Exports](/modules/) / BaseCommand

# Interface: BaseCommand

## Hierarchy

- **`BaseCommand`**

  ↳ [`MessageCommand`](/messagecommand/)

  ↳ [`IntractableCommand`](/intractablecommand/)

  ↳ [`InteractionCommand`](/interactioncommand/)

## Table of contents

### Properties

- [aliases](/basecommand/#aliases)
- [arguments](/basecommand/#arguments)
- [botPermissions](/basecommand/#botpermissions)
- [category](/basecommand/#category)
- [description](/basecommand/#description)
- [detailed](/basecommand/#detailed)
- [examples](/basecommand/#examples)
- [guildOnly](/basecommand/#guildonly)
- [hidden](/basecommand/#hidden)
- [interaction](/basecommand/#interaction)
- [name](/basecommand/#name)
- [parseArgs](/basecommand/#parseargs)
- [permissions](/basecommand/#permissions)

### Methods

- [run](/basecommand/#run)

## Properties

### aliases

• `Optional` **aliases**: `string`[]

Aliases of the command.

#### Defined in

[command.ts:44](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L44)

___

### arguments

• `Optional` **arguments**: [`Argument`](/argument/)[]

Command arguments

#### Defined in

[command.ts:74](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L74)

___

### botPermissions

• `Optional` **botPermissions**: `PermissionString`[]

Permissions the bot needs to execute the command.

#### Defined in

[command.ts:89](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L89)

___

### category

• `Optional` **category**: `string`

Category the command is in.

#### Defined in

[command.ts:49](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L49)

___

### description

• **description**: `string`

Short description of the command.

#### Defined in

[command.ts:34](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L34)

___

### detailed

• `Optional` **detailed**: `string`

Detailed description of the command.

#### Defined in

[command.ts:54](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L54)

___

### examples

• `Optional` **examples**: [`ExampleResolvable`](/modules/#exampleresolvable)[]

Examples of the command in use.

#### Defined in

[command.ts:59](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L59)

___

### guildOnly

• `Optional` **guildOnly**: `boolean`

If the command is available only in guilds.

#### Defined in

[command.ts:64](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L64)

___

### hidden

• `Optional` **hidden**: `boolean`

Whether the command is hidden.

#### Defined in

[command.ts:39](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L39)

___

### interaction

• **interaction**: ``"off"`` \| ``"on"`` \| ``"only"``

Whether the command is suitable to be a message interaction.

#### Defined in

[command.ts:69](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L69)

___

### name

• **name**: `string`

Name of the command.

#### Defined in

[command.ts:29](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L29)

___

### parseArgs

• `Optional` **parseArgs**: `boolean`

Whether to parse arguments for plain message command invocations.

#### Defined in

[command.ts:79](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L79)

___

### permissions

• `Optional` **permissions**: `PermissionString`[]

Permissions needed to use the command.

#### Defined in

[command.ts:84](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L84)

## Methods

### run

▸ **run**(`msg`, `args`): `void` \| `Promise`<`void`\>

Commands execution function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `any` |
| `args` | `string`[] |

#### Returns

`void` \| `Promise`<`void`\>

#### Defined in

[command.ts:24](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L24)
