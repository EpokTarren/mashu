---
title: Message
layout: default
permalink: /message/
---
[mashujs](/) / [Exports](/modules/) / Message

# Interface: Message

A message emitted by the command handler.

## Hierarchy

- `Message`

  ↳ **`Message`**

## Table of contents

### Properties

- [args](/Message/#args)
- [client](/Message/#client)
- [options](/Message/#options)

## Properties

### args

• **args**: `string`[]

Arguments triggered by the message

#### Defined in

[client.ts:48](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/client.ts#L48)

___

### client

• **client**: [`Client`](/Client/)

The client that emitted the message.

#### Overrides

Discord.Message.client

#### Defined in

[client.ts:43](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/client.ts#L43)

___

### options

• **options**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getBoolean` | (`name`: `string`, `required`: ``true``) => `boolean`(`name`: `string`, `required?`: `boolean`) => `undefined` \| `boolean` |
| `getChannel` | (`name`: `string`, `required`: ``true``) => `Channel`(`name`: `string`, `required?`: `boolean`) => `undefined` \| `Channel` |
| `getInteger` | (`name`: `string`, `required`: ``true``) => `number`(`name`: `string`, `required?`: `boolean`) => `undefined` \| `number` |
| `getMentionable` | (`name`: `string`, `required`: ``true``) => `User` \| `GuildMember` \| `Role`(`name`: `string`, `required?`: `boolean`) => `undefined` \| `User` \| `GuildMember` \| `Role` |
| `getRole` | (`name`: `string`, `required`: ``true``) => `Role`(`name`: `string`, `required?`: `boolean`) => `undefined` \| `Role` |
| `getString` | (`name`: `string`, `required`: ``true``) => `string`(`name`: `string`, `required?`: `boolean`) => `undefined` \| `string` |
| `getUser` | (`name`: `string`, `required`: ``true``) => `User`(`name`: `string`, `required?`: `boolean`) => `undefined` \| `User` |

#### Defined in

[client.ts:50](https://github.com/EpokTarren/mashu/blob/e9c6c72/src/client.ts#L50)
