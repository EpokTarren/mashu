---
title: Modules
permalink: /modules/
layout: default
---
[mashujs](/) / Exports

# mashujs

## Table of contents

### Classes

- [Client](/Client/)
- [Command](/Command/)
- [Documentation](/Documentation/)
- [Handler](/Handler/)

### Interfaces

- [Argument](/Argument/)
- [BaseCommand](/BaseCommand/)
- [CategoryData](/CategoryData/)
- [CommandCategory](/CommandCategory/)
- [CommandMetadata](/CommandMetadata/)
- [HandlerOptions](/HandlerOptions/)
- [Interaction](/Interaction/)
- [InteractionCommand](/InteractionCommand/)
- [IntractableCommand](/IntractableCommand/)
- [MarkdownOptions](/MarkdownOptions/)
- [MashuDocOptions](/MashuDocOptions/)
- [Mashurc](/Mashurc/)
- [Message](/Message/)
- [MessageCommand](/MessageCommand/)
- [MessageOrInteraction](/MessageOrInteraction/)

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

[command.ts:9](https://github.com/EpokTarren/mashu/blob/14d28f7/src/command.ts#L9)

___

### ClientOptions

Ƭ **ClientOptions**: `Discord.ClientOptions` & [`HandlerOptions`](/HandlerOptions/)

Options used to instantiate a client.

#### Defined in

[client.ts:7](https://github.com/EpokTarren/mashu/blob/14d28f7/src/client.ts#L7)

___

### ExampleResolvable

Ƭ **ExampleResolvable**: `string` \| (`prefix`: `string`) => `string`

Resolvable to an example, either a string or a function that resolves to a string.

#### Defined in

[command.ts:7](https://github.com/EpokTarren/mashu/blob/14d28f7/src/command.ts#L7)

___

### IntractableMessage

Ƭ **IntractableMessage**: [`Message`](/Message/) \| [`Interaction`](/Interaction/) & [`MessageOrInteraction`](/MessageOrInteraction/)

#### Defined in

[client.ts:84](https://github.com/EpokTarren/mashu/blob/14d28f7/src/client.ts#L84)

## Functions

### IntractableMessage

▸ **IntractableMessage**(`content`): [`IntractableMessage`](/modules/#intractablemessage)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`Message`](/Message/) \| [`Interaction`](/Interaction/) |

#### Returns

[`IntractableMessage`](/modules/#intractablemessage)

#### Defined in

[client.ts:86](https://github.com/EpokTarren/mashu/blob/14d28f7/src/client.ts#L86)
