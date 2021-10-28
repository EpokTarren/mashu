---
title: Client
layout: default
permalink: /client/
---
[mashujs](/readme/) / [Exports](/modules/) / Client

# Class: Client

Client connected to the Discord api.

## Hierarchy

- `Client`

  ↳ **`Client`**

## Table of contents

### Constructors

- [constructor](/client/#constructor)

### Properties

- [handler](/client/#handler)

### Methods

- [loadSlashCommands](/client/#loadslashcommands)

## Constructors

### constructor

• **new Client**(`options`)

Instantiates a new client with a handler.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`ClientOptions`](/modules/#clientoptions) | Options used to generate the handler. |

#### Overrides

Discord.Client.constructor

#### Defined in

[client.ts:30](https://github.com/EpokTarren/mashu/blob/78d8416/src/client.ts#L30)

## Properties

### handler

• `Readonly` **handler**: [`Handler`](/handler/)

The command handler that handles messages.

#### Defined in

[client.ts:16](https://github.com/EpokTarren/mashu/blob/78d8416/src/client.ts#L16)

## Methods

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

[client.ts:22](https://github.com/EpokTarren/mashu/blob/78d8416/src/client.ts#L22)
