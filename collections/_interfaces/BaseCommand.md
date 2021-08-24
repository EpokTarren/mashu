---
title: BaseCommand
layout: default
permalink: /basecommand/
---
[mashujs](/) / [Exports](/modules/) / BaseCommand

# Interface: BaseCommand

## Hierarchy

- **`BaseCommand`**

  ↳ [`MessageCommand`](/MessageCommand/)

  ↳ [`IntractableCommand`](/IntractableCommand/)

  ↳ [`InteractionCommand`](/InteractionCommand/)

## Table of contents

### Properties

- [aliases](/BaseCommand/#aliases)
- [arguments](/BaseCommand/#arguments)
- [botPermissions](/BaseCommand/#botpermissions)
- [category](/BaseCommand/#category)
- [description](/BaseCommand/#description)
- [detailed](/BaseCommand/#detailed)
- [examples](/BaseCommand/#examples)
- [guildOnly](/BaseCommand/#guildonly)
- [hidden](/BaseCommand/#hidden)
- [interaction](/BaseCommand/#interaction)
- [name](/BaseCommand/#name)
- [parseArgs](/BaseCommand/#parseargs)
- [permissions](/BaseCommand/#permissions)

### Methods

- [run](/BaseCommand/#run)

## Properties

### aliases

• `Optional` **aliases**: `string`[]

Aliases of the command.

#### Defined in

[command.ts:45](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L45)

___

### arguments

• `Optional` **arguments**: [`Argument`](/Argument/)[]

Command arguments

#### Defined in

[command.ts:75](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L75)

___

### botPermissions

• `Optional` **botPermissions**: `PermissionString`[]

Permissions the bot needs to execute the command.

#### Defined in

[command.ts:90](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L90)

___

### category

• `Optional` **category**: `string`

Category the command is in.

#### Defined in

[command.ts:50](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L50)

___

### description

• **description**: `string`

Short description of the command.

#### Defined in

[command.ts:35](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L35)

___

### detailed

• `Optional` **detailed**: `string`

Detailed description of the command.

#### Defined in

[command.ts:55](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L55)

___

### examples

• `Optional` **examples**: [`ExampleResolvable`](/modules/#exampleresolvable)[]

Examples of the command in use.

#### Defined in

[command.ts:60](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L60)

___

### guildOnly

• `Optional` **guildOnly**: `boolean`

If the command is available only in guilds.

#### Defined in

[command.ts:65](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L65)

___

### hidden

• `Optional` **hidden**: `boolean`

Whether the command is hidden.

#### Defined in

[command.ts:40](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L40)

___

### interaction

• **interaction**: ``"off"`` \| ``"on"`` \| ``"only"``

Whether the command is suitable to be a message interaction.

#### Defined in

[command.ts:70](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L70)

___

### name

• **name**: `string`

Name of the command.

#### Defined in

[command.ts:30](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L30)

___

### parseArgs

• `Optional` **parseArgs**: `boolean`

Whether to parse arguments for plain message command invocations.

#### Defined in

[command.ts:80](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L80)

___

### permissions

• `Optional` **permissions**: `PermissionString`[]

Permissions needed to use the command.

#### Defined in

[command.ts:85](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L85)

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

[command.ts:25](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L25)
