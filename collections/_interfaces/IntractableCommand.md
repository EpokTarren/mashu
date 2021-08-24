---
title: IntractableCommand
layout: default
permalink: /intractablecommand/
---
[mashujs](/) / [Exports](/modules/) / IntractableCommand

# Interface: IntractableCommand

A command that is optionally a slash command

## Hierarchy

- [`BaseCommand`](/BaseCommand/)

  ↳ **`IntractableCommand`**

## Table of contents

### Properties

- [aliases](/IntractableCommand/#aliases)
- [arguments](/IntractableCommand/#arguments)
- [botPermissions](/IntractableCommand/#botpermissions)
- [category](/IntractableCommand/#category)
- [description](/IntractableCommand/#description)
- [detailed](/IntractableCommand/#detailed)
- [examples](/IntractableCommand/#examples)
- [guildOnly](/IntractableCommand/#guildonly)
- [hidden](/IntractableCommand/#hidden)
- [interaction](/IntractableCommand/#interaction)
- [name](/IntractableCommand/#name)
- [parseArgs](/IntractableCommand/#parseargs)
- [permissions](/IntractableCommand/#permissions)

### Methods

- [run](/IntractableCommand/#run)

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

• **interaction**: ``"on"``

Whether the command is suitable to be a message interaction.

#### Overrides

[BaseCommand](/BaseCommand/).[interaction](/BaseCommand/#interaction)

#### Defined in

[command.ts:118](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L118)

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

• `Optional` **parseArgs**: `boolean`

Whether to parse arguments for plain message command invocations.

#### Inherited from

[BaseCommand](/BaseCommand/).[parseArgs](/BaseCommand/#parseargs)

#### Defined in

[command.ts:80](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L80)

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
| `msg` | [`IntractableMessage`](/modules/#intractablemessage) |

#### Returns

`void` \| `Promise`<`void`\>

#### Overrides

[BaseCommand](/BaseCommand/).[run](/BaseCommand/#run)

#### Defined in

[command.ts:116](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L116)
