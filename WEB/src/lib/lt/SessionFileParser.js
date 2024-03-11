// Generated from ./SessionFile.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import SessionFileListener from './SessionFileListener.js';
const serializedATN = [4,1,15,58,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,4,0,12,8,0,11,0,12,0,13,1,0,4,0,17,8,0,11,0,12,0,18,1,1,1,1,1,1,1,1,
1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,35,8,2,1,2,1,2,1,3,1,3,1,3,5,
3,42,8,3,10,3,12,3,45,9,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,56,8,4,
1,4,0,0,5,0,2,4,6,8,0,0,58,0,11,1,0,0,0,2,20,1,0,0,0,4,25,1,0,0,0,6,38,1,
0,0,0,8,55,1,0,0,0,10,12,3,2,1,0,11,10,1,0,0,0,12,13,1,0,0,0,13,11,1,0,0,
0,13,14,1,0,0,0,14,16,1,0,0,0,15,17,3,4,2,0,16,15,1,0,0,0,17,18,1,0,0,0,
18,16,1,0,0,0,18,19,1,0,0,0,19,1,1,0,0,0,20,21,5,11,0,0,21,22,5,1,0,0,22,
23,5,11,0,0,23,24,5,2,0,0,24,3,1,0,0,0,25,26,5,11,0,0,26,34,5,3,0,0,27,35,
3,6,3,0,28,29,5,10,0,0,29,30,5,4,0,0,30,31,5,3,0,0,31,32,3,6,3,0,32,33,5,
5,0,0,33,35,1,0,0,0,34,27,1,0,0,0,34,28,1,0,0,0,35,36,1,0,0,0,36,37,5,5,
0,0,37,5,1,0,0,0,38,43,3,8,4,0,39,40,5,6,0,0,40,42,3,8,4,0,41,39,1,0,0,0,
42,45,1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,0,44,7,1,0,0,0,45,43,1,0,0,0,46,
47,5,11,0,0,47,48,5,8,0,0,48,56,5,11,0,0,49,50,5,11,0,0,50,51,5,11,0,0,51,
52,5,7,0,0,52,56,5,11,0,0,53,54,5,11,0,0,54,56,5,11,0,0,55,46,1,0,0,0,55,
49,1,0,0,0,55,53,1,0,0,0,56,9,1,0,0,0,5,13,18,34,43,55];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SessionFileParser extends antlr4.Parser {

    static grammarFileName = "SessionFile.g4";
    static literalNames = [ null, "':'", "'.'", "'{'", "'*'", "'}'", "'&&'", 
                            "'-'", "'<'", "'>'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             "LT", "GT", "NUM", "WORD", "LOAD", "SPORT", 
                             "LINE_COMMENT", "WS" ];
    static ruleNames = [ "file", "metaData", "section", "workloads", "workload" ];

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
	        this.state = 11; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 10;
	        		this.metaData();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 13; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,0, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 16; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 15;
	            this.section();
	            this.state = 18; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===11);
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.match(SessionFileParser.WORD);
	        this.state = 21;
	        this.match(SessionFileParser.T__0);
	        this.state = 22;
	        this.match(SessionFileParser.WORD);
	        this.state = 23;
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
	        this.state = 25;
	        this.match(SessionFileParser.WORD);
	        this.state = 26;
	        this.match(SessionFileParser.T__2);
	        this.state = 34;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	            this.state = 27;
	            this.workloads();
	            break;
	        case 10:
	            this.state = 28;
	            this.match(SessionFileParser.NUM);
	            this.state = 29;
	            this.match(SessionFileParser.T__3);
	            this.state = 30;
	            this.match(SessionFileParser.T__2);
	            this.state = 31;
	            this.workloads();
	            this.state = 32;
	            this.match(SessionFileParser.T__4);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 36;
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
	        this.state = 38;
	        this.workload();
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 39;
	            this.match(SessionFileParser.T__5);
	            this.state = 40;
	            this.workload();
	            this.state = 45;
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



	workload() {
	    let localctx = new WorkloadContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SessionFileParser.RULE_workload);
	    try {
	        this.state = 55;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 46;
	            this.match(SessionFileParser.WORD);
	            this.state = 47;
	            this.match(SessionFileParser.LT);
	            this.state = 48;
	            this.match(SessionFileParser.WORD);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 49;
	            this.match(SessionFileParser.WORD);
	            this.state = 50;
	            this.match(SessionFileParser.WORD);
	            this.state = 51;
	            this.match(SessionFileParser.T__6);
	            this.state = 52;
	            this.match(SessionFileParser.WORD);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 53;
	            this.match(SessionFileParser.WORD);
	            this.state = 54;
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


}

SessionFileParser.EOF = antlr4.Token.EOF;
SessionFileParser.T__0 = 1;
SessionFileParser.T__1 = 2;
SessionFileParser.T__2 = 3;
SessionFileParser.T__3 = 4;
SessionFileParser.T__4 = 5;
SessionFileParser.T__5 = 6;
SessionFileParser.T__6 = 7;
SessionFileParser.LT = 8;
SessionFileParser.GT = 9;
SessionFileParser.NUM = 10;
SessionFileParser.WORD = 11;
SessionFileParser.LOAD = 12;
SessionFileParser.SPORT = 13;
SessionFileParser.LINE_COMMENT = 14;
SessionFileParser.WS = 15;

SessionFileParser.RULE_file = 0;
SessionFileParser.RULE_metaData = 1;
SessionFileParser.RULE_section = 2;
SessionFileParser.RULE_workloads = 3;
SessionFileParser.RULE_workload = 4;

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


	LT() {
	    return this.getToken(SessionFileParser.LT, 0);
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


}




SessionFileParser.FileContext = FileContext; 
SessionFileParser.MetaDataContext = MetaDataContext; 
SessionFileParser.SectionContext = SectionContext; 
SessionFileParser.WorkloadsContext = WorkloadsContext; 
SessionFileParser.WorkloadContext = WorkloadContext; 
