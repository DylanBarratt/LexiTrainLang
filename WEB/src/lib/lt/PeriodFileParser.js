// Generated from ./PeriodFile.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import PeriodFileListener from './PeriodFileListener.js';
import PeriodFileVisitor from './PeriodFileVisitor.js';

const serializedATN = [4,1,19,184,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,1,0,5,0,38,8,0,10,0,12,
0,41,9,0,1,0,5,0,44,8,0,10,0,12,0,47,9,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,
1,2,1,2,1,2,1,2,1,3,4,3,62,8,3,11,3,12,3,63,1,4,1,4,1,4,1,4,1,4,5,4,71,8,
4,10,4,12,4,74,9,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,5,5,83,8,5,10,5,12,5,86,9,
5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,5,5,97,8,5,10,5,12,5,100,9,5,3,5,102,
8,5,1,6,1,6,1,6,1,6,1,6,3,6,109,8,6,1,7,1,7,1,8,1,8,1,8,5,8,116,8,8,10,8,
12,8,119,9,8,1,9,1,9,1,9,1,10,1,10,1,10,4,10,127,8,10,11,10,12,10,128,1,
10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,3,11,142,8,11,1,11,
1,11,1,12,1,12,1,12,5,12,149,8,12,10,12,12,12,152,9,12,1,13,1,13,1,13,3,
13,157,8,13,1,13,1,13,3,13,161,8,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,
14,1,14,3,14,172,8,14,1,15,1,15,1,15,1,16,1,16,1,16,1,17,1,17,1,17,1,17,
1,17,0,0,18,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,0,1,1,0,14,
15,186,0,39,1,0,0,0,2,51,1,0,0,0,4,56,1,0,0,0,6,61,1,0,0,0,8,65,1,0,0,0,
10,101,1,0,0,0,12,108,1,0,0,0,14,110,1,0,0,0,16,112,1,0,0,0,18,120,1,0,0,
0,20,123,1,0,0,0,22,132,1,0,0,0,24,145,1,0,0,0,26,153,1,0,0,0,28,171,1,0,
0,0,30,173,1,0,0,0,32,176,1,0,0,0,34,179,1,0,0,0,36,38,3,2,1,0,37,36,1,0,
0,0,38,41,1,0,0,0,39,37,1,0,0,0,39,40,1,0,0,0,40,45,1,0,0,0,41,39,1,0,0,
0,42,44,3,4,2,0,43,42,1,0,0,0,44,47,1,0,0,0,45,43,1,0,0,0,45,46,1,0,0,0,
46,48,1,0,0,0,47,45,1,0,0,0,48,49,3,6,3,0,49,50,5,0,0,1,50,1,1,0,0,0,51,
52,5,15,0,0,52,53,5,1,0,0,53,54,7,0,0,0,54,55,5,2,0,0,55,3,1,0,0,0,56,57,
5,11,0,0,57,58,5,15,0,0,58,59,5,2,0,0,59,5,1,0,0,0,60,62,3,8,4,0,61,60,1,
0,0,0,62,63,1,0,0,0,63,61,1,0,0,0,63,64,1,0,0,0,64,7,1,0,0,0,65,66,5,15,
0,0,66,67,5,3,0,0,67,72,3,10,5,0,68,69,5,4,0,0,69,71,3,10,5,0,70,68,1,0,
0,0,71,74,1,0,0,0,72,70,1,0,0,0,72,73,1,0,0,0,73,75,1,0,0,0,74,72,1,0,0,
0,75,76,5,5,0,0,76,9,1,0,0,0,77,78,5,15,0,0,78,79,5,1,0,0,79,84,3,12,6,0,
80,81,5,6,0,0,81,83,3,12,6,0,82,80,1,0,0,0,83,86,1,0,0,0,84,82,1,0,0,0,84,
85,1,0,0,0,85,102,1,0,0,0,86,84,1,0,0,0,87,88,5,14,0,0,88,89,5,7,0,0,89,
90,5,3,0,0,90,91,3,12,6,0,91,92,5,5,0,0,92,102,1,0,0,0,93,98,3,12,6,0,94,
95,5,6,0,0,95,97,3,12,6,0,96,94,1,0,0,0,97,100,1,0,0,0,98,96,1,0,0,0,98,
99,1,0,0,0,99,102,1,0,0,0,100,98,1,0,0,0,101,77,1,0,0,0,101,87,1,0,0,0,101,
93,1,0,0,0,102,11,1,0,0,0,103,109,3,14,7,0,104,109,3,16,8,0,105,109,3,20,
10,0,106,107,5,13,0,0,107,109,5,15,0,0,108,103,1,0,0,0,108,104,1,0,0,0,108,
105,1,0,0,0,108,106,1,0,0,0,109,13,1,0,0,0,110,111,5,17,0,0,111,15,1,0,0,
0,112,117,3,18,9,0,113,114,5,6,0,0,114,116,3,18,9,0,115,113,1,0,0,0,116,
119,1,0,0,0,117,115,1,0,0,0,117,118,1,0,0,0,118,17,1,0,0,0,119,117,1,0,0,
0,120,121,5,16,0,0,121,122,3,26,13,0,122,19,1,0,0,0,123,124,5,3,0,0,124,
126,5,16,0,0,125,127,3,22,11,0,126,125,1,0,0,0,127,128,1,0,0,0,128,126,1,
0,0,0,128,129,1,0,0,0,129,130,1,0,0,0,130,131,5,5,0,0,131,21,1,0,0,0,132,
133,5,15,0,0,133,141,5,3,0,0,134,142,3,24,12,0,135,136,5,14,0,0,136,137,
5,7,0,0,137,138,5,3,0,0,138,139,3,24,12,0,139,140,5,5,0,0,140,142,1,0,0,
0,141,134,1,0,0,0,141,135,1,0,0,0,142,143,1,0,0,0,143,144,5,5,0,0,144,23,
1,0,0,0,145,150,3,26,13,0,146,147,5,6,0,0,147,149,3,26,13,0,148,146,1,0,
0,0,149,152,1,0,0,0,150,148,1,0,0,0,150,151,1,0,0,0,151,25,1,0,0,0,152,150,
1,0,0,0,153,156,3,28,14,0,154,155,5,12,0,0,155,157,5,14,0,0,156,154,1,0,
0,0,156,157,1,0,0,0,157,160,1,0,0,0,158,159,5,13,0,0,159,161,5,15,0,0,160,
158,1,0,0,0,160,161,1,0,0,0,161,27,1,0,0,0,162,172,5,15,0,0,163,164,5,15,
0,0,164,172,3,30,15,0,165,166,5,15,0,0,166,172,3,32,16,0,167,168,5,15,0,
0,168,172,3,34,17,0,169,170,5,15,0,0,170,172,5,15,0,0,171,162,1,0,0,0,171,
163,1,0,0,0,171,165,1,0,0,0,171,167,1,0,0,0,171,169,1,0,0,0,172,29,1,0,0,
0,173,174,5,8,0,0,174,175,5,15,0,0,175,31,1,0,0,0,176,177,5,9,0,0,177,178,
5,15,0,0,178,33,1,0,0,0,179,180,5,15,0,0,180,181,5,10,0,0,181,182,5,15,0,
0,182,35,1,0,0,0,15,39,45,63,72,84,98,101,108,117,128,141,150,156,160,171];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class PeriodFileParser extends antlr4.Parser {

    static grammarFileName = "PeriodFile.g4";
    static literalNames = [ null, "':'", "'.'", "'{'", "','", "'}'", "'&&'", 
                            "'*'", "'<'", "'>'", "'-'", "'import'", "'load='", 
                            "'note='" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             "LT", "GT", "BW", "IMPORT", "LOAD", "NOTES", 
                             "NUM", "WORD", "SPORT", "IMPORTED", "LINE_COMMENT", 
                             "WS" ];
    static ruleNames = [ "file", "metaData", "sessionImport", "periods", 
                         "period", "periodPair", "data", "imported", "workouts", 
                         "workout", "session", "sessionSection", "workloads", 
                         "workloadL", "workload", "lt", "gt", "between" ];

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
	        this.state = 39;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 36;
	                this.metaData(); 
	            }
	            this.state = 41;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===11) {
	            this.state = 42;
	            this.sessionImport();
	            this.state = 47;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 48;
	        this.periods();
	        this.state = 49;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(PeriodFileParser.WORD);
	        this.state = 52;
	        this.match(PeriodFileParser.T__0);
	        this.state = 53;
	        _la = this._input.LA(1);
	        if(!(_la===14 || _la===15)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 54;
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
	        this.state = 56;
	        this.match(PeriodFileParser.IMPORT);
	        this.state = 57;
	        this.match(PeriodFileParser.WORD);
	        this.state = 58;
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
	        this.state = 61; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 60;
	            this.period();
	            this.state = 63; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===15);
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
	        this.state = 65;
	        this.match(PeriodFileParser.WORD);
	        this.state = 66;
	        this.match(PeriodFileParser.T__2);
	        this.state = 67;
	        this.periodPair();
	        this.state = 72;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 68;
	            this.match(PeriodFileParser.T__3);
	            this.state = 69;
	            this.periodPair();
	            this.state = 74;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 75;
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
	        this.state = 101;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 77;
	            this.match(PeriodFileParser.WORD);
	            this.state = 78;
	            this.match(PeriodFileParser.T__0);
	            this.state = 79;
	            this.data();
	            this.state = 84;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6) {
	                this.state = 80;
	                this.match(PeriodFileParser.T__5);
	                this.state = 81;
	                this.data();
	                this.state = 86;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 87;
	            this.match(PeriodFileParser.NUM);
	            this.state = 88;
	            this.match(PeriodFileParser.T__6);
	            this.state = 89;
	            this.match(PeriodFileParser.T__2);
	            this.state = 90;
	            this.data();
	            this.state = 91;
	            this.match(PeriodFileParser.T__4);
	            break;
	        case 3:
	        case 13:
	        case 16:
	        case 17:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 93;
	            this.data();
	            this.state = 98;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6) {
	                this.state = 94;
	                this.match(PeriodFileParser.T__5);
	                this.state = 95;
	                this.data();
	                this.state = 100;
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
	        this.state = 108;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 103;
	            this.imported();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 104;
	            this.workouts();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 105;
	            this.session();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 106;
	            this.match(PeriodFileParser.NOTES);
	            this.state = 107;
	            this.match(PeriodFileParser.WORD);
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
	        this.state = 110;
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
	        this.state = 112;
	        this.workout();
	        this.state = 117;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 113;
	                this.match(PeriodFileParser.T__5);
	                this.state = 114;
	                this.workout(); 
	            }
	            this.state = 119;
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.match(PeriodFileParser.SPORT);
	        this.state = 121;
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



	session() {
	    let localctx = new SessionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, PeriodFileParser.RULE_session);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        this.match(PeriodFileParser.T__2);
	        this.state = 124;
	        this.match(PeriodFileParser.SPORT);
	        this.state = 126; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 125;
	            this.sessionSection();
	            this.state = 128; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===15);
	        this.state = 130;
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
	        this.state = 132;
	        this.match(PeriodFileParser.WORD);
	        this.state = 133;
	        this.match(PeriodFileParser.T__2);
	        this.state = 141;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            this.state = 134;
	            this.workloads();
	            break;
	        case 14:
	            this.state = 135;
	            this.match(PeriodFileParser.NUM);
	            this.state = 136;
	            this.match(PeriodFileParser.T__6);
	            this.state = 137;
	            this.match(PeriodFileParser.T__2);
	            this.state = 138;
	            this.workloads();
	            this.state = 139;
	            this.match(PeriodFileParser.T__4);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 143;
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
	        this.state = 145;
	        this.workloadL();
	        this.state = 150;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 146;
	            this.match(PeriodFileParser.T__5);
	            this.state = 147;
	            this.workloadL();
	            this.state = 152;
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
	    this.enterRule(localctx, 26, PeriodFileParser.RULE_workloadL);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        this.workload();
	        this.state = 156;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 154;
	            this.match(PeriodFileParser.LOAD);
	            this.state = 155;
	            this.match(PeriodFileParser.NUM);
	        }

	        this.state = 160;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 158;
	            this.match(PeriodFileParser.NOTES);
	            this.state = 159;
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
	    this.enterRule(localctx, 28, PeriodFileParser.RULE_workload);
	    try {
	        this.state = 171;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 162;
	            this.match(PeriodFileParser.WORD);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 163;
	            this.match(PeriodFileParser.WORD);
	            this.state = 164;
	            this.lt();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 165;
	            this.match(PeriodFileParser.WORD);
	            this.state = 166;
	            this.gt();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 167;
	            this.match(PeriodFileParser.WORD);
	            this.state = 168;
	            this.between();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 169;
	            this.match(PeriodFileParser.WORD);
	            this.state = 170;
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
	    this.enterRule(localctx, 30, PeriodFileParser.RULE_lt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 173;
	        this.match(PeriodFileParser.LT);
	        this.state = 174;
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
	    this.enterRule(localctx, 32, PeriodFileParser.RULE_gt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 176;
	        this.match(PeriodFileParser.GT);
	        this.state = 177;
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
	    this.enterRule(localctx, 34, PeriodFileParser.RULE_between);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 179;
	        this.match(PeriodFileParser.WORD);
	        this.state = 180;
	        this.match(PeriodFileParser.BW);
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
PeriodFileParser.NUM = 14;
PeriodFileParser.WORD = 15;
PeriodFileParser.SPORT = 16;
PeriodFileParser.IMPORTED = 17;
PeriodFileParser.LINE_COMMENT = 18;
PeriodFileParser.WS = 19;

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
PeriodFileParser.RULE_workloadL = 13;
PeriodFileParser.RULE_workload = 14;
PeriodFileParser.RULE_lt = 15;
PeriodFileParser.RULE_gt = 16;
PeriodFileParser.RULE_between = 17;

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

	accept(visitor) {
	    if ( visitor instanceof PeriodFileVisitor ) {
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

	accept(visitor) {
	    if ( visitor instanceof PeriodFileVisitor ) {
	        return visitor.visitPeriod(this);
	    } else {
	        return visitor.visitChildren(this);
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

	accept(visitor) {
	    if ( visitor instanceof PeriodFileVisitor ) {
	        return visitor.visitPeriodPair(this);
	    } else {
	        return visitor.visitChildren(this);
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

	NOTES() {
	    return this.getToken(PeriodFileParser.NOTES, 0);
	};

	WORD() {
	    return this.getToken(PeriodFileParser.WORD, 0);
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

	accept(visitor) {
	    if ( visitor instanceof PeriodFileVisitor ) {
	        return visitor.visitData(this);
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

	accept(visitor) {
	    if ( visitor instanceof PeriodFileVisitor ) {
	        return visitor.visitWorkouts(this);
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
PeriodFileParser.WorkloadLContext = WorkloadLContext; 
PeriodFileParser.WorkloadContext = WorkloadContext; 
PeriodFileParser.LtContext = LtContext; 
PeriodFileParser.GtContext = GtContext; 
PeriodFileParser.BetweenContext = BetweenContext; 
