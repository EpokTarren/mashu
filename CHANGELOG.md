# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 2.0.0

discord.js v13 migration and slash command support.

### Added

- SlashCommand support
  - `MessageCommand` for message only commands.
  - `IntractableCommand` for message or slash command support in the same file.
  - `InteractionCommand` for slash command only commands.
- Messages now have an added args property which will always be a string array.
- Command argument parsing for message commands with the same API as discord.js interactions.

### Changed

- BaseCommand should be replaced with `MessageCommand`, `IntractableCommand`, or `InteractionCommand`, depending on if a command is message only, message and interaction or only interaction based.
- `IntractableCommand`, and `InteractionCommand` type functions don't get arguments passed in but `IntractableCommand` if the command invocation is a message args will be a property of the message.
- Migrated to discord.js v13 this means Node.js 16.6.0 or newer is required.
- Fixed bug where a non string description didn't throw an error.
- User now needs to install @discordjs/builders @discordjs/rest discord-api-types in addiction to discord.js.

## 1.0.1 - 2021-04-15

### Added

- TSDoc annotations

### Changed

- Documentation links no longer include leading `/classes/` or `/interfaces/`.
- Documentation now links to the license file in the repository.
- Fix non relative links being mangled.
- Link to documentation in readme.
- Updated the spelling of typescript to TypeScript.
- Command reloading now does not error because of duplicate names.
- Reload now responds with "Unable to reload command." if an owner reloads a command it cannot reload or that does not exist.
- Fix npx script not working.

## 1.0.0 - 2021-04-10

Initial release.
