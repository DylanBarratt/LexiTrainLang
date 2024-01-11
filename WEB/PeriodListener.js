import antlr4 from 'antlr4';

import LTLexer from './lt/PeriodFileLexer.js';
import LTParser from './lt/PeriodFileParser.js';
import LTListener  from './lt/PeriodFileListener.js';

export default class PeriodListener extends LTListener { 
    metadatas = {};
    sessionimports = {};

    //speech marks need to be removed
    exitMetaData(ctx) {
        this.metadatas[ctx.children[0].getText()] = ctx.children[2].getText();
    }

    exitSessionImport(ctx) {
        // this.sessionimports[]
    }
}