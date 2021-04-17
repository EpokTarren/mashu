---
title: Modules
permalink: /modules/
layout: default
---
[mashujs](/) / Exports

# mashujs

## Table of contents

### Classes

- [Client](/client/)
- [Command](/command/)
- [Documentation](/documentation/)
- [Handler](/handler/)

### Interfaces

- [CategoryData](/categorydata/)
- [CommandCategory](/commandcategory/)
- [CommandMetadata](/commandmetadata/)
- [CommandResolvable](/commandresolvable/)
- [HandlerOptions](/handleroptions/)
- [MarkdownOptions](/markdownoptions/)
- [MashuDocOptions](/mashudocoptions/)
- [Mashurc](/mashurc/)
- [Message](/message/)

### Type aliases

- [ClientOptions](/modules/#clientoptions)
- [ExampleResolvable](/modules/#exampleresolvable)

## Type aliases

### ClientOptions

Ƭ **ClientOptions**: Discord.ClientOptions & [*HandlerOptions*](/handleroptions/)

Options used to instantiate a client.

Defined in: [client.ts:7](https://github.com/EpokTarren/mashu/blob/a18c528/src/client.ts#L7)

___

### ExampleResolvable

Ƭ **ExampleResolvable**: *string* \| (`prefix`: *string*) => *string*

Resolvable to an example, either a string or a function that resolves to a string.

Defined in: [command.ts:7](https://github.com/EpokTarren/mashu/blob/a18c528/src/command.ts#L7)
