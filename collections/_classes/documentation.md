---
title: Documentation
layout: default
permalink: /documentation/
---
[mashujs](/) / [Exports](/modules/) / Documentation

# Class: Documentation

Commad documentation export utility class.

**`example`** 
```ts
const docs = new Documentation({
	dir: 'build/commands',
	prefix: 'a;',
	descriptionReplacer: ['build', 'src'],
});

docs.exportDocs({
	output: 'docs',
});
```

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

\+ **new Documentation**(`options`: [*HandlerOptions*](/handleroptions/)): [*Documentation*](/documentation/)

Creates a new documentation instance.

**`example`** 
```ts
const docs = new Documentation({
	dir: 'build/commands',
	prefix: 'a;',
	descriptionReplacer: ['build', 'src'],
});
```

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`options` | [*HandlerOptions*](/handleroptions/) | Handler initialization options   |

**Returns:** [*Documentation*](/documentation/)

Overrides: [Handler](/handler/)

Defined in: [documentation.ts:272](https://github.com/EpokTarren/mashu/blob/a18c528/src/documentation.ts#L272)

## Properties

### categories

• `Readonly` **categories**: *Map*<string, [*CategoryData*](/categorydata/)\>

A map of categories and their metadata.

Inherited from: [Handler](/handler/).[categories](/handler/#categories)

Defined in: [handler.ts:101](https://github.com/EpokTarren/mashu/blob/a18c528/src/handler.ts#L101)

___

### categoryMetadata

• `Readonly` **categoryMetadata**: [*CommandCategory*](/commandcategory/)[]

Metadata for all categories sorted by name.

Defined in: [documentation.ts:138](https://github.com/EpokTarren/mashu/blob/a18c528/src/documentation.ts#L138)

___

### client

• `Readonly` **client**: [*Client*](/client/)

The client the handler is attacheted to.

Inherited from: [Handler](/handler/).[client](/handler/#client)

Defined in: [handler.ts:79](https://github.com/EpokTarren/mashu/blob/a18c528/src/handler.ts#L79)

___

### errorChannel

• `Readonly` **errorChannel**: *string*

The channel to which the bot errors.

Inherited from: [Handler](/handler/).[errorChannel](/handler/#errorchannel)

Defined in: [handler.ts:84](https://github.com/EpokTarren/mashu/blob/a18c528/src/handler.ts#L84)

___

### help

• `Readonly` **help**: MessageEmbedOptions[]

Help data.

Inherited from: [Handler](/handler/).[help](/handler/#help)

Defined in: [handler.ts:74](https://github.com/EpokTarren/mashu/blob/a18c528/src/handler.ts#L74)

___

### prefix

• `Readonly` **prefix**: *string*

Prefix that the handler uses.

Inherited from: [Handler](/handler/).[prefix](/handler/#prefix)

Defined in: [handler.ts:69](https://github.com/EpokTarren/mashu/blob/a18c528/src/handler.ts#L69)

## Methods

### commandMarkdown

▸ **commandMarkdown**(`command`: [*CommandMetadata*](/commandmetadata/)): *string*

Generate markdown for a command.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`command` | [*CommandMetadata*](/commandmetadata/) | The command to convert to markdown.   |

**Returns:** *string*

The metadata of a command as markdown.

Defined in: [documentation.ts:145](https://github.com/EpokTarren/mashu/blob/a18c528/src/documentation.ts#L145)

___

### exportDocs

▸ **exportDocs**(`options`: [*MashuDocOptions*](/mashudocoptions/)): *void*

Exports command categories to a documentations folder.

**`example`** 
```ts
const docs = new Documentation({
	dir: 'build/commands',
	prefix: 'a;',
	descriptionReplacer: ['build', 'src'],
});
docs.exportDocs({
	output: 'docs',
	titles: true,
	permalink: true,
	descriptions: true,
	readme: readFileSync('README.md').toString(),
	layout: 'default',
	homeHeader: 'title: home\nlayout: home',
});
```

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`options` | [*MashuDocOptions*](/mashudocoptions/) | The options for how and where to export to.   |

**Returns:** *void*

Defined in: [documentation.ts:251](https://github.com/EpokTarren/mashu/blob/a18c528/src/documentation.ts#L251)

___

### getCommand

▸ **getCommand**(`alias`: *string*): *undefined* \| [*Command*](/command/)

Gets a command by name or alias.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`alias` | *string* | The name or alias of the command.   |

**Returns:** *undefined* \| [*Command*](/command/)

A command.

Inherited from: [Handler](/handler/)

Defined in: [handler.ts:188](https://github.com/EpokTarren/mashu/blob/a18c528/src/handler.ts#L188)

___

### handle

▸ **handle**(`message`: *Message*): *Promise*<void\>

Runs a command if the message contains a command.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`message` | *Message* | The message to be handled.    |

**Returns:** *Promise*<void\>

Inherited from: [Handler](/handler/)

Defined in: [handler.ts:197](https://github.com/EpokTarren/mashu/blob/a18c528/src/handler.ts#L197)

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

Inherited from: [Handler](/handler/)

Defined in: [handler.ts:252](https://github.com/EpokTarren/mashu/blob/a18c528/src/handler.ts#L252)

___

### markdown

▸ **markdown**(`inlineTitle?`: *boolean*, `toc?`: *boolean*, `options?`: [*MarkdownOptions*](/markdownoptions/)): { `markdown`: *string* ; `name`: *string*  }[]

Generates markdown for all command categories.

**`example`** 
```ts
const docs = new Documentation({
	dir: 'build/commands',
	prefix: 'a;',
	descriptionReplacer: ['build', 'src'],
});
docs
	.markdown(true, true, {
		titles: true,
		permalink: true,
		descriptions: true,
		layout: 'category',
	})
	.forEach(({ name, markdown }) => {
		writeFileSync(`docs/${name}.md`, markdown);
	});
```

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`inlineTitle` | *boolean* | true | Wheter to inlcude command category titles.   |
`toc` | *boolean* | true | Wheter to include a table of contents   |
`options` | [*MarkdownOptions*](/markdownoptions/) | {} | Options for exporting command categories to markdown.   |

**Returns:** { `markdown`: *string* ; `name`: *string*  }[]

A markdown representartion of each command category.

Defined in: [documentation.ts:191](https://github.com/EpokTarren/mashu/blob/a18c528/src/documentation.ts#L191)

___

### reloadAll

▸ **reloadAll**(): *void*

Reloads all commands

**Returns:** *void*

Inherited from: [Handler](/handler/)

Defined in: [handler.ts:153](https://github.com/EpokTarren/mashu/blob/a18c528/src/handler.ts#L153)

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

Inherited from: [Handler](/handler/)

Defined in: [handler.ts:175](https://github.com/EpokTarren/mashu/blob/a18c528/src/handler.ts#L175)

___

### reportError

▸ **reportError**(`err`: Error): *void*

Reports an error to the set error channel.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`err` | Error | Error to report.    |

**Returns:** *void*

Inherited from: [Handler](/handler/)

Defined in: [handler.ts:233](https://github.com/EpokTarren/mashu/blob/a18c528/src/handler.ts#L233)
