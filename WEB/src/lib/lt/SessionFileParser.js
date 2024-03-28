// Generated from ./SessionFile.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import SessionFileListener from './SessionFileListener.js';
import SessionFileVisitor from './SessionFileVisitor.js';

const serializedATN = [4,1,18,96,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,4,0,24,8,0,11,0,12,
0,25,1,0,4,0,29,8,0,11,0,12,0,30,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,
3,2,43,8,2,1,3,1,3,1,3,1,3,3,3,49,8,3,1,3,1,3,1,3,3,3,54,8,3,3,3,56,8,3,
1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,5,5,67,8,5,10,5,12,5,70,9,5,1,6,1,6,
1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,84,8,7,1,8,1,8,1,8,1,9,1,9,1,
9,1,10,1,10,1,10,1,10,1,10,0,0,11,0,2,4,6,8,10,12,14,16,18,20,0,1,1,0,13,
14,95,0,23,1,0,0,0,2,32,1,0,0,0,4,37,1,0,0,0,6,55,1,0,0,0,8,57,1,0,0,0,10,
63,1,0,0,0,12,71,1,0,0,0,14,83,1,0,0,0,16,85,1,0,0,0,18,88,1,0,0,0,20,91,
1,0,0,0,22,24,3,2,1,0,23,22,1,0,0,0,24,25,1,0,0,0,25,23,1,0,0,0,25,26,1,
0,0,0,26,28,1,0,0,0,27,29,3,4,2,0,28,27,1,0,0,0,29,30,1,0,0,0,30,28,1,0,
0,0,30,31,1,0,0,0,31,1,1,0,0,0,32,33,5,14,0,0,33,34,5,1,0,0,34,35,7,0,0,
0,35,36,5,2,0,0,36,3,1,0,0,0,37,38,5,14,0,0,38,39,5,3,0,0,39,40,3,6,3,0,
40,42,5,4,0,0,41,43,3,12,6,0,42,41,1,0,0,0,42,43,1,0,0,0,43,5,1,0,0,0,44,
56,3,10,5,0,45,46,3,10,5,0,46,47,5,5,0,0,47,49,1,0,0,0,48,45,1,0,0,0,48,
49,1,0,0,0,49,50,1,0,0,0,50,53,3,8,4,0,51,52,5,5,0,0,52,54,3,10,5,0,53,51,
1,0,0,0,53,54,1,0,0,0,54,56,1,0,0,0,55,44,1,0,0,0,55,48,1,0,0,0,56,7,1,0,
0,0,57,58,5,13,0,0,58,59,5,6,0,0,59,60,5,3,0,0,60,61,3,10,5,0,61,62,5,4,
0,0,62,9,1,0,0,0,63,68,3,14,7,0,64,65,5,5,0,0,65,67,3,14,7,0,66,64,1,0,0,
0,67,70,1,0,0,0,68,66,1,0,0,0,68,69,1,0,0,0,69,11,1,0,0,0,70,68,1,0,0,0,
71,72,5,12,0,0,72,73,5,14,0,0,73,13,1,0,0,0,74,84,5,14,0,0,75,76,5,14,0,
0,76,84,3,16,8,0,77,78,5,14,0,0,78,84,3,18,9,0,79,80,5,14,0,0,80,84,3,20,
10,0,81,82,5,14,0,0,82,84,5,14,0,0,83,74,1,0,0,0,83,75,1,0,0,0,83,77,1,0,
0,0,83,79,1,0,0,0,83,81,1,0,0,0,84,15,1,0,0,0,85,86,5,7,0,0,86,87,5,14,0,
0,87,17,1,0,0,0,88,89,5,8,0,0,89,90,5,14,0,0,90,19,1,0,0,0,91,92,5,14,0,
0,92,93,5,9,0,0,93,94,5,14,0,0,94,21,1,0,0,0,8,25,30,42,48,53,55,68,83];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SessionFileParser extends antlr4.Parser {

    static grammarFileName = "SessionFile.g4";
    static literalNames = [ null, "':'", "'.'", "'{'", "'}'", "'&&'", "'*'", 
                            "'<'", "'>'", "'-'", "'import'", "'load='", 
                            "'note='" ];
    static symbolicNames = [ null, null, null, null, null, null, null, "LT", 
                             "GT", "BW", "IMPORT", "LOAD", "NOTES", "NUM", 
                             "WORD", "SPORT", "IMPORTED", "LINE_COMMENT", 
                             "WS" ];
    static ruleNames = [ "file", "metaData", "section", "sectionContents", 
                         "structure", "workloads", "note", "workload", "lt", 
                         "gt", "between" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SessionFileParser.ruleNames;
        this.literalNames = SessionFileParser.literalNames;
        this.symbolicNames = SessionFileParser.symbolicNames;
    }



	file() {
	    let localctx = new FileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SessionFileParser.RULE_file);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 22;
	        		this.metaData();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 25; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,0, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 28; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 27;
	            this.section();
	            this.state = 30; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===14);
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



	metaData() {
	    let localctx = new MetaDataContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SessionFileParser.RULE_metaData);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.match(SessionFileParser.WORD);
	        this.state = 33;
	        this.match(SessionFileParser.T__0);
	        this.state = 34;
	        _la = this._input.LA(1);
	        if(!(_la===13 || _la===14)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 35;
	        this.match(SessionFileParser.T__1);
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



	section() {
	    let localctx = new SectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SessionFileParser.RULE_section);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(SessionFileParser.WORD);
	        this.state = 38;
	        this.match(SessionFileParser.T__2);
	        this.state = 39;
	        this.sectionContents();
	        this.state = 40;
	        this.match(SessionFileParser.T__3);
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 41;
	            this.note();
	        }

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



	sectionContents() {
	    let localctx = new SectionContentsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SessionFileParser.RULE_sectionContents);
	    var _la = 0;
	    try {
	        this.state = 55;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 44;
	            this.workloads();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 48;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===14) {
	                this.state = 45;
	                this.workloads();
	                this.state = 46;
	                this.match(SessionFileParser.T__4);
	            }

	            this.state = 50;
	            this.structure();
	            this.state = 53;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5) {
	                this.state = 51;
	                this.match(SessionFileParser.T__4);
	                this.state = 52;
	                this.workloads();
	            }

	            break;

	        }
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



	structure() {
	    let localctx = new StructureContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SessionFileParser.RULE_structure);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(SessionFileParser.NUM);
	        this.state = 58;
	        this.match(SessionFileParser.T__5);
	        this.state = 59;
	        this.match(SessionFileParser.T__2);
	        this.state = 60;
	        this.workloads();
	        this.state = 61;
	        this.match(SessionFileParser.T__3);
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



	workloads() {
	    let localctx = new WorkloadsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SessionFileParser.RULE_workloads);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.workload();
	        this.state = 68;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 64;
	                this.match(SessionFileParser.T__4);
	                this.state = 65;
	                this.workload(); 
	            }
	            this.state = 70;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
	        }

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



	note() {
	    let localctx = new NoteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SessionFileParser.RULE_note);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(SessionFileParser.NOTES);
	        this.state = 72;
	        this.match(SessionFileParser.WORD);
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



	workload() {
	    let localctx = new WorkloadContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SessionFileParser.RULE_workload);
	    try {
	        this.state = 83;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 74;
	            this.match(SessionFileParser.WORD);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 75;
	            this.match(SessionFileParser.WORD);
	            this.state = 76;
	            this.lt();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 77;
	            this.match(SessionFileParser.WORD);
	            this.state = 78;
	            this.gt();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 79;
	            this.match(SessionFileParser.WORD);
	            this.state = 80;
	            this.between();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 81;
	            this.match(SessionFileParser.WORD);
	            this.state = 82;
	            this.match(SessionFileParser.WORD);
	            break;

	        }
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



	lt() {
	    let localctx = new LtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, SessionFileParser.RULE_lt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this.match(SessionFileParser.LT);
	        this.state = 86;
	        this.match(SessionFileParser.WORD);
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



	gt() {
	    let localctx = new GtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, SessionFileParser.RULE_gt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.match(SessionFileParser.GT);
	        this.state = 89;
	        this.match(SessionFileParser.WORD);
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



	between() {
	    let localctx = new BetweenContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, SessionFileParser.RULE_between);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.match(SessionFileParser.WORD);
	        this.state = 92;
	        this.match(SessionFileParser.BW);
	        this.state = 93;
	        this.match(SessionFileParser.WORD);
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

SessionFileParser.EOF = antlr4.Token.EOF;
SessionFileParser.T__0 = 1;
SessionFileParser.T__1 = 2;
SessionFileParser.T__2 = 3;
SessionFileParser.T__3 = 4;
SessionFileParser.T__4 = 5;
SessionFileParser.T__5 = 6;
SessionFileParser.LT = 7;
SessionFileParser.GT = 8;
SessionFileParser.BW = 9;
SessionFileParser.IMPORT = 10;
SessionFileParser.LOAD = 11;
SessionFileParser.NOTES = 12;
SessionFileParser.NUM = 13;
SessionFileParser.WORD = 14;
SessionFileParser.SPORT = 15;
SessionFileParser.IMPORTED = 16;
SessionFileParser.LINE_COMMENT = 17;
SessionFileParser.WS = 18;

SessionFileParser.RULE_file = 0;
SessionFileParser.RULE_metaData = 1;
SessionFileParser.RULE_section = 2;
SessionFileParser.RULE_sectionContents = 3;
SessionFileParser.RULE_structure = 4;
SessionFileParser.RULE_workloads = 5;
SessionFileParser.RULE_note = 6;
SessionFileParser.RULE_workload = 7;
SessionFileParser.RULE_lt = 8;
SessionFileParser.RULE_gt = 9;
SessionFileParser.RULE_between = 10;

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
        this.ruleIndex = SessionFileParser.RULE_file;
    }

	metaData = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MetaDataContext);
	    } else {
	        return this.getTypedRuleContext(MetaDataContext,i);
	    }
	};

	section = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SectionContext);
	    } else {
	        return this.getTypedRuleContext(SectionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SessionFileListener ) {
	        listener.enterFile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SessionFileListener ) {
	        listener.exitFile(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SessionFileVisitor ) {
	        return visitor.visitFile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MetaDataContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SessionFileParser.RULE_metaData;
    }

	WORD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SessionFileParser.WORD);
	    } else {
	        return this.getToken(SessionFileParser.WORD, i);
	    }
	};


	NUM() {
	    return this.getToken(SessionFileParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SessionFileListener ) {
	        listener.enterMetaData(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SessionFileListener ) {
	        listener.exitMetaData(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SessionFileVisitor ) {
	        return visitor.visitMetaData(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SessionFileParser.RULE_section;
    }

	WORD() {
	    return this.getToken(SessionFileParser.WORD, 0);
	};

	sectionContents() {
	    return this.getTypedRuleContext(SectionContentsContext,0);
	};

	note() {
	    return this.getTypedRuleContext(NoteContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SessionFileListener ) {
	        listener.enterSection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SessionFileListener ) {
	        listener.exitSection(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SessionFileVisitor ) {
	        return visitor.visitSection(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SectionContentsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SessionFileParser.RULE_sectionContents;
    }

	workloads = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WorkloadsContext);
	    } else {
	        return this.getTypedRuleContext(WorkloadsContext,i);
	    }
	};

	structure() {
	    return this.getTypedRuleContext(StructureContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SessionFileListener ) {
	        listener.enterSectionContents(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SessionFileListener ) {
	        listener.exitSectionContents(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SessionFileVisitor ) {
	        return visitor.visitSectionContents(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StructureContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SessionFileParser.RULE_structure;
    }

	NUM() {
	    return this.getToken(SessionFileParser.NUM, 0);
	};

	workloads() {
	    return this.getTypedRuleContext(WorkloadsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SessionFileListener ) {
	        listener.enterStructure(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SessionFileListener ) {
	        listener.exitStructure(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SessionFileVisitor ) {
	        return visitor.visitStructure(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WorkloadsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SessionFileParser.RULE_workloads;
    }

	workload = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WorkloadContext);
	    } else {
	        return this.getTypedRuleContext(WorkloadContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SessionFileListener ) {
	        listener.enterWorkloads(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SessionFileListener ) {
	        listener.exitWorkloads(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SessionFileVisitor ) {
	        return visitor.visitWorkloads(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NoteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SessionFileParser.RULE_note;
    }

	NOTES() {
	    return this.getToken(SessionFileParser.NOTES, 0);
	};

	WORD() {
	    return this.getToken(SessionFileParser.WORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SessionFileListener ) {
	        listener.enterNote(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SessionFileListener ) {
	        listener.exitNote(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SessionFileVisitor ) {
	        return visitor.visitNote(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WorkloadContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SessionFileParser.RULE_workload;
    }

	WORD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SessionFileParser.WORD);
	    } else {
	        return this.getToken(SessionFileParser.WORD, i);
	    }
	};


	lt() {
	    return this.getTypedRuleContext(LtContext,0);
	};

	gt() {
	    return this.getTypedRuleContext(GtContext,0);
	};

	between() {
	    return this.getTypedRuleContext(BetweenContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SessionFileListener ) {
	        listener.enterWorkload(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SessionFileListener ) {
	        listener.exitWorkload(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SessionFileVisitor ) {
	        return visitor.visitWorkload(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SessionFileParser.RULE_lt;
    }

	LT() {
	    return this.getToken(SessionFileParser.LT, 0);
	};

	WORD() {
	    return this.getToken(SessionFileParser.WORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SessionFileListener ) {
	        listener.enterLt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SessionFileListener ) {
	        listener.exitLt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SessionFileVisitor ) {
	        return visitor.visitLt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class GtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SessionFileParser.RULE_gt;
    }

	GT() {
	    return this.getToken(SessionFileParser.GT, 0);
	};

	WORD() {
	    return this.getToken(SessionFileParser.WORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SessionFileListener ) {
	        listener.enterGt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SessionFileListener ) {
	        listener.exitGt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SessionFileVisitor ) {
	        return visitor.visitGt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BetweenContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SessionFileParser.RULE_between;
    }

	WORD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SessionFileParser.WORD);
	    } else {
	        return this.getToken(SessionFileParser.WORD, i);
	    }
	};


	BW() {
	    return this.getToken(SessionFileParser.BW, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SessionFileListener ) {
	        listener.enterBetween(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SessionFileListener ) {
	        listener.exitBetween(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SessionFileVisitor ) {
	        return visitor.visitBetween(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




SessionFileParser.FileContext = FileContext; 
SessionFileParser.MetaDataContext = MetaDataContext; 
SessionFileParser.SectionContext = SectionContext; 
SessionFileParser.SectionContentsContext = SectionContentsContext; 
SessionFileParser.StructureContext = StructureContext; 
SessionFileParser.WorkloadsContext = WorkloadsContext; 
SessionFileParser.NoteContext = NoteContext; 
SessionFileParser.WorkloadContext = WorkloadContext; 
SessionFileParser.LtContext = LtContext; 
SessionFileParser.GtContext = GtContext; 
SessionFileParser.BetweenContext = BetweenContext; 
