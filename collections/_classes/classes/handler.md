---
title: Handler
layout: default
permalink: /classes/handler/
---
[mashujs](/) / [Exports](/modules/) / Handler

# Class: Handler

## Hierarchy

* **Handler**

  ↳ [*Documentation*](/documentation/)

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
- [isOwner](/handler/#isowner)
- [reloadAll](/handler/#reloadall)
- [reloadCommand](/handler/#reloadcommand)
- [reportError](/handler/#reporterror)

## Constructors

### constructor

\+ **new Handler**(`__namedParameters`: [*HandlerOptions*](/interfaces/handleroptions/), `client`: *Client*): [*Handler*](/handler/)

#### Parameters:

Name | Type |
:------ | :------ |
`__namedParameters` | [*HandlerOptions*](/interfaces/handleroptions/) |
`client` | *Client* |

**Returns:** [*Handler*](/handler/)

Defined in: [handler.ts:166](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/handler.ts#L166)

## Properties

### categories

• `Readonly` **categories**: *Map*<string, [*CategoryData*](/interfaces/categorydata/)\>

Defined in: [handler.ts:53](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/handler.ts#L53)

___

### client

• `Readonly` **client**: [*Client*](/client/)

Defined in: [handler.ts:37](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/handler.ts#L37)

___

### errorChannel

• `Readonly` **errorChannel**: *string*

Defined in: [handler.ts:39](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/handler.ts#L39)

___

### help

• `Readonly` **help**: MessageEmbedOptions[]

Defined in: [handler.ts:35](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/handler.ts#L35)

___

### prefix

• `Readonly` **prefix**: *string*

Defined in: [handler.ts:33](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/handler.ts#L33)

## Methods

### getCommand

▸ **getCommand**(`alias`: *string*): *undefined* \| [*Command*](/command/)

#### Parameters:

Name | Type |
:------ | :------ |
`alias` | *string* |

**Returns:** *undefined* \| [*Command*](/command/)

Defined in: [handler.ts:113](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/handler.ts#L113)

___

### handle

▸ **handle**(`message`: *Message*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *Message* |

**Returns:** *Promise*<void\>

Defined in: [handler.ts:118](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/handler.ts#L118)

___

### isOwner

▸ **isOwner**(`id`: *string*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |

**Returns:** *boolean*

Defined in: [handler.ts:164](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/handler.ts#L164)

___

### reloadAll

▸ **reloadAll**(): *void*

**Returns:** *void*

Defined in: [handler.ts:102](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/handler.ts#L102)

___

### reloadCommand

▸ **reloadCommand**(`alias`: *string*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`alias` | *string* |

**Returns:** *boolean*

Defined in: [handler.ts:107](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/handler.ts#L107)

___

### reportError

▸ **reportError**(`err`: Error): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`err` | Error |

**Returns:** *void*

Defined in: [handler.ts:150](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/handler.ts#L150)
