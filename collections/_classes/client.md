---
title: Client
layout: default
permalink: /client/
---
[mashujs](/) / [Exports](/modules/) / Client

# Class: Client

Client connected to the Disocrd api.

## Hierarchy

* *Client*

  ↳ **Client**

## Table of contents

### Constructors

- [constructor](/client.md#constructor)

### Properties

- [handler](/client.md#handler)

## Constructors

### constructor

\+ **new Client**(`options`: [*ClientOptions*](/modules.md#clientoptions)): [*Client*](/client/)

Instantiates a new client with a handler.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`options` | [*ClientOptions*](/modules.md#clientoptions) | Options used to generate the handler.    |

**Returns:** [*Client*](/client/)

Overrides: Discord.Client.constructor

Defined in: [client.ts:16](https://github.com/EpokTarren/mashu/blob/2da2f58/src/client.ts#L16)

## Properties

### handler

• `Readonly` **handler**: [*Handler*](/handler/)

The command handler that handles messages.

Defined in: [client.ts:16](https://github.com/EpokTarren/mashu/blob/2da2f58/src/client.ts#L16)
