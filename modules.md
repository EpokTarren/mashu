---
title: Modules
permalink: /modules/
layout: default
---
[mashujs](/) / Exports

# mashujs

## Table of contents

### Classes

- [Client](/classes/client/)
- [Command](/classes/command/)
- [Documentation](/classes/documentation/)
- [Handler](/classes/handler/)

### Interfaces

- [CategoryData](/interfaces/categorydata/)
- [CommandCategory](/interfaces/commandcategory/)
- [CommandMetadata](/interfaces/commandmetadata/)
- [CommandResolvable](/interfaces/commandresolvable/)
- [HandlerOptions](/interfaces/handleroptions/)
- [MarkdownOptions](/interfaces/markdownoptions/)
- [MashuDocOptions](/interfaces/mashudocoptions/)
- [Mashurc](/interfaces/mashurc/)
- [Message](/interfaces/message/)

### Type aliases

- [ClientOptions](/modules/#clientoptions)
- [ExampleResolvable](/modules/#exampleresolvable)

## Type aliases

### ClientOptions

Ƭ **ClientOptions**: Discord.ClientOptions & [*HandlerOptions*](/interfaces/handleroptions/)

Options used to instantiate a client.

Defined in: [client.ts:7](https://github.com/EpokTarren/mashu/blob/97910c8/src/client.ts#L7)

___

### ExampleResolvable

Ƭ **ExampleResolvable**: *string* \| (`prefix`: *string*) => *string*

Resolvable to an example, either a string or a function that resolves to a string.

Defined in: [command.ts:7](https://github.com/EpokTarren/mashu/blob/97910c8/src/command.ts#L7)
