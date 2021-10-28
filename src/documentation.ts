import { join } from 'path';
import { Client } from './client';
import { Handler, HandlerOptions } from './handler';
import { Command, CommandMetadata } from './command';
import { existsSync, mkdirSync, writeFileSync } from 'fs';

/**
 * Represents a command categories metadata.
 */
export interface CommandCategory {
	/**
	 * The name of the category.
	 */
	name: string;
	/**
	 * The metadata of all commands.
	 */
	commands: CommandMetadata[];
	/**
	 * The description of the category as a whole.
	 */
	description?: string;
}

/**
 * Options for exporting command categories to markdown.
 */
export interface MarkdownOptions {
	/**
	 * Whether to include jekyll titles in export.
	 * @example
	 * ```ts
	 * docs.markdown(true, true, { titles: true });
	 * // Top of the "Moderation" category will contain the following
	 * // ---
	 * // title: Moderation
	 * // ---
	 * ```
	 */
	titles?: boolean;
	/**
	 * Whether to include jekyll permalinks in each category.
	 * @example
	 * ```ts
	 * docs.markdown(true, true, { permalink: true });
	 * // Top of the "Moderation" category will contain the following
	 * // ---
	 * // permalink: /moderation/
	 * // ---
	 * ```
	 */
	permalink?: boolean;
	/**
	 * Whether to include the description of a category underneath the title.
	 */
	descriptions?: boolean;
	/**
	 * Jekyll layout to be used for the command categories.
	 * @example
	 * ```ts
	 * docs.markdown(true, true, { layout: 'category' });
	 * // Top of the "Moderation" category will contain the following
	 * // ---
	 * // layout: category
	 * // ---
	 * ```
	 */
	layout?: string;
}

/**
 * Options for exporting a command folders command documentation.
 */
export interface MashuDocOptions extends MarkdownOptions {
	/**
	 * Output directory for the documentation.
	 */
	output: string;
	/**
	 * Readme text to export as index.md.
	 */
	readme?: string;
	/**
	 * Header for readme if exported.
	 */
	homeHeader?: string;
}

/**
 * Documentation cli export config options.
 */
export interface Mashurc extends MashuDocOptions {
	/**
	 * Prefix to be used in example generation.
	 */
	prefix: string;
	/**
	 * Input folder with commands to parse.
	 */
	input: string;
	/**
	 * Replacer for descriptions, replaces the first value with the second value in category path.
	 * @example
	 * ```ts
	 * // descriptions are in /src/commands/ and built commands /build/commands/
	 * // thus replace "build" with "src"
	 * { descriptionReplacer: ['build', 'src'] }
	 * ```
	 */
	descriptionReplacer?: [string, string];
	/**
	 * Path to the json schema.
	 */
	$schema?: './node_modules/mashujs/mashurc.schema.json';
}

const listReduce = (acc: string, value: string) => `${acc}- ${value}\n`;

/**
 * Command documentation export utility class.
 * @example
 * ```ts
 * const docs = new Documentation({
 * 	dir: 'build/commands',
 * 	prefix: 'a;',
 * 	descriptionReplacer: ['build', 'src'],
 * });
 *
 * docs.exportDocs({
 * 	output: 'docs',
 * });
 * ```
 */
export class Documentation extends Handler {
	/**
	 * Metadata for all categories sorted by name.
	 */
	public readonly categoryMetadata: CommandCategory[];

