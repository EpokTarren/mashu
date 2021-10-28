---
title: Modules
permalink: /modules/
layout: default
---
[mashujs](/readme/) / Exports

# mashujs

## Table of contents

### Classes

- [Client](/client/)
- [Command](/command/)
- [Documentation](/documentation/)
- [Handler](/handler/)

### Interfaces

- [Argument](/argument/)
- [BaseCommand](/basecommand/)
- [CategoryData](/categorydata/)
- [CommandCategory](/commandcategory/)
- [CommandMetadata](/commandmetadata/)
- [HandlerOptions](/handleroptions/)
- [Interaction](/interaction/)
- [InteractionCommand](/interactioncommand/)
- [IntractableCommand](/intractablecommand/)
- [MarkdownOptions](/markdownoptions/)
- [MashuDocOptions](/mashudocoptions/)
- [Mashurc](/mashurc/)
- [Message](/message/)
- [MessageCommand](/messagecommand/)
- [MessageOrInteraction](/messageorinteraction/)

### Type aliases

- [ArgumentType](/modules/#argumenttype)
- [ClientOptions](/modules/#clientoptions)
- [ExampleResolvable](/modules/#exampleresolvable)
- [IntractableMessage](/modules/#intractablemessage)

### Functions

- [IntractableMessage](/modules/#intractablemessage)

## Type aliases

### ArgumentType

Ƭ **ArgumentType**: ``"Boolean"`` \| ``"Channel"`` \| ``"Integer"`` \| ``"Mentionable"`` \| ``"Role"`` \| ``"String"`` \| ``"User"``

#### Defined in

[command.ts:9](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L9)

___

### ClientOptions

Ƭ **ClientOptions**: `Discord.ClientOptions` & [`HandlerOptions`](/handleroptions/)

Options used to instantiate a client.

#### Defined in

[client.ts:7](https://github.com/EpokTarren/mashu/blob/78d8416/src/client.ts#L7)

___

### ExampleResolvable

Ƭ **ExampleResolvable**: `string` \| (`prefix`: `string`) => `string`

Resolvable to an example, either a string or a function that resolves to a string.

#### Defined in

[command.ts:7](https://github.com/EpokTarren/mashu/blob/78d8416/src/command.ts#L7)

___

### IntractableMessage

Ƭ **IntractableMessage**: [`Message`](/message/) \| [`Interaction`](/interaction/) & [`MessageOrInteraction`](/messageorinteraction/)

#### Defined in

[client.ts:84](https://github.com/EpokTarren/mashu/blob/78d8416/src/client.ts#L84)

## Functions

### IntractableMessage

▸ **IntractableMessage**(`content`): [`IntractableMessage`](/modules/#intractablemessage)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`Message`](/message/) \| [`Interaction`](/interaction/) |

#### Returns

[`IntractableMessage`](/modules/#intractablemessage)

#### Defined in

[client.ts:86](https://github.com/EpokTarren/mashu/blob/78d8416/src/client.ts#L86)
