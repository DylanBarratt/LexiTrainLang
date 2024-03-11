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
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		LT=10, GT=11, NUM=12, WORD=13, LOAD=14, SPORT=15, LINE_COMMENT=16, WS=17;
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
			null, "':'", "'.'", "'='", "'{'", "','", "'}'", "'*'", "'&&'", "'-'", 
			"'<'", "'>'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, "LT", "GT", 
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
			_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(32);
					sessionImport();
					}
					} 
				}
				setState(37);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
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
		public List<TerminalNode> WORD() { return getTokens(PeriodFileParser.WORD); }
		public TerminalNode WORD(int i) {
			return getToken(PeriodFileParser.WORD, i);
		}
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
			match(WORD);
			setState(47);
			match(T__2);
			setState(48);
			match(WORD);
			setState(49);
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
			setState(52); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(51);
				period();
				}
				}
				setState(54); 
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
			setState(56);
			match(WORD);
			setState(57);
			match(T__3);
			setState(58);
			periodPair();
			setState(63);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__4) {
				{
				{
				setState(59);
				match(T__4);
				setState(60);
				periodPair();
				}
				}
				setState(65);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(66);
			match(T__5);
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
		public TerminalNode WORD() { return getToken(PeriodFileParser.WORD, 0); }
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
		try {
			setState(78);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case WORD:
				enterOuterAlt(_localctx, 1);
				{
				setState(68);
				match(WORD);
				setState(69);
				match(T__0);
				setState(70);
				data();
				}
				break;
			case NUM:
				enterOuterAlt(_localctx, 2);
				{
				setState(71);
				match(NUM);
				setState(72);
				match(T__6);
				setState(73);
				match(T__3);
				setState(74);
				data();
				setState(75);
				match(T__5);
				}
				break;
			case T__3:
			case SPORT:
				enterOuterAlt(_localctx, 3);
				{
				setState(77);
				data();
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
			setState(82);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SPORT:
				enterOuterAlt(_localctx, 1);
				{
				setState(80);
				workouts();
				}
				break;
			case T__3:
				enterOuterAlt(_localctx, 2);
				{
				setState(81);
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
			setState(84);
			workout();
			setState(89);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__7) {
				{
				{
				setState(85);
				match(T__7);
				setState(86);
				workout();
				}
				}
				setState(91);
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
			setState(92);
			match(SPORT);
			setState(96);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WORD) {
				{
				{
				setState(93);
				match(WORD);
				}
				}
				setState(98);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(100);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LOAD) {
				{
				setState(99);
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
			setState(102);
			match(T__3);
			setState(103);
			match(SPORT);
			setState(105); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(104);
				sessionSection();
				}
				}
				setState(107); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==WORD );
			setState(109);
			match(T__5);
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
			setState(111);
			match(WORD);
			setState(112);
			match(T__3);
			setState(120);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case WORD:
				{
				setState(113);
				workloads();
				}
				break;
			case NUM:
				{
				setState(114);
				match(NUM);
				setState(115);
				match(T__6);
				setState(116);
				match(T__3);
				setState(117);
				workloads();
				setState(118);
				match(T__5);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(122);
			match(T__5);
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
			setState(124);
			workload();
			setState(129);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__7) {
				{
				{
				setState(125);
				match(T__7);
				setState(126);
				workload();
				}
				}
				setState(131);
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
			setState(141);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(132);
				match(WORD);
				setState(133);
				_la = _input.LA(1);
				if ( !(_la==LT || _la==GT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(134);
				match(WORD);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(135);
				match(WORD);
				setState(136);
				match(WORD);
				setState(137);
				match(T__8);
				setState(138);
				match(WORD);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(139);
				match(WORD);
				setState(140);
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
		"\u0004\u0001\u0011\u0090\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0001\u0000\u0005\u0000\u001c\b\u0000\n\u0000\f\u0000"+
		"\u001f\t\u0000\u0001\u0000\u0005\u0000\"\b\u0000\n\u0000\f\u0000%\t\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0003\u0004\u00035\b\u0003\u000b\u0003\f\u00036\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0005\u0004>\b"+
		"\u0004\n\u0004\f\u0004A\t\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0003\u0005O\b\u0005\u0001\u0006\u0001"+
		"\u0006\u0003\u0006S\b\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0005"+
		"\u0007X\b\u0007\n\u0007\f\u0007[\t\u0007\u0001\b\u0001\b\u0005\b_\b\b"+
		"\n\b\f\bb\t\b\u0001\b\u0003\be\b\b\u0001\t\u0001\t\u0001\t\u0004\tj\b"+
		"\t\u000b\t\f\tk\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0001\n\u0001\n\u0001\n\u0003\ny\b\n\u0001\n\u0001\n\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0005\u000b\u0080\b\u000b\n\u000b\f\u000b"+
		"\u0083\t\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f"+
		"\u0001\f\u0001\f\u0003\f\u008e\b\f\u0001\f\u0000\u0000\r\u0000\u0002\u0004"+
		"\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u0000\u0001\u0001\u0000"+
		"\n\u000b\u0091\u0000\u001d\u0001\u0000\u0000\u0000\u0002)\u0001\u0000"+
		"\u0000\u0000\u0004.\u0001\u0000\u0000\u0000\u00064\u0001\u0000\u0000\u0000"+
		"\b8\u0001\u0000\u0000\u0000\nN\u0001\u0000\u0000\u0000\fR\u0001\u0000"+
		"\u0000\u0000\u000eT\u0001\u0000\u0000\u0000\u0010\\\u0001\u0000\u0000"+
		"\u0000\u0012f\u0001\u0000\u0000\u0000\u0014o\u0001\u0000\u0000\u0000\u0016"+
		"|\u0001\u0000\u0000\u0000\u0018\u008d\u0001\u0000\u0000\u0000\u001a\u001c"+
		"\u0003\u0002\u0001\u0000\u001b\u001a\u0001\u0000\u0000\u0000\u001c\u001f"+
		"\u0001\u0000\u0000\u0000\u001d\u001b\u0001\u0000\u0000\u0000\u001d\u001e"+
		"\u0001\u0000\u0000\u0000\u001e#\u0001\u0000\u0000\u0000\u001f\u001d\u0001"+
		"\u0000\u0000\u0000 \"\u0003\u0004\u0002\u0000! \u0001\u0000\u0000\u0000"+
		"\"%\u0001\u0000\u0000\u0000#!\u0001\u0000\u0000\u0000#$\u0001\u0000\u0000"+
		"\u0000$&\u0001\u0000\u0000\u0000%#\u0001\u0000\u0000\u0000&\'\u0003\u0006"+
		"\u0003\u0000\'(\u0005\u0000\u0000\u0001(\u0001\u0001\u0000\u0000\u0000"+
		")*\u0005\r\u0000\u0000*+\u0005\u0001\u0000\u0000+,\u0005\r\u0000\u0000"+
		",-\u0005\u0002\u0000\u0000-\u0003\u0001\u0000\u0000\u0000./\u0005\r\u0000"+
		"\u0000/0\u0005\u0003\u0000\u000001\u0005\r\u0000\u000012\u0005\u0002\u0000"+
		"\u00002\u0005\u0001\u0000\u0000\u000035\u0003\b\u0004\u000043\u0001\u0000"+
		"\u0000\u000056\u0001\u0000\u0000\u000064\u0001\u0000\u0000\u000067\u0001"+
		"\u0000\u0000\u00007\u0007\u0001\u0000\u0000\u000089\u0005\r\u0000\u0000"+
		"9:\u0005\u0004\u0000\u0000:?\u0003\n\u0005\u0000;<\u0005\u0005\u0000\u0000"+
		"<>\u0003\n\u0005\u0000=;\u0001\u0000\u0000\u0000>A\u0001\u0000\u0000\u0000"+
		"?=\u0001\u0000\u0000\u0000?@\u0001\u0000\u0000\u0000@B\u0001\u0000\u0000"+
		"\u0000A?\u0001\u0000\u0000\u0000BC\u0005\u0006\u0000\u0000C\t\u0001\u0000"+
		"\u0000\u0000DE\u0005\r\u0000\u0000EF\u0005\u0001\u0000\u0000FO\u0003\f"+
		"\u0006\u0000GH\u0005\f\u0000\u0000HI\u0005\u0007\u0000\u0000IJ\u0005\u0004"+
		"\u0000\u0000JK\u0003\f\u0006\u0000KL\u0005\u0006\u0000\u0000LO\u0001\u0000"+
		"\u0000\u0000MO\u0003\f\u0006\u0000ND\u0001\u0000\u0000\u0000NG\u0001\u0000"+
		"\u0000\u0000NM\u0001\u0000\u0000\u0000O\u000b\u0001\u0000\u0000\u0000"+
		"PS\u0003\u000e\u0007\u0000QS\u0003\u0012\t\u0000RP\u0001\u0000\u0000\u0000"+
		"RQ\u0001\u0000\u0000\u0000S\r\u0001\u0000\u0000\u0000TY\u0003\u0010\b"+
		"\u0000UV\u0005\b\u0000\u0000VX\u0003\u0010\b\u0000WU\u0001\u0000\u0000"+
		"\u0000X[\u0001\u0000\u0000\u0000YW\u0001\u0000\u0000\u0000YZ\u0001\u0000"+
		"\u0000\u0000Z\u000f\u0001\u0000\u0000\u0000[Y\u0001\u0000\u0000\u0000"+
		"\\`\u0005\u000f\u0000\u0000]_\u0005\r\u0000\u0000^]\u0001\u0000\u0000"+
		"\u0000_b\u0001\u0000\u0000\u0000`^\u0001\u0000\u0000\u0000`a\u0001\u0000"+
		"\u0000\u0000ad\u0001\u0000\u0000\u0000b`\u0001\u0000\u0000\u0000ce\u0005"+
		"\u000e\u0000\u0000dc\u0001\u0000\u0000\u0000de\u0001\u0000\u0000\u0000"+
		"e\u0011\u0001\u0000\u0000\u0000fg\u0005\u0004\u0000\u0000gi\u0005\u000f"+
		"\u0000\u0000hj\u0003\u0014\n\u0000ih\u0001\u0000\u0000\u0000jk\u0001\u0000"+
		"\u0000\u0000ki\u0001\u0000\u0000\u0000kl\u0001\u0000\u0000\u0000lm\u0001"+
		"\u0000\u0000\u0000mn\u0005\u0006\u0000\u0000n\u0013\u0001\u0000\u0000"+
		"\u0000op\u0005\r\u0000\u0000px\u0005\u0004\u0000\u0000qy\u0003\u0016\u000b"+
		"\u0000rs\u0005\f\u0000\u0000st\u0005\u0007\u0000\u0000tu\u0005\u0004\u0000"+
		"\u0000uv\u0003\u0016\u000b\u0000vw\u0005\u0006\u0000\u0000wy\u0001\u0000"+
		"\u0000\u0000xq\u0001\u0000\u0000\u0000xr\u0001\u0000\u0000\u0000yz\u0001"+
		"\u0000\u0000\u0000z{\u0005\u0006\u0000\u0000{\u0015\u0001\u0000\u0000"+
		"\u0000|\u0081\u0003\u0018\f\u0000}~\u0005\b\u0000\u0000~\u0080\u0003\u0018"+
		"\f\u0000\u007f}\u0001\u0000\u0000\u0000\u0080\u0083\u0001\u0000\u0000"+
		"\u0000\u0081\u007f\u0001\u0000\u0000\u0000\u0081\u0082\u0001\u0000\u0000"+
		"\u0000\u0082\u0017\u0001\u0000\u0000\u0000\u0083\u0081\u0001\u0000\u0000"+
		"\u0000\u0084\u0085\u0005\r\u0000\u0000\u0085\u0086\u0007\u0000\u0000\u0000"+
		"\u0086\u008e\u0005\r\u0000\u0000\u0087\u0088\u0005\r\u0000\u0000\u0088"+
		"\u0089\u0005\r\u0000\u0000\u0089\u008a\u0005\t\u0000\u0000\u008a\u008e"+
		"\u0005\r\u0000\u0000\u008b\u008c\u0005\r\u0000\u0000\u008c\u008e\u0005"+
		"\r\u0000\u0000\u008d\u0084\u0001\u0000\u0000\u0000\u008d\u0087\u0001\u0000"+
		"\u0000\u0000\u008d\u008b\u0001\u0000\u0000\u0000\u008e\u0019\u0001\u0000"+
		"\u0000\u0000\r\u001d#6?NRY`dkx\u0081\u008d";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}