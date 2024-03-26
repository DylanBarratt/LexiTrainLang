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
		LT=1, GT=2, IMPORT=3, NUM=4, WORD=5, LOAD=6, SPORT=7, IMPORTED=8, LINE_COMMENT=9, 
		WS=10;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"LT", "GT", "IMPORT", "NUM", "WORD", "LOAD", "SPORT", "IMPORTED", "LINE_COMMENT", 
			"WS", "ESC"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'<'", "'>'", "'import'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "LT", "GT", "IMPORT", "NUM", "WORD", "LOAD", "SPORT", "IMPORTED", 
			"LINE_COMMENT", "WS"
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
		"\u0004\u0000\n`\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0001\u0000"+
		"\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0004\u0003"+
		"$\b\u0003\u000b\u0003\f\u0003%\u0001\u0004\u0004\u0004)\b\u0004\u000b"+
		"\u0004\f\u0004*\u0001\u0004\u0001\u0004\u0001\u0004\u0005\u00040\b\u0004"+
		"\n\u0004\f\u00043\t\u0004\u0001\u0004\u0003\u00046\b\u0004\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0005\bH\b\b\n\b\f\bK\t\b\u0001\b\u0003\bN\b\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\t\u0004\tU\b\t\u000b\t\f\tV\u0001\t\u0001"+
		"\t\u0001\n\u0001\n\u0001\n\u0001\n\u0003\n_\b\n\u00021I\u0000\u000b\u0001"+
		"\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007"+
		"\u000f\b\u0011\t\u0013\n\u0015\u0000\u0001\u0000\u0003\u0001\u000009\u0004"+
		"\u0000/9AZ__az\u0003\u0000\t\n\r\r  g\u0000\u0001\u0001\u0000\u0000\u0000"+
		"\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000"+
		"\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000"+
		"\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f"+
		"\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013"+
		"\u0001\u0000\u0000\u0000\u0001\u0017\u0001\u0000\u0000\u0000\u0003\u0019"+
		"\u0001\u0000\u0000\u0000\u0005\u001b\u0001\u0000\u0000\u0000\u0007#\u0001"+
		"\u0000\u0000\u0000\t5\u0001\u0000\u0000\u0000\u000b7\u0001\u0000\u0000"+
		"\u0000\r;\u0001\u0000\u0000\u0000\u000f?\u0001\u0000\u0000\u0000\u0011"+
		"C\u0001\u0000\u0000\u0000\u0013T\u0001\u0000\u0000\u0000\u0015^\u0001"+
		"\u0000\u0000\u0000\u0017\u0018\u0005<\u0000\u0000\u0018\u0002\u0001\u0000"+
		"\u0000\u0000\u0019\u001a\u0005>\u0000\u0000\u001a\u0004\u0001\u0000\u0000"+
		"\u0000\u001b\u001c\u0005i\u0000\u0000\u001c\u001d\u0005m\u0000\u0000\u001d"+
		"\u001e\u0005p\u0000\u0000\u001e\u001f\u0005o\u0000\u0000\u001f \u0005"+
		"r\u0000\u0000 !\u0005t\u0000\u0000!\u0006\u0001\u0000\u0000\u0000\"$\u0007"+
		"\u0000\u0000\u0000#\"\u0001\u0000\u0000\u0000$%\u0001\u0000\u0000\u0000"+
		"%#\u0001\u0000\u0000\u0000%&\u0001\u0000\u0000\u0000&\b\u0001\u0000\u0000"+
		"\u0000\')\u0007\u0001\u0000\u0000(\'\u0001\u0000\u0000\u0000)*\u0001\u0000"+
		"\u0000\u0000*(\u0001\u0000\u0000\u0000*+\u0001\u0000\u0000\u0000+6\u0001"+
		"\u0000\u0000\u0000,1\u0005\"\u0000\u0000-0\u0003\u0015\n\u0000.0\t\u0000"+
		"\u0000\u0000/-\u0001\u0000\u0000\u0000/.\u0001\u0000\u0000\u000003\u0001"+
		"\u0000\u0000\u000012\u0001\u0000\u0000\u00001/\u0001\u0000\u0000\u0000"+
		"24\u0001\u0000\u0000\u000031\u0001\u0000\u0000\u000046\u0005\"\u0000\u0000"+
		"5(\u0001\u0000\u0000\u00005,\u0001\u0000\u0000\u00006\n\u0001\u0000\u0000"+
		"\u000078\u0003\t\u0004\u000089\u0005=\u0000\u00009:\u0003\u0007\u0003"+
		"\u0000:\f\u0001\u0000\u0000\u0000;<\u0005(\u0000\u0000<=\u0003\t\u0004"+
		"\u0000=>\u0005)\u0000\u0000>\u000e\u0001\u0000\u0000\u0000?@\u0005[\u0000"+
		"\u0000@A\u0003\t\u0004\u0000AB\u0005]\u0000\u0000B\u0010\u0001\u0000\u0000"+
		"\u0000CD\u0005/\u0000\u0000DE\u0005/\u0000\u0000EI\u0001\u0000\u0000\u0000"+
		"FH\t\u0000\u0000\u0000GF\u0001\u0000\u0000\u0000HK\u0001\u0000\u0000\u0000"+
		"IJ\u0001\u0000\u0000\u0000IG\u0001\u0000\u0000\u0000JM\u0001\u0000\u0000"+
		"\u0000KI\u0001\u0000\u0000\u0000LN\u0005\r\u0000\u0000ML\u0001\u0000\u0000"+
		"\u0000MN\u0001\u0000\u0000\u0000NO\u0001\u0000\u0000\u0000OP\u0005\n\u0000"+
		"\u0000PQ\u0001\u0000\u0000\u0000QR\u0006\b\u0000\u0000R\u0012\u0001\u0000"+
		"\u0000\u0000SU\u0007\u0002\u0000\u0000TS\u0001\u0000\u0000\u0000UV\u0001"+
		"\u0000\u0000\u0000VT\u0001\u0000\u0000\u0000VW\u0001\u0000\u0000\u0000"+
		"WX\u0001\u0000\u0000\u0000XY\u0006\t\u0000\u0000Y\u0014\u0001\u0000\u0000"+
		"\u0000Z[\u0005\\\u0000\u0000[_\u0005\"\u0000\u0000\\]\u0005\\\u0000\u0000"+
		"]_\u0005\\\u0000\u0000^Z\u0001\u0000\u0000\u0000^\\\u0001\u0000\u0000"+
		"\u0000_\u0016\u0001\u0000\u0000\u0000\n\u0000%*/15IMV^\u0001\u0006\u0000"+
		"\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}