---
title: Documentation
layout: default
permalink: /documentation/
---
[mashujs](/) / [Exports](/modules/) / Documentation

# Class: Documentation

Command documentation export utility class.

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

- [`Handler`](/Handler/)

  ↳ **`Documentation`**

## Table of contents

### Constructors

- [constructor](/Documentation/#constructor)

### Properties

- [categories](/Documentation/#categories)
- [categoryMetadata](/Documentation/#categorymetadata)
- [client](/Documentation/#client)
- [errorChannel](/Documentation/#errorchannel)
- [help](/Documentation/#help)
- [prefix](/Documentation/#prefix)

### Methods

- [commandMarkdown](/Documentation/#commandmarkdown)
- [exportDocs](/Documentation/#exportdocs)
- [getCommand](/Documentation/#getcommand)
- [handle](/Documentation/#handle)
- [handleInteraction](/Documentation/#handleinteraction)
- [isOwner](/Documentation/#isowner)
- [loadSlashCommands](/Documentation/#loadslashcommands)
- [markdown](/Documentation/#markdown)
- [reloadAll](/Documentation/#reloadall)
- [reloadCommand](/Documentation/#reloadcommand)
- [reportError](/Documentation/#reporterror)

## Constructors

### constructor

• **new Documentation**(`options`)

Creates a new documentation instance.

**`example`**
```ts
const docs = new Documentation({
	dir: 'build/commands',
	prefix: 'a;',
	descriptionReplacer: ['build', 'src'],
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`HandlerOptions`](/HandlerOptions/) | Handler initialization options |

#### Overrides

[Handler](/Handler/).[constructor](/Handler/#constructor)

#### Defined in

[documentation.ts:280](https://github.com/EpokTarren/mashu/blob/922ecdf/src/documentation.ts#L280)

## Properties

### categories

• `Readonly` **categories**: `Map`<`string`, [`CategoryData`](/CategoryData/)\>

A map of categories and their metadata.

#### Inherited from

[Handler](/Handler/).[categories](/Handler/#categories)

#### Defined in

[handler.ts:101](https://github.com/EpokTarren/mashu/blob/922ecdf/src/handler.ts#L101)

___

### categoryMetadata

• `Readonly` **categoryMetadata**: [`CommandCategory`](/CommandCategory/)[]

Metadata for all categories sorted by name.

#### Defined in

[documentation.ts:138](https://github.com/EpokTarren/mashu/blob/922ecdf/src/documentation.ts#L138)

___

### client

• `Readonly` **client**: [`Client`](/Client/)

The client the handler is attached to.

#### Inherited from

[Handler](/Handler/).[client](/Handler/#client)

#### Defined in

[handler.ts:79](https://github.com/EpokTarren/mashu/blob/922ecdf/src/handler.ts#L79)

___

### errorChannel

• `Optional` `Readonly` **errorChannel**: `TextChannel`

The channel to which the bot errors.

#### Inherited from

[Handler](/Handler/).[errorChannel](/Handler/#errorchannel)

#### Defined in

[handler.ts:84](https://github.com/EpokTarren/mashu/blob/922ecdf/src/handler.ts#L84)

___

### help

• `Readonly` **help**: `MessageEmbedOptions`[]

Help data.

#### Inherited from

[Handler](/Handler/).[help](/Handler/#help)

#### Defined in

[handler.ts:74](https://github.com/EpokTarren/mashu/blob/922ecdf/src/handler.ts#L74)

___

### prefix

• `Readonly` **prefix**: `string`

Prefix that the handler uses.

#### Inherited from

[Handler](/Handler/).[prefix](/Handler/#prefix)

#### Defined in

[handler.ts:69](https://github.com/EpokTarren/mashu/blob/922ecdf/src/handler.ts#L69)

## Methods

### commandMarkdown

▸ **commandMarkdown**(`command`): `string`

Generate markdown for a command.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | [`CommandMetadata`](/CommandMetadata/) | The command to convert to markdown. |

#### Returns

`string`

The metadata of a command as markdown.

#### Defined in

[documentation.ts:145](https://github.com/EpokTarren/mashu/blob/922ecdf/src/documentation.ts#L145)

___

### exportDocs

▸ **exportDocs**(`options`): `void`

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`MashuDocOptions`](/MashuDocOptions/) | The options for how and where to export to. |

#### Returns

`void`

#### Defined in

[documentation.ts:247](https://github.com/EpokTarren/mashu/blob/922ecdf/src/documentation.ts#L247)

___

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

#### Inherited from

[Handler](/Handler/).[getCommand](/Handler/#getcommand)

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

#### Inherited from

[Handler](/Handler/).[handle](/Handler/#handle)

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

#### Inherited from

[Handler](/Handler/).[handleInteraction](/Handler/#handleinteraction)

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

#### Inherited from

[Handler](/Handler/).[isOwner](/Handler/#isowner)

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

#### Inherited from

[Handler](/Handler/).[loadSlashCommands](/Handler/#loadslashcommands)

#### Defined in

[handler.ts:387](https://github.com/EpokTarren/mashu/blob/922ecdf/src/handler.ts#L387)

___

### markdown

▸ **markdown**(`inlineTitle?`, `toc?`, `options?`): { `markdown`: `string` ; `name`: `string`  }[]

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

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `inlineTitle` | `boolean` | `true` | Whether to include command category titles. |
| `toc` | `boolean` | `true` | Whether to include a table of contents |
| `options` | [`MarkdownOptions`](/MarkdownOptions/) | `{}` | Options for exporting command categories to markdown. |

#### Returns

{ `markdown`: `string` ; `name`: `string`  }[]

A markdown representation of each command category.

#### Defined in

[documentation.ts:194](https://github.com/EpokTarren/mashu/blob/922ecdf/src/documentation.ts#L194)

___

### reloadAll

▸ **reloadAll**(): `void`

Reloads all commands

#### Returns

`void`

#### Inherited from

[Handler](/Handler/).[reloadAll](/Handler/#reloadall)

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

#### Inherited from

[Handler](/Handler/).[reloadCommand](/Handler/#reloadcommand)

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

#### Inherited from

[Handler](/Handler/).[reportError](/Handler/#reporterror)

#### Defined in

[handler.ts:363](https://github.com/EpokTarren/mashu/blob/922ecdf/src/handler.ts#L363)
