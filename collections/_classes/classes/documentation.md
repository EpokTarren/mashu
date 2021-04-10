---
title: Documentation
layout: default
permalink: /classes/documentation/
---
[mashujs](/) / [Exports](/modules/) / Documentation

# Class: Documentation

## Hierarchy

* [*Handler*](/handler/)

  ↳ **Documentation**

## Table of contents

### Constructors

- [constructor](/documentation/#constructor)

### Properties

- [categories](/documentation/#categories)
- [categoryMetadata](/documentation/#categorymetadata)
- [client](/documentation/#client)
- [errorChannel](/documentation/#errorchannel)
- [help](/documentation/#help)
- [prefix](/documentation/#prefix)

### Methods

- [commandMarkdown](/documentation/#commandmarkdown)
- [exportDocs](/documentation/#exportdocs)
- [getCommand](/documentation/#getcommand)
- [handle](/documentation/#handle)
- [isOwner](/documentation/#isowner)
- [markdown](/documentation/#markdown)
- [reloadAll](/documentation/#reloadall)
- [reloadCommand](/documentation/#reloadcommand)
- [reportError](/documentation/#reporterror)

## Constructors

### constructor

\+ **new Documentation**(`options`: [*HandlerOptions*](/interfaces/handleroptions/)): [*Documentation*](/documentation/)

#### Parameters:

Name | Type |
:------ | :------ |
`options` | [*HandlerOptions*](/interfaces/handleroptions/) |

**Returns:** [*Documentation*](/documentation/)

Overrides: [Handler](/handler/)

Defined in: [documentation.ts:119](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/documentation.ts#L119)

## Properties

### categories

• `Readonly` **categories**: *Map*<string, [*CategoryData*](/interfaces/categorydata/)\>

Inherited from: [Handler](/handler/).[categories](/handler/#categories)

Defined in: [handler.ts:53](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/handler.ts#L53)

___

### categoryMetadata

• `Readonly` **categoryMetadata**: [*CommandCategory*](/interfaces/commandcategory/)[]

Defined in: [documentation.ts:36](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/documentation.ts#L36)

___

### client

• `Readonly` **client**: [*Client*](/client/)

Inherited from: [Handler](/handler/).[client](/handler/#client)

Defined in: [handler.ts:37](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/handler.ts#L37)

___

### errorChannel

• `Readonly` **errorChannel**: *string*

Inherited from: [Handler](/handler/).[errorChannel](/handler/#errorchannel)

Defined in: [handler.ts:39](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/handler.ts#L39)

___

### help

• `Readonly` **help**: MessageEmbedOptions[]

Inherited from: [Handler](/handler/).[help](/handler/#help)

Defined in: [handler.ts:35](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/handler.ts#L35)

___

### prefix

• `Readonly` **prefix**: *string*

Inherited from: [Handler](/handler/).[prefix](/handler/#prefix)

Defined in: [handler.ts:33](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/handler.ts#L33)

## Methods

### commandMarkdown

▸ **commandMarkdown**(`command`: [*CommandMetadata*](/interfaces/commandmetadata/)): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`command` | [*CommandMetadata*](/interfaces/commandmetadata/) |

**Returns:** *string*

Defined in: [documentation.ts:38](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/documentation.ts#L38)

___

### exportDocs

▸ **exportDocs**(`options`: [*MashuDocOptions*](/interfaces/mashudocoptions/)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`options` | [*MashuDocOptions*](/interfaces/mashudocoptions/) |

**Returns:** *void*

Defined in: [documentation.ts:98](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/documentation.ts#L98)

___

### getCommand

▸ **getCommand**(`alias`: *string*): *undefined* \| [*Command*](/command/)

#### Parameters:

Name | Type |
:------ | :------ |
`alias` | *string* |

**Returns:** *undefined* \| [*Command*](/command/)

Inherited from: [Handler](/handler/)

Defined in: [handler.ts:113](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/handler.ts#L113)

___

### handle

▸ **handle**(`message`: *Message*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *Message* |

**Returns:** *Promise*<void\>

Inherited from: [Handler](/handler/)

Defined in: [handler.ts:118](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/handler.ts#L118)

___

### isOwner

▸ **isOwner**(`id`: *string*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |

**Returns:** *boolean*

Inherited from: [Handler](/handler/)

Defined in: [handler.ts:164](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/handler.ts#L164)

___

### markdown

▸ **markdown**(`inlineTitle?`: *boolean*, `toc?`: *boolean*, `options?`: [*MarkdownOptions*](/interfaces/markdownoptions/)): { `markdown`: *string* ; `name`: *string*  }[]

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`inlineTitle` | *boolean* | true |
`toc` | *boolean* | true |
`options` | [*MarkdownOptions*](/interfaces/markdownoptions/) | {} |

**Returns:** { `markdown`: *string* ; `name`: *string*  }[]

Defined in: [documentation.ts:59](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/documentation.ts#L59)

___

### reloadAll

▸ **reloadAll**(): *void*

**Returns:** *void*

Inherited from: [Handler](/handler/)

Defined in: [handler.ts:102](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/handler.ts#L102)

___

### reloadCommand

▸ **reloadCommand**(`alias`: *string*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`alias` | *string* |

**Returns:** *boolean*

Inherited from: [Handler](/handler/)

Defined in: [handler.ts:107](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/handler.ts#L107)

___

### reportError

▸ **reportError**(`err`: Error): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`err` | Error |

**Returns:** *void*

Inherited from: [Handler](/handler/)

Defined in: [handler.ts:150](/https://github.com/EpokTarren/mashu/blob/5e59b19/src/handler.ts#L150)
