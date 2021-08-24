---
title: HandlerOptions
layout: default
permalink: /handleroptions/
---
[mashujs](/) / [Exports](/modules/) / HandlerOptions

# Interface: HandlerOptions

Options for initializing a handler.

## Table of contents

### Properties

- [descriptionReplacer](/HandlerOptions/#descriptionreplacer)
- [dir](/HandlerOptions/#dir)
- [enableHelp](/HandlerOptions/#enablehelp)
- [errorChannel](/HandlerOptions/#errorchannel)
- [owners](/HandlerOptions/#owners)
- [prefix](/HandlerOptions/#prefix)

## Properties

### descriptionReplacer

• `Optional` **descriptionReplacer**: [build: string, src: string]

Replacer for descriptions, replaces the first value with the second value in category path.

**`example`**
```ts
// descriptions are in /src/commands/ and built commands /build/commands/
// thus replace "build" with "commands"
{ descriptionReplacer: ['build', 'commands'] }
```

#### Defined in

[handler.ts:51](https://github.com/EpokTarren/mashu/blob/922ecdf/src/handler.ts#L51)

___

### dir

• **dir**: `string`

Directory containing commands or subfolders with commands.

#### Defined in

[handler.ts:20](https://github.com/EpokTarren/mashu/blob/922ecdf/src/handler.ts#L20)

___

### enableHelp

• `Optional` **enableHelp**: `boolean`

Whether to enable help command.

#### Defined in

[handler.ts:35](https://github.com/EpokTarren/mashu/blob/922ecdf/src/handler.ts#L35)

___

### errorChannel

• `Optional` **errorChannel**: `string`

Channel for bot to log errors to.

#### Defined in

[handler.ts:30](https://github.com/EpokTarren/mashu/blob/922ecdf/src/handler.ts#L30)

___

### owners

• `Optional` **owners**: `string`[]

The ids of the bot owners.

#### Defined in

[handler.ts:40](https://github.com/EpokTarren/mashu/blob/922ecdf/src/handler.ts#L40)

___

### prefix

• **prefix**: `string`

Prefix for the bot to use.

#### Defined in

[handler.ts:25](https://github.com/EpokTarren/mashu/blob/922ecdf/src/handler.ts#L25)
