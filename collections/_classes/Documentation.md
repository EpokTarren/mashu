---
title: Documentation
layout: default
permalink: /documentation/
---
[mashujs](/readme/) / [Exports](/modules/) / Documentation

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

- [`Handler`](/handler/)

  ↳ **`Documentation`**

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
- [handleInteraction](/documentation/#handleinteraction)
- [isOwner](/documentation/#isowner)
- [loadSlashCommands](/documentation/#loadslashcommands)
- [markdown](/documentation/#markdown)
- [reloadAll](/documentation/#reloadall)
- [reloadCommand](/documentation/#reloadcommand)
- [reportError](/documentation/#reporterror)

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
| `options` | [`HandlerOptions`](/handleroptions/) | Handler initialization options |

#### Overrides

[Handler](/handler/).[constructor](/handler/#constructor)

#### Defined in

[documentation.ts:280](https://github.com/EpokTarren/mashu/blob/78d8416/src/documentation.ts#L280)

## Properties

### categories

• `Readonly` **categories**: `Map`<`string`, [`CategoryData`](/categorydata/)\>

A map of categories and their metadata.

#### Inherited from

[Handler](/handler/).[categories](/handler/#categories)

#### Defined in

[handler.ts:95](https://github.com/EpokTarren/mashu/blob/78d8416/src/handler.ts#L95)

___

### categoryMetadata

• `Readonly` **categoryMetadata**: [`CommandCategory`](/commandcategory/)[]

Metadata for all categories sorted by name.

#### Defined in

[documentation.ts:138](https://github.com/EpokTarren/mashu/blob/78d8416/src/documentation.ts#L138)

___

### client

• `Readonly` **client**: [`Client`](/client/)

The client the handler is attached to.

#### Inherited from

[Handler](/handler/).[client](/handler/#client)

#### Defined in

[handler.ts:73](https://github.com/EpokTarren/mashu/blob/78d8416/src/handler.ts#L73)

___

### errorChannel

• `Optional` `Readonly` **errorChannel**: `TextChannel`

The channel to which the bot errors.

#### Inherited from

[Handler](/handler/).[errorChannel](/handler/#errorchannel)

#### Defined in

[handler.ts:78](https://github.com/EpokTarren/mashu/blob/78d8416/src/handler.ts#L78)

___

### help

• `Readonly` **help**: `MessageEmbedOptions`[]

Help data.

#### Inherited from

[Handler](/handler/).[help](/handler/#help)

#### Defined in

[handler.ts:68](https://github.com/EpokTarren/mashu/blob/78d8416/src/handler.ts#L68)

___

### prefix

• `Readonly` **prefix**: `string`

Prefix that the handler uses.

#### Inherited from

[Handler](/handler/).[prefix](/handler/#prefix)

#### Defined in

[handler.ts:63](https://github.com/EpokTarren/mashu/blob/78d8416/src/handler.ts#L63)

## Methods

### commandMarkdown

▸ **commandMarkdown**(`command`): `string`

Generate markdown for a command.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | [`CommandMetadata`](/commandmetadata/) | The command to convert to markdown. |

#### Returns

`string`

The metadata of a command as markdown.

#### Defined in

[documentation.ts:145](https://github.com/EpokTarren/mashu/blob/78d8416/src/documentation.ts#L145)

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
| `options` | [`MashuDocOptions`](/mashudocoptions/) | The options for how and where to export to. |

#### Returns

`void`

#### Defined in

[documentation.ts:247](https://github.com/EpokTarren/mashu/blob/78d8416/src/documentation.ts#L247)

___

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

#### Inherited from

[Handler](/handler/).[getCommand](/handler/#getcommand)

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

#### Inherited from

[Handler](/handler/).[handle](/handler/#handle)

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

#### Inherited from

[Handler](/handler/).[handleInteraction](/handler/#handleinteraction)

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

#### Inherited from

[Handler](/handler/).[isOwner](/handler/#isowner)

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

#### Inherited from

[Handler](/handler/).[loadSlashCommands](/handler/#loadslashcommands)

#### Defined in

[handler.ts:388](https://github.com/EpokTarren/mashu/blob/78d8416/src/handler.ts#L388)

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
| `options` | [`MarkdownOptions`](/markdownoptions/) | `{}` | Options for exporting command categories to markdown. |

#### Returns

{ `markdown`: `string` ; `name`: `string`  }[]

A markdown representation of each command category.

#### Defined in

[documentation.ts:194](https://github.com/EpokTarren/mashu/blob/78d8416/src/documentation.ts#L194)

___

### reloadAll

▸ **reloadAll**(): `void`

Reloads all commands

#### Returns

`void`

#### Inherited from

[Handler](/handler/).[reloadAll](/handler/#reloadall)

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

#### Inherited from

[Handler](/handler/).[reloadCommand](/handler/#reloadcommand)

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

#### Inherited from

[Handler](/handler/).[reportError](/handler/#reporterror)

#### Defined in

[handler.ts:357](https://github.com/EpokTarren/mashu/blob/78d8416/src/handler.ts#L357)
