---
title: MessageCommand
layout: default
permalink: /messagecommand/
---
[mashujs](/) / [Exports](/modules/) / MessageCommand

# Interface: MessageCommand

## Hierarchy

- [`BaseCommand`](/BaseCommand/)

  ↳ **`MessageCommand`**

## Table of contents

### Properties

- [aliases](/MessageCommand/#aliases)
- [arguments](/MessageCommand/#arguments)
- [botPermissions](/MessageCommand/#botpermissions)
- [category](/MessageCommand/#category)
- [description](/MessageCommand/#description)
- [detailed](/MessageCommand/#detailed)
- [examples](/MessageCommand/#examples)
- [guildOnly](/MessageCommand/#guildonly)
- [hidden](/MessageCommand/#hidden)
- [interaction](/MessageCommand/#interaction)
- [name](/MessageCommand/#name)
- [parseArgs](/MessageCommand/#parseargs)
- [permissions](/MessageCommand/#permissions)

### Methods

- [run](/MessageCommand/#run)

## Properties

### aliases

• `Optional` **aliases**: `string`[]

Aliases of the command.

#### Inherited from

[BaseCommand](/BaseCommand/).[aliases](/BaseCommand/#aliases)

#### Defined in

[command.ts:44](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/command.ts#L44)

___

### arguments

• `Optional` **arguments**: [`Argument`](/Argument/)[]

Command arguments

#### Inherited from

[BaseCommand](/BaseCommand/).[arguments](/BaseCommand/#arguments)

#### Defined in

[command.ts:74](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/command.ts#L74)

___

### botPermissions

• `Optional` **botPermissions**: `PermissionString`[]

Permissions the bot needs to execute the command.

#### Inherited from

[BaseCommand](/BaseCommand/).[botPermissions](/BaseCommand/#botpermissions)

#### Defined in

[command.ts:89](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/command.ts#L89)

___

### category

• `Optional` **category**: `string`

Category the command is in.

#### Inherited from

[BaseCommand](/BaseCommand/).[category](/BaseCommand/#category)

#### Defined in

[command.ts:49](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/command.ts#L49)

___

### description

• **description**: `string`

Short description of the command.

#### Inherited from

[BaseCommand](/BaseCommand/).[description](/BaseCommand/#description)

#### Defined in

[command.ts:34](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/command.ts#L34)

___

### detailed

• `Optional` **detailed**: `string`

Detailed description of the command.

#### Inherited from

[BaseCommand](/BaseCommand/).[detailed](/BaseCommand/#detailed)

#### Defined in

[command.ts:54](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/command.ts#L54)

___

### examples

• `Optional` **examples**: [`ExampleResolvable`](/modules/#exampleresolvable)[]

Examples of the command in use.

#### Inherited from

[BaseCommand](/BaseCommand/).[examples](/BaseCommand/#examples)

#### Defined in

[command.ts:59](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/command.ts#L59)

___

### guildOnly

• `Optional` **guildOnly**: `boolean`

If the command is available only in guilds.

#### Inherited from

[BaseCommand](/BaseCommand/).[guildOnly](/BaseCommand/#guildonly)

#### Defined in

[command.ts:64](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/command.ts#L64)

___

### hidden

• `Optional` **hidden**: `boolean`

Whether the command is hidden.

#### Inherited from

[BaseCommand](/BaseCommand/).[hidden](/BaseCommand/#hidden)

#### Defined in

[command.ts:39](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/command.ts#L39)

___

### interaction

• **interaction**: ``"off"``

Whether the command is suitable to be a message interaction.

#### Overrides

[BaseCommand](/BaseCommand/).[interaction](/BaseCommand/#interaction)

#### Defined in

[command.ts:94](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/command.ts#L94)

___

### name

• **name**: `string`

Name of the command.

#### Inherited from

[BaseCommand](/BaseCommand/).[name](/BaseCommand/#name)

#### Defined in

[command.ts:29](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/command.ts#L29)

___

### parseArgs

• `Optional` **parseArgs**: `boolean`

Whether to parse arguments for plain message command invocations.

#### Inherited from

[BaseCommand](/BaseCommand/).[parseArgs](/BaseCommand/#parseargs)

#### Defined in

[command.ts:79](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/command.ts#L79)

___

### permissions

• `Optional` **permissions**: `PermissionString`[]

Permissions needed to use the command.

#### Inherited from

[BaseCommand](/BaseCommand/).[permissions](/BaseCommand/#permissions)

#### Defined in

[command.ts:84](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/command.ts#L84)

## Methods

### run

▸ **run**(`msg`, `args`): `void` \| `Promise`<`void`\>

Commands execution function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | [`Message`](/Message/) |
| `args` | `string`[] |

#### Returns

`void` \| `Promise`<`void`\>

#### Overrides

[BaseCommand](/BaseCommand/).[run](/BaseCommand/#run)

#### Defined in

[command.ts:93](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/command.ts#L93)
