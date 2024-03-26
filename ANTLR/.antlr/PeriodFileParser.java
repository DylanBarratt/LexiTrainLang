// Generated from /home/dylan/Coding/LexiTrainLang/ANTLR/PeriodFile.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class PeriodFileParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, LT=9, 
		GT=10, IMPORT=11, NUM=12, WORD=13, LOAD=14, SPORT=15, LINE_COMMENT=16, 
		WS=17;
	public static final int
		RULE_file = 0, RULE_metaData = 1, RULE_sessionImport = 2, RULE_periods = 3, 
		RULE_period = 4, RULE_periodPair = 5, RULE_data = 6, RULE_workouts = 7, 
		RULE_workout = 8, RULE_session = 9, RULE_sessionSection = 10, RULE_workloads = 11, 
		RULE_workload = 12;
	private static String[] makeRuleNames() {
		return new String[] {
			"file", "metaData", "sessionImport", "periods", "period", "periodPair", 
			"data", "workouts", "workout", "session", "sessionSection", "workloads", 
			"workload"
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

	@Override
	public String getGrammarFileName() { return "PeriodFile.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public PeriodFileParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FileContext extends ParserRuleContext {
		public PeriodsContext periods() {
			return getRuleContext(PeriodsContext.class,0);
		}
		public TerminalNode EOF() { return getToken(PeriodFileParser.EOF, 0); }
		public List<MetaDataContext> metaData() {
			return getRuleContexts(MetaDataContext.class);
		}
		public MetaDataContext metaData(int i) {
			return getRuleContext(MetaDataContext.class,i);
		}
		public List<SessionImportContext> sessionImport() {
			return getRuleContexts(SessionImportContext.class);
		}
		public SessionImportContext sessionImport(int i) {
			return getRuleContext(SessionImportContext.class,i);
		}
		public FileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_file; }
	}

	public final FileContext file() throws RecognitionException {
		FileContext _localctx = new FileContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_file);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(29);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(26);
					metaData();
					}
					} 
				}
				setState(31);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			}
			setState(35);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==IMPORT) {
				{
				{
				setState(32);
				sessionImport();
				}
				}
				setState(37);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(38);
			periods();
			setState(39);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MetaDataContext extends ParserRuleContext {
		public List<TerminalNode> WORD() { return getTokens(PeriodFileParser.WORD); }
		public TerminalNode WORD(int i) {
			return getToken(PeriodFileParser.WORD, i);
		}
		public MetaDataContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_metaData; }
	}

	public final MetaDataContext metaData() throws RecognitionException {
		MetaDataContext _localctx = new MetaDataContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_metaData);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(41);
			match(WORD);
			setState(42);
			match(T__0);
			setState(43);
			match(WORD);
			setState(44);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SessionImportContext extends ParserRuleContext {
		public TerminalNode IMPORT() { return getToken(PeriodFileParser.IMPORT, 0); }
		public TerminalNode WORD() { return getToken(PeriodFileParser.WORD, 0); }
		public SessionImportContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sessionImport; }
	}

	public final SessionImportContext sessionImport() throws RecognitionException {
		SessionImportContext _localctx = new SessionImportContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_sessionImport);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(46);
			match(IMPORT);
			setState(47);
			match(WORD);
			setState(48);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PeriodsContext extends ParserRuleContext {
		public List<PeriodContext> period() {
			return getRuleContexts(PeriodContext.class);
		}
		public PeriodContext period(int i) {
			return getRuleContext(PeriodContext.class,i);
		}
		public PeriodsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_periods; }
	}

	public final PeriodsContext periods() throws RecognitionException {
		PeriodsContext _localctx = new PeriodsContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_periods);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(51); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(50);
				period();
				}
				}
				setState(53); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==WORD );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PeriodContext extends ParserRuleContext {
		public TerminalNode WORD() { return getToken(PeriodFileParser.WORD, 0); }
		public List<PeriodPairContext> periodPair() {
			return getRuleContexts(PeriodPairContext.class);
		}
		public PeriodPairContext periodPair(int i) {
			return getRuleContext(PeriodPairContext.class,i);
		}
		public PeriodContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_period; }
	}

	public final PeriodContext period() throws RecognitionException {
		PeriodContext _localctx = new PeriodContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_period);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(55);
			match(WORD);
			setState(56);
			match(T__2);
			setState(57);
			periodPair();
			setState(62);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__3) {
				{
				{
				setState(58);
				match(T__3);
				setState(59);
				periodPair();
				}
				}
				setState(64);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(65);
			match(T__4);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PeriodPairContext extends ParserRuleContext {
		public List<TerminalNode> WORD() { return getTokens(PeriodFileParser.WORD); }
		public TerminalNode WORD(int i) {
			return getToken(PeriodFileParser.WORD, i);
		}
		public DataContext data() {
			return getRuleContext(DataContext.class,0);
		}
		public TerminalNode NUM() { return getToken(PeriodFileParser.NUM, 0); }
		public PeriodPairContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_periodPair; }
	}

	public final PeriodPairContext periodPair() throws RecognitionException {
		PeriodPairContext _localctx = new PeriodPairContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_periodPair);
		int _la;
		try {
			setState(84);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(67);
				match(WORD);
				setState(68);
				match(T__0);
				setState(69);
				data();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(70);
				match(WORD);
				setState(71);
				match(T__0);
				setState(72);
				match(WORD);
				setState(75);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__5) {
					{
					setState(73);
					match(T__5);
					setState(74);
					data();
					}
				}

				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(77);
				match(NUM);
				setState(78);
				match(T__6);
				setState(79);
				match(T__2);
				setState(80);
				data();
				setState(81);
				match(T__4);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(83);
				data();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DataContext extends ParserRuleContext {
		public WorkoutsContext workouts() {
			return getRuleContext(WorkoutsContext.class,0);
		}
		public SessionContext session() {
			return getRuleContext(SessionContext.class,0);
		}
		public DataContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_data; }
	}

	public final DataContext data() throws RecognitionException {
		DataContext _localctx = new DataContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_data);
		try {
			setState(88);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SPORT:
				enterOuterAlt(_localctx, 1);
				{
				setState(86);
				workouts();
				}
				break;
			case T__2:
				enterOuterAlt(_localctx, 2);
				{
				setState(87);
				session();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class WorkoutsContext extends ParserRuleContext {
		public List<WorkoutContext> workout() {
			return getRuleContexts(WorkoutContext.class);
		}
		public WorkoutContext workout(int i) {
			return getRuleContext(WorkoutContext.class,i);
		}
		public WorkoutsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_workouts; }
	}

	public final WorkoutsContext workouts() throws RecognitionException {
		WorkoutsContext _localctx = new WorkoutsContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_workouts);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(90);
			workout();
			setState(95);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__5) {
				{
				{
				setState(91);
				match(T__5);
				setState(92);
				workout();
				}
				}
				setState(97);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class WorkoutContext extends ParserRuleContext {
		public TerminalNode SPORT() { return getToken(PeriodFileParser.SPORT, 0); }
		public List<TerminalNode> WORD() { return getTokens(PeriodFileParser.WORD); }
		public TerminalNode WORD(int i) {
			return getToken(PeriodFileParser.WORD, i);
		}
		public TerminalNode LOAD() { return getToken(PeriodFileParser.LOAD, 0); }
		public WorkoutContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_workout; }
	}

	public final WorkoutContext workout() throws RecognitionException {
		WorkoutContext _localctx = new WorkoutContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_workout);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(98);
			match(SPORT);
			setState(102);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WORD) {
				{
				{
				setState(99);
				match(WORD);
				}
				}
				setState(104);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(106);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LOAD) {
				{
				setState(105);
				match(LOAD);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SessionContext extends ParserRuleContext {
		public TerminalNode SPORT() { return getToken(PeriodFileParser.SPORT, 0); }
		public List<SessionSectionContext> sessionSection() {
			return getRuleContexts(SessionSectionContext.class);
		}
		public SessionSectionContext sessionSection(int i) {
			return getRuleContext(SessionSectionContext.class,i);
		}
		public SessionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_session; }
	}

	public final SessionContext session() throws RecognitionException {
		SessionContext _localctx = new SessionContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_session);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(108);
			match(T__2);
			setState(109);
			match(SPORT);
			setState(111); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(110);
				sessionSection();
				}
				}
				setState(113); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==WORD );
			setState(115);
			match(T__4);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SessionSectionContext extends ParserRuleContext {
		public TerminalNode WORD() { return getToken(PeriodFileParser.WORD, 0); }
		public WorkloadsContext workloads() {
			return getRuleContext(WorkloadsContext.class,0);
		}
		public TerminalNode NUM() { return getToken(PeriodFileParser.NUM, 0); }
		public SessionSectionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sessionSection; }
	}

	public final SessionSectionContext sessionSection() throws RecognitionException {
		SessionSectionContext _localctx = new SessionSectionContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_sessionSection);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(117);
			match(WORD);
			setState(118);
			match(T__2);
			setState(126);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case WORD:
				{
				setState(119);
				workloads();
				}
				break;
			case NUM:
				{
				setState(120);
				match(NUM);
				setState(121);
				match(T__6);
				setState(122);
				match(T__2);
				setState(123);
				workloads();
				setState(124);
				match(T__4);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(128);
			match(T__4);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class WorkloadsContext extends ParserRuleContext {
		public List<WorkloadContext> workload() {
			return getRuleContexts(WorkloadContext.class);
		}
		public WorkloadContext workload(int i) {
			return getRuleContext(WorkloadContext.class,i);
		}
		public WorkloadsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_workloads; }
	}

	public final WorkloadsContext workloads() throws RecognitionException {
		WorkloadsContext _localctx = new WorkloadsContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_workloads);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(130);
			workload();
			setState(135);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__5) {
				{
				{
				setState(131);
				match(T__5);
				setState(132);
				workload();
				}
				}
				setState(137);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class WorkloadContext extends ParserRuleContext {
		public List<TerminalNode> WORD() { return getTokens(PeriodFileParser.WORD); }
		public TerminalNode WORD(int i) {
			return getToken(PeriodFileParser.WORD, i);
		}
		public TerminalNode LT() { return getToken(PeriodFileParser.LT, 0); }
		public TerminalNode GT() { return getToken(PeriodFileParser.GT, 0); }
		public WorkloadContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_workload; }
	}

	public final WorkloadContext workload() throws RecognitionException {
		WorkloadContext _localctx = new WorkloadContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_workload);
		int _la;
		try {
			setState(147);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(138);
				match(WORD);
				setState(139);
				_la = _input.LA(1);
				if ( !(_la==LT || _la==GT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(140);
				match(WORD);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(141);
				match(WORD);
				setState(142);
				match(WORD);
				setState(143);
				match(T__7);
				setState(144);
				match(WORD);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(145);
				match(WORD);
				setState(146);
				match(WORD);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u0011\u0096\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0001\u0000\u0005\u0000\u001c\b\u0000\n\u0000\f\u0000"+
		"\u001f\t\u0000\u0001\u0000\u0005\u0000\"\b\u0000\n\u0000\f\u0000%\t\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0003\u0004\u00034\b\u0003\u000b\u0003\f\u00035\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0005\u0004=\b\u0004\n\u0004"+
		"\f\u0004@\t\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0003"+
		"\u0005L\b\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0003\u0005U\b\u0005\u0001\u0006\u0001"+
		"\u0006\u0003\u0006Y\b\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0005"+
		"\u0007^\b\u0007\n\u0007\f\u0007a\t\u0007\u0001\b\u0001\b\u0005\be\b\b"+
		"\n\b\f\bh\t\b\u0001\b\u0003\bk\b\b\u0001\t\u0001\t\u0001\t\u0004\tp\b"+
		"\t\u000b\t\f\tq\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0001\n\u0001\n\u0001\n\u0003\n\u007f\b\n\u0001\n\u0001\n\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0005\u000b\u0086\b\u000b\n\u000b\f\u000b"+
		"\u0089\t\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f"+
		"\u0001\f\u0001\f\u0003\f\u0094\b\f\u0001\f\u0000\u0000\r\u0000\u0002\u0004"+
		"\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u0000\u0001\u0001\u0000"+
		"\t\n\u0099\u0000\u001d\u0001\u0000\u0000\u0000\u0002)\u0001\u0000\u0000"+
		"\u0000\u0004.\u0001\u0000\u0000\u0000\u00063\u0001\u0000\u0000\u0000\b"+
		"7\u0001\u0000\u0000\u0000\nT\u0001\u0000\u0000\u0000\fX\u0001\u0000\u0000"+
		"\u0000\u000eZ\u0001\u0000\u0000\u0000\u0010b\u0001\u0000\u0000\u0000\u0012"+
		"l\u0001\u0000\u0000\u0000\u0014u\u0001\u0000\u0000\u0000\u0016\u0082\u0001"+
		"\u0000\u0000\u0000\u0018\u0093\u0001\u0000\u0000\u0000\u001a\u001c\u0003"+
		"\u0002\u0001\u0000\u001b\u001a\u0001\u0000\u0000\u0000\u001c\u001f\u0001"+
		"\u0000\u0000\u0000\u001d\u001b\u0001\u0000\u0000\u0000\u001d\u001e\u0001"+
		"\u0000\u0000\u0000\u001e#\u0001\u0000\u0000\u0000\u001f\u001d\u0001\u0000"+
		"\u0000\u0000 \"\u0003\u0004\u0002\u0000! \u0001\u0000\u0000\u0000\"%\u0001"+
		"\u0000\u0000\u0000#!\u0001\u0000\u0000\u0000#$\u0001\u0000\u0000\u0000"+
		"$&\u0001\u0000\u0000\u0000%#\u0001\u0000\u0000\u0000&\'\u0003\u0006\u0003"+
		"\u0000\'(\u0005\u0000\u0000\u0001(\u0001\u0001\u0000\u0000\u0000)*\u0005"+
		"\r\u0000\u0000*+\u0005\u0001\u0000\u0000+,\u0005\r\u0000\u0000,-\u0005"+
		"\u0002\u0000\u0000-\u0003\u0001\u0000\u0000\u0000./\u0005\u000b\u0000"+
		"\u0000/0\u0005\r\u0000\u000001\u0005\u0002\u0000\u00001\u0005\u0001\u0000"+
		"\u0000\u000024\u0003\b\u0004\u000032\u0001\u0000\u0000\u000045\u0001\u0000"+
		"\u0000\u000053\u0001\u0000\u0000\u000056\u0001\u0000\u0000\u00006\u0007"+
		"\u0001\u0000\u0000\u000078\u0005\r\u0000\u000089\u0005\u0003\u0000\u0000"+
		"9>\u0003\n\u0005\u0000:;\u0005\u0004\u0000\u0000;=\u0003\n\u0005\u0000"+
		"<:\u0001\u0000\u0000\u0000=@\u0001\u0000\u0000\u0000><\u0001\u0000\u0000"+
		"\u0000>?\u0001\u0000\u0000\u0000?A\u0001\u0000\u0000\u0000@>\u0001\u0000"+
		"\u0000\u0000AB\u0005\u0005\u0000\u0000B\t\u0001\u0000\u0000\u0000CD\u0005"+
		"\r\u0000\u0000DE\u0005\u0001\u0000\u0000EU\u0003\f\u0006\u0000FG\u0005"+
		"\r\u0000\u0000GH\u0005\u0001\u0000\u0000HK\u0005\r\u0000\u0000IJ\u0005"+
		"\u0006\u0000\u0000JL\u0003\f\u0006\u0000KI\u0001\u0000\u0000\u0000KL\u0001"+
		"\u0000\u0000\u0000LU\u0001\u0000\u0000\u0000MN\u0005\f\u0000\u0000NO\u0005"+
		"\u0007\u0000\u0000OP\u0005\u0003\u0000\u0000PQ\u0003\f\u0006\u0000QR\u0005"+
		"\u0005\u0000\u0000RU\u0001\u0000\u0000\u0000SU\u0003\f\u0006\u0000TC\u0001"+
		"\u0000\u0000\u0000TF\u0001\u0000\u0000\u0000TM\u0001\u0000\u0000\u0000"+
		"TS\u0001\u0000\u0000\u0000U\u000b\u0001\u0000\u0000\u0000VY\u0003\u000e"+
		"\u0007\u0000WY\u0003\u0012\t\u0000XV\u0001\u0000\u0000\u0000XW\u0001\u0000"+
		"\u0000\u0000Y\r\u0001\u0000\u0000\u0000Z_\u0003\u0010\b\u0000[\\\u0005"+
		"\u0006\u0000\u0000\\^\u0003\u0010\b\u0000][\u0001\u0000\u0000\u0000^a"+
		"\u0001\u0000\u0000\u0000_]\u0001\u0000\u0000\u0000_`\u0001\u0000\u0000"+
		"\u0000`\u000f\u0001\u0000\u0000\u0000a_\u0001\u0000\u0000\u0000bf\u0005"+
		"\u000f\u0000\u0000ce\u0005\r\u0000\u0000dc\u0001\u0000\u0000\u0000eh\u0001"+
		"\u0000\u0000\u0000fd\u0001\u0000\u0000\u0000fg\u0001\u0000\u0000\u0000"+
		"gj\u0001\u0000\u0000\u0000hf\u0001\u0000\u0000\u0000ik\u0005\u000e\u0000"+
		"\u0000ji\u0001\u0000\u0000\u0000jk\u0001\u0000\u0000\u0000k\u0011\u0001"+
		"\u0000\u0000\u0000lm\u0005\u0003\u0000\u0000mo\u0005\u000f\u0000\u0000"+
		"np\u0003\u0014\n\u0000on\u0001\u0000\u0000\u0000pq\u0001\u0000\u0000\u0000"+
		"qo\u0001\u0000\u0000\u0000qr\u0001\u0000\u0000\u0000rs\u0001\u0000\u0000"+
		"\u0000st\u0005\u0005\u0000\u0000t\u0013\u0001\u0000\u0000\u0000uv\u0005"+
		"\r\u0000\u0000v~\u0005\u0003\u0000\u0000w\u007f\u0003\u0016\u000b\u0000"+
		"xy\u0005\f\u0000\u0000yz\u0005\u0007\u0000\u0000z{\u0005\u0003\u0000\u0000"+
		"{|\u0003\u0016\u000b\u0000|}\u0005\u0005\u0000\u0000}\u007f\u0001\u0000"+
		"\u0000\u0000~w\u0001\u0000\u0000\u0000~x\u0001\u0000\u0000\u0000\u007f"+
		"\u0080\u0001\u0000\u0000\u0000\u0080\u0081\u0005\u0005\u0000\u0000\u0081"+
		"\u0015\u0001\u0000\u0000\u0000\u0082\u0087\u0003\u0018\f\u0000\u0083\u0084"+
		"\u0005\u0006\u0000\u0000\u0084\u0086\u0003\u0018\f\u0000\u0085\u0083\u0001"+
		"\u0000\u0000\u0000\u0086\u0089\u0001\u0000\u0000\u0000\u0087\u0085\u0001"+
		"\u0000\u0000\u0000\u0087\u0088\u0001\u0000\u0000\u0000\u0088\u0017\u0001"+
		"\u0000\u0000\u0000\u0089\u0087\u0001\u0000\u0000\u0000\u008a\u008b\u0005"+
		"\r\u0000\u0000\u008b\u008c\u0007\u0000\u0000\u0000\u008c\u0094\u0005\r"+
		"\u0000\u0000\u008d\u008e\u0005\r\u0000\u0000\u008e\u008f\u0005\r\u0000"+
		"\u0000\u008f\u0090\u0005\b\u0000\u0000\u0090\u0094\u0005\r\u0000\u0000"+
		"\u0091\u0092\u0005\r\u0000\u0000\u0092\u0094\u0005\r\u0000\u0000\u0093"+
		"\u008a\u0001\u0000\u0000\u0000\u0093\u008d\u0001\u0000\u0000\u0000\u0093"+
		"\u0091\u0001\u0000\u0000\u0000\u0094\u0019\u0001\u0000\u0000\u0000\u000e"+
		"\u001d#5>KTX_fjq~\u0087\u0093";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}