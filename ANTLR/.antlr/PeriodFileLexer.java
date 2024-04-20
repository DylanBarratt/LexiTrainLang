// Generated from /home/dylan/Coding/LexiTrainLang/ANTLR/PeriodFile.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class PeriodFileLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, LT=8, GT=9, BW=10, 
		IMPORT=11, LOAD=12, NOTES=13, SPORT=14, IMPORTED=15, NUM=16, WORD=17, 
		LINE_COMMENT=18, WS=19;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "LT", "GT", "BW", 
			"IMPORT", "LOAD", "NOTES", "SPORT", "IMPORTED", "NUM", "WORD", "LINE_COMMENT", 
			"WS", "ESC"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "':'", "'.'", "'{'", "','", "'}'", "'*'", "'&&'", "'<'", "'>'", 
			"'-'", "'import'", "'load='", "'note='"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, "LT", "GT", "BW", "IMPORT", 
			"LOAD", "NOTES", "SPORT", "IMPORTED", "NUM", "WORD", "LINE_COMMENT", 
			"WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public PeriodFileLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "PeriodFile.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0013\u008b\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0001\u0000\u0001\u0000"+
		"\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003"+
		"\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001"+
		"\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001"+
		"\f\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000f\u0004\u000f[\b\u000f"+
		"\u000b\u000f\f\u000f\\\u0001\u0010\u0004\u0010`\b\u0010\u000b\u0010\f"+
		"\u0010a\u0001\u0010\u0001\u0010\u0001\u0010\u0005\u0010g\b\u0010\n\u0010"+
		"\f\u0010j\t\u0010\u0001\u0010\u0003\u0010m\b\u0010\u0001\u0011\u0001\u0011"+
		"\u0001\u0011\u0001\u0011\u0005\u0011s\b\u0011\n\u0011\f\u0011v\t\u0011"+
		"\u0001\u0011\u0003\u0011y\b\u0011\u0001\u0011\u0001\u0011\u0001\u0011"+
		"\u0001\u0011\u0001\u0012\u0004\u0012\u0080\b\u0012\u000b\u0012\f\u0012"+
		"\u0081\u0001\u0012\u0001\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0001"+
		"\u0013\u0003\u0013\u008a\b\u0013\u0002ht\u0000\u0014\u0001\u0001\u0003"+
		"\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011"+
		"\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010"+
		"!\u0011#\u0012%\u0013\'\u0000\u0001\u0000\u0003\u0001\u000009\u0004\u0000"+
		"/9AZ__az\u0003\u0000\t\n\r\r  \u0092\u0000\u0001\u0001\u0000\u0000\u0000"+
		"\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000"+
		"\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000"+
		"\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f"+
		"\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013"+
		"\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017"+
		"\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b"+
		"\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f"+
		"\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000\u0000#\u0001\u0000"+
		"\u0000\u0000\u0000%\u0001\u0000\u0000\u0000\u0001)\u0001\u0000\u0000\u0000"+
		"\u0003+\u0001\u0000\u0000\u0000\u0005-\u0001\u0000\u0000\u0000\u0007/"+
		"\u0001\u0000\u0000\u0000\t1\u0001\u0000\u0000\u0000\u000b3\u0001\u0000"+
		"\u0000\u0000\r5\u0001\u0000\u0000\u0000\u000f8\u0001\u0000\u0000\u0000"+
		"\u0011:\u0001\u0000\u0000\u0000\u0013<\u0001\u0000\u0000\u0000\u0015>"+
		"\u0001\u0000\u0000\u0000\u0017E\u0001\u0000\u0000\u0000\u0019K\u0001\u0000"+
		"\u0000\u0000\u001bQ\u0001\u0000\u0000\u0000\u001dU\u0001\u0000\u0000\u0000"+
		"\u001fZ\u0001\u0000\u0000\u0000!l\u0001\u0000\u0000\u0000#n\u0001\u0000"+
		"\u0000\u0000%\u007f\u0001\u0000\u0000\u0000\'\u0089\u0001\u0000\u0000"+
		"\u0000)*\u0005:\u0000\u0000*\u0002\u0001\u0000\u0000\u0000+,\u0005.\u0000"+
		"\u0000,\u0004\u0001\u0000\u0000\u0000-.\u0005{\u0000\u0000.\u0006\u0001"+
		"\u0000\u0000\u0000/0\u0005,\u0000\u00000\b\u0001\u0000\u0000\u000012\u0005"+
		"}\u0000\u00002\n\u0001\u0000\u0000\u000034\u0005*\u0000\u00004\f\u0001"+
		"\u0000\u0000\u000056\u0005&\u0000\u000067\u0005&\u0000\u00007\u000e\u0001"+
		"\u0000\u0000\u000089\u0005<\u0000\u00009\u0010\u0001\u0000\u0000\u0000"+
		":;\u0005>\u0000\u0000;\u0012\u0001\u0000\u0000\u0000<=\u0005-\u0000\u0000"+
		"=\u0014\u0001\u0000\u0000\u0000>?\u0005i\u0000\u0000?@\u0005m\u0000\u0000"+
		"@A\u0005p\u0000\u0000AB\u0005o\u0000\u0000BC\u0005r\u0000\u0000CD\u0005"+
		"t\u0000\u0000D\u0016\u0001\u0000\u0000\u0000EF\u0005l\u0000\u0000FG\u0005"+
		"o\u0000\u0000GH\u0005a\u0000\u0000HI\u0005d\u0000\u0000IJ\u0005=\u0000"+
		"\u0000J\u0018\u0001\u0000\u0000\u0000KL\u0005n\u0000\u0000LM\u0005o\u0000"+
		"\u0000MN\u0005t\u0000\u0000NO\u0005e\u0000\u0000OP\u0005=\u0000\u0000"+
		"P\u001a\u0001\u0000\u0000\u0000QR\u0005(\u0000\u0000RS\u0003!\u0010\u0000"+
		"ST\u0005)\u0000\u0000T\u001c\u0001\u0000\u0000\u0000UV\u0005[\u0000\u0000"+
		"VW\u0003!\u0010\u0000WX\u0005]\u0000\u0000X\u001e\u0001\u0000\u0000\u0000"+
		"Y[\u0007\u0000\u0000\u0000ZY\u0001\u0000\u0000\u0000[\\\u0001\u0000\u0000"+
		"\u0000\\Z\u0001\u0000\u0000\u0000\\]\u0001\u0000\u0000\u0000] \u0001\u0000"+
		"\u0000\u0000^`\u0007\u0001\u0000\u0000_^\u0001\u0000\u0000\u0000`a\u0001"+
		"\u0000\u0000\u0000a_\u0001\u0000\u0000\u0000ab\u0001\u0000\u0000\u0000"+
		"bm\u0001\u0000\u0000\u0000ch\u0005\"\u0000\u0000dg\u0003\'\u0013\u0000"+
		"eg\t\u0000\u0000\u0000fd\u0001\u0000\u0000\u0000fe\u0001\u0000\u0000\u0000"+
		"gj\u0001\u0000\u0000\u0000hi\u0001\u0000\u0000\u0000hf\u0001\u0000\u0000"+
		"\u0000ik\u0001\u0000\u0000\u0000jh\u0001\u0000\u0000\u0000km\u0005\"\u0000"+
		"\u0000l_\u0001\u0000\u0000\u0000lc\u0001\u0000\u0000\u0000m\"\u0001\u0000"+
		"\u0000\u0000no\u0005/\u0000\u0000op\u0005/\u0000\u0000pt\u0001\u0000\u0000"+
		"\u0000qs\t\u0000\u0000\u0000rq\u0001\u0000\u0000\u0000sv\u0001\u0000\u0000"+
		"\u0000tu\u0001\u0000\u0000\u0000tr\u0001\u0000\u0000\u0000ux\u0001\u0000"+
		"\u0000\u0000vt\u0001\u0000\u0000\u0000wy\u0005\r\u0000\u0000xw\u0001\u0000"+
		"\u0000\u0000xy\u0001\u0000\u0000\u0000yz\u0001\u0000\u0000\u0000z{\u0005"+
		"\n\u0000\u0000{|\u0001\u0000\u0000\u0000|}\u0006\u0011\u0000\u0000}$\u0001"+
		"\u0000\u0000\u0000~\u0080\u0007\u0002\u0000\u0000\u007f~\u0001\u0000\u0000"+
		"\u0000\u0080\u0081\u0001\u0000\u0000\u0000\u0081\u007f\u0001\u0000\u0000"+
		"\u0000\u0081\u0082\u0001\u0000\u0000\u0000\u0082\u0083\u0001\u0000\u0000"+
		"\u0000\u0083\u0084\u0006\u0012\u0000\u0000\u0084&\u0001\u0000\u0000\u0000"+
		"\u0085\u0086\u0005\\\u0000\u0000\u0086\u008a\u0005\"\u0000\u0000\u0087"+
		"\u0088\u0005\\\u0000\u0000\u0088\u008a\u0005\\\u0000\u0000\u0089\u0085"+
		"\u0001\u0000\u0000\u0000\u0089\u0087\u0001\u0000\u0000\u0000\u008a(\u0001"+
		"\u0000\u0000\u0000\n\u0000\\afhltx\u0081\u0089\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}