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

- [descriptionReplacer](/handleroptions/#descriptionreplacer)
- [dir](/handleroptions/#dir)
- [enableHelp](/handleroptions/#enablehelp)
- [errorChannel](/handleroptions/#errorchannel)
- [owners](/handleroptions/#owners)
- [prefix](/handleroptions/#prefix)

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

Defined in: [handler.ts:40](https://github.com/EpokTarren/mashu/blob/a18c528/src/handler.ts#L40)

___

### dir

• **dir**: *string*

Directory containing commands or subfolders with commands.

Defined in: [handler.ts:14](https://github.com/EpokTarren/mashu/blob/a18c528/src/handler.ts#L14)

___

### enableHelp

• `Optional` **enableHelp**: *boolean*

Wheter to enable help command.

Defined in: [handler.ts:26](https://github.com/EpokTarren/mashu/blob/a18c528/src/handler.ts#L26)

___

### errorChannel

• `Optional` **errorChannel**: *string*

Channel for bot to log errors to.

Defined in: [handler.ts:22](https://github.com/EpokTarren/mashu/blob/a18c528/src/handler.ts#L22)

___

### owners

• `Optional` **owners**: *string*[]

The ids of the bot owners.

Defined in: [handler.ts:30](https://github.com/EpokTarren/mashu/blob/a18c528/src/handler.ts#L30)

___

### prefix

• **prefix**: *string*

Prefix for the bot to use.

Defined in: [handler.ts:18](https://github.com/EpokTarren/mashu/blob/a18c528/src/handler.ts#L18)
