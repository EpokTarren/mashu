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

- [constructor](/client/#constructor)

### Properties

- [handler](/client/#handler)

## Constructors

### constructor

\+ **new Client**(`options`: [*ClientOptions*](/modules/#clientoptions)): [*Client*](/client/)

Instantiates a new client with a handler.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`options` | [*ClientOptions*](/modules/#clientoptions) | Options used to generate the handler.    |

**Returns:** [*Client*](/client/)

Overrides: Discord.Client.constructor

Defined in: [client.ts:16](https://github.com/EpokTarren/mashu/blob/97910c8/src/client.ts#L16)

## Properties

### handler

• `Readonly` **handler**: [*Handler*](/handler/)

The command handler that handles messages.

Defined in: [client.ts:16](https://github.com/EpokTarren/mashu/blob/97910c8/src/client.ts#L16)
