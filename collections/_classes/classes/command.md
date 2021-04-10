---
title: Command
layout: default
permalink: /classes/command/
---
[mashujs](/) / [Exports](/modules/) / Command

# Class: Command

## Table of contents

### Constructors

- [constructor](/command/#constructor)

### Properties

- [aliases](/command/#aliases)
- [botPermissions](/command/#botpermissions)
- [botPermissionsText](/command/#botpermissionstext)
- [category](/command/#category)
- [description](/command/#description)
- [detailed](/command/#detailed)
- [examples](/command/#examples)
- [guildOnly](/command/#guildonly)
- [help](/command/#help)
- [hidden](/command/#hidden)
- [name](/command/#name)
- [permissions](/command/#permissions)
- [permissionsText](/command/#permissionstext)
- [run](/command/#run)
- [shortHelp](/command/#shorthelp)

### Methods

- [metadata](/command/#metadata)

## Constructors

### constructor

\+ **new Command**(`__namedParameters`: [*CommandResolvable*](/interfaces/commandresolvable/), `prefix?`: *string*, `directory?`: *string*): [*Command*](/command/)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`__namedParameters` | [*CommandResolvable*](/interfaces/commandresolvable/) | - |
`prefix` | *string* | '${prefix}' |
`directory` | *string* | '' |

**Returns:** [*Command*](/command/)

Defined in: [command.ts:73](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/command.ts#L73)

## Properties

### aliases

• `Readonly` **aliases**: *string*[]

Defined in: [command.ts:48](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/command.ts#L48)

___

### botPermissions

• `Readonly` **botPermissions**: *Permissions*

Defined in: [command.ts:56](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/command.ts#L56)

___

### botPermissionsText

• `Readonly` **botPermissionsText**: *string*

Defined in: [command.ts:59](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/command.ts#L59)

___

### category

• `Readonly` **category**: *string*

Defined in: [command.ts:49](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/command.ts#L49)

___

### description

• `Readonly` **description**: *string*

Defined in: [command.ts:43](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/command.ts#L43)

___

### detailed

• `Readonly` **detailed**: *string*

Defined in: [command.ts:50](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/command.ts#L50)

___

### examples

• `Readonly` **examples**: *string*[]

Defined in: [command.ts:51](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/command.ts#L51)

___

### guildOnly

• `Readonly` **guildOnly**: *boolean*

Defined in: [command.ts:54](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/command.ts#L54)

___

### help

• `Readonly` **help**: *string*

Defined in: [command.ts:45](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/command.ts#L45)

___

### hidden

• `Readonly` **hidden**: *boolean*

Defined in: [command.ts:53](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/command.ts#L53)

___

### name

• `Readonly` **name**: *string*

Defined in: [command.ts:42](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/command.ts#L42)

___

### permissions

• `Readonly` **permissions**: *Permissions*

Defined in: [command.ts:55](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/command.ts#L55)

___

### permissionsText

• `Readonly` **permissionsText**: *string*

Defined in: [command.ts:58](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/command.ts#L58)

___

### run

• `Readonly` **run**: (`msg`: [*Message*](/interfaces/message/), `args`: *string*[]) => *Promise*<void\>

#### Type declaration:

▸ (`msg`: [*Message*](/interfaces/message/), `args`: *string*[]): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`msg` | [*Message*](/interfaces/message/) |
`args` | *string*[] |

**Returns:** *Promise*<void\>

Defined in: [command.ts:41](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/command.ts#L41)

Defined in: [command.ts:41](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/command.ts#L41)

___

### shortHelp

• `Readonly` **shortHelp**: *string*

Defined in: [command.ts:46](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/command.ts#L46)

## Methods

### metadata

▸ **metadata**(): [*CommandMetadata*](/interfaces/commandmetadata/)

**Returns:** [*CommandMetadata*](/interfaces/commandmetadata/)

Defined in: [command.ts:61](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/command.ts#L61)
