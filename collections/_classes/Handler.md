---
title: Handler
layout: default
permalink: /handler/
---
[mashujs](/readme/) / [Exports](/modules/) / Handler

# Class: Handler

Command handler.

## Hierarchy

- **`Handler`**

  ↳ [`Documentation`](/documentation/)

## Table of contents

### Constructors

- [constructor](/handler/#constructor)

### Properties

- [categories](/handler/#categories)
- [client](/handler/#client)
- [errorChannel](/handler/#errorchannel)
- [help](/handler/#help)
- [prefix](/handler/#prefix)

### Methods

- [getCommand](/handler/#getcommand)
- [handle](/handler/#handle)
- [handleInteraction](/handler/#handleinteraction)
- [isOwner](/handler/#isowner)
- [loadSlashCommands](/handler/#loadslashcommands)
- [reloadAll](/handler/#reloadall)
- [reloadCommand](/handler/#reloadcommand)
- [reportError](/handler/#reporterror)

## Constructors

### constructor

• **new Handler**(`__namedParameters`, `client`)

Constructs a handler instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `__namedParameters` | [`HandlerOptions`](/handleroptions/) | - |
| `client` | `Client`<`boolean`\> | Client that the handler will attach to. |

#### Defined in

[handler.ts:479](https://github.com/EpokTarren/mashu/blob/78d8416/src/handler.ts#L479)

## Properties

### categories

• `Readonly` **categories**: `Map`<`string`, [`CategoryData`](/categorydata/)\>

A map of categories and their metadata.

#### Defined in

[handler.ts:95](https://github.com/EpokTarren/mashu/blob/78d8416/src/handler.ts#L95)

___

### client

• `Readonly` **client**: [`Client`](/client/)

The client the handler is attached to.

#### Defined in

[handler.ts:73](https://github.com/EpokTarren/mashu/blob/78d8416/src/handler.ts#L73)

___

### errorChannel

• `Optional` `Readonly` **errorChannel**: `TextChannel`

The channel to which the bot errors.

#### Defined in

[handler.ts:78](https://github.com/EpokTarren/mashu/blob/78d8416/src/handler.ts#L78)

___

### help

• `Readonly` **help**: `MessageEmbedOptions`[]

Help data.

#### Defined in

[handler.ts:68](https://github.com/EpokTarren/mashu/blob/78d8416/src/handler.ts#L68)

___

### prefix

• `Readonly` **prefix**: `string`

Prefix that the handler uses.

#### Defined in

[handler.ts:63](https://github.com/EpokTarren/mashu/blob/78d8416/src/handler.ts#L63)

## Methods

### getCommand

▸ **getCommand**(`alias`): `undefined` \| [`Command`](/command/)

Gets a command by name or alias.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alias` | `string` | The name or alias of the command. |

#### Returns

`undefined` \| [`Command`](/command/)

A command.

#### Defined in

[handler.ts:193](https://github.com/EpokTarren/mashu/blob/78d8416/src/handler.ts#L193)

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

[handler.ts:202](https://github.com/EpokTarren/mashu/blob/78d8416/src/handler.ts#L202)

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

[handler.ts:435](https://github.com/EpokTarren/mashu/blob/78d8416/src/handler.ts#L435)

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

[handler.ts:371](https://github.com/EpokTarren/mashu/blob/78d8416/src/handler.ts#L371)

___

### loadSlashCommands

▸ **loadSlashCommands**(`token?`): `Promise`<`void`\>

Init slash commands

**`example`**
```ts
client.once('ready', () => {
	client.handler.loadSlashCommands();
})
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token?` | `string` | Deprecated: Your login token |

#### Returns

`Promise`<`void`\>

#### Defined in

[handler.ts:388](https://github.com/EpokTarren/mashu/blob/78d8416/src/handler.ts#L388)

___

### reloadAll

▸ **reloadAll**(): `void`

Reloads all commands

#### Returns

`void`

#### Defined in

[handler.ts:161](https://github.com/EpokTarren/mashu/blob/78d8416/src/handler.ts#L161)

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

[handler.ts:182](https://github.com/EpokTarren/mashu/blob/78d8416/src/handler.ts#L182)

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

[handler.ts:357](https://github.com/EpokTarren/mashu/blob/78d8416/src/handler.ts#L357)
