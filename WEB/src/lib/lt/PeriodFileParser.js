// Generated from ./PeriodFile.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import PeriodFileListener from './PeriodFileListener.js';
import PeriodFileVisitor from './PeriodFileVisitor.js';

const serializedATN = [4,1,19,188,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,1,
0,1,0,5,0,43,8,0,10,0,12,0,46,9,0,1,0,1,0,1,0,1,1,5,1,52,8,1,10,1,12,1,55,
9,1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,4,4,67,8,4,11,4,12,4,68,1,5,
1,5,1,5,1,5,1,5,5,5,76,8,5,10,5,12,5,79,9,5,1,5,3,5,82,8,5,1,5,1,5,1,6,1,
6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,96,8,6,1,7,1,7,1,7,5,7,101,8,7,10,
7,12,7,104,9,7,1,7,3,7,107,8,7,1,8,1,8,1,8,1,8,3,8,113,8,8,1,9,1,9,1,9,1,
10,1,10,1,10,1,11,1,11,1,12,1,12,1,12,4,12,126,8,12,11,12,12,12,127,1,12,
1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,141,8,13,1,13,1,13,
1,14,1,14,1,14,5,14,148,8,14,10,14,12,14,151,9,14,1,14,3,14,154,8,14,1,15,
3,15,157,8,15,1,15,1,15,3,15,161,8,15,1,15,1,15,3,15,165,8,15,1,16,1,16,
1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,176,8,16,1,17,1,17,1,17,1,18,1,18,
1,18,1,19,1,19,1,19,1,19,1,19,0,0,20,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
28,30,32,34,36,38,0,1,1,0,16,17,190,0,40,1,0,0,0,2,53,1,0,0,0,4,56,1,0,0,
0,6,61,1,0,0,0,8,66,1,0,0,0,10,70,1,0,0,0,12,95,1,0,0,0,14,97,1,0,0,0,16,
112,1,0,0,0,18,114,1,0,0,0,20,117,1,0,0,0,22,120,1,0,0,0,24,122,1,0,0,0,
26,131,1,0,0,0,28,144,1,0,0,0,30,156,1,0,0,0,32,175,1,0,0,0,34,177,1,0,0,
0,36,180,1,0,0,0,38,183,1,0,0,0,40,44,3,2,1,0,41,43,3,6,3,0,42,41,1,0,0,
0,43,46,1,0,0,0,44,42,1,0,0,0,44,45,1,0,0,0,45,47,1,0,0,0,46,44,1,0,0,0,
47,48,3,8,4,0,48,49,5,0,0,1,49,1,1,0,0,0,50,52,3,4,2,0,51,50,1,0,0,0,52,
55,1,0,0,0,53,51,1,0,0,0,53,54,1,0,0,0,54,3,1,0,0,0,55,53,1,0,0,0,56,57,
5,17,0,0,57,58,5,1,0,0,58,59,7,0,0,0,59,60,5,2,0,0,60,5,1,0,0,0,61,62,5,
11,0,0,62,63,5,17,0,0,63,64,5,2,0,0,64,7,1,0,0,0,65,67,3,10,5,0,66,65,1,
0,0,0,67,68,1,0,0,0,68,66,1,0,0,0,68,69,1,0,0,0,69,9,1,0,0,0,70,71,5,17,
0,0,71,72,5,3,0,0,72,77,3,12,6,0,73,74,5,4,0,0,74,76,3,12,6,0,75,73,1,0,
0,0,76,79,1,0,0,0,77,75,1,0,0,0,77,78,1,0,0,0,78,81,1,0,0,0,79,77,1,0,0,
0,80,82,5,4,0,0,81,80,1,0,0,0,81,82,1,0,0,0,82,83,1,0,0,0,83,84,5,5,0,0,
84,11,1,0,0,0,85,86,5,17,0,0,86,87,5,1,0,0,87,96,3,14,7,0,88,89,5,16,0,0,
89,90,5,6,0,0,90,91,5,3,0,0,91,92,3,14,7,0,92,93,5,5,0,0,93,96,1,0,0,0,94,
96,3,14,7,0,95,85,1,0,0,0,95,88,1,0,0,0,95,94,1,0,0,0,96,13,1,0,0,0,97,102,
3,16,8,0,98,99,5,7,0,0,99,101,3,16,8,0,100,98,1,0,0,0,101,104,1,0,0,0,102,
100,1,0,0,0,102,103,1,0,0,0,103,106,1,0,0,0,104,102,1,0,0,0,105,107,5,7,
0,0,106,105,1,0,0,0,106,107,1,0,0,0,107,15,1,0,0,0,108,113,3,22,11,0,109,
113,3,20,10,0,110,113,3,24,12,0,111,113,3,18,9,0,112,108,1,0,0,0,112,109,
1,0,0,0,112,110,1,0,0,0,112,111,1,0,0,0,113,17,1,0,0,0,114,115,5,13,0,0,
115,116,5,17,0,0,116,19,1,0,0,0,117,118,5,14,0,0,118,119,3,30,15,0,119,21,
1,0,0,0,120,121,5,15,0,0,121,23,1,0,0,0,122,123,5,3,0,0,123,125,5,14,0,0,
124,126,3,26,13,0,125,124,1,0,0,0,126,127,1,0,0,0,127,125,1,0,0,0,127,128,
1,0,0,0,128,129,1,0,0,0,129,130,5,5,0,0,130,25,1,0,0,0,131,132,5,17,0,0,
132,140,5,3,0,0,133,141,3,28,14,0,134,135,5,16,0,0,135,136,5,6,0,0,136,137,
5,3,0,0,137,138,3,28,14,0,138,139,5,5,0,0,139,141,1,0,0,0,140,133,1,0,0,
0,140,134,1,0,0,0,141,142,1,0,0,0,142,143,5,5,0,0,143,27,1,0,0,0,144,149,
3,30,15,0,145,146,5,7,0,0,146,148,3,30,15,0,147,145,1,0,0,0,148,151,1,0,
0,0,149,147,1,0,0,0,149,150,1,0,0,0,150,153,1,0,0,0,151,149,1,0,0,0,152,
154,5,7,0,0,153,152,1,0,0,0,153,154,1,0,0,0,154,29,1,0,0,0,155,157,3,32,
16,0,156,155,1,0,0,0,156,157,1,0,0,0,157,160,1,0,0,0,158,159,5,12,0,0,159,
161,5,16,0,0,160,158,1,0,0,0,160,161,1,0,0,0,161,164,1,0,0,0,162,163,5,13,
0,0,163,165,5,17,0,0,164,162,1,0,0,0,164,165,1,0,0,0,165,31,1,0,0,0,166,
176,5,17,0,0,167,168,5,17,0,0,168,176,3,34,17,0,169,170,5,17,0,0,170,176,
3,36,18,0,171,172,5,17,0,0,172,176,3,38,19,0,173,174,5,17,0,0,174,176,5,
17,0,0,175,166,1,0,0,0,175,167,1,0,0,0,175,169,1,0,0,0,175,171,1,0,0,0,175,
173,1,0,0,0,176,33,1,0,0,0,177,178,5,8,0,0,178,179,5,17,0,0,179,35,1,0,0,
0,180,181,5,9,0,0,181,182,5,17,0,0,182,37,1,0,0,0,183,184,5,17,0,0,184,185,
5,10,0,0,185,186,5,17,0,0,186,39,1,0,0,0,17,44,53,68,77,81,95,102,106,112,
127,140,149,153,156,160,164,175];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class PeriodFileParser extends antlr4.Parser {

    static grammarFileName = "PeriodFile.g4";
    static literalNames = [ null, "':'", "'.'", "'{'", "','", "'}'", "'*'", 
                            "'&&'", "'<'", "'>'", "'-'", "'import'", "'load='", 
                            "'note='" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             "LT", "GT", "BW", "IMPORT", "LOAD", "NOTES", 
                             "SPORT", "IMPORTED", "NUM", "WORD", "LINE_COMMENT", 
                             "WS" ];
    static ruleNames = [ "file", "metaDatas", "metaData", "sessionImport", 
                         "periods", "period", "day", "dayLoop", "dayData", 
                         "dayNotes", "workout", "imported", "session", "sessionSection", 
                         "workloads", "workloadL", "workload", "lt", "gt", 
                         "between" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = PeriodFileParser.ruleNames;
        this.literalNames = PeriodFileParser.literalNames;
        this.symbolicNames = PeriodFileParser.symbolicNames;
    }



	file() {
	    let localctx = new FileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, PeriodFileParser.RULE_file);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.metaDatas();
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===11) {
	            this.state = 41;
	            this.sessionImport();
	            this.state = 46;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 47;
	        this.periods();
	        this.state = 48;
	        this.match(PeriodFileParser.EOF);
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



	metaDatas() {
	    let localctx = new MetaDatasContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, PeriodFileParser.RULE_metaDatas);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 50;
	                this.metaData(); 
	            }
	            this.state = 55;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
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



	metaData() {
	    let localctx = new MetaDataContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, PeriodFileParser.RULE_metaData);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.match(PeriodFileParser.WORD);
	        this.state = 57;
	        this.match(PeriodFileParser.T__0);
	        this.state = 58;
	        _la = this._input.LA(1);
	        if(!(_la===16 || _la===17)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 59;
	        this.match(PeriodFileParser.T__1);
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



	sessionImport() {
	    let localctx = new SessionImportContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, PeriodFileParser.RULE_sessionImport);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(PeriodFileParser.IMPORT);
	        this.state = 62;
	        this.match(PeriodFileParser.WORD);
	        this.state = 63;
	        this.match(PeriodFileParser.T__1);
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



	periods() {
	    let localctx = new PeriodsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, PeriodFileParser.RULE_periods);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 65;
	            this.period();
	            this.state = 68; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===17);
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



	period() {
	    let localctx = new PeriodContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, PeriodFileParser.RULE_period);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this.match(PeriodFileParser.WORD);
	        this.state = 71;
	        this.match(PeriodFileParser.T__2);
	        this.state = 72;
	        this.day();
	        this.state = 77;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 73;
	                this.match(PeriodFileParser.T__3);
	                this.state = 74;
	                this.day(); 
	            }
	            this.state = 79;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	        this.state = 81;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 80;
	            this.match(PeriodFileParser.T__3);
	        }

	        this.state = 83;
	        this.match(PeriodFileParser.T__4);
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



	day() {
	    let localctx = new DayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, PeriodFileParser.RULE_day);
	    try {
	        this.state = 95;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 85;
	            this.match(PeriodFileParser.WORD);
	            this.state = 86;
	            this.match(PeriodFileParser.T__0);
	            this.state = 87;
	            this.dayLoop();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 88;
	            this.match(PeriodFileParser.NUM);
	            this.state = 89;
	            this.match(PeriodFileParser.T__5);
	            this.state = 90;
	            this.match(PeriodFileParser.T__2);
	            this.state = 91;
	            this.dayLoop();
	            this.state = 92;
	            this.match(PeriodFileParser.T__4);
	            break;
	        case 3:
	        case 13:
	        case 14:
	        case 15:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 94;
	            this.dayLoop();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	dayLoop() {
	    let localctx = new DayLoopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, PeriodFileParser.RULE_dayLoop);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.dayData();
	        this.state = 102;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 98;
	                this.match(PeriodFileParser.T__6);
	                this.state = 99;
	                this.dayData(); 
	            }
	            this.state = 104;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
	        }

	        this.state = 106;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 105;
	            this.match(PeriodFileParser.T__6);
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



	dayData() {
	    let localctx = new DayDataContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, PeriodFileParser.RULE_dayData);
	    try {
	        this.state = 112;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 108;
	            this.imported();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 109;
	            this.workout();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 110;
	            this.session();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 111;
	            this.dayNotes();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	dayNotes() {
	    let localctx = new DayNotesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, PeriodFileParser.RULE_dayNotes);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.match(PeriodFileParser.NOTES);
	        this.state = 115;
	        this.match(PeriodFileParser.WORD);
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



	workout() {
	    let localctx = new WorkoutContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, PeriodFileParser.RULE_workout);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        this.match(PeriodFileParser.SPORT);
	        this.state = 118;
	        this.workloadL();
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



	imported() {
	    let localctx = new ImportedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, PeriodFileParser.RULE_imported);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.match(PeriodFileParser.IMPORTED);
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



	session() {
	    let localctx = new SessionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, PeriodFileParser.RULE_session);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(PeriodFileParser.T__2);
	        this.state = 123;
	        this.match(PeriodFileParser.SPORT);
	        this.state = 125; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 124;
	            this.sessionSection();
	            this.state = 127; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===17);
	        this.state = 129;
	        this.match(PeriodFileParser.T__4);
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



	sessionSection() {
	    let localctx = new SessionSectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, PeriodFileParser.RULE_sessionSection);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131;
	        this.match(PeriodFileParser.WORD);
	        this.state = 132;
	        this.match(PeriodFileParser.T__2);
	        this.state = 140;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	        case 7:
	        case 12:
	        case 13:
	        case 17:
	            this.state = 133;
	            this.workloads();
	            break;
	        case 16:
	            this.state = 134;
	            this.match(PeriodFileParser.NUM);
	            this.state = 135;
	            this.match(PeriodFileParser.T__5);
	            this.state = 136;
	            this.match(PeriodFileParser.T__2);
	            this.state = 137;
	            this.workloads();
	            this.state = 138;
	            this.match(PeriodFileParser.T__4);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 142;
	        this.match(PeriodFileParser.T__4);
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
	    this.enterRule(localctx, 28, PeriodFileParser.RULE_workloads);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        this.workloadL();
	        this.state = 149;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 145;
	                this.match(PeriodFileParser.T__6);
	                this.state = 146;
	                this.workloadL(); 
	            }
	            this.state = 151;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
	        }

	        this.state = 153;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 152;
	            this.match(PeriodFileParser.T__6);
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
	    this.enterRule(localctx, 30, PeriodFileParser.RULE_workloadL);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 155;
	            this.workload();
	        }

	        this.state = 160;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 158;
	            this.match(PeriodFileParser.LOAD);
	            this.state = 159;
	            this.match(PeriodFileParser.NUM);
	        }

	        this.state = 164;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 162;
	            this.match(PeriodFileParser.NOTES);
	            this.state = 163;
	            this.match(PeriodFileParser.WORD);
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
	    this.enterRule(localctx, 32, PeriodFileParser.RULE_workload);
	    try {
	        this.state = 175;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 166;
	            this.match(PeriodFileParser.WORD);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 167;
	            this.match(PeriodFileParser.WORD);
	            this.state = 168;
	            this.lt();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 169;
	            this.match(PeriodFileParser.WORD);
	            this.state = 170;
	            this.gt();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 171;
	            this.match(PeriodFileParser.WORD);
	            this.state = 172;
	            this.between();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 173;
	            this.match(PeriodFileParser.WORD);
	            this.state = 174;
	            this.match(PeriodFileParser.WORD);
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
	    this.enterRule(localctx, 34, PeriodFileParser.RULE_lt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 177;
	        this.match(PeriodFileParser.LT);
	        this.state = 178;
	        this.match(PeriodFileParser.WORD);
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
	    this.enterRule(localctx, 36, PeriodFileParser.RULE_gt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 180;
	        this.match(PeriodFileParser.GT);
	        this.state = 181;
	        this.match(PeriodFileParser.WORD);
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
	    this.enterRule(localctx, 38, PeriodFileParser.RULE_between);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 183;
	        this.match(PeriodFileParser.WORD);
	        this.state = 184;
	        this.match(PeriodFileParser.BW);
	        this.state = 185;
	        this.match(PeriodFileParser.WORD);
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

PeriodFileParser.EOF = antlr4.Token.EOF;
PeriodFileParser.T__0 = 1;
PeriodFileParser.T__1 = 2;
PeriodFileParser.T__2 = 3;
PeriodFileParser.T__3 = 4;
PeriodFileParser.T__4 = 5;
PeriodFileParser.T__5 = 6;
PeriodFileParser.T__6 = 7;
PeriodFileParser.LT = 8;
PeriodFileParser.GT = 9;
PeriodFileParser.BW = 10;
PeriodFileParser.IMPORT = 11;
PeriodFileParser.LOAD = 12;
PeriodFileParser.NOTES = 13;
PeriodFileParser.SPORT = 14;
PeriodFileParser.IMPORTED = 15;
PeriodFileParser.NUM = 16;
PeriodFileParser.WORD = 17;
PeriodFileParser.LINE_COMMENT = 18;
PeriodFileParser.WS = 19;

PeriodFileParser.RULE_file = 0;
PeriodFileParser.RULE_metaDatas = 1;
PeriodFileParser.RULE_metaData = 2;
PeriodFileParser.RULE_sessionImport = 3;
PeriodFileParser.RULE_periods = 4;
PeriodFileParser.RULE_period = 5;
PeriodFileParser.RULE_day = 6;
PeriodFileParser.RULE_dayLoop = 7;
PeriodFileParser.RULE_dayData = 8;
PeriodFileParser.RULE_dayNotes = 9;
PeriodFileParser.RULE_workout = 10;
PeriodFileParser.RULE_imported = 11;
PeriodFileParser.RULE_session = 12;
PeriodFileParser.RULE_sessionSection = 13;
PeriodFileParser.RULE_workloads = 14;
PeriodFileParser.RULE_workloadL = 15;
PeriodFileParser.RULE_workload = 16;
PeriodFileParser.RULE_lt = 17;
PeriodFileParser.RULE_gt = 18;
PeriodFileParser.RULE_between = 19;

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
        this.ruleIndex = PeriodFileParser.RULE_file;
    }

	metaDatas() {
	    return this.getTypedRuleContext(MetaDatasContext,0);
	};

	periods() {
	    return this.getTypedRuleContext(PeriodsContext,0);
	};

	EOF() {
	    return this.getToken(PeriodFileParser.EOF, 0);
	};

	sessionImport = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SessionImportContext);
	    } else {
	        return this.getTypedRuleContext(SessionImportContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.enterFile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.exitFile(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PeriodFileVisitor ) {
	        return visitor.visitFile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MetaDatasContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeriodFileParser.RULE_metaDatas;
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

	enterRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.enterMetaDatas(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.exitMetaDatas(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PeriodFileVisitor ) {
	        return visitor.visitMetaDatas(this);
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
        this.ruleIndex = PeriodFileParser.RULE_metaData;
    }

	WORD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PeriodFileParser.WORD);
	    } else {
	        return this.getToken(PeriodFileParser.WORD, i);
	    }
	};


	NUM() {
	    return this.getToken(PeriodFileParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.enterMetaData(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.exitMetaData(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PeriodFileVisitor ) {
	        return visitor.visitMetaData(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SessionImportContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeriodFileParser.RULE_sessionImport;
    }

	IMPORT() {
	    return this.getToken(PeriodFileParser.IMPORT, 0);
	};

	WORD() {
	    return this.getToken(PeriodFileParser.WORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.enterSessionImport(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.exitSessionImport(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PeriodFileVisitor ) {
	        return visitor.visitSessionImport(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PeriodsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeriodFileParser.RULE_periods;
    }

	period = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PeriodContext);
	    } else {
	        return this.getTypedRuleContext(PeriodContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.enterPeriods(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.exitPeriods(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PeriodFileVisitor ) {
	        return visitor.visitPeriods(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PeriodContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeriodFileParser.RULE_period;
    }

	WORD() {
	    return this.getToken(PeriodFileParser.WORD, 0);
	};

	day = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DayContext);
	    } else {
	        return this.getTypedRuleContext(DayContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.enterPeriod(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.exitPeriod(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PeriodFileVisitor ) {
	        return visitor.visitPeriod(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeriodFileParser.RULE_day;
    }

	WORD() {
	    return this.getToken(PeriodFileParser.WORD, 0);
	};

	dayLoop() {
	    return this.getTypedRuleContext(DayLoopContext,0);
	};

	NUM() {
	    return this.getToken(PeriodFileParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.enterDay(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.exitDay(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PeriodFileVisitor ) {
	        return visitor.visitDay(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DayLoopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeriodFileParser.RULE_dayLoop;
    }

	dayData = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DayDataContext);
	    } else {
	        return this.getTypedRuleContext(DayDataContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.enterDayLoop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.exitDayLoop(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PeriodFileVisitor ) {
	        return visitor.visitDayLoop(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DayDataContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeriodFileParser.RULE_dayData;
    }

	imported() {
	    return this.getTypedRuleContext(ImportedContext,0);
	};

	workout() {
	    return this.getTypedRuleContext(WorkoutContext,0);
	};

	session() {
	    return this.getTypedRuleContext(SessionContext,0);
	};

	dayNotes() {
	    return this.getTypedRuleContext(DayNotesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.enterDayData(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.exitDayData(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PeriodFileVisitor ) {
	        return visitor.visitDayData(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DayNotesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeriodFileParser.RULE_dayNotes;
    }

	NOTES() {
	    return this.getToken(PeriodFileParser.NOTES, 0);
	};

	WORD() {
	    return this.getToken(PeriodFileParser.WORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.enterDayNotes(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.exitDayNotes(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PeriodFileVisitor ) {
	        return visitor.visitDayNotes(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WorkoutContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeriodFileParser.RULE_workout;
    }

	SPORT() {
	    return this.getToken(PeriodFileParser.SPORT, 0);
	};

	workloadL() {
	    return this.getTypedRuleContext(WorkloadLContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.enterWorkout(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.exitWorkout(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PeriodFileVisitor ) {
	        return visitor.visitWorkout(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImportedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeriodFileParser.RULE_imported;
    }

	IMPORTED() {
	    return this.getToken(PeriodFileParser.IMPORTED, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.enterImported(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.exitImported(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PeriodFileVisitor ) {
	        return visitor.visitImported(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SessionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeriodFileParser.RULE_session;
    }

	SPORT() {
	    return this.getToken(PeriodFileParser.SPORT, 0);
	};

	sessionSection = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SessionSectionContext);
	    } else {
	        return this.getTypedRuleContext(SessionSectionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.enterSession(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.exitSession(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PeriodFileVisitor ) {
	        return visitor.visitSession(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SessionSectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeriodFileParser.RULE_sessionSection;
    }

	WORD() {
	    return this.getToken(PeriodFileParser.WORD, 0);
	};

	workloads() {
	    return this.getTypedRuleContext(WorkloadsContext,0);
	};

	NUM() {
	    return this.getToken(PeriodFileParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.enterSessionSection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.exitSessionSection(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PeriodFileVisitor ) {
	        return visitor.visitSessionSection(this);
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
        this.ruleIndex = PeriodFileParser.RULE_workloads;
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
	    if(listener instanceof PeriodFileListener ) {
	        listener.enterWorkloads(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.exitWorkloads(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PeriodFileVisitor ) {
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
        this.ruleIndex = PeriodFileParser.RULE_workloadL;
    }

	workload() {
	    return this.getTypedRuleContext(WorkloadContext,0);
	};

	LOAD() {
	    return this.getToken(PeriodFileParser.LOAD, 0);
	};

	NUM() {
	    return this.getToken(PeriodFileParser.NUM, 0);
	};

	NOTES() {
	    return this.getToken(PeriodFileParser.NOTES, 0);
	};

	WORD() {
	    return this.getToken(PeriodFileParser.WORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.enterWorkloadL(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.exitWorkloadL(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PeriodFileVisitor ) {
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
        this.ruleIndex = PeriodFileParser.RULE_workload;
    }

	WORD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PeriodFileParser.WORD);
	    } else {
	        return this.getToken(PeriodFileParser.WORD, i);
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
	    if(listener instanceof PeriodFileListener ) {
	        listener.enterWorkload(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.exitWorkload(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PeriodFileVisitor ) {
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
        this.ruleIndex = PeriodFileParser.RULE_lt;
    }

	LT() {
	    return this.getToken(PeriodFileParser.LT, 0);
	};

	WORD() {
	    return this.getToken(PeriodFileParser.WORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.enterLt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.exitLt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PeriodFileVisitor ) {
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
        this.ruleIndex = PeriodFileParser.RULE_gt;
    }

	GT() {
	    return this.getToken(PeriodFileParser.GT, 0);
	};

	WORD() {
	    return this.getToken(PeriodFileParser.WORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.enterGt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.exitGt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PeriodFileVisitor ) {
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
        this.ruleIndex = PeriodFileParser.RULE_between;
    }

	WORD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PeriodFileParser.WORD);
	    } else {
	        return this.getToken(PeriodFileParser.WORD, i);
	    }
	};


	BW() {
	    return this.getToken(PeriodFileParser.BW, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.enterBetween(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.exitBetween(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PeriodFileVisitor ) {
	        return visitor.visitBetween(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




PeriodFileParser.FileContext = FileContext; 
PeriodFileParser.MetaDatasContext = MetaDatasContext; 
PeriodFileParser.MetaDataContext = MetaDataContext; 
PeriodFileParser.SessionImportContext = SessionImportContext; 
PeriodFileParser.PeriodsContext = PeriodsContext; 
PeriodFileParser.PeriodContext = PeriodContext; 
PeriodFileParser.DayContext = DayContext; 
PeriodFileParser.DayLoopContext = DayLoopContext; 
PeriodFileParser.DayDataContext = DayDataContext; 
PeriodFileParser.DayNotesContext = DayNotesContext; 
PeriodFileParser.WorkoutContext = WorkoutContext; 
PeriodFileParser.ImportedContext = ImportedContext; 
PeriodFileParser.SessionContext = SessionContext; 
PeriodFileParser.SessionSectionContext = SessionSectionContext; 
PeriodFileParser.WorkloadsContext = WorkloadsContext; 
PeriodFileParser.WorkloadLContext = WorkloadLContext; 
PeriodFileParser.WorkloadContext = WorkloadContext; 
PeriodFileParser.LtContext = LtContext; 
PeriodFileParser.GtContext = GtContext; 
PeriodFileParser.BetweenContext = BetweenContext; 
