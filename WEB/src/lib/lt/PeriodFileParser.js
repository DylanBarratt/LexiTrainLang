// Generated from ./PeriodFile.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import PeriodFileListener from './PeriodFileListener.js';
const serializedATN = [4,1,16,144,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
1,0,5,0,28,8,0,10,0,12,0,31,9,0,1,0,5,0,34,8,0,10,0,12,0,37,9,0,1,0,1,0,
1,0,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,3,4,3,53,8,3,11,3,12,3,54,
1,4,1,4,1,4,1,4,1,4,5,4,62,8,4,10,4,12,4,65,9,4,1,4,1,4,1,5,1,5,1,5,1,5,
1,5,1,5,1,5,1,5,1,5,1,5,3,5,79,8,5,1,6,1,6,3,6,83,8,6,1,7,1,7,1,7,5,7,88,
8,7,10,7,12,7,91,9,7,1,8,1,8,5,8,95,8,8,10,8,12,8,98,9,8,1,8,3,8,101,8,8,
1,9,1,9,1,9,4,9,106,8,9,11,9,12,9,107,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,
10,1,10,1,10,1,10,3,10,121,8,10,1,10,1,10,1,11,1,11,1,11,5,11,128,8,11,10,
11,12,11,131,9,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,142,
8,12,1,12,0,0,13,0,2,4,6,8,10,12,14,16,18,20,22,24,0,0,145,0,29,1,0,0,0,
2,41,1,0,0,0,4,46,1,0,0,0,6,52,1,0,0,0,8,56,1,0,0,0,10,78,1,0,0,0,12,82,
1,0,0,0,14,84,1,0,0,0,16,92,1,0,0,0,18,102,1,0,0,0,20,111,1,0,0,0,22,124,
1,0,0,0,24,141,1,0,0,0,26,28,3,2,1,0,27,26,1,0,0,0,28,31,1,0,0,0,29,27,1,
0,0,0,29,30,1,0,0,0,30,35,1,0,0,0,31,29,1,0,0,0,32,34,3,4,2,0,33,32,1,0,
0,0,34,37,1,0,0,0,35,33,1,0,0,0,35,36,1,0,0,0,36,38,1,0,0,0,37,35,1,0,0,
0,38,39,3,6,3,0,39,40,5,0,0,1,40,1,1,0,0,0,41,42,5,12,0,0,42,43,5,1,0,0,
43,44,5,12,0,0,44,45,5,2,0,0,45,3,1,0,0,0,46,47,5,12,0,0,47,48,5,3,0,0,48,
49,5,12,0,0,49,50,5,2,0,0,50,5,1,0,0,0,51,53,3,8,4,0,52,51,1,0,0,0,53,54,
1,0,0,0,54,52,1,0,0,0,54,55,1,0,0,0,55,7,1,0,0,0,56,57,5,12,0,0,57,58,5,
4,0,0,58,63,3,10,5,0,59,60,5,5,0,0,60,62,3,10,5,0,61,59,1,0,0,0,62,65,1,
0,0,0,63,61,1,0,0,0,63,64,1,0,0,0,64,66,1,0,0,0,65,63,1,0,0,0,66,67,5,6,
0,0,67,9,1,0,0,0,68,69,5,12,0,0,69,70,5,1,0,0,70,79,3,12,6,0,71,72,5,11,
0,0,72,73,5,7,0,0,73,74,5,4,0,0,74,75,3,12,6,0,75,76,5,6,0,0,76,79,1,0,0,
0,77,79,3,12,6,0,78,68,1,0,0,0,78,71,1,0,0,0,78,77,1,0,0,0,79,11,1,0,0,0,
80,83,3,14,7,0,81,83,3,18,9,0,82,80,1,0,0,0,82,81,1,0,0,0,83,13,1,0,0,0,
84,89,3,16,8,0,85,86,5,8,0,0,86,88,3,16,8,0,87,85,1,0,0,0,88,91,1,0,0,0,
89,87,1,0,0,0,89,90,1,0,0,0,90,15,1,0,0,0,91,89,1,0,0,0,92,96,5,14,0,0,93,
95,5,12,0,0,94,93,1,0,0,0,95,98,1,0,0,0,96,94,1,0,0,0,96,97,1,0,0,0,97,100,
1,0,0,0,98,96,1,0,0,0,99,101,5,13,0,0,100,99,1,0,0,0,100,101,1,0,0,0,101,
17,1,0,0,0,102,103,5,4,0,0,103,105,5,14,0,0,104,106,3,20,10,0,105,104,1,
0,0,0,106,107,1,0,0,0,107,105,1,0,0,0,107,108,1,0,0,0,108,109,1,0,0,0,109,
110,5,6,0,0,110,19,1,0,0,0,111,112,5,12,0,0,112,120,5,4,0,0,113,121,3,22,
11,0,114,115,5,11,0,0,115,116,5,7,0,0,116,117,5,4,0,0,117,118,3,22,11,0,
118,119,5,6,0,0,119,121,1,0,0,0,120,113,1,0,0,0,120,114,1,0,0,0,121,122,
1,0,0,0,122,123,5,6,0,0,123,21,1,0,0,0,124,129,3,24,12,0,125,126,5,8,0,0,
126,128,3,24,12,0,127,125,1,0,0,0,128,131,1,0,0,0,129,127,1,0,0,0,129,130,
1,0,0,0,130,23,1,0,0,0,131,129,1,0,0,0,132,133,5,12,0,0,133,134,5,9,0,0,
134,142,5,12,0,0,135,136,5,12,0,0,136,137,5,12,0,0,137,138,5,10,0,0,138,
142,5,12,0,0,139,140,5,12,0,0,140,142,5,12,0,0,141,132,1,0,0,0,141,135,1,
0,0,0,141,139,1,0,0,0,142,25,1,0,0,0,13,29,35,54,63,78,82,89,96,100,107,
120,129,141];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class PeriodFileParser extends antlr4.Parser {

    static grammarFileName = "PeriodFile.g4";
    static literalNames = [ null, "':'", "'.'", "'='", "'{'", "','", "'}'", 
                            "'*'", "'&&'", "'<'", "'-'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, "NUM", "WORD", "LOAD", "SPORT", 
                             "LINE_COMMENT", "WS" ];
    static ruleNames = [ "file", "metaData", "sessionImport", "periods", 
                         "period", "periodPair", "data", "workouts", "workout", 
                         "session", "sessionSection", "workloads", "workload" ];

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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 26;
	                this.metaData(); 
	            }
	            this.state = 31;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	        this.state = 35;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 32;
	                this.sessionImport(); 
	            }
	            this.state = 37;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	        }

	        this.state = 38;
	        this.periods();
	        this.state = 39;
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
	        this.state = 41;
	        this.match(PeriodFileParser.WORD);
	        this.state = 42;
	        this.match(PeriodFileParser.T__0);
	        this.state = 43;
	        this.match(PeriodFileParser.WORD);
	        this.state = 44;
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
	        this.state = 46;
	        this.match(PeriodFileParser.WORD);
	        this.state = 47;
	        this.match(PeriodFileParser.T__2);
	        this.state = 48;
	        this.match(PeriodFileParser.WORD);
	        this.state = 49;
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
	        this.state = 52; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 51;
	            this.period();
	            this.state = 54; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===12);
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
	        this.state = 56;
	        this.match(PeriodFileParser.WORD);
	        this.state = 57;
	        this.match(PeriodFileParser.T__3);
	        this.state = 58;
	        this.periodPair();
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5) {
	            this.state = 59;
	            this.match(PeriodFileParser.T__4);
	            this.state = 60;
	            this.periodPair();
	            this.state = 65;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 66;
	        this.match(PeriodFileParser.T__5);
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
	    try {
	        this.state = 78;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 68;
	            this.match(PeriodFileParser.WORD);
	            this.state = 69;
	            this.match(PeriodFileParser.T__0);
	            this.state = 70;
	            this.data();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 71;
	            this.match(PeriodFileParser.NUM);
	            this.state = 72;
	            this.match(PeriodFileParser.T__6);
	            this.state = 73;
	            this.match(PeriodFileParser.T__3);
	            this.state = 74;
	            this.data();
	            this.state = 75;
	            this.match(PeriodFileParser.T__5);
	            break;
	        case 4:
	        case 14:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 77;
	            this.data();
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
	        this.state = 82;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 80;
	            this.workouts();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 81;
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



	workouts() {
	    let localctx = new WorkoutsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, PeriodFileParser.RULE_workouts);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.workout();
	        this.state = 89;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 85;
	            this.match(PeriodFileParser.T__7);
	            this.state = 86;
	            this.workout();
	            this.state = 91;
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



	workout() {
	    let localctx = new WorkoutContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, PeriodFileParser.RULE_workout);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this.match(PeriodFileParser.SPORT);
	        this.state = 96;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===12) {
	            this.state = 93;
	            this.match(PeriodFileParser.WORD);
	            this.state = 98;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 100;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 99;
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
	    this.enterRule(localctx, 18, PeriodFileParser.RULE_session);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.match(PeriodFileParser.T__3);
	        this.state = 103;
	        this.match(PeriodFileParser.SPORT);
	        this.state = 105; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 104;
	            this.sessionSection();
	            this.state = 107; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===12);
	        this.state = 109;
	        this.match(PeriodFileParser.T__5);
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
	    this.enterRule(localctx, 20, PeriodFileParser.RULE_sessionSection);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.match(PeriodFileParser.WORD);
	        this.state = 112;
	        this.match(PeriodFileParser.T__3);
	        this.state = 120;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	            this.state = 113;
	            this.workloads();
	            break;
	        case 11:
	            this.state = 114;
	            this.match(PeriodFileParser.NUM);
	            this.state = 115;
	            this.match(PeriodFileParser.T__6);
	            this.state = 116;
	            this.match(PeriodFileParser.T__3);
	            this.state = 117;
	            this.workloads();
	            this.state = 118;
	            this.match(PeriodFileParser.T__5);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 122;
	        this.match(PeriodFileParser.T__5);
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
	    this.enterRule(localctx, 22, PeriodFileParser.RULE_workloads);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124;
	        this.workload();
	        this.state = 129;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 125;
	            this.match(PeriodFileParser.T__7);
	            this.state = 126;
	            this.workload();
	            this.state = 131;
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
	    this.enterRule(localctx, 24, PeriodFileParser.RULE_workload);
	    try {
	        this.state = 141;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 132;
	            this.match(PeriodFileParser.WORD);
	            this.state = 133;
	            this.match(PeriodFileParser.T__8);
	            this.state = 134;
	            this.match(PeriodFileParser.WORD);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 135;
	            this.match(PeriodFileParser.WORD);
	            this.state = 136;
	            this.match(PeriodFileParser.WORD);
	            this.state = 137;
	            this.match(PeriodFileParser.T__9);
	            this.state = 138;
	            this.match(PeriodFileParser.WORD);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 139;
	            this.match(PeriodFileParser.WORD);
	            this.state = 140;
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
PeriodFileParser.T__8 = 9;
PeriodFileParser.T__9 = 10;
PeriodFileParser.NUM = 11;
PeriodFileParser.WORD = 12;
PeriodFileParser.LOAD = 13;
PeriodFileParser.SPORT = 14;
PeriodFileParser.LINE_COMMENT = 15;
PeriodFileParser.WS = 16;

PeriodFileParser.RULE_file = 0;
PeriodFileParser.RULE_metaData = 1;
PeriodFileParser.RULE_sessionImport = 2;
PeriodFileParser.RULE_periods = 3;
PeriodFileParser.RULE_period = 4;
PeriodFileParser.RULE_periodPair = 5;
PeriodFileParser.RULE_data = 6;
PeriodFileParser.RULE_workouts = 7;
PeriodFileParser.RULE_workout = 8;
PeriodFileParser.RULE_session = 9;
PeriodFileParser.RULE_sessionSection = 10;
PeriodFileParser.RULE_workloads = 11;
PeriodFileParser.RULE_workload = 12;

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

	data() {
	    return this.getTypedRuleContext(DataContext,0);
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
PeriodFileParser.WorkoutsContext = WorkoutsContext; 
PeriodFileParser.WorkoutContext = WorkoutContext; 
PeriodFileParser.SessionContext = SessionContext; 
PeriodFileParser.SessionSectionContext = SessionSectionContext; 
PeriodFileParser.WorkloadsContext = WorkloadsContext; 
PeriodFileParser.WorkloadContext = WorkloadContext; 
