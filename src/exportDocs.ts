import { readFileSync, existsSync, writeFileSync } from 'fs';
import { Documentation, Mashurc } from './documentation';

const defaultConfig: Mashurc = {
	$schema: './node_modules/mashujs/mashurc.schema.json',
	prefix: 'a;',
	input: 'build/commands',
	output: 'docs',
	titles: true,
	permalink: true,
	descriptions: true,
	layout: 'default',
	readme: 'README.md',
	homeHeader: 'layout: home',
	descriptionReplacer: ['', ''],
};

if (process.argv[2] && process.argv[2].match('-n')) {
	writeFileSync('.mashurc.json', JSON.stringify(defaultConfig));
	console.log('Generated default config file, edit it to fit your needs.');
	process.exit(0);
}

const config =
	(existsSync(process.argv[2]) && process.argv[2]) ||
	(existsSync('.mashurc') && '.mashurc') ||
	(existsSync('.mashurc.json') && '.mashurc.json');

if (!config) {
	console.error('No .mashurc file found. Generate a default one with --new.');
	process.exit(1);
}

const {
	prefix,
	readme,
	output,
	input,
	permalink,
	layout,
	titles,
	descriptions,
	homeHeader,
	descriptionReplacer,
} = JSON.parse(readFileSync(config, 'utf-8')) as Partial<Mashurc>;

if (!prefix || !output || !input) {
	console.error('Your .mashurc file must contain: a prefix, an input path, and an output path.');
	process.exit(1);
}

const docs = new Documentation({ dir: input, prefix, descriptionReplacer });

docs.exportDocs({
	readme: readme && readFileSync(readme).toString(),
	output,
	titles,
	permalink,
	descriptions,
	layout,
	homeHeader,
});
