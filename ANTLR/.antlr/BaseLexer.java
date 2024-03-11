// Generated from /home/dylan/Coding/LexiTrainLang/ANTLR/BaseLexer.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class BaseLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		LT=1, GT=2, NUM=3, WORD=4, LOAD=5, SPORT=6, LINE_COMMENT=7, WS=8;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"LT", "GT", "NUM", "WORD", "LOAD", "SPORT", "LINE_COMMENT", "WS", "ESC"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'<'", "'>'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "LT", "GT", "NUM", "WORD", "LOAD", "SPORT", "LINE_COMMENT", "WS"
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


	public BaseLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "BaseLexer.g4"; }

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
		"\u0004\u0000\bQ\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0001\u0000\u0001\u0000\u0001\u0001\u0001"+
		"\u0001\u0001\u0002\u0004\u0002\u0019\b\u0002\u000b\u0002\f\u0002\u001a"+
		"\u0001\u0003\u0004\u0003\u001e\b\u0003\u000b\u0003\f\u0003\u001f\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0005\u0003%\b\u0003\n\u0003\f\u0003(\t"+
		"\u0003\u0001\u0003\u0003\u0003+\b\u0003\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0005\u00069\b\u0006\n\u0006"+
		"\f\u0006<\t\u0006\u0001\u0006\u0003\u0006?\b\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0007\u0004\u0007F\b\u0007\u000b\u0007"+
		"\f\u0007G\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0003"+
		"\bP\b\b\u0002&:\u0000\t\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004"+
		"\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\u0000\u0001\u0000\u0003\u0001"+
		"\u000009\u0004\u000009AZ__az\u0003\u0000\t\n\r\r  X\u0000\u0001\u0001"+
		"\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001"+
		"\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000"+
		"\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000"+
		"\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0001\u0013\u0001\u0000\u0000"+
		"\u0000\u0003\u0015\u0001\u0000\u0000\u0000\u0005\u0018\u0001\u0000\u0000"+
		"\u0000\u0007*\u0001\u0000\u0000\u0000\t,\u0001\u0000\u0000\u0000\u000b"+
		"0\u0001\u0000\u0000\u0000\r4\u0001\u0000\u0000\u0000\u000fE\u0001\u0000"+
		"\u0000\u0000\u0011O\u0001\u0000\u0000\u0000\u0013\u0014\u0005<\u0000\u0000"+
		"\u0014\u0002\u0001\u0000\u0000\u0000\u0015\u0016\u0005>\u0000\u0000\u0016"+
		"\u0004\u0001\u0000\u0000\u0000\u0017\u0019\u0007\u0000\u0000\u0000\u0018"+
		"\u0017\u0001\u0000\u0000\u0000\u0019\u001a\u0001\u0000\u0000\u0000\u001a"+
		"\u0018\u0001\u0000\u0000\u0000\u001a\u001b\u0001\u0000\u0000\u0000\u001b"+
		"\u0006\u0001\u0000\u0000\u0000\u001c\u001e\u0007\u0001\u0000\u0000\u001d"+
		"\u001c\u0001\u0000\u0000\u0000\u001e\u001f\u0001\u0000\u0000\u0000\u001f"+
		"\u001d\u0001\u0000\u0000\u0000\u001f \u0001\u0000\u0000\u0000 +\u0001"+
		"\u0000\u0000\u0000!&\u0005\"\u0000\u0000\"%\u0003\u0011\b\u0000#%\t\u0000"+
		"\u0000\u0000$\"\u0001\u0000\u0000\u0000$#\u0001\u0000\u0000\u0000%(\u0001"+
		"\u0000\u0000\u0000&\'\u0001\u0000\u0000\u0000&$\u0001\u0000\u0000\u0000"+
		"\')\u0001\u0000\u0000\u0000(&\u0001\u0000\u0000\u0000)+\u0005\"\u0000"+
		"\u0000*\u001d\u0001\u0000\u0000\u0000*!\u0001\u0000\u0000\u0000+\b\u0001"+
		"\u0000\u0000\u0000,-\u0003\u0007\u0003\u0000-.\u0005=\u0000\u0000./\u0003"+
		"\u0005\u0002\u0000/\n\u0001\u0000\u0000\u000001\u0005(\u0000\u000012\u0003"+
		"\u0007\u0003\u000023\u0005)\u0000\u00003\f\u0001\u0000\u0000\u000045\u0005"+
		"/\u0000\u000056\u0005/\u0000\u00006:\u0001\u0000\u0000\u000079\t\u0000"+
		"\u0000\u000087\u0001\u0000\u0000\u00009<\u0001\u0000\u0000\u0000:;\u0001"+
		"\u0000\u0000\u0000:8\u0001\u0000\u0000\u0000;>\u0001\u0000\u0000\u0000"+
		"<:\u0001\u0000\u0000\u0000=?\u0005\r\u0000\u0000>=\u0001\u0000\u0000\u0000"+
		">?\u0001\u0000\u0000\u0000?@\u0001\u0000\u0000\u0000@A\u0005\n\u0000\u0000"+
		"AB\u0001\u0000\u0000\u0000BC\u0006\u0006\u0000\u0000C\u000e\u0001\u0000"+
		"\u0000\u0000DF\u0007\u0002\u0000\u0000ED\u0001\u0000\u0000\u0000FG\u0001"+
		"\u0000\u0000\u0000GE\u0001\u0000\u0000\u0000GH\u0001\u0000\u0000\u0000"+
		"HI\u0001\u0000\u0000\u0000IJ\u0006\u0007\u0000\u0000J\u0010\u0001\u0000"+
		"\u0000\u0000KL\u0005\\\u0000\u0000LP\u0005\"\u0000\u0000MN\u0005\\\u0000"+
		"\u0000NP\u0005\\\u0000\u0000OK\u0001\u0000\u0000\u0000OM\u0001\u0000\u0000"+
		"\u0000P\u0012\u0001\u0000\u0000\u0000\n\u0000\u001a\u001f$&*:>GO\u0001"+
		"\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}