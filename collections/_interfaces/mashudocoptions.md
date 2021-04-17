---
title: MashuDocOptions
layout: default
permalink: /mashudocoptions/
---
[mashujs](/) / [Exports](/modules/) / MashuDocOptions

# Interface: MashuDocOptions

Options for exporting a command folders commad documentation.

## Hierarchy

* [*MarkdownOptions*](/markdownoptions/)

  ↳ **MashuDocOptions**

  ↳↳ [*Mashurc*](/mashurc/)

## Table of contents

### Properties

- [descriptions](/mashudocoptions/#descriptions)
- [homeHeader](/mashudocoptions/#homeheader)
- [layout](/mashudocoptions/#layout)
- [output](/mashudocoptions/#output)
- [permalink](/mashudocoptions/#permalink)
- [readme](/mashudocoptions/#readme)
- [titles](/mashudocoptions/#titles)

## Properties

### descriptions

• `Optional` **descriptions**: *boolean*

Wheter to include the description of a category underneath the title.

Inherited from: [MarkdownOptions](/markdownoptions/).[descriptions](/markdownoptions/#descriptions)

Defined in: [documentation.ts:56](https://github.com/EpokTarren/mashu/blob/a18c528/src/documentation.ts#L56)

___

### homeHeader

• `Optional` **homeHeader**: *string*

Header for readme if exported.

Defined in: [documentation.ts:86](https://github.com/EpokTarren/mashu/blob/a18c528/src/documentation.ts#L86)

___

### layout

• `Optional` **layout**: *string*

Jekyll layout to be used for the command categories.

**`example`** 
```ts
docs.markdown(true, true, { layout: 'category' });
// Top of the "Moderation" category will contain the following
// ---
// layout: category
// ---
```

Inherited from: [MarkdownOptions](/markdownoptions/).[layout](/markdownoptions/#layout)

Defined in: [documentation.ts:68](https://github.com/EpokTarren/mashu/blob/a18c528/src/documentation.ts#L68)

___

### output

• **output**: *string*

Output directory for the documentation.

Defined in: [documentation.ts:78](https://github.com/EpokTarren/mashu/blob/a18c528/src/documentation.ts#L78)

___

### permalink

• `Optional` **permalink**: *boolean*

Wheter to include jekyll permalinks in each category.

**`example`** 
```ts
docs.markdown(true, true, { permalink: true });
// Top of the "Moderation" category will contain the following
// ---
// permalink: /moderation/
// ---
```

Inherited from: [MarkdownOptions](/markdownoptions/).[permalink](/markdownoptions/#permalink)

Defined in: [documentation.ts:52](https://github.com/EpokTarren/mashu/blob/a18c528/src/documentation.ts#L52)

___

### readme

• `Optional` **readme**: *string*

Readme text to export as index.md.

Defined in: [documentation.ts:82](https://github.com/EpokTarren/mashu/blob/a18c528/src/documentation.ts#L82)

___

### titles

• `Optional` **titles**: *boolean*

Wheter to include jekyll titles in export.

**`example`** 
```ts
docs.markdown(true, true, { titles: true });
// Top of the "Moderation" category will contain the following
// ---
// title: Moderation
// ---
```

Inherited from: [MarkdownOptions](/markdownoptions/).[titles](/markdownoptions/#titles)

Defined in: [documentation.ts:40](https://github.com/EpokTarren/mashu/blob/a18c528/src/documentation.ts#L40)