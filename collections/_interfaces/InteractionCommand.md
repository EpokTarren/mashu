---
title: InteractionCommand
layout: default
permalink: /interactioncommand/
---
[mashujs](/) / [Exports](/modules/) / InteractionCommand

# Interface: InteractionCommand

A command that is exclusively a slash command

## Hierarchy

- [`BaseCommand`](/BaseCommand/)

  ↳ **`InteractionCommand`**

## Table of contents

### Properties

- [aliases](/InteractionCommand/#aliases)
- [arguments](/InteractionCommand/#arguments)
- [botPermissions](/InteractionCommand/#botpermissions)
- [category](/InteractionCommand/#category)
- [description](/InteractionCommand/#description)
- [detailed](/InteractionCommand/#detailed)
- [examples](/InteractionCommand/#examples)
- [guildOnly](/InteractionCommand/#guildonly)
- [hidden](/InteractionCommand/#hidden)
- [interaction](/InteractionCommand/#interaction)
- [name](/InteractionCommand/#name)
- [parseArgs](/InteractionCommand/#parseargs)
- [permissions](/InteractionCommand/#permissions)

### Methods

- [run](/InteractionCommand/#run)

## Properties

### aliases

• `Optional` **aliases**: `string`[]

Aliases of the command.

#### Inherited from

[BaseCommand](/BaseCommand/).[aliases](/BaseCommand/#aliases)

#### Defined in

[command.ts:44](https://github.com/EpokTarren/mashu/blob/14d28f7/src/command.ts#L44)

___

### arguments

• `Optional` **arguments**: [`Argument`](/Argument/)[]

Command arguments

#### Inherited from

[BaseCommand](/BaseCommand/).[arguments](/BaseCommand/#arguments)

#### Defined in

[command.ts:74](https://github.com/EpokTarren/mashu/blob/14d28f7/src/command.ts#L74)

___

### botPermissions

• `Optional` **botPermissions**: `PermissionString`[]

Permissions the bot needs to execute the command.

#### Inherited from

[BaseCommand](/BaseCommand/).[botPermissions](/BaseCommand/#botpermissions)

#### Defined in

[command.ts:89](https://github.com/EpokTarren/mashu/blob/14d28f7/src/command.ts#L89)

___

### category

• `Optional` **category**: `string`

Category the command is in.

#### Inherited from

[BaseCommand](/BaseCommand/).[category](/BaseCommand/#category)

#### Defined in

[command.ts:49](https://github.com/EpokTarren/mashu/blob/14d28f7/src/command.ts#L49)

___

### description

• **description**: `string`

Short description of the command.

#### Inherited from

[BaseCommand](/BaseCommand/).[description](/BaseCommand/#description)

#### Defined in

[command.ts:34](https://github.com/EpokTarren/mashu/blob/14d28f7/src/command.ts#L34)

___

### detailed

• `Optional` **detailed**: `string`

Detailed description of the command.

#### Inherited from

[BaseCommand](/BaseCommand/).[detailed](/BaseCommand/#detailed)

#### Defined in

[command.ts:54](https://github.com/EpokTarren/mashu/blob/14d28f7/src/command.ts#L54)

___

### examples

• `Optional` **examples**: [`ExampleResolvable`](/modules/#exampleresolvable)[]

Examples of the command in use.

#### Inherited from

[BaseCommand](/BaseCommand/).[examples](/BaseCommand/#examples)

#### Defined in

[command.ts:59](https://github.com/EpokTarren/mashu/blob/14d28f7/src/command.ts#L59)

___

### guildOnly

• `Optional` **guildOnly**: `boolean`

If the command is available only in guilds.

#### Inherited from

[BaseCommand](/BaseCommand/).[guildOnly](/BaseCommand/#guildonly)

#### Defined in

[command.ts:64](https://github.com/EpokTarren/mashu/blob/14d28f7/src/command.ts#L64)

___

### hidden

• `Optional` **hidden**: `boolean`

Whether the command is hidden.

#### Inherited from

[BaseCommand](/BaseCommand/).[hidden](/BaseCommand/#hidden)

#### Defined in

[command.ts:39](https://github.com/EpokTarren/mashu/blob/14d28f7/src/command.ts#L39)

___

### interaction

• **interaction**: ``"only"``

Whether the command is suitable to be a message interaction.

#### Overrides

[BaseCommand](/BaseCommand/).[interaction](/BaseCommand/#interaction)

#### Defined in

[command.ts:118](https://github.com/EpokTarren/mashu/blob/14d28f7/src/command.ts#L118)

___

### name

• **name**: `string`

Name of the command.

#### Inherited from

[BaseCommand](/BaseCommand/).[name](/BaseCommand/#name)

#### Defined in

[command.ts:29](https://github.com/EpokTarren/mashu/blob/14d28f7/src/command.ts#L29)

___

### parseArgs

• `Optional` **parseArgs**: `undefined`

Whether to parse arguments for plain message command invocations.

#### Overrides

[BaseCommand](/BaseCommand/).[parseArgs](/BaseCommand/#parseargs)

#### Defined in

[command.ts:120](https://github.com/EpokTarren/mashu/blob/14d28f7/src/command.ts#L120)

___

### permissions

• `Optional` **permissions**: `PermissionString`[]

Permissions needed to use the command.

#### Inherited from

[BaseCommand](/BaseCommand/).[permissions](/BaseCommand/#permissions)

#### Defined in

[command.ts:84](https://github.com/EpokTarren/mashu/blob/14d28f7/src/command.ts#L84)

## Methods

### run

▸ **run**(`msg`): `void` \| `Promise`<`void`\>

Commands execution function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | [`Interaction`](/Interaction/) |

#### Returns

`void` \| `Promise`<`void`\>

#### Overrides

[BaseCommand](/BaseCommand/).[run](/BaseCommand/#run)

#### Defined in

[command.ts:116](https://github.com/EpokTarren/mashu/blob/14d28f7/src/command.ts#L116)
