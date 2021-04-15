---
title: CommandResolvable
layout: default
permalink: /commandresolvable/
---
[mashujs](/) / [Exports](/modules/) / CommandResolvable

# Interface: CommandResolvable

Resolvable to a command.

## Table of contents

### Properties

- [aliases](/commandresolvable.md#aliases)
- [botPermissions](/commandresolvable.md#botpermissions)
- [category](/commandresolvable.md#category)
- [description](/commandresolvable.md#description)
- [detailed](/commandresolvable.md#detailed)
- [examples](/commandresolvable.md#examples)
- [guildOnly](/commandresolvable.md#guildonly)
- [hidden](/commandresolvable.md#hidden)
- [name](/commandresolvable.md#name)
- [permissions](/commandresolvable.md#permissions)
- [run](/commandresolvable.md#run)

## Properties

### aliases

• `Optional` **aliases**: *string*[]

Aliases of the command.

Defined in: [command.ts:32](https://github.com/EpokTarren/mashu/blob/2da2f58/src/command.ts#L32)

___

### botPermissions

• `Optional` **botPermissions**: PermissionString[]

Permissions the bot needs to execute the command.

Defined in: [command.ts:56](https://github.com/EpokTarren/mashu/blob/2da2f58/src/command.ts#L56)

___

### category

• `Optional` **category**: *string*

Category the command is in.

Defined in: [command.ts:36](https://github.com/EpokTarren/mashu/blob/2da2f58/src/command.ts#L36)

___

### description

• **description**: *string*

Short description of the command.

Defined in: [command.ts:24](https://github.com/EpokTarren/mashu/blob/2da2f58/src/command.ts#L24)

___

### detailed

• `Optional` **detailed**: *string*

Detailed description of the command.

Defined in: [command.ts:40](https://github.com/EpokTarren/mashu/blob/2da2f58/src/command.ts#L40)

___

### examples

• `Optional` **examples**: [*ExampleResolvable*](/modules.md#exampleresolvable)[]

Examples of the command in use.

Defined in: [command.ts:44](https://github.com/EpokTarren/mashu/blob/2da2f58/src/command.ts#L44)

___

### guildOnly

• `Optional` **guildOnly**: *boolean*

If the command is avilable only in guilds.

Defined in: [command.ts:48](https://github.com/EpokTarren/mashu/blob/2da2f58/src/command.ts#L48)

___

### hidden

• `Optional` **hidden**: *boolean*

Wheter the command is hidden.

Defined in: [command.ts:28](https://github.com/EpokTarren/mashu/blob/2da2f58/src/command.ts#L28)

___

### name

• **name**: *string*

Name of the command.

Defined in: [command.ts:20](https://github.com/EpokTarren/mashu/blob/2da2f58/src/command.ts#L20)

___

### permissions

• `Optional` **permissions**: PermissionString[]

Permissions needed to use the command.

Defined in: [command.ts:52](https://github.com/EpokTarren/mashu/blob/2da2f58/src/command.ts#L52)

___

### run

• **run**: (`msg`: [*Message*](/message/), `args`: *string*[]) => *void* \| *Promise*<void\>

Commands execution function.

#### Type declaration:

▸ (`msg`: [*Message*](/message/), `args`: *string*[]): *void* \| *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`msg` | [*Message*](/message/) |
`args` | *string*[] |

**Returns:** *void* \| *Promise*<void\>

Defined in: [command.ts:16](https://github.com/EpokTarren/mashu/blob/2da2f58/src/command.ts#L16)

Defined in: [command.ts:16](https://github.com/EpokTarren/mashu/blob/2da2f58/src/command.ts#L16)
