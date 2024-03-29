// Generated from ./Imports.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ImportsListener from './ImportsListener.js';
import ImportsVisitor from './ImportsVisitor.js';

const serializedATN = [4,1,2,15,2,0,7,0,2,1,7,1,1,0,5,0,6,8,0,10,0,12,0,
9,9,0,1,0,1,0,1,1,1,1,1,1,0,0,2,0,2,0,0,13,0,7,1,0,0,0,2,12,1,0,0,0,4,6,
3,2,1,0,5,4,1,0,0,0,6,9,1,0,0,0,7,5,1,0,0,0,7,8,1,0,0,0,8,10,1,0,0,0,9,7,
1,0,0,0,10,11,5,0,0,1,11,1,1,0,0,0,12,13,5,1,0,0,13,3,1,0,0,0,1,7];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ImportsParser extends antlr4.Parser {

    static grammarFileName = "Imports.g4";
    static literalNames = [  ];
    static symbolicNames = [ null, "IMPORT", "OTHER" ];
    static ruleNames = [ "file", "importStatement" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ImportsParser.ruleNames;
        this.literalNames = ImportsParser.literalNames;
        this.symbolicNames = ImportsParser.symbolicNames;
    }



	file() {
	    let localctx = new FileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ImportsParser.RULE_file);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 7;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 4;
	            this.importStatement();
	            this.state = 9;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 10;
	        this.match(ImportsParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	importStatement() {
	    let localctx = new ImportStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ImportsParser.RULE_importStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 12;
	        this.match(ImportsParser.IMPORT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ImportsParser.EOF = antlr4.Token.EOF;
ImportsParser.IMPORT = 1;
ImportsParser.OTHER = 2;

ImportsParser.RULE_file = 0;
ImportsParser.RULE_importStatement = 1;

class FileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ImportsParser.RULE_file;
    }

	EOF() {
	    return this.getToken(ImportsParser.EOF, 0);
	};

	importStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImportStatementContext);
	    } else {
	        return this.getTypedRuleContext(ImportStatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ImportsListener ) {
	        listener.enterFile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ImportsListener ) {
	        listener.exitFile(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ImportsVisitor ) {
	        return visitor.visitFile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImportStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ImportsParser.RULE_importStatement;
    }

	IMPORT() {
	    return this.getToken(ImportsParser.IMPORT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ImportsListener ) {
	        listener.enterImportStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ImportsListener ) {
	        listener.exitImportStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ImportsVisitor ) {
	        return visitor.visitImportStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




ImportsParser.FileContext = FileContext; 
ImportsParser.ImportStatementContext = ImportStatementContext; 
