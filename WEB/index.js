import antlr4 from 'antlr4';
const { CommonTokenStream, InputStream } = antlr4;

import LTLexer from './lt/PeriodFileLexer.js';
import LTParser from './lt/PeriodFileParser.js';
import PeriodListener from './PeriodListener.js';

import fs from 'node:fs';

try {
	const data = fs.readFileSync('../ANTLR/examples/period.lt', 'utf8');
	yoyoyo(data);
} catch (err) {
	console.error(err);
}

function yoyoyo(input) {
	var chars = new InputStream(input, true);
	var lexer = new LTLexer(chars);
	var tokens = new CommonTokenStream(lexer);
	var parser = new LTParser(tokens);

	parser.buildParseTrees = true; 

	var tree = parser.file();

	var listener = new PeriodListener();
	antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

	console.log(listener.metadatas);
	console.log(listener.sessionImports);
	console.log(listener.periods);
}

