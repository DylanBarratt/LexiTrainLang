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
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, LT=9, 
		GT=10, IMPORT=11, NUM=12, WORD=13, LOAD=14, SPORT=15, IMPORTED=16, LINE_COMMENT=17, 
		WS=18;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "LT", 
			"GT", "IMPORT", "NUM", "WORD", "LOAD", "SPORT", "IMPORTED", "LINE_COMMENT", 
			"WS", "ESC"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "':'", "'.'", "'{'", "','", "'}'", "'&&'", "'*'", "'-'", "'<'", 
			"'>'", "'import'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, "LT", "GT", "IMPORT", 
			"NUM", "WORD", "LOAD", "SPORT", "IMPORTED", "LINE_COMMENT", "WS"
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
		"\u0004\u0000\u0012\u0081\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001"+
		"\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0007"+
		"\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0001\n\u0001\n\u0001\u000b\u0004\u000bE\b\u000b\u000b\u000b"+
		"\f\u000bF\u0001\f\u0004\fJ\b\f\u000b\f\f\fK\u0001\f\u0001\f\u0001\f\u0005"+
		"\fQ\b\f\n\f\f\fT\t\f\u0001\f\u0003\fW\b\f\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f"+
		"\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0005\u0010i\b\u0010\n\u0010\f\u0010l\t\u0010\u0001\u0010\u0003\u0010"+
		"o\b\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0011"+
		"\u0004\u0011v\b\u0011\u000b\u0011\f\u0011w\u0001\u0011\u0001\u0011\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0003\u0012\u0080\b\u0012\u0002"+
		"Rj\u0000\u0013\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005"+
		"\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019"+
		"\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011#\u0012%\u0000\u0001\u0000"+
		"\u0003\u0001\u000009\u0004\u0000/9AZ__az\u0003\u0000\t\n\r\r  \u0088\u0000"+
		"\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000"+
		"\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000"+
		"\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r"+
		"\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011"+
		"\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015"+
		"\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019"+
		"\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d"+
		"\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001"+
		"\u0000\u0000\u0000\u0000#\u0001\u0000\u0000\u0000\u0001\'\u0001\u0000"+
		"\u0000\u0000\u0003)\u0001\u0000\u0000\u0000\u0005+\u0001\u0000\u0000\u0000"+
		"\u0007-\u0001\u0000\u0000\u0000\t/\u0001\u0000\u0000\u0000\u000b1\u0001"+
		"\u0000\u0000\u0000\r4\u0001\u0000\u0000\u0000\u000f6\u0001\u0000\u0000"+
		"\u0000\u00118\u0001\u0000\u0000\u0000\u0013:\u0001\u0000\u0000\u0000\u0015"+
		"<\u0001\u0000\u0000\u0000\u0017D\u0001\u0000\u0000\u0000\u0019V\u0001"+
		"\u0000\u0000\u0000\u001bX\u0001\u0000\u0000\u0000\u001d\\\u0001\u0000"+
		"\u0000\u0000\u001f`\u0001\u0000\u0000\u0000!d\u0001\u0000\u0000\u0000"+
		"#u\u0001\u0000\u0000\u0000%\u007f\u0001\u0000\u0000\u0000\'(\u0005:\u0000"+
		"\u0000(\u0002\u0001\u0000\u0000\u0000)*\u0005.\u0000\u0000*\u0004\u0001"+
		"\u0000\u0000\u0000+,\u0005{\u0000\u0000,\u0006\u0001\u0000\u0000\u0000"+
		"-.\u0005,\u0000\u0000.\b\u0001\u0000\u0000\u0000/0\u0005}\u0000\u0000"+
		"0\n\u0001\u0000\u0000\u000012\u0005&\u0000\u000023\u0005&\u0000\u0000"+
		"3\f\u0001\u0000\u0000\u000045\u0005*\u0000\u00005\u000e\u0001\u0000\u0000"+
		"\u000067\u0005-\u0000\u00007\u0010\u0001\u0000\u0000\u000089\u0005<\u0000"+
		"\u00009\u0012\u0001\u0000\u0000\u0000:;\u0005>\u0000\u0000;\u0014\u0001"+
		"\u0000\u0000\u0000<=\u0005i\u0000\u0000=>\u0005m\u0000\u0000>?\u0005p"+
		"\u0000\u0000?@\u0005o\u0000\u0000@A\u0005r\u0000\u0000AB\u0005t\u0000"+
		"\u0000B\u0016\u0001\u0000\u0000\u0000CE\u0007\u0000\u0000\u0000DC\u0001"+
		"\u0000\u0000\u0000EF\u0001\u0000\u0000\u0000FD\u0001\u0000\u0000\u0000"+
		"FG\u0001\u0000\u0000\u0000G\u0018\u0001\u0000\u0000\u0000HJ\u0007\u0001"+
		"\u0000\u0000IH\u0001\u0000\u0000\u0000JK\u0001\u0000\u0000\u0000KI\u0001"+
		"\u0000\u0000\u0000KL\u0001\u0000\u0000\u0000LW\u0001\u0000\u0000\u0000"+
		"MR\u0005\"\u0000\u0000NQ\u0003%\u0012\u0000OQ\t\u0000\u0000\u0000PN\u0001"+
		"\u0000\u0000\u0000PO\u0001\u0000\u0000\u0000QT\u0001\u0000\u0000\u0000"+
		"RS\u0001\u0000\u0000\u0000RP\u0001\u0000\u0000\u0000SU\u0001\u0000\u0000"+
		"\u0000TR\u0001\u0000\u0000\u0000UW\u0005\"\u0000\u0000VI\u0001\u0000\u0000"+
		"\u0000VM\u0001\u0000\u0000\u0000W\u001a\u0001\u0000\u0000\u0000XY\u0003"+
		"\u0019\f\u0000YZ\u0005=\u0000\u0000Z[\u0003\u0017\u000b\u0000[\u001c\u0001"+
		"\u0000\u0000\u0000\\]\u0005(\u0000\u0000]^\u0003\u0019\f\u0000^_\u0005"+
		")\u0000\u0000_\u001e\u0001\u0000\u0000\u0000`a\u0005[\u0000\u0000ab\u0003"+
		"\u0019\f\u0000bc\u0005]\u0000\u0000c \u0001\u0000\u0000\u0000de\u0005"+
		"/\u0000\u0000ef\u0005/\u0000\u0000fj\u0001\u0000\u0000\u0000gi\t\u0000"+
		"\u0000\u0000hg\u0001\u0000\u0000\u0000il\u0001\u0000\u0000\u0000jk\u0001"+
		"\u0000\u0000\u0000jh\u0001\u0000\u0000\u0000kn\u0001\u0000\u0000\u0000"+
		"lj\u0001\u0000\u0000\u0000mo\u0005\r\u0000\u0000nm\u0001\u0000\u0000\u0000"+
		"no\u0001\u0000\u0000\u0000op\u0001\u0000\u0000\u0000pq\u0005\n\u0000\u0000"+
		"qr\u0001\u0000\u0000\u0000rs\u0006\u0010\u0000\u0000s\"\u0001\u0000\u0000"+
		"\u0000tv\u0007\u0002\u0000\u0000ut\u0001\u0000\u0000\u0000vw\u0001\u0000"+
		"\u0000\u0000wu\u0001\u0000\u0000\u0000wx\u0001\u0000\u0000\u0000xy\u0001"+
		"\u0000\u0000\u0000yz\u0006\u0011\u0000\u0000z$\u0001\u0000\u0000\u0000"+
		"{|\u0005\\\u0000\u0000|\u0080\u0005\"\u0000\u0000}~\u0005\\\u0000\u0000"+
		"~\u0080\u0005\\\u0000\u0000\u007f{\u0001\u0000\u0000\u0000\u007f}\u0001"+
		"\u0000\u0000\u0000\u0080&\u0001\u0000\u0000\u0000\n\u0000FKPRVjnw\u007f"+
		"\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}