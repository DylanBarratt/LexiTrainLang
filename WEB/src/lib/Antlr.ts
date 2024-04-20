// place files you want to import through the `$lib` alias in this folder.

import antlr4 from 'antlr4';
const { CommonTokenStream, InputStream } = antlr4;

import PeriodFileLexer from './lt/PeriodFileLexer.js';
import PeriodFileParser from './lt/PeriodFileParser.js';

import SessionFileLexer from './lt/SessionFileLexer.js';
import SessionFileParser from './lt/SessionFileParser.js';

import ImportsLexer from './lt/ImportsLexer.js';
import ImportsParser from './lt/ImportsParser.js';

import type { PeriodFile, Session } from './DataTypes';

import PeriodListener from './PeriodListener';
import Imports from './ImportListener';
import SessionListener from './SessionListener';


class CustomErrorListener extends antlr4.error.ErrorListener {
    constructor() {
        super();
    }

    // Override the syntaxError method to handle custom errors
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        const error = new CustomError(`Syntax Error at line ${line}:${column} - ${msg}`);
        throw error;
    }
}

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ParserError';
    }
}

export function ParseImports(input: string): Array<string>{
	var chars = new InputStream(input, true);
	var lexer = new ImportsLexer(chars);
	var tokens = new CommonTokenStream(lexer);
	var parser = new ImportsParser(tokens);

	parser.buildParseTrees = true;

	parser.removeErrorListeners();
	var customErrorListener = new CustomErrorListener();
	parser.addErrorListener(customErrorListener);

	var tree = parser.file();

	var listener = new Imports();
	antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

	return listener.result();
}


export function ParseFull(input: string, importedFiles: object): PeriodFile {
	var chars = new InputStream(input, true);
	var lexer = new PeriodFileLexer(chars);
	var tokens = new CommonTokenStream(lexer);
	var parser = new PeriodFileParser(tokens);

	parser.buildParseTrees = true;

	parser.removeErrorListeners;
	var customErrorListener = new CustomErrorListener();
	parser.addErrorListener(customErrorListener);

	var tree = parser.file();

	var listener = new PeriodListener(importedFiles);
	antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

	return listener.result();
}

export function ParseSession(input: string): Session {
	var chars = new InputStream(input, true);
	var lexer = new SessionFileLexer(chars);
	var tokens = new CommonTokenStream(lexer);
	var parser = new SessionFileParser(tokens);

	parser.buildParseTrees = true;

	parser.removeErrorListeners;
	var customErrorListener = new CustomErrorListener();
	parser.addErrorListener(customErrorListener);

	var tree = parser.file();

	var listener = new SessionListener();
	antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

	return listener.result();
}