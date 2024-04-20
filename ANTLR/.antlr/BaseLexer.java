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
		LT=1, GT=2, BW=3, IMPORT=4, LOAD=5, NOTES=6, SPORT=7, IMPORTED=8, NUM=9, 
		WORD=10, LINE_COMMENT=11, WS=12;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"LT", "GT", "BW", "IMPORT", "LOAD", "NOTES", "SPORT", "IMPORTED", "NUM", 
			"WORD", "LINE_COMMENT", "WS", "ESC"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'<'", "'>'", "'-'", "'import'", "'load='", "'note='"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "LT", "GT", "BW", "IMPORT", "LOAD", "NOTES", "SPORT", "IMPORTED", 
			"NUM", "WORD", "LINE_COMMENT", "WS"
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
		"\u0004\u0000\fn\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0001\u0000\u0001\u0000\u0001\u0001\u0001"+
		"\u0001\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\b\u0004\b>\b\b\u000b\b\f\b?\u0001\t\u0004\tC\b\t\u000b\t\f\tD\u0001\t"+
		"\u0001\t\u0001\t\u0005\tJ\b\t\n\t\f\tM\t\t\u0001\t\u0003\tP\b\t\u0001"+
		"\n\u0001\n\u0001\n\u0001\n\u0005\nV\b\n\n\n\f\nY\t\n\u0001\n\u0003\n\\"+
		"\b\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\u000b\u0004\u000bc\b\u000b"+
		"\u000b\u000b\f\u000bd\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f"+
		"\u0001\f\u0003\fm\b\f\u0002KW\u0000\r\u0001\u0001\u0003\u0002\u0005\u0003"+
		"\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015"+
		"\u000b\u0017\f\u0019\u0000\u0001\u0000\u0003\u0001\u000009\u0004\u0000"+
		"/9AZ__az\u0003\u0000\t\n\r\r  u\u0000\u0001\u0001\u0000\u0000\u0000\u0000"+
		"\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000"+
		"\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b"+
		"\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001"+
		"\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001"+
		"\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001"+
		"\u0000\u0000\u0000\u0001\u001b\u0001\u0000\u0000\u0000\u0003\u001d\u0001"+
		"\u0000\u0000\u0000\u0005\u001f\u0001\u0000\u0000\u0000\u0007!\u0001\u0000"+
		"\u0000\u0000\t(\u0001\u0000\u0000\u0000\u000b.\u0001\u0000\u0000\u0000"+
		"\r4\u0001\u0000\u0000\u0000\u000f8\u0001\u0000\u0000\u0000\u0011=\u0001"+
		"\u0000\u0000\u0000\u0013O\u0001\u0000\u0000\u0000\u0015Q\u0001\u0000\u0000"+
		"\u0000\u0017b\u0001\u0000\u0000\u0000\u0019l\u0001\u0000\u0000\u0000\u001b"+
		"\u001c\u0005<\u0000\u0000\u001c\u0002\u0001\u0000\u0000\u0000\u001d\u001e"+
		"\u0005>\u0000\u0000\u001e\u0004\u0001\u0000\u0000\u0000\u001f \u0005-"+
		"\u0000\u0000 \u0006\u0001\u0000\u0000\u0000!\"\u0005i\u0000\u0000\"#\u0005"+
		"m\u0000\u0000#$\u0005p\u0000\u0000$%\u0005o\u0000\u0000%&\u0005r\u0000"+
		"\u0000&\'\u0005t\u0000\u0000\'\b\u0001\u0000\u0000\u0000()\u0005l\u0000"+
		"\u0000)*\u0005o\u0000\u0000*+\u0005a\u0000\u0000+,\u0005d\u0000\u0000"+
		",-\u0005=\u0000\u0000-\n\u0001\u0000\u0000\u0000./\u0005n\u0000\u0000"+
		"/0\u0005o\u0000\u000001\u0005t\u0000\u000012\u0005e\u0000\u000023\u0005"+
		"=\u0000\u00003\f\u0001\u0000\u0000\u000045\u0005(\u0000\u000056\u0003"+
		"\u0013\t\u000067\u0005)\u0000\u00007\u000e\u0001\u0000\u0000\u000089\u0005"+
		"[\u0000\u00009:\u0003\u0013\t\u0000:;\u0005]\u0000\u0000;\u0010\u0001"+
		"\u0000\u0000\u0000<>\u0007\u0000\u0000\u0000=<\u0001\u0000\u0000\u0000"+
		">?\u0001\u0000\u0000\u0000?=\u0001\u0000\u0000\u0000?@\u0001\u0000\u0000"+
		"\u0000@\u0012\u0001\u0000\u0000\u0000AC\u0007\u0001\u0000\u0000BA\u0001"+
		"\u0000\u0000\u0000CD\u0001\u0000\u0000\u0000DB\u0001\u0000\u0000\u0000"+
		"DE\u0001\u0000\u0000\u0000EP\u0001\u0000\u0000\u0000FK\u0005\"\u0000\u0000"+
		"GJ\u0003\u0019\f\u0000HJ\t\u0000\u0000\u0000IG\u0001\u0000\u0000\u0000"+
		"IH\u0001\u0000\u0000\u0000JM\u0001\u0000\u0000\u0000KL\u0001\u0000\u0000"+
		"\u0000KI\u0001\u0000\u0000\u0000LN\u0001\u0000\u0000\u0000MK\u0001\u0000"+
		"\u0000\u0000NP\u0005\"\u0000\u0000OB\u0001\u0000\u0000\u0000OF\u0001\u0000"+
		"\u0000\u0000P\u0014\u0001\u0000\u0000\u0000QR\u0005/\u0000\u0000RS\u0005"+
		"/\u0000\u0000SW\u0001\u0000\u0000\u0000TV\t\u0000\u0000\u0000UT\u0001"+
		"\u0000\u0000\u0000VY\u0001\u0000\u0000\u0000WX\u0001\u0000\u0000\u0000"+
		"WU\u0001\u0000\u0000\u0000X[\u0001\u0000\u0000\u0000YW\u0001\u0000\u0000"+
		"\u0000Z\\\u0005\r\u0000\u0000[Z\u0001\u0000\u0000\u0000[\\\u0001\u0000"+
		"\u0000\u0000\\]\u0001\u0000\u0000\u0000]^\u0005\n\u0000\u0000^_\u0001"+
		"\u0000\u0000\u0000_`\u0006\n\u0000\u0000`\u0016\u0001\u0000\u0000\u0000"+
		"ac\u0007\u0002\u0000\u0000ba\u0001\u0000\u0000\u0000cd\u0001\u0000\u0000"+
		"\u0000db\u0001\u0000\u0000\u0000de\u0001\u0000\u0000\u0000ef\u0001\u0000"+
		"\u0000\u0000fg\u0006\u000b\u0000\u0000g\u0018\u0001\u0000\u0000\u0000"+
		"hi\u0005\\\u0000\u0000im\u0005\"\u0000\u0000jk\u0005\\\u0000\u0000km\u0005"+
		"\\\u0000\u0000lh\u0001\u0000\u0000\u0000lj\u0001\u0000\u0000\u0000m\u001a"+
		"\u0001\u0000\u0000\u0000\n\u0000?DIKOW[dl\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}