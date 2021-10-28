---
title: Mashurc
layout: default
permalink: /mashurc/
---
[mashujs](/readme/) / [Exports](/modules/) / Mashurc

# Interface: Mashurc

Documentation cli export config options.

## Hierarchy

- [`MashuDocOptions`](/mashudocoptions/)

  ↳ **`Mashurc`**

## Table of contents

### Properties

- [$schema](/mashurc/#$schema)
- [descriptionReplacer](/mashurc/#descriptionreplacer)
- [descriptions](/mashurc/#descriptions)
- [homeHeader](/mashurc/#homeheader)
- [input](/mashurc/#input)
- [layout](/mashurc/#layout)
- [output](/mashurc/#output)
- [permalink](/mashurc/#permalink)
- [prefix](/mashurc/#prefix)
- [readme](/mashurc/#readme)
- [titles](/mashurc/#titles)

## Properties

### $schema

• `Optional` **$schema**: ``"./node_modules/mashujs/mashurc.schema.json"``

Path to the json schema.

#### Defined in

[documentation.ts:114](https://github.com/EpokTarren/mashu/blob/78d8416/src/documentation.ts#L114)

___

### descriptionReplacer

• `Optional` **descriptionReplacer**: [`string`, `string`]

Replacer for descriptions, replaces the first value with the second value in category path.

**`example`**
```ts
// descriptions are in /src/commands/ and built commands /build/commands/
// thus replace "build" with "src"
{ descriptionReplacer: ['build', 'src'] }
```

#### Defined in

[documentation.ts:110](https://github.com/EpokTarren/mashu/blob/78d8416/src/documentation.ts#L110)

___

### descriptions

• `Optional` **descriptions**: `boolean`

Whether to include the description of a category underneath the title.

#### Inherited from

[MashuDocOptions](/mashudocoptions/).[descriptions](/mashudocoptions/#descriptions)

#### Defined in

[documentation.ts:56](https://github.com/EpokTarren/mashu/blob/78d8416/src/documentation.ts#L56)

___

### homeHeader

• `Optional` **homeHeader**: `string`

Header for readme if exported.

#### Inherited from

[MashuDocOptions](/mashudocoptions/).[homeHeader](/mashudocoptions/#homeheader)

#### Defined in

[documentation.ts:86](https://github.com/EpokTarren/mashu/blob/78d8416/src/documentation.ts#L86)

___

### input

• **input**: `string`

Input folder with commands to parse.

#### Defined in

[documentation.ts:100](https://github.com/EpokTarren/mashu/blob/78d8416/src/documentation.ts#L100)

___

### layout

• `Optional` **layout**: `string`

Jekyll layout to be used for the command categories.

**`example`**
```ts
docs.markdown(true, true, { layout: 'category' });
// Top of the "Moderation" category will contain the following
// ---
// layout: category
// ---
```

#### Inherited from

[MashuDocOptions](/mashudocoptions/).[layout](/mashudocoptions/#layout)

#### Defined in

[documentation.ts:68](https://github.com/EpokTarren/mashu/blob/78d8416/src/documentation.ts#L68)

___

### output

• **output**: `string`

Output directory for the documentation.

#### Inherited from

[MashuDocOptions](/mashudocoptions/).[output](/mashudocoptions/#output)

#### Defined in

[documentation.ts:78](https://github.com/EpokTarren/mashu/blob/78d8416/src/documentation.ts#L78)

___

### permalink

• `Optional` **permalink**: `boolean`

Whether to include jekyll permalinks in each category.

**`example`**
```ts
docs.markdown(true, true, { permalink: true });
// Top of the "Moderation" category will contain the following
// ---
// permalink: /moderation/
// ---
```

#### Inherited from

[MashuDocOptions](/mashudocoptions/).[permalink](/mashudocoptions/#permalink)

#### Defined in

[documentation.ts:52](https://github.com/EpokTarren/mashu/blob/78d8416/src/documentation.ts#L52)

___

### prefix

• **prefix**: `string`

Prefix to be used in example generation.

#### Defined in

[documentation.ts:96](https://github.com/EpokTarren/mashu/blob/78d8416/src/documentation.ts#L96)

___

### readme

• `Optional` **readme**: `string`

Readme text to export as index.md.

#### Inherited from

[MashuDocOptions](/mashudocoptions/).[readme](/mashudocoptions/#readme)

#### Defined in

[documentation.ts:82](https://github.com/EpokTarren/mashu/blob/78d8416/src/documentation.ts#L82)

___

### titles

• `Optional` **titles**: `boolean`

Whether to include jekyll titles in export.

**`example`**
```ts
docs.markdown(true, true, { titles: true });
// Top of the "Moderation" category will contain the following
// ---
// title: Moderation
// ---
```

#### Inherited from

[MashuDocOptions](/mashudocoptions/).[titles](/mashudocoptions/#titles)

#### Defined in

[documentation.ts:40](https://github.com/EpokTarren/mashu/blob/78d8416/src/documentation.ts#L40)
