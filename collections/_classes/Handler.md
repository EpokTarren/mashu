---
title: Handler
layout: default
permalink: /handler/
---
[mashujs](/) / [Exports](/modules/) / Handler

# Class: Handler

Command handler.

## Hierarchy

- **`Handler`**

  ↳ [`Documentation`](/Documentation/)

## Table of contents

### Constructors

- [constructor](/Handler/#constructor)

### Properties

- [categories](/Handler/#categories)
- [client](/Handler/#client)
- [errorChannel](/Handler/#errorchannel)
- [help](/Handler/#help)
- [prefix](/Handler/#prefix)

### Methods

- [getCommand](/Handler/#getcommand)
- [handle](/Handler/#handle)
- [handleInteraction](/Handler/#handleinteraction)
- [isOwner](/Handler/#isowner)
- [loadSlashCommands](/Handler/#loadslashcommands)
- [reloadAll](/Handler/#reloadall)
- [reloadCommand](/Handler/#reloadcommand)
- [reportError](/Handler/#reporterror)

## Constructors

### constructor

• **new Handler**(`__namedParameters`, `client`)

Constructs a handler instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `__namedParameters` | [`HandlerOptions`](/HandlerOptions/) | - |
| `client` | `Client`<`boolean`\> | Client that the handler will attach to. |

#### Defined in

[handler.ts:504](https://github.com/EpokTarren/mashu/blob/922ecdf/src/handler.ts#L504)

## Properties

### categories

• `Readonly` **categories**: `Map`<`string`, [`CategoryData`](/CategoryData/)\>

A map of categories and their metadata.

#### Defined in

[handler.ts:101](https://github.com/EpokTarren/mashu/blob/922ecdf/src/handler.ts#L101)

___

### client

• `Readonly` **client**: [`Client`](/Client/)

The client the handler is attached to.

#### Defined in

[handler.ts:79](https://github.com/EpokTarren/mashu/blob/922ecdf/src/handler.ts#L79)

___

### errorChannel

• `Optional` `Readonly` **errorChannel**: `TextChannel`

The channel to which the bot errors.

#### Defined in

[handler.ts:84](https://github.com/EpokTarren/mashu/blob/922ecdf/src/handler.ts#L84)

___

### help

• `Readonly` **help**: `MessageEmbedOptions`[]

Help data.

#### Defined in

[handler.ts:74](https://github.com/EpokTarren/mashu/blob/922ecdf/src/handler.ts#L74)

___

### prefix

• `Readonly` **prefix**: `string`

Prefix that the handler uses.

#### Defined in

[handler.ts:69](https://github.com/EpokTarren/mashu/blob/922ecdf/src/handler.ts#L69)

## Methods

### getCommand

▸ **getCommand**(`alias`): `undefined` \| [`Command`](/Command/)

Gets a command by name or alias.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alias` | `string` | The name or alias of the command. |

#### Returns

`undefined` \| [`Command`](/Command/)

A command.

#### Defined in

[handler.ts:199](https://github.com/EpokTarren/mashu/blob/922ecdf/src/handler.ts#L199)

___

### handle

▸ **handle**(`message`): `Promise`<`void`\>

Runs a command if the message contains a command.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `Message` | The message to be handled. |

#### Returns

`Promise`<`void`\>

#### Defined in

[handler.ts:208](https://github.com/EpokTarren/mashu/blob/922ecdf/src/handler.ts#L208)

___

### handleInteraction

▸ **handleInteraction**(`interaction`): `Promise`<`void`\>

Runs a command if the message contains a command.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `interaction` | `Interaction` | The message to be handled. |

#### Returns

`Promise`<`void`\>

#### Defined in

[handler.ts:460](https://github.com/EpokTarren/mashu/blob/922ecdf/src/handler.ts#L460)

___

### isOwner

▸ **isOwner**(`id`): `boolean`

Check whether a user is an owner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the user. |

#### Returns

`boolean`

Whether a user is an owner.

#### Defined in

[handler.ts:377](https://github.com/EpokTarren/mashu/blob/922ecdf/src/handler.ts#L377)

___

### loadSlashCommands

▸ **loadSlashCommands**(`token`): `Promise`<`void`\>

Init slash commands

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `string` | Your login token |

#### Returns

`Promise`<`void`\>

#### Defined in

[handler.ts:387](https://github.com/EpokTarren/mashu/blob/922ecdf/src/handler.ts#L387)

___

### reloadAll

▸ **reloadAll**(): `void`

Reloads all commands

#### Returns

`void`

#### Defined in

[handler.ts:167](https://github.com/EpokTarren/mashu/blob/922ecdf/src/handler.ts#L167)

___

### reloadCommand

▸ **reloadCommand**(`alias`): `boolean`

Reloads a command by alias or name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alias` | `string` | An alias of the command to be reloaded. |

#### Returns

`boolean`

whether a command was reloaded or not.

#### Defined in

[handler.ts:188](https://github.com/EpokTarren/mashu/blob/922ecdf/src/handler.ts#L188)

___

### reportError

▸ **reportError**(`err`): `void`

Reports an error to the set error channel.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `err` | `Error` | Error to report. |

#### Returns

`void`

#### Defined in

[handler.ts:363](https://github.com/EpokTarren/mashu/blob/922ecdf/src/handler.ts#L363)
