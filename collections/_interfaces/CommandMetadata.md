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

[command.ts:148](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/command.ts#L148)

___

### arguments

• `Readonly` **arguments**: [`Argument`](/Argument/)[]

Interaction arguments

#### Defined in

[command.ts:178](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/command.ts#L178)

___

### botPermissions

• `Readonly` **botPermissions**: `string`[]

Permissions the bot needs as human readable.

#### Defined in

[command.ts:188](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/command.ts#L188)

___

### category

• `Readonly` **category**: `string`

Category the command is in.

#### Defined in

[command.ts:153](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/command.ts#L153)

___

### description

• `Readonly` **description**: `string`

Short description of the command.

#### Defined in

[command.ts:143](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/command.ts#L143)

___

### detailed

• `Readonly` **detailed**: `string`

Detailed description of the command.

#### Defined in

[command.ts:158](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/command.ts#L158)

___

### examples

• `Readonly` **examples**: `string`[]

Examples of the command in use.

#### Defined in

[command.ts:163](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/command.ts#L163)

___

### guildOnly

• `Readonly` **guildOnly**: `boolean`

If the command is available only in guilds.

#### Defined in

[command.ts:168](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/command.ts#L168)

___

### interaction

• `Readonly` **interaction**: ``"off"`` \| ``"on"`` \| ``"only"``

Whether the command is suitable to be a message interaction.

#### Defined in

[command.ts:173](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/command.ts#L173)

___

### name

• `Readonly` **name**: `string`

Name of the command.

#### Defined in

[command.ts:138](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/command.ts#L138)

___

### permissions

• `Readonly` **permissions**: `string`[]

Permissions needed to use the command as human readable.

#### Defined in

[command.ts:183](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/command.ts#L183)
