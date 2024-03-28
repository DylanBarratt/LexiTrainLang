// Generated from ./SessionFile.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import SessionFileListener from './SessionFileListener.js';
import SessionFileVisitor from './SessionFileVisitor.js';

const serializedATN = [4,1,18,85,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,4,0,20,8,0,11,0,12,0,21,1,0,4,0,25,8,
0,11,0,12,0,26,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,
2,43,8,2,1,2,1,2,1,3,1,3,1,3,5,3,50,8,3,10,3,12,3,53,9,3,1,4,1,4,1,4,3,4,
58,8,4,1,4,1,4,3,4,62,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,73,8,5,
1,6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,
0,1,1,0,13,14,85,0,19,1,0,0,0,2,28,1,0,0,0,4,33,1,0,0,0,6,46,1,0,0,0,8,54,
1,0,0,0,10,72,1,0,0,0,12,74,1,0,0,0,14,77,1,0,0,0,16,80,1,0,0,0,18,20,3,
2,1,0,19,18,1,0,0,0,20,21,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,24,1,0,
0,0,23,25,3,4,2,0,24,23,1,0,0,0,25,26,1,0,0,0,26,24,1,0,0,0,26,27,1,0,0,
0,27,1,1,0,0,0,28,29,5,14,0,0,29,30,5,1,0,0,30,31,7,0,0,0,31,32,5,2,0,0,
32,3,1,0,0,0,33,34,5,14,0,0,34,42,5,3,0,0,35,43,3,6,3,0,36,37,5,13,0,0,37,
38,5,4,0,0,38,39,5,3,0,0,39,40,3,6,3,0,40,41,5,5,0,0,41,43,1,0,0,0,42,35,
1,0,0,0,42,36,1,0,0,0,43,44,1,0,0,0,44,45,5,5,0,0,45,5,1,0,0,0,46,51,3,8,
4,0,47,48,5,6,0,0,48,50,3,8,4,0,49,47,1,0,0,0,50,53,1,0,0,0,51,49,1,0,0,
0,51,52,1,0,0,0,52,7,1,0,0,0,53,51,1,0,0,0,54,57,3,10,5,0,55,56,5,11,0,0,
56,58,5,13,0,0,57,55,1,0,0,0,57,58,1,0,0,0,58,61,1,0,0,0,59,60,5,12,0,0,
60,62,5,14,0,0,61,59,1,0,0,0,61,62,1,0,0,0,62,9,1,0,0,0,63,73,5,14,0,0,64,
65,5,14,0,0,65,73,3,12,6,0,66,67,5,14,0,0,67,73,3,14,7,0,68,69,5,14,0,0,
69,73,3,16,8,0,70,71,5,14,0,0,71,73,5,14,0,0,72,63,1,0,0,0,72,64,1,0,0,0,
72,66,1,0,0,0,72,68,1,0,0,0,72,70,1,0,0,0,73,11,1,0,0,0,74,75,5,7,0,0,75,
76,5,14,0,0,76,13,1,0,0,0,77,78,5,8,0,0,78,79,5,14,0,0,79,15,1,0,0,0,80,
81,5,14,0,0,81,82,5,9,0,0,82,83,5,14,0,0,83,17,1,0,0,0,7,21,26,42,51,57,
61,72];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SessionFileParser extends antlr4.Parser {

    static grammarFileName = "SessionFile.g4";
    static literalNames = [ null, "':'", "'.'", "'{'", "'*'", "'}'", "'&&'", 
                            "'<'", "'>'", "'-'", "'import'", "'load='", 
                            "'note='" ];
    static symbolicNames = [ null, null, null, null, null, null, null, "LT", 
                             "GT", "BW", "IMPORT", "LOAD", "NOTES", "NUM", 
                             "WORD", "SPORT", "IMPORTED", "LINE_COMMENT", 
                             "WS" ];
    static ruleNames = [ "file", "metaData", "section", "workloads", "workloadL", 
                         "workload", "lt", "gt", "between" ];

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
	        this.state = 19; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 18;
	        		this.metaData();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 21; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,0, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 24; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 23;
	            this.section();
	            this.state = 26; 
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
	        this.state = 28;
	        this.match(SessionFileParser.WORD);
	        this.state = 29;
	        this.match(SessionFileParser.T__0);
	        this.state = 30;
	        _la = this._input.LA(1);
	        if(!(_la===13 || _la===14)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 31;
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(SessionFileParser.WORD);
	        this.state = 34;
	        this.match(SessionFileParser.T__2);
	        this.state = 42;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.state = 35;
	            this.workloads();
	            break;
	        case 13:
	            this.state = 36;
	            this.match(SessionFileParser.NUM);
	            this.state = 37;
	            this.match(SessionFileParser.T__3);
	            this.state = 38;
	            this.match(SessionFileParser.T__2);
	            this.state = 39;
	            this.workloads();
	            this.state = 40;
	            this.match(SessionFileParser.T__4);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 44;
	        this.match(SessionFileParser.T__4);
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
	    this.enterRule(localctx, 6, SessionFileParser.RULE_workloads);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.workloadL();
	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 47;
	            this.match(SessionFileParser.T__5);
	            this.state = 48;
	            this.workloadL();
	            this.state = 53;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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



	workloadL() {
	    let localctx = new WorkloadLContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SessionFileParser.RULE_workloadL);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.workload();
	        this.state = 57;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 55;
	            this.match(SessionFileParser.LOAD);
	            this.state = 56;
	            this.match(SessionFileParser.NUM);
	        }

	        this.state = 61;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 59;
	            this.match(SessionFileParser.NOTES);
	            this.state = 60;
	            this.match(SessionFileParser.WORD);
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



	workload() {
	    let localctx = new WorkloadContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SessionFileParser.RULE_workload);
	    try {
	        this.state = 72;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 63;
	            this.match(SessionFileParser.WORD);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 64;
	            this.match(SessionFileParser.WORD);
	            this.state = 65;
	            this.lt();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 66;
	            this.match(SessionFileParser.WORD);
	            this.state = 67;
	            this.gt();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 68;
	            this.match(SessionFileParser.WORD);
	            this.state = 69;
	            this.between();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 70;
	            this.match(SessionFileParser.WORD);
	            this.state = 71;
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
	    this.enterRule(localctx, 12, SessionFileParser.RULE_lt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.match(SessionFileParser.LT);
	        this.state = 75;
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
	    this.enterRule(localctx, 14, SessionFileParser.RULE_gt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this.match(SessionFileParser.GT);
	        this.state = 78;
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
	    this.enterRule(localctx, 16, SessionFileParser.RULE_between);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.match(SessionFileParser.WORD);
	        this.state = 81;
	        this.match(SessionFileParser.BW);
	        this.state = 82;
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
SessionFileParser.RULE_workloads = 3;
SessionFileParser.RULE_workloadL = 4;
SessionFileParser.RULE_workload = 5;
SessionFileParser.RULE_lt = 6;
SessionFileParser.RULE_gt = 7;
SessionFileParser.RULE_between = 8;

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

	workloads() {
	    return this.getTypedRuleContext(WorkloadsContext,0);
	};

	NUM() {
	    return this.getToken(SessionFileParser.NUM, 0);
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

	workloadL = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WorkloadLContext);
	    } else {
	        return this.getTypedRuleContext(WorkloadLContext,i);
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



class WorkloadLContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SessionFileParser.RULE_workloadL;
    }

	workload() {
	    return this.getTypedRuleContext(WorkloadContext,0);
	};

	LOAD() {
	    return this.getToken(SessionFileParser.LOAD, 0);
	};

	NUM() {
	    return this.getToken(SessionFileParser.NUM, 0);
	};

	NOTES() {
	    return this.getToken(SessionFileParser.NOTES, 0);
	};

	WORD() {
	    return this.getToken(SessionFileParser.WORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SessionFileListener ) {
	        listener.enterWorkloadL(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SessionFileListener ) {
	        listener.exitWorkloadL(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SessionFileVisitor ) {
	        return visitor.visitWorkloadL(this);
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
SessionFileParser.WorkloadsContext = WorkloadsContext; 
SessionFileParser.WorkloadLContext = WorkloadLContext; 
SessionFileParser.WorkloadContext = WorkloadContext; 
SessionFileParser.LtContext = LtContext; 
SessionFileParser.GtContext = GtContext; 
SessionFileParser.BetweenContext = BetweenContext; 
