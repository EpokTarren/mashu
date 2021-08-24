---
title: CommandMetadata
layout: default
permalink: /commandmetadata/
---
[mashujs](/) / [Exports](/modules/) / CommandMetadata

# Interface: CommandMetadata

The metadata of a command.

## Table of contents

### Properties

- [aliases](/CommandMetadata/#aliases)
- [arguments](/CommandMetadata/#arguments)
- [botPermissions](/CommandMetadata/#botpermissions)
- [category](/CommandMetadata/#category)
- [description](/CommandMetadata/#description)
- [detailed](/CommandMetadata/#detailed)
- [examples](/CommandMetadata/#examples)
- [guildOnly](/CommandMetadata/#guildonly)
- [interaction](/CommandMetadata/#interaction)
- [name](/CommandMetadata/#name)
- [permissions](/CommandMetadata/#permissions)

## Properties

### aliases

• `Readonly` **aliases**: `string`[]

Aliases of the command.

#### Defined in

[command.ts:160](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L160)

___

### arguments

• `Readonly` **arguments**: [`Argument`](/Argument/)[]

Interaction arguments

#### Defined in

[command.ts:190](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L190)

___

### botPermissions

• `Readonly` **botPermissions**: `string`[]

Permissions the bot needs as human readable.

#### Defined in

[command.ts:200](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L200)

___

### category

• `Readonly` **category**: `string`

Category the command is in.

#### Defined in

[command.ts:165](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L165)

___

### description

• `Readonly` **description**: `string`

Short description of the command.

#### Defined in

[command.ts:155](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L155)

___

### detailed

• `Readonly` **detailed**: `string`

Detailed description of the command.

#### Defined in

[command.ts:170](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L170)

___

### examples

• `Readonly` **examples**: `string`[]

Examples of the command in use.

#### Defined in

[command.ts:175](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L175)

___

### guildOnly

• `Readonly` **guildOnly**: `boolean`

If the command is available only in guilds.

#### Defined in

[command.ts:180](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L180)

___

### interaction

• `Readonly` **interaction**: ``"off"`` \| ``"on"`` \| ``"only"``

Whether the command is suitable to be a message interaction.

#### Defined in

[command.ts:185](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L185)

___

### name

• `Readonly` **name**: `string`

Name of the command.

#### Defined in

[command.ts:150](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L150)

___

### permissions

• `Readonly` **permissions**: `string`[]

Permissions needed to use the command as human readable.

#### Defined in

[command.ts:195](https://github.com/EpokTarren/mashu/blob/922ecdf/src/command.ts#L195)
