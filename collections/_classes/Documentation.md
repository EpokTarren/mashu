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

[documentation.ts:280](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/documentation.ts#L280)

## Properties

### categories

• `Readonly` **categories**: `Map`<`string`, [`CategoryData`](/CategoryData/)\>

A map of categories and their metadata.

#### Inherited from

[Handler](/Handler/).[categories](/Handler/#categories)

#### Defined in

[handler.ts:95](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/handler.ts#L95)

___

### categoryMetadata

• `Readonly` **categoryMetadata**: [`CommandCategory`](/CommandCategory/)[]

Metadata for all categories sorted by name.

#### Defined in

[documentation.ts:138](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/documentation.ts#L138)

___

### client

• `Readonly` **client**: [`Client`](/Client/)

The client the handler is attached to.

#### Inherited from

[Handler](/Handler/).[client](/Handler/#client)

#### Defined in

[handler.ts:73](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/handler.ts#L73)

___

### errorChannel

• `Optional` `Readonly` **errorChannel**: `TextChannel`

The channel to which the bot errors.

#### Inherited from

[Handler](/Handler/).[errorChannel](/Handler/#errorchannel)

#### Defined in

[handler.ts:78](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/handler.ts#L78)

___

### help

• `Readonly` **help**: `MessageEmbedOptions`[]

Help data.

#### Inherited from

[Handler](/Handler/).[help](/Handler/#help)

#### Defined in

[handler.ts:68](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/handler.ts#L68)

___

### prefix

• `Readonly` **prefix**: `string`

Prefix that the handler uses.

#### Inherited from

[Handler](/Handler/).[prefix](/Handler/#prefix)

#### Defined in

[handler.ts:63](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/handler.ts#L63)

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

[documentation.ts:145](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/documentation.ts#L145)

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

[documentation.ts:247](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/documentation.ts#L247)

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

[handler.ts:193](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/handler.ts#L193)

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

[handler.ts:202](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/handler.ts#L202)

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

[handler.ts:435](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/handler.ts#L435)

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

[handler.ts:371](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/handler.ts#L371)

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

#### Inherited from

[Handler](/Handler/).[loadSlashCommands](/Handler/#loadslashcommands)

#### Defined in

[handler.ts:388](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/handler.ts#L388)

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

[documentation.ts:194](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/documentation.ts#L194)

___

### reloadAll

▸ **reloadAll**(): `void`

Reloads all commands

#### Returns

`void`

#### Inherited from

[Handler](/Handler/).[reloadAll](/Handler/#reloadall)

#### Defined in

[handler.ts:161](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/handler.ts#L161)

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

[handler.ts:182](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/handler.ts#L182)

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

[handler.ts:357](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/handler.ts#L357)