	/**
	 * Generate markdown for a command.
	 * @param command - The command to convert to markdown.
	 * @returns The metadata of a command as markdown.
	 */
	public commandMarkdown(command: CommandMetadata): string {
		return [
			`\n\n## ${command.name}`,
			command.guildOnly ? 'Guild Only Command' : '',
			`### Description\n\n${command.detailed}`,
			command.aliases[0] ? `### Aliases\n${command.aliases.reduce(listReduce, '')}` : '',
			command.examples[0] ? `### Examples\n\`\`\`\n${command.examples.reduce((acc, v) => `${acc}\n${v}`)}\n\`\`\`` : '',
			command.permissions[0] ? '### Permissions\n' + command.permissions.reduce(listReduce, '').trim() : '',
			command.arguments[0]
				? `### Arguments\n\n${command.arguments.reduce(
						(acc, { name, required, type, description }) =>
							`${acc}#### ${name}(${
								required ? 'Required ' : 'Optional'
							})\n\nType: ${type}\n\nDescription: ${description}\n`,
						''
				  )}`
				: '',
			command.botPermissions[0] ? '### Bots Permissions\n' + command.botPermissions.reduce(listReduce, '').trim() : '',
			'---',
		]
			.filter((v) => v)
			.join('\n\n');
	}

	/**
	 * Generates markdown for all command categories.
	 * @param inlineTitle - Whether to include command category titles.
	 * @param toc - Whether to include a table of contents
	 * @param options - Options for exporting command categories to markdown.
	 * @returns A markdown representation of each command category.
	 * @example
	 * ```ts
	 * const docs = new Documentation({
	 * 	dir: 'build/commands',
	 * 	prefix: 'a;',
	 * 	descriptionReplacer: ['build', 'src'],
	 * });
	 * docs
	 * 	.markdown(true, true, {
	 * 		titles: true,
	 * 		permalink: true,
	 * 		descriptions: true,
	 * 		layout: 'category',
	 * 	})
	 * 	.forEach(({ name, markdown }) => {
	 * 		writeFileSync(`docs/${name}.md`, markdown);
	 * 	});
	 * ```
	 */
	public markdown(inlineTitle = true, toc = true, options: MarkdownOptions = {}): { name: string; markdown: string }[] {
		return this.categoryMetadata.reduce(
			(acc, { name, commands, description }) => [
				...acc,
				{
					name,
					markdown: commands.reduce(
						(md, command) => md + this.commandMarkdown(command),
						(options.layout || options.permalink || options.titles
							? [
									'---',
									options.titles ? `title: ${name}` : '',
									options.layout ? `layout: ${options.layout}` : '',
									options.permalink ? `permalink: /${name.toLowerCase()}/` : '',
									'---\n',
							  ]
									.filter((v) => v)
									.join('\n')
							: '') +
							(inlineTitle || options.descriptions
								? `# ${name}\n${(options.descriptions && description) || ''}\n\n`
								: '') +
							(toc
								? commands.reduce((acc, { name }) => `${acc}- [${name}](#${name.toLowerCase()})\n`, '### Commands\n')
								: '')
					),
				},
			],
			[] as { name: string; markdown: string }[]
		);
	}

	/**
	 * Exports command categories to a documentations folder.
	 * @param options - The options for how and where to export to.
	 * @example
	 * ```ts
	 * const docs = new Documentation({
	 * 	dir: 'build/commands',
	 * 	prefix: 'a;',
	 * 	descriptionReplacer: ['build', 'src'],
	 * });
	 * docs.exportDocs({
	 * 	output: 'docs',
	 * 	titles: true,
	 * 	permalink: true,
	 * 	descriptions: true,
	 * 	readme: readFileSync('README.md').toString(),
	 * 	layout: 'default',
	 * 	homeHeader: 'title: home\nlayout: home',
	 * });
	 * ```
	 */
	public exportDocs(options: MashuDocOptions): void {
		if (!existsSync(options.output)) {
			mkdirSync(options.output);
		}

		this.markdown(true, true, options)
			.concat(
				options.readme
					? [
							{
								name: 'index',
								markdown: options.homeHeader ? `---\n${options.homeHeader}\n---\n\n${options.readme}` : options.readme,
							},
					  ]
					: []
			)
			.forEach(({ name, markdown }) => {
				writeFileSync(join(options.output, `${name}.md`), markdown);
			});
	}

	/**
	 * Creates a new documentation instance.
	 * @param options - Handler initialization options
	 * @example
	 * ```ts
	 * const docs = new Documentation({
	 * 	dir: 'build/commands',
	 * 	prefix: 'a;',
	 * 	descriptionReplacer: ['build', 'src'],
	 * });
	 * ```
	 */
	constructor(options: HandlerOptions) {
		super(options, ({} as unknown) as Client);

		this.categoryMetadata = Array.from(this.categories, ([name, category]) => ({
			name: name || 'None ',
			commands: category.commands
				.map((command) => (this.commands.get(command) as Command).metadata())
				.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0)),
			description: category.description,
		})).sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
	}
}
