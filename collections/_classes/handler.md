---
title: Handler
layout: default
permalink: /handler/
---
[mashujs](/) / [Exports](/modules/) / Handler

# Class: Handler

Command handler.

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

Constructs a handler instance.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`__namedParameters` | [*HandlerOptions*](/interfaces/handleroptions/) | - |
`client` | *Client* | Client that the handler will attatch to.    |

**Returns:** [*Handler*](/handler/)

Defined in: [handler.ts:254](https://github.com/EpokTarren/mashu/blob/97910c8/src/handler.ts#L254)

## Properties

### categories

• `Readonly` **categories**: *Map*<string, [*CategoryData*](/interfaces/categorydata/)\>

A map of categories and their metadata.

Defined in: [handler.ts:101](https://github.com/EpokTarren/mashu/blob/97910c8/src/handler.ts#L101)

___

### client

• `Readonly` **client**: [*Client*](/client/)

The client the handler is attacheted to.

Defined in: [handler.ts:79](https://github.com/EpokTarren/mashu/blob/97910c8/src/handler.ts#L79)

___

### errorChannel

• `Readonly` **errorChannel**: *string*

The channel to which the bot errors.

Defined in: [handler.ts:84](https://github.com/EpokTarren/mashu/blob/97910c8/src/handler.ts#L84)

___

### help

• `Readonly` **help**: MessageEmbedOptions[]

Help data.

Defined in: [handler.ts:74](https://github.com/EpokTarren/mashu/blob/97910c8/src/handler.ts#L74)

___

### prefix

• `Readonly` **prefix**: *string*

Prefix that the handler uses.

Defined in: [handler.ts:69](https://github.com/EpokTarren/mashu/blob/97910c8/src/handler.ts#L69)

## Methods

### getCommand

▸ **getCommand**(`alias`: *string*): *undefined* \| [*Command*](/command/)

Gets a command by name or alias.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`alias` | *string* | The name or alias of the command.   |

**Returns:** *undefined* \| [*Command*](/command/)

A command.

Defined in: [handler.ts:188](https://github.com/EpokTarren/mashu/blob/97910c8/src/handler.ts#L188)

___

### handle

▸ **handle**(`message`: *Message*): *Promise*<void\>

Runs a command if the message contains a command.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`message` | *Message* | The message to be handled.    |

**Returns:** *Promise*<void\>

Defined in: [handler.ts:197](https://github.com/EpokTarren/mashu/blob/97910c8/src/handler.ts#L197)

___

### isOwner

▸ **isOwner**(`id`: *string*): *boolean*

Check wheter a user is an owner.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`id` | *string* | ID of the user.   |

**Returns:** *boolean*

Wheter a user is an owner.

Defined in: [handler.ts:252](https://github.com/EpokTarren/mashu/blob/97910c8/src/handler.ts#L252)

___

### reloadAll

▸ **reloadAll**(): *void*

Reloads all commands

**Returns:** *void*

Defined in: [handler.ts:153](https://github.com/EpokTarren/mashu/blob/97910c8/src/handler.ts#L153)

___

### reloadCommand

▸ **reloadCommand**(`alias`: *string*): *boolean*

Reloads a command by alias or name.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`alias` | *string* | An alias of the command to be reloaded.   |

**Returns:** *boolean*

wheter a command was reloaded or not.

Defined in: [handler.ts:175](https://github.com/EpokTarren/mashu/blob/97910c8/src/handler.ts#L175)

___

### reportError

▸ **reportError**(`err`: Error): *void*

Reports an error to the set error channel.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`err` | Error | Error to report.    |

**Returns:** *void*

Defined in: [handler.ts:233](https://github.com/EpokTarren/mashu/blob/97910c8/src/handler.ts#L233)
