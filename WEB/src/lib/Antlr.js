// place files you want to import through the `$lib` alias in this folder.

import antlr4 from 'antlr4';
const { CommonTokenStream, InputStream } = antlr4;

import LTLexer from './lt/PeriodFileLexer.js';
import LTParser from './lt/PeriodFileParser.js';
import PeriodListener from './PeriodListener.js';

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

export function Parse(input) {
	var chars = new InputStream(input, true);
	var lexer = new LTLexer(chars);
	var tokens = new CommonTokenStream(lexer);
	var parser = new LTParser(tokens);

	parser.buildParseTrees = true;

	parser.removeErrorListeners;
	var customErrorListener = new CustomErrorListener();
	parser.addErrorListener(customErrorListener);

	var tree = parser.file();

	var listener = new PeriodListener();
	antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

	return listener;
}
