---
title: CommandResolvable
layout: default
permalink: /interfaces/commandresolvable/
---
[mashujs](/) / [Exports](/modules/) / CommandResolvable

# Interface: CommandResolvable

## Table of contents

### Properties

- [aliases](/commandresolvable/#aliases)
- [botPermissions](/commandresolvable/#botpermissions)
- [category](/commandresolvable/#category)
- [description](/commandresolvable/#description)
- [detailed](/commandresolvable/#detailed)
- [examples](/commandresolvable/#examples)
- [guildOnly](/commandresolvable/#guildonly)
- [hidden](/commandresolvable/#hidden)
- [name](/commandresolvable/#name)
- [permissions](/commandresolvable/#permissions)
- [run](/commandresolvable/#run)

## Properties

### aliases

• `Optional` **aliases**: *string*[]

Defined in: [command.ts:11](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/command.ts#L11)

___

### botPermissions

• `Optional` **botPermissions**: PermissionString[]

Defined in: [command.ts:17](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/command.ts#L17)

___

### category

• `Optional` **category**: *string*

Defined in: [command.ts:12](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/command.ts#L12)

___

### description

• **description**: *string*

Defined in: [command.ts:9](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/command.ts#L9)

___

### detailed

• `Optional` **detailed**: *string*

Defined in: [command.ts:13](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/command.ts#L13)

___

### examples

• `Optional` **examples**: [*ExampleResolvable*](/modules/#exampleresolvable)[]

Defined in: [command.ts:14](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/command.ts#L14)

___

### guildOnly

• `Optional` **guildOnly**: *boolean*

Defined in: [command.ts:15](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/command.ts#L15)

___

### hidden

• `Optional` **hidden**: *boolean*

Defined in: [command.ts:10](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/command.ts#L10)

___

### name

• **name**: *string*

Defined in: [command.ts:8](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/command.ts#L8)

___

### permissions

• `Optional` **permissions**: PermissionString[]

Defined in: [command.ts:16](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/command.ts#L16)

___

### run

• **run**: (`msg`: [*Message*](/message/), `args`: *string*[]) => *void* \| *Promise*<void\>

#### Type declaration:

▸ (`msg`: [*Message*](/message/), `args`: *string*[]): *void* \| *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`msg` | [*Message*](/message/) |
`args` | *string*[] |

**Returns:** *void* \| *Promise*<void\>

Defined in: [command.ts:7](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/command.ts#L7)

Defined in: [command.ts:7](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/command.ts#L7)
