import { join } from 'path';
import { Client } from './client';
import { Handler, HandlerOptions } from './handler';
import { Command, CommandMetadata } from './command';
import { existsSync, mkdirSync, writeFileSync } from 'fs';

export interface CommandCategory {
	name: string;
	commands: CommandMetadata[];
	description?: string;
}

export interface MarkdownOptions {
	titles?: boolean;
	permalink?: boolean;
	descriptions?: boolean;
	layout?: string;
}

export interface MashuDocOptions extends MarkdownOptions {
	prefix: string;
	output: string;
	readme?: string;
	homeHeader?: string;
}

export interface Mashurc extends MashuDocOptions {
	input: string;
	descriptionReplacer: [string, string];
	$schema?: './node_modules/mashujs/mashurc.schema.json';
}

const listReduce = (acc: string, value: string) => `${acc}- ${value}\n`;

export class Documentation extends Handler {
	public readonly categoryMetadata: CommandCategory[];

	public commandMarkdown(command: CommandMetadata): string {
		return [
			`\n\n## ${command.name}`,
			command.guildOnly ? 'Guild Only Command' : '',
			`### Description\n${command.detailed}`,
			command.aliases[0] ? `### Aliases\n${command.aliases.reduce(listReduce, '')}` : '',
			command.examples[0]
				? `### Examples\n\`\`\`\n${command.examples.reduce((acc, v) => `${acc}\n${v}`)}\n\`\`\``
				: '',
			command.permissions[0]
				? '### Permissions\n' + command.permissions.reduce(listReduce, '').trim()
				: '',
			command.botPermissions[0]
				? '### Bots Permissions\n' + command.botPermissions.reduce(listReduce, '').trim()
				: '',
			'---',
		]
			.filter((v) => v)
			.join('\n\n');
	}

	public markdown(
		inlineTitle = true,
		toc = true,
		options: MarkdownOptions = {}
	): { name: string; markdown: string }[] {
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
								? commands.reduce(
										(acc, { name }) => `${acc}- [${name}](#${name.toLowerCase()})\n`,
										'### Commands\n'
								  )
								: '')
					),
				},
			],
			[] as { name: string; markdown: string }[]
		);
	}

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
								markdown: options.homeHeader
									? `---\n${options.homeHeader}\n---\n\n${options.readme}`
									: options.readme,
							},
					  ]
					: []
			)
			.forEach(({ name, markdown }) => {
				writeFileSync(join(options.output, `${name}.md`), markdown);
			});
	}

	constructor(options: HandlerOptions) {
		super(options, ({} as unknown) as Client);

		this.categoryMetadata = Array.from(this.categories, ([name, category]) => ({
			name: name || 'Uncategorised',
			commands: category.commands
				.map((command) => (this.commands.get(command) as Command).metadata())
				.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0)),
			description: category.description,
		})).sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
	}
}
