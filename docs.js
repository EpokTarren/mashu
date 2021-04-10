const { readdirSync, readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');

const fixMD = (md) =>
	md
		.replace(/\.md/g, '/')
		.replace(/]\(/g, '](/')
		.replace(/\.\.\//g, '')
		.replace(/\/README\//g, '/');

function processFiles(path) {
	const content = readFileSync(path).toString('utf-8');
	const name = content.match(/ [^ ]+\n/)[0].trim();
	const dir = path.match(/[^\\/]+(?=[\\/].+\.md)/g).pop();
	const header = `---\ntitle: ${name}\nlayout: default\npermalink: /${dir}/${name.toLowerCase()}/\n---\n`;
	writeFileSync(path, header + fixMD(content));
}

const classPath = resolve(__dirname, 'docs', 'classes');
readdirSync(classPath)
	.map((file) => resolve(classPath, file))
	.forEach(processFiles);

const interfacePath = resolve(__dirname, 'docs', 'interfaces');
readdirSync(interfacePath)
	.map((file) => resolve(interfacePath, file))
	.forEach(processFiles);

const modulePath = resolve(__dirname, 'docs', 'modules.md');
writeFileSync(
	modulePath,
	'---\ntitle: Modules\npermalink: /modules/\nlayout: default\n---\n' +
		fixMD(readFileSync(modulePath).toString('utf-8'))
);

const readmePath = resolve(__dirname, 'docs', 'README.md');
writeFileSync(
	readmePath,
	'---\ntitle: Home\nlayout: default\n---\n' + fixMD(readFileSync(readmePath).toString())
);

console.log('Docs generated.');
