import antlr4 from 'antlr4';

import LTLexer from './lt/PeriodFileLexer.js';
import LTParser from './lt/PeriodFileParser.js';
import LTListener  from './lt/PeriodFileListener.js';

export default class PeriodListener extends LTListener { 
    metadatas = {};
    sessionImports = {};

    periods = [];
    currentPeriod = 0;
    currentDay = 0;

    //speech marks need to be removed
    exitMetaData(ctx) {
        this.metadatas[ctx.children[0].getText()] = ctx.children[2].getText();
    }

    exitSessionImport(ctx) {
        this.sessionImports[ctx.children[0].getText()] = ctx.children[2].getText();
    }

    enterPeriod(ctx) {
        var newPeriod = {
            'title': ctx.WORD().getText(),
        }
        
        this.periods.push(newPeriod);
        
    }

    enterPeriodPair(ctx) {
        // this.periods[this.currentPeriod][this.currentDay] = ctx.getText();
        var day = {};

        if (ctx.WORD() != null) {
            day.day = ctx.WORD().getText();
        } else if (ctx.NUM() != null){
            console.log(parseInt(ctx.NUM().getText()));
        } else {
            console.log('no day');
        }
        this.currentDay++ 
    }

    exitPeriod(ctx) {
        this.currentPeriod++;
        this.currentDay = 0;
    }
}