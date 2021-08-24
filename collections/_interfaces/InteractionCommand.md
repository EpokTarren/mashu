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

[command.ts:45](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L45)

___

### arguments

• `Optional` **arguments**: [`Argument`](/Argument/)[]

Command arguments

#### Inherited from

[BaseCommand](/BaseCommand/).[arguments](/BaseCommand/#arguments)

#### Defined in

[command.ts:75](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L75)

___

### botPermissions

• `Optional` **botPermissions**: `PermissionString`[]

Permissions the bot needs to execute the command.

#### Inherited from

[BaseCommand](/BaseCommand/).[botPermissions](/BaseCommand/#botpermissions)

#### Defined in

[command.ts:90](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L90)

___

### category

• `Optional` **category**: `string`

Category the command is in.

#### Inherited from

[BaseCommand](/BaseCommand/).[category](/BaseCommand/#category)

#### Defined in

[command.ts:50](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L50)

___

### description

• **description**: `string`

Short description of the command.

#### Inherited from

[BaseCommand](/BaseCommand/).[description](/BaseCommand/#description)

#### Defined in

[command.ts:35](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L35)

___

### detailed

• `Optional` **detailed**: `string`

Detailed description of the command.

#### Inherited from

[BaseCommand](/BaseCommand/).[detailed](/BaseCommand/#detailed)

#### Defined in

[command.ts:55](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L55)

___

### examples

• `Optional` **examples**: [`ExampleResolvable`](/modules/#exampleresolvable)[]

Examples of the command in use.

#### Inherited from

[BaseCommand](/BaseCommand/).[examples](/BaseCommand/#examples)

#### Defined in

[command.ts:60](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L60)

___

### guildOnly

• `Optional` **guildOnly**: `boolean`

If the command is available only in guilds.

#### Inherited from

[BaseCommand](/BaseCommand/).[guildOnly](/BaseCommand/#guildonly)

#### Defined in

[command.ts:65](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L65)

___

### hidden

• `Optional` **hidden**: `boolean`

Whether the command is hidden.

#### Inherited from

[BaseCommand](/BaseCommand/).[hidden](/BaseCommand/#hidden)

#### Defined in

[command.ts:40](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L40)

___

### interaction

• **interaction**: ``"only"``

Whether the command is suitable to be a message interaction.

#### Overrides

[BaseCommand](/BaseCommand/).[interaction](/BaseCommand/#interaction)

#### Defined in

[command.ts:130](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L130)

___

### name

• **name**: `string`

Name of the command.

#### Inherited from

[BaseCommand](/BaseCommand/).[name](/BaseCommand/#name)

#### Defined in

[command.ts:30](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L30)

___

### parseArgs

• `Optional` **parseArgs**: `undefined`

Whether to parse arguments for plain message command invocations.

#### Overrides

[BaseCommand](/BaseCommand/).[parseArgs](/BaseCommand/#parseargs)

#### Defined in

[command.ts:132](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L132)

___

### permissions

• `Optional` **permissions**: `PermissionString`[]

Permissions needed to use the command.

#### Inherited from

[BaseCommand](/BaseCommand/).[permissions](/BaseCommand/#permissions)

#### Defined in

[command.ts:85](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L85)

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

[command.ts:128](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L128)
