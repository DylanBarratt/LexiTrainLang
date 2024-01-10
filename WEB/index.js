import antlr4 from 'antlr4';
import LTLexer from './lt/PeriodFileLexer.js';
import LTParser from './lt/PeriodFileParser.js';
import LTListener from './lt/PeriodFileListener.js';

class Listener extends LTListener {
	metadata = {};

	//speech marks need to be removed
	enterMetaData(ctx) {
		this.metadata[ctx.children[0].getText()] = ctx.children[2].getText();
	}
}

const input = `title: "yoyoyo".
author:"Dylan Barratt".

//this is a comment!

over_unders = 5overUnders.
base = 2hourBase.

"week 1" {
	Mon: (bike) 1hr HRZ1 "cool bike yo",
	Tue: (bike) 1hr30min HRZ2 && (run) 1hr HRZ2,
	Wed: (bike) 2hr HRZ2,
	Thu: (bike) 1hr HRZ2&&(run) 1hr HRZ2,
	Fri: (bike) 2hr HRZ2,
	Sat: (bike) 2hr HRZ2 && (run) 1hr30min HRZ2
}
`

const chars = new antlr4.InputStream(input);
const lexer = new LTLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new LTParser(tokens);
const tree = parser.file();

const listener = new Listener();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

console.log(listener.metadata);
