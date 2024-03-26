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
		GT=10, IMPORT=11, NUM=12, WORD=13, LOAD=14, SPORT=15, LINE_COMMENT=16, 
		WS=17;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "LT", 
			"GT", "IMPORT", "NUM", "WORD", "LOAD", "SPORT", "LINE_COMMENT", "WS", 
			"ESC"
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
			"NUM", "WORD", "LOAD", "SPORT", "LINE_COMMENT", "WS"
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
		"\u0004\u0000\u0011{\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0001"+
		"\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001"+
		"\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b"+
		"\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\u000b\u0004\u000bC\b\u000b\u000b\u000b\f\u000bD\u0001\f\u0004"+
		"\fH\b\f\u000b\f\f\fI\u0001\f\u0001\f\u0001\f\u0005\fO\b\f\n\f\f\fR\t\f"+
		"\u0001\f\u0003\fU\b\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001\u000e\u0001"+
		"\u000e\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0001"+
		"\u000f\u0005\u000fc\b\u000f\n\u000f\f\u000ff\t\u000f\u0001\u000f\u0003"+
		"\u000fi\b\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001"+
		"\u0010\u0004\u0010p\b\u0010\u000b\u0010\f\u0010q\u0001\u0010\u0001\u0010"+
		"\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0003\u0011z\b\u0011"+
		"\u0002Pd\u0000\u0012\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t"+
		"\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f"+
		"\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011#\u0000\u0001\u0000"+
		"\u0003\u0001\u000009\u0004\u0000/9AZ__az\u0003\u0000\t\n\r\r  \u0082\u0000"+
		"\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000"+
		"\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000"+
		"\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r"+
		"\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011"+
		"\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015"+
		"\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019"+
		"\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d"+
		"\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001"+
		"\u0000\u0000\u0000\u0001%\u0001\u0000\u0000\u0000\u0003\'\u0001\u0000"+
		"\u0000\u0000\u0005)\u0001\u0000\u0000\u0000\u0007+\u0001\u0000\u0000\u0000"+
		"\t-\u0001\u0000\u0000\u0000\u000b/\u0001\u0000\u0000\u0000\r2\u0001\u0000"+
		"\u0000\u0000\u000f4\u0001\u0000\u0000\u0000\u00116\u0001\u0000\u0000\u0000"+
		"\u00138\u0001\u0000\u0000\u0000\u0015:\u0001\u0000\u0000\u0000\u0017B"+
		"\u0001\u0000\u0000\u0000\u0019T\u0001\u0000\u0000\u0000\u001bV\u0001\u0000"+
		"\u0000\u0000\u001dZ\u0001\u0000\u0000\u0000\u001f^\u0001\u0000\u0000\u0000"+
		"!o\u0001\u0000\u0000\u0000#y\u0001\u0000\u0000\u0000%&\u0005:\u0000\u0000"+
		"&\u0002\u0001\u0000\u0000\u0000\'(\u0005.\u0000\u0000(\u0004\u0001\u0000"+
		"\u0000\u0000)*\u0005{\u0000\u0000*\u0006\u0001\u0000\u0000\u0000+,\u0005"+
		",\u0000\u0000,\b\u0001\u0000\u0000\u0000-.\u0005}\u0000\u0000.\n\u0001"+
		"\u0000\u0000\u0000/0\u0005&\u0000\u000001\u0005&\u0000\u00001\f\u0001"+
		"\u0000\u0000\u000023\u0005*\u0000\u00003\u000e\u0001\u0000\u0000\u0000"+
		"45\u0005-\u0000\u00005\u0010\u0001\u0000\u0000\u000067\u0005<\u0000\u0000"+
		"7\u0012\u0001\u0000\u0000\u000089\u0005>\u0000\u00009\u0014\u0001\u0000"+
		"\u0000\u0000:;\u0005i\u0000\u0000;<\u0005m\u0000\u0000<=\u0005p\u0000"+
		"\u0000=>\u0005o\u0000\u0000>?\u0005r\u0000\u0000?@\u0005t\u0000\u0000"+
		"@\u0016\u0001\u0000\u0000\u0000AC\u0007\u0000\u0000\u0000BA\u0001\u0000"+
		"\u0000\u0000CD\u0001\u0000\u0000\u0000DB\u0001\u0000\u0000\u0000DE\u0001"+
		"\u0000\u0000\u0000E\u0018\u0001\u0000\u0000\u0000FH\u0007\u0001\u0000"+
		"\u0000GF\u0001\u0000\u0000\u0000HI\u0001\u0000\u0000\u0000IG\u0001\u0000"+
		"\u0000\u0000IJ\u0001\u0000\u0000\u0000JU\u0001\u0000\u0000\u0000KP\u0005"+
		"\"\u0000\u0000LO\u0003#\u0011\u0000MO\t\u0000\u0000\u0000NL\u0001\u0000"+
		"\u0000\u0000NM\u0001\u0000\u0000\u0000OR\u0001\u0000\u0000\u0000PQ\u0001"+
		"\u0000\u0000\u0000PN\u0001\u0000\u0000\u0000QS\u0001\u0000\u0000\u0000"+
		"RP\u0001\u0000\u0000\u0000SU\u0005\"\u0000\u0000TG\u0001\u0000\u0000\u0000"+
		"TK\u0001\u0000\u0000\u0000U\u001a\u0001\u0000\u0000\u0000VW\u0003\u0019"+
		"\f\u0000WX\u0005=\u0000\u0000XY\u0003\u0017\u000b\u0000Y\u001c\u0001\u0000"+
		"\u0000\u0000Z[\u0005(\u0000\u0000[\\\u0003\u0019\f\u0000\\]\u0005)\u0000"+
		"\u0000]\u001e\u0001\u0000\u0000\u0000^_\u0005/\u0000\u0000_`\u0005/\u0000"+
		"\u0000`d\u0001\u0000\u0000\u0000ac\t\u0000\u0000\u0000ba\u0001\u0000\u0000"+
		"\u0000cf\u0001\u0000\u0000\u0000de\u0001\u0000\u0000\u0000db\u0001\u0000"+
		"\u0000\u0000eh\u0001\u0000\u0000\u0000fd\u0001\u0000\u0000\u0000gi\u0005"+
		"\r\u0000\u0000hg\u0001\u0000\u0000\u0000hi\u0001\u0000\u0000\u0000ij\u0001"+
		"\u0000\u0000\u0000jk\u0005\n\u0000\u0000kl\u0001\u0000\u0000\u0000lm\u0006"+
		"\u000f\u0000\u0000m \u0001\u0000\u0000\u0000np\u0007\u0002\u0000\u0000"+
		"on\u0001\u0000\u0000\u0000pq\u0001\u0000\u0000\u0000qo\u0001\u0000\u0000"+
		"\u0000qr\u0001\u0000\u0000\u0000rs\u0001\u0000\u0000\u0000st\u0006\u0010"+
		"\u0000\u0000t\"\u0001\u0000\u0000\u0000uv\u0005\\\u0000\u0000vz\u0005"+
		"\"\u0000\u0000wx\u0005\\\u0000\u0000xz\u0005\\\u0000\u0000yu\u0001\u0000"+
		"\u0000\u0000yw\u0001\u0000\u0000\u0000z$\u0001\u0000\u0000\u0000\n\u0000"+
		"DINPTdhqy\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}