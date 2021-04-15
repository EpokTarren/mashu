---
title: MarkdownOptions
layout: default
permalink: /markdownoptions/
---
[mashujs](/) / [Exports](/modules/) / MarkdownOptions

# Interface: MarkdownOptions

Options for exporting command categories to markdown.

## Hierarchy

* **MarkdownOptions**

  ↳ [*MashuDocOptions*](/mashudocoptions/)

## Table of contents

### Properties

- [descriptions](/markdownoptions/#descriptions)
- [layout](/markdownoptions/#layout)
- [permalink](/markdownoptions/#permalink)
- [titles](/markdownoptions/#titles)

## Properties

### descriptions

• `Optional` **descriptions**: *boolean*

Wheter to include the description of a category underneath the title.

Defined in: [documentation.ts:56](https://github.com/EpokTarren/mashu/blob/97910c8/src/documentation.ts#L56)

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

Defined in: [documentation.ts:68](https://github.com/EpokTarren/mashu/blob/97910c8/src/documentation.ts#L68)

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

Defined in: [documentation.ts:52](https://github.com/EpokTarren/mashu/blob/97910c8/src/documentation.ts#L52)

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

Defined in: [documentation.ts:40](https://github.com/EpokTarren/mashu/blob/97910c8/src/documentation.ts#L40)
