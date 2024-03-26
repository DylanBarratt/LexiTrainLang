// Generated from ./PeriodFile.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import PeriodFileListener from './PeriodFileListener.js';
const serializedATN = [4,1,18,162,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,5,0,30,8,0,10,0,12,0,33,9,0,1,0,5,0,36,8,0,10,0,12,0,39,9,
0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,3,4,3,54,8,3,11,3,12,
3,55,1,4,1,4,1,4,1,4,1,4,5,4,63,8,4,10,4,12,4,66,9,4,1,4,1,4,1,5,1,5,1,5,
1,5,1,5,5,5,75,8,5,10,5,12,5,78,9,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
5,5,89,8,5,10,5,12,5,92,9,5,3,5,94,8,5,1,6,1,6,1,6,3,6,99,8,6,1,7,1,7,1,
8,1,8,1,8,5,8,106,8,8,10,8,12,8,109,9,8,1,9,1,9,5,9,113,8,9,10,9,12,9,116,
9,9,1,9,3,9,119,8,9,1,10,1,10,1,10,4,10,124,8,10,11,10,12,10,125,1,10,1,
10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,3,11,139,8,11,1,11,1,11,
1,12,1,12,1,12,5,12,146,8,12,10,12,12,12,149,9,12,1,13,1,13,1,13,1,13,1,
13,1,13,1,13,1,13,1,13,3,13,160,8,13,1,13,0,0,14,0,2,4,6,8,10,12,14,16,18,
20,22,24,26,0,1,1,0,9,10,165,0,31,1,0,0,0,2,43,1,0,0,0,4,48,1,0,0,0,6,53,
1,0,0,0,8,57,1,0,0,0,10,93,1,0,0,0,12,98,1,0,0,0,14,100,1,0,0,0,16,102,1,
0,0,0,18,110,1,0,0,0,20,120,1,0,0,0,22,129,1,0,0,0,24,142,1,0,0,0,26,159,
1,0,0,0,28,30,3,2,1,0,29,28,1,0,0,0,30,33,1,0,0,0,31,29,1,0,0,0,31,32,1,
0,0,0,32,37,1,0,0,0,33,31,1,0,0,0,34,36,3,4,2,0,35,34,1,0,0,0,36,39,1,0,
0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,40,1,0,0,0,39,37,1,0,0,0,40,41,3,6,3,
0,41,42,5,0,0,1,42,1,1,0,0,0,43,44,5,13,0,0,44,45,5,1,0,0,45,46,5,13,0,0,
46,47,5,2,0,0,47,3,1,0,0,0,48,49,5,11,0,0,49,50,5,13,0,0,50,51,5,2,0,0,51,
5,1,0,0,0,52,54,3,8,4,0,53,52,1,0,0,0,54,55,1,0,0,0,55,53,1,0,0,0,55,56,
1,0,0,0,56,7,1,0,0,0,57,58,5,13,0,0,58,59,5,3,0,0,59,64,3,10,5,0,60,61,5,
4,0,0,61,63,3,10,5,0,62,60,1,0,0,0,63,66,1,0,0,0,64,62,1,0,0,0,64,65,1,0,
0,0,65,67,1,0,0,0,66,64,1,0,0,0,67,68,5,5,0,0,68,9,1,0,0,0,69,70,5,13,0,
0,70,71,5,1,0,0,71,76,3,12,6,0,72,73,5,6,0,0,73,75,3,12,6,0,74,72,1,0,0,
0,75,78,1,0,0,0,76,74,1,0,0,0,76,77,1,0,0,0,77,94,1,0,0,0,78,76,1,0,0,0,
79,80,5,12,0,0,80,81,5,7,0,0,81,82,5,3,0,0,82,83,3,12,6,0,83,84,5,5,0,0,
84,94,1,0,0,0,85,90,3,12,6,0,86,87,5,6,0,0,87,89,3,12,6,0,88,86,1,0,0,0,
89,92,1,0,0,0,90,88,1,0,0,0,90,91,1,0,0,0,91,94,1,0,0,0,92,90,1,0,0,0,93,
69,1,0,0,0,93,79,1,0,0,0,93,85,1,0,0,0,94,11,1,0,0,0,95,99,3,14,7,0,96,99,
3,16,8,0,97,99,3,20,10,0,98,95,1,0,0,0,98,96,1,0,0,0,98,97,1,0,0,0,99,13,
1,0,0,0,100,101,5,16,0,0,101,15,1,0,0,0,102,107,3,18,9,0,103,104,5,6,0,0,
104,106,3,18,9,0,105,103,1,0,0,0,106,109,1,0,0,0,107,105,1,0,0,0,107,108,
1,0,0,0,108,17,1,0,0,0,109,107,1,0,0,0,110,114,5,15,0,0,111,113,5,13,0,0,
112,111,1,0,0,0,113,116,1,0,0,0,114,112,1,0,0,0,114,115,1,0,0,0,115,118,
1,0,0,0,116,114,1,0,0,0,117,119,5,14,0,0,118,117,1,0,0,0,118,119,1,0,0,0,
119,19,1,0,0,0,120,121,5,3,0,0,121,123,5,15,0,0,122,124,3,22,11,0,123,122,
1,0,0,0,124,125,1,0,0,0,125,123,1,0,0,0,125,126,1,0,0,0,126,127,1,0,0,0,
127,128,5,5,0,0,128,21,1,0,0,0,129,130,5,13,0,0,130,138,5,3,0,0,131,139,
3,24,12,0,132,133,5,12,0,0,133,134,5,7,0,0,134,135,5,3,0,0,135,136,3,24,
12,0,136,137,5,5,0,0,137,139,1,0,0,0,138,131,1,0,0,0,138,132,1,0,0,0,139,
140,1,0,0,0,140,141,5,5,0,0,141,23,1,0,0,0,142,147,3,26,13,0,143,144,5,6,
0,0,144,146,3,26,13,0,145,143,1,0,0,0,146,149,1,0,0,0,147,145,1,0,0,0,147,
148,1,0,0,0,148,25,1,0,0,0,149,147,1,0,0,0,150,151,5,13,0,0,151,152,7,0,
0,0,152,160,5,13,0,0,153,154,5,13,0,0,154,155,5,13,0,0,155,156,5,8,0,0,156,
160,5,13,0,0,157,158,5,13,0,0,158,160,5,13,0,0,159,150,1,0,0,0,159,153,1,
0,0,0,159,157,1,0,0,0,160,27,1,0,0,0,15,31,37,55,64,76,90,93,98,107,114,
118,125,138,147,159];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class PeriodFileParser extends antlr4.Parser {

    static grammarFileName = "PeriodFile.g4";
    static literalNames = [ null, "':'", "'.'", "'{'", "','", "'}'", "'&&'", 
                            "'*'", "'-'", "'<'", "'>'", "'import'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, "LT", "GT", "IMPORT", "NUM", "WORD", 
                             "LOAD", "SPORT", "IMPORTED", "LINE_COMMENT", 
                             "WS" ];
    static ruleNames = [ "file", "metaData", "sessionImport", "periods", 
                         "period", "periodPair", "data", "imported", "workouts", 
                         "workout", "session", "sessionSection", "workloads", 
                         "workload" ];

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
	        this.state = 31;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 28;
	                this.metaData(); 
	            }
	            this.state = 33;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===11) {
	            this.state = 34;
	            this.sessionImport();
	            this.state = 39;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 40;
	        this.periods();
	        this.state = 41;
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



	metaData() {
	    let localctx = new MetaDataContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, PeriodFileParser.RULE_metaData);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(PeriodFileParser.WORD);
	        this.state = 44;
	        this.match(PeriodFileParser.T__0);
	        this.state = 45;
	        this.match(PeriodFileParser.WORD);
	        this.state = 46;
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
	    this.enterRule(localctx, 4, PeriodFileParser.RULE_sessionImport);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(PeriodFileParser.IMPORT);
	        this.state = 49;
	        this.match(PeriodFileParser.WORD);
	        this.state = 50;
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
	    this.enterRule(localctx, 6, PeriodFileParser.RULE_periods);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 52;
	            this.period();
	            this.state = 55; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===13);
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
	    this.enterRule(localctx, 8, PeriodFileParser.RULE_period);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(PeriodFileParser.WORD);
	        this.state = 58;
	        this.match(PeriodFileParser.T__2);
	        this.state = 59;
	        this.periodPair();
	        this.state = 64;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 60;
	            this.match(PeriodFileParser.T__3);
	            this.state = 61;
	            this.periodPair();
	            this.state = 66;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 67;
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



	periodPair() {
	    let localctx = new PeriodPairContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, PeriodFileParser.RULE_periodPair);
	    var _la = 0;
	    try {
	        this.state = 93;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 69;
	            this.match(PeriodFileParser.WORD);
	            this.state = 70;
	            this.match(PeriodFileParser.T__0);
	            this.state = 71;
	            this.data();
	            this.state = 76;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6) {
	                this.state = 72;
	                this.match(PeriodFileParser.T__5);
	                this.state = 73;
	                this.data();
	                this.state = 78;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 79;
	            this.match(PeriodFileParser.NUM);
	            this.state = 80;
	            this.match(PeriodFileParser.T__6);
	            this.state = 81;
	            this.match(PeriodFileParser.T__2);
	            this.state = 82;
	            this.data();
	            this.state = 83;
	            this.match(PeriodFileParser.T__4);
	            break;
	        case 3:
	        case 15:
	        case 16:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 85;
	            this.data();
	            this.state = 90;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6) {
	                this.state = 86;
	                this.match(PeriodFileParser.T__5);
	                this.state = 87;
	                this.data();
	                this.state = 92;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
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



	data() {
	    let localctx = new DataContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, PeriodFileParser.RULE_data);
	    try {
	        this.state = 98;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 95;
	            this.imported();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 96;
	            this.workouts();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 97;
	            this.session();
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



	imported() {
	    let localctx = new ImportedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, PeriodFileParser.RULE_imported);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
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



	workouts() {
	    let localctx = new WorkoutsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, PeriodFileParser.RULE_workouts);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.workout();
	        this.state = 107;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 103;
	                this.match(PeriodFileParser.T__5);
	                this.state = 104;
	                this.workout(); 
	            }
	            this.state = 109;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
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



	workout() {
	    let localctx = new WorkoutContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, PeriodFileParser.RULE_workout);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this.match(PeriodFileParser.SPORT);
	        this.state = 114;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===13) {
	            this.state = 111;
	            this.match(PeriodFileParser.WORD);
	            this.state = 116;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 118;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14) {
	            this.state = 117;
	            this.match(PeriodFileParser.LOAD);
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



	session() {
	    let localctx = new SessionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, PeriodFileParser.RULE_session);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.match(PeriodFileParser.T__2);
	        this.state = 121;
	        this.match(PeriodFileParser.SPORT);
	        this.state = 123; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 122;
	            this.sessionSection();
	            this.state = 125; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===13);
	        this.state = 127;
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
	    this.enterRule(localctx, 22, PeriodFileParser.RULE_sessionSection);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this.match(PeriodFileParser.WORD);
	        this.state = 130;
	        this.match(PeriodFileParser.T__2);
	        this.state = 138;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	            this.state = 131;
	            this.workloads();
	            break;
	        case 12:
	            this.state = 132;
	            this.match(PeriodFileParser.NUM);
	            this.state = 133;
	            this.match(PeriodFileParser.T__6);
	            this.state = 134;
	            this.match(PeriodFileParser.T__2);
	            this.state = 135;
	            this.workloads();
	            this.state = 136;
	            this.match(PeriodFileParser.T__4);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 140;
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
	    this.enterRule(localctx, 24, PeriodFileParser.RULE_workloads);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 142;
	        this.workload();
	        this.state = 147;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 143;
	            this.match(PeriodFileParser.T__5);
	            this.state = 144;
	            this.workload();
	            this.state = 149;
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
	    this.enterRule(localctx, 26, PeriodFileParser.RULE_workload);
	    var _la = 0;
	    try {
	        this.state = 159;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 150;
	            this.match(PeriodFileParser.WORD);
	            this.state = 151;
	            _la = this._input.LA(1);
	            if(!(_la===9 || _la===10)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 152;
	            this.match(PeriodFileParser.WORD);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 153;
	            this.match(PeriodFileParser.WORD);
	            this.state = 154;
	            this.match(PeriodFileParser.WORD);
	            this.state = 155;
	            this.match(PeriodFileParser.T__7);
	            this.state = 156;
	            this.match(PeriodFileParser.WORD);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 157;
	            this.match(PeriodFileParser.WORD);
	            this.state = 158;
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


}

PeriodFileParser.EOF = antlr4.Token.EOF;
PeriodFileParser.T__0 = 1;
PeriodFileParser.T__1 = 2;
PeriodFileParser.T__2 = 3;
PeriodFileParser.T__3 = 4;
PeriodFileParser.T__4 = 5;
PeriodFileParser.T__5 = 6;
PeriodFileParser.T__6 = 7;
PeriodFileParser.T__7 = 8;
PeriodFileParser.LT = 9;
PeriodFileParser.GT = 10;
PeriodFileParser.IMPORT = 11;
PeriodFileParser.NUM = 12;
PeriodFileParser.WORD = 13;
PeriodFileParser.LOAD = 14;
PeriodFileParser.SPORT = 15;
PeriodFileParser.IMPORTED = 16;
PeriodFileParser.LINE_COMMENT = 17;
PeriodFileParser.WS = 18;

PeriodFileParser.RULE_file = 0;
PeriodFileParser.RULE_metaData = 1;
PeriodFileParser.RULE_sessionImport = 2;
PeriodFileParser.RULE_periods = 3;
PeriodFileParser.RULE_period = 4;
PeriodFileParser.RULE_periodPair = 5;
PeriodFileParser.RULE_data = 6;
PeriodFileParser.RULE_imported = 7;
PeriodFileParser.RULE_workouts = 8;
PeriodFileParser.RULE_workout = 9;
PeriodFileParser.RULE_session = 10;
PeriodFileParser.RULE_sessionSection = 11;
PeriodFileParser.RULE_workloads = 12;
PeriodFileParser.RULE_workload = 13;

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

	periods() {
	    return this.getTypedRuleContext(PeriodsContext,0);
	};

	EOF() {
	    return this.getToken(PeriodFileParser.EOF, 0);
	};

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

	periodPair = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PeriodPairContext);
	    } else {
	        return this.getTypedRuleContext(PeriodPairContext,i);
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


}



class PeriodPairContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeriodFileParser.RULE_periodPair;
    }

	WORD() {
	    return this.getToken(PeriodFileParser.WORD, 0);
	};

	data = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DataContext);
	    } else {
	        return this.getTypedRuleContext(DataContext,i);
	    }
	};

	NUM() {
	    return this.getToken(PeriodFileParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.enterPeriodPair(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.exitPeriodPair(this);
		}
	}


}



class DataContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeriodFileParser.RULE_data;
    }

	imported() {
	    return this.getTypedRuleContext(ImportedContext,0);
	};

	workouts() {
	    return this.getTypedRuleContext(WorkoutsContext,0);
	};

	session() {
	    return this.getTypedRuleContext(SessionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.enterData(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.exitData(this);
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


}



class WorkoutsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PeriodFileParser.RULE_workouts;
    }

	workout = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WorkoutContext);
	    } else {
	        return this.getTypedRuleContext(WorkoutContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.enterWorkouts(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
	        listener.exitWorkouts(this);
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


	LOAD() {
	    return this.getToken(PeriodFileParser.LOAD, 0);
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
	    if(listener instanceof PeriodFileListener ) {
	        listener.enterWorkloads(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PeriodFileListener ) {
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


	LT() {
	    return this.getToken(PeriodFileParser.LT, 0);
	};

	GT() {
	    return this.getToken(PeriodFileParser.GT, 0);
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


}




PeriodFileParser.FileContext = FileContext; 
PeriodFileParser.MetaDataContext = MetaDataContext; 
PeriodFileParser.SessionImportContext = SessionImportContext; 
PeriodFileParser.PeriodsContext = PeriodsContext; 
PeriodFileParser.PeriodContext = PeriodContext; 
PeriodFileParser.PeriodPairContext = PeriodPairContext; 
PeriodFileParser.DataContext = DataContext; 
PeriodFileParser.ImportedContext = ImportedContext; 
PeriodFileParser.WorkoutsContext = WorkoutsContext; 
PeriodFileParser.WorkoutContext = WorkoutContext; 
PeriodFileParser.SessionContext = SessionContext; 
PeriodFileParser.SessionSectionContext = SessionSectionContext; 
PeriodFileParser.WorkloadsContext = WorkloadsContext; 
PeriodFileParser.WorkloadContext = WorkloadContext; 
