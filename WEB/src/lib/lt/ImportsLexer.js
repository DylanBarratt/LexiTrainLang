// Generated from ./Imports.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,2,43,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,1,0,1,0,1,0,
1,0,1,0,1,0,1,0,1,0,1,0,4,0,17,8,0,11,0,12,0,18,1,0,1,0,1,0,5,0,24,8,0,10,
0,12,0,27,9,0,1,0,3,0,30,8,0,1,0,1,0,1,1,1,1,1,1,1,1,3,1,38,8,1,1,2,1,2,
1,2,1,2,1,25,0,3,1,1,3,0,5,2,1,0,1,4,0,47,57,65,90,95,95,97,122,46,0,1,1,
0,0,0,0,5,1,0,0,0,1,7,1,0,0,0,3,37,1,0,0,0,5,39,1,0,0,0,7,8,5,105,0,0,8,
9,5,109,0,0,9,10,5,112,0,0,10,11,5,111,0,0,11,12,5,114,0,0,12,13,5,116,0,
0,13,14,5,32,0,0,14,29,1,0,0,0,15,17,7,0,0,0,16,15,1,0,0,0,17,18,1,0,0,0,
18,16,1,0,0,0,18,19,1,0,0,0,19,30,1,0,0,0,20,25,5,34,0,0,21,24,3,3,1,0,22,
24,9,0,0,0,23,21,1,0,0,0,23,22,1,0,0,0,24,27,1,0,0,0,25,26,1,0,0,0,25,23,
1,0,0,0,26,28,1,0,0,0,27,25,1,0,0,0,28,30,5,34,0,0,29,16,1,0,0,0,29,20,1,
0,0,0,30,31,1,0,0,0,31,32,5,46,0,0,32,2,1,0,0,0,33,34,5,92,0,0,34,38,5,34,
0,0,35,36,5,92,0,0,36,38,5,92,0,0,37,33,1,0,0,0,37,35,1,0,0,0,38,4,1,0,0,
0,39,40,9,0,0,0,40,41,1,0,0,0,41,42,6,2,0,0,42,6,1,0,0,0,6,0,18,23,25,29,
37,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class ImportsLexer extends antlr4.Lexer {

    static grammarFileName = "Imports.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [  ];
	static symbolicNames = [ null, "IMPORT", "OTHER" ];
	static ruleNames = [ "IMPORT", "ESC", "OTHER" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

ImportsLexer.EOF = antlr4.Token.EOF;
ImportsLexer.IMPORT = 1;
ImportsLexer.OTHER = 2;



