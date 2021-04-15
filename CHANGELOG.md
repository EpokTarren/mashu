# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
