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
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, LT=8, GT=9, BW=10, 
		IMPORT=11, LOAD=12, NOTES=13, NUM=14, WORD=15, SPORT=16, IMPORTED=17, 
		LINE_COMMENT=18, WS=19;
	public static final int
		RULE_file = 0, RULE_metaData = 1, RULE_sessionImport = 2, RULE_periods = 3, 
		RULE_period = 4, RULE_day = 5, RULE_dayData = 6, RULE_imported = 7, RULE_workout = 8, 
		RULE_session = 9, RULE_sessionSection = 10, RULE_workloads = 11, RULE_workloadL = 12, 
		RULE_workload = 13, RULE_lt = 14, RULE_gt = 15, RULE_between = 16;
	private static String[] makeRuleNames() {
		return new String[] {
			"file", "metaData", "sessionImport", "periods", "period", "day", "dayData", 
			"imported", "workout", "session", "sessionSection", "workloads", "workloadL", 
			"workload", "lt", "gt", "between"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "':'", "'.'", "'{'", "','", "'}'", "'&&'", "'*'", "'<'", "'>'", 
			"'-'", "'import'", "'load='", "'note='"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, "LT", "GT", "BW", "IMPORT", 
			"LOAD", "NOTES", "NUM", "WORD", "SPORT", "IMPORTED", "LINE_COMMENT", 
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
			setState(37);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(34);
					metaData();
					}
					} 
				}
				setState(39);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			}
			setState(43);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==IMPORT) {
				{
				{
				setState(40);
				sessionImport();
				}
				}
				setState(45);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(46);
			periods();
			setState(47);
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
		public TerminalNode NUM() { return getToken(PeriodFileParser.NUM, 0); }
		public MetaDataContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_metaData; }
	}

	public final MetaDataContext metaData() throws RecognitionException {
		MetaDataContext _localctx = new MetaDataContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_metaData);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(49);
			match(WORD);
			setState(50);
			match(T__0);
			setState(51);
			_la = _input.LA(1);
			if ( !(_la==NUM || _la==WORD) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(52);
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
			setState(54);
			match(IMPORT);
			setState(55);
			match(WORD);
			setState(56);
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
			setState(59); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(58);
				period();
				}
				}
				setState(61); 
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
		public List<DayContext> day() {
			return getRuleContexts(DayContext.class);
		}
		public DayContext day(int i) {
			return getRuleContext(DayContext.class,i);
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
			setState(63);
			match(WORD);
			setState(64);
			match(T__2);
			setState(65);
			day();
			setState(70);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__3) {
				{
				{
				setState(66);
				match(T__3);
				setState(67);
				day();
				}
				}
				setState(72);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(73);
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
	public static class DayContext extends ParserRuleContext {
		public TerminalNode WORD() { return getToken(PeriodFileParser.WORD, 0); }
		public List<DayDataContext> dayData() {
			return getRuleContexts(DayDataContext.class);
		}
		public DayDataContext dayData(int i) {
			return getRuleContext(DayDataContext.class,i);
		}
		public TerminalNode NUM() { return getToken(PeriodFileParser.NUM, 0); }
		public DayContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_day; }
	}

	public final DayContext day() throws RecognitionException {
		DayContext _localctx = new DayContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_day);
		int _la;
		try {
			setState(99);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case WORD:
				enterOuterAlt(_localctx, 1);
				{
				setState(75);
				match(WORD);
				setState(76);
				match(T__0);
				setState(77);
				dayData();
				setState(82);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__5) {
					{
					{
					setState(78);
					match(T__5);
					setState(79);
					dayData();
					}
					}
					setState(84);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case NUM:
				enterOuterAlt(_localctx, 2);
				{
				setState(85);
				match(NUM);
				setState(86);
				match(T__6);
				setState(87);
				match(T__2);
				setState(88);
				dayData();
				setState(89);
				match(T__4);
				}
				break;
			case T__2:
			case NOTES:
			case SPORT:
			case IMPORTED:
				enterOuterAlt(_localctx, 3);
				{
				setState(91);
				dayData();
				setState(96);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__5) {
					{
					{
					setState(92);
					match(T__5);
					setState(93);
					dayData();
					}
					}
					setState(98);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
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
	public static class DayDataContext extends ParserRuleContext {
		public ImportedContext imported() {
			return getRuleContext(ImportedContext.class,0);
		}
		public WorkoutContext workout() {
			return getRuleContext(WorkoutContext.class,0);
		}
		public SessionContext session() {
			return getRuleContext(SessionContext.class,0);
		}
		public TerminalNode NOTES() { return getToken(PeriodFileParser.NOTES, 0); }
		public TerminalNode WORD() { return getToken(PeriodFileParser.WORD, 0); }
		public DayDataContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dayData; }
	}

	public final DayDataContext dayData() throws RecognitionException {
		DayDataContext _localctx = new DayDataContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_dayData);
		try {
			setState(106);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IMPORTED:
				enterOuterAlt(_localctx, 1);
				{
				setState(101);
				imported();
				}
				break;
			case SPORT:
				enterOuterAlt(_localctx, 2);
				{
				setState(102);
				workout();
				}
				break;
			case T__2:
				enterOuterAlt(_localctx, 3);
				{
				setState(103);
				session();
				}
				break;
			case NOTES:
				enterOuterAlt(_localctx, 4);
				{
				setState(104);
				match(NOTES);
				setState(105);
				match(WORD);
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
	public static class ImportedContext extends ParserRuleContext {
		public TerminalNode IMPORTED() { return getToken(PeriodFileParser.IMPORTED, 0); }
		public ImportedContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_imported; }
	}

	public final ImportedContext imported() throws RecognitionException {
		ImportedContext _localctx = new ImportedContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_imported);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(108);
			match(IMPORTED);
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
		public WorkloadLContext workloadL() {
			return getRuleContext(WorkloadLContext.class,0);
		}
		public WorkoutContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_workout; }
	}

	public final WorkoutContext workout() throws RecognitionException {
		WorkoutContext _localctx = new WorkoutContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_workout);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(110);
			match(SPORT);
			setState(111);
			workloadL();
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
			setState(113);
			match(T__2);
			setState(114);
			match(SPORT);
			setState(116); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(115);
				sessionSection();
				}
				}
				setState(118); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==WORD );
			setState(120);
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
			setState(122);
			match(WORD);
			setState(123);
			match(T__2);
			setState(131);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case WORD:
				{
				setState(124);
				workloads();
				}
				break;
			case NUM:
				{
				setState(125);
				match(NUM);
				setState(126);
				match(T__6);
				setState(127);
				match(T__2);
				setState(128);
				workloads();
				setState(129);
				match(T__4);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(133);
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
		public List<WorkloadLContext> workloadL() {
			return getRuleContexts(WorkloadLContext.class);
		}
		public WorkloadLContext workloadL(int i) {
			return getRuleContext(WorkloadLContext.class,i);
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
			setState(135);
			workloadL();
			setState(140);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__5) {
				{
				{
				setState(136);
				match(T__5);
				setState(137);
				workloadL();
				}
				}
				setState(142);
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
	public static class WorkloadLContext extends ParserRuleContext {
		public WorkloadContext workload() {
			return getRuleContext(WorkloadContext.class,0);
		}
		public TerminalNode LOAD() { return getToken(PeriodFileParser.LOAD, 0); }
		public TerminalNode NUM() { return getToken(PeriodFileParser.NUM, 0); }
		public TerminalNode NOTES() { return getToken(PeriodFileParser.NOTES, 0); }
		public TerminalNode WORD() { return getToken(PeriodFileParser.WORD, 0); }
		public WorkloadLContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_workloadL; }
	}

	public final WorkloadLContext workloadL() throws RecognitionException {
		WorkloadLContext _localctx = new WorkloadLContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_workloadL);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(143);
			workload();
			setState(146);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LOAD) {
				{
				setState(144);
				match(LOAD);
				setState(145);
				match(NUM);
				}
			}

			setState(150);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==NOTES) {
				{
				setState(148);
				match(NOTES);
				setState(149);
				match(WORD);
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
	public static class WorkloadContext extends ParserRuleContext {
		public List<TerminalNode> WORD() { return getTokens(PeriodFileParser.WORD); }
		public TerminalNode WORD(int i) {
			return getToken(PeriodFileParser.WORD, i);
		}
		public LtContext lt() {
			return getRuleContext(LtContext.class,0);
		}
		public GtContext gt() {
			return getRuleContext(GtContext.class,0);
		}
		public BetweenContext between() {
			return getRuleContext(BetweenContext.class,0);
		}
		public WorkloadContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_workload; }
	}

	public final WorkloadContext workload() throws RecognitionException {
		WorkloadContext _localctx = new WorkloadContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_workload);
		try {
			setState(161);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(152);
				match(WORD);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(153);
				match(WORD);
				setState(154);
				lt();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(155);
				match(WORD);
				setState(156);
				gt();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(157);
				match(WORD);
				setState(158);
				between();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(159);
				match(WORD);
				setState(160);
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

	@SuppressWarnings("CheckReturnValue")
	public static class LtContext extends ParserRuleContext {
		public TerminalNode LT() { return getToken(PeriodFileParser.LT, 0); }
		public TerminalNode WORD() { return getToken(PeriodFileParser.WORD, 0); }
		public LtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lt; }
	}

	public final LtContext lt() throws RecognitionException {
		LtContext _localctx = new LtContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_lt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(163);
			match(LT);
			setState(164);
			match(WORD);
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
	public static class GtContext extends ParserRuleContext {
		public TerminalNode GT() { return getToken(PeriodFileParser.GT, 0); }
		public TerminalNode WORD() { return getToken(PeriodFileParser.WORD, 0); }
		public GtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_gt; }
	}

	public final GtContext gt() throws RecognitionException {
		GtContext _localctx = new GtContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_gt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(166);
			match(GT);
			setState(167);
			match(WORD);
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
	public static class BetweenContext extends ParserRuleContext {
		public List<TerminalNode> WORD() { return getTokens(PeriodFileParser.WORD); }
		public TerminalNode WORD(int i) {
			return getToken(PeriodFileParser.WORD, i);
		}
		public TerminalNode BW() { return getToken(PeriodFileParser.BW, 0); }
		public BetweenContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_between; }
	}

	public final BetweenContext between() throws RecognitionException {
		BetweenContext _localctx = new BetweenContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_between);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(169);
			match(WORD);
			setState(170);
			match(BW);
			setState(171);
			match(WORD);
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
		"\u0004\u0001\u0013\u00ae\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007"+
		"\u000f\u0002\u0010\u0007\u0010\u0001\u0000\u0005\u0000$\b\u0000\n\u0000"+
		"\f\u0000\'\t\u0000\u0001\u0000\u0005\u0000*\b\u0000\n\u0000\f\u0000-\t"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0003\u0004\u0003<\b\u0003\u000b\u0003\f\u0003=\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0005\u0004E\b\u0004"+
		"\n\u0004\f\u0004H\t\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0005\u0005Q\b\u0005\n\u0005\f\u0005"+
		"T\t\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0005\u0005_\b\u0005"+
		"\n\u0005\f\u0005b\t\u0005\u0003\u0005d\b\u0005\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0003\u0006k\b\u0006\u0001\u0007"+
		"\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0004\tu"+
		"\b\t\u000b\t\f\tv\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0001\n\u0001\n\u0001\n\u0003\n\u0084\b\n\u0001\n\u0001\n\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0005\u000b\u008b\b\u000b\n\u000b\f\u000b"+
		"\u008e\t\u000b\u0001\f\u0001\f\u0001\f\u0003\f\u0093\b\f\u0001\f\u0001"+
		"\f\u0003\f\u0097\b\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0003\r\u00a2\b\r\u0001\u000e\u0001\u000e\u0001\u000e"+
		"\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0000\u0000\u0011\u0000\u0002\u0004\u0006\b\n"+
		"\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \u0000\u0001"+
		"\u0001\u0000\u000e\u000f\u00b0\u0000%\u0001\u0000\u0000\u0000\u00021\u0001"+
		"\u0000\u0000\u0000\u00046\u0001\u0000\u0000\u0000\u0006;\u0001\u0000\u0000"+
		"\u0000\b?\u0001\u0000\u0000\u0000\nc\u0001\u0000\u0000\u0000\fj\u0001"+
		"\u0000\u0000\u0000\u000el\u0001\u0000\u0000\u0000\u0010n\u0001\u0000\u0000"+
		"\u0000\u0012q\u0001\u0000\u0000\u0000\u0014z\u0001\u0000\u0000\u0000\u0016"+
		"\u0087\u0001\u0000\u0000\u0000\u0018\u008f\u0001\u0000\u0000\u0000\u001a"+
		"\u00a1\u0001\u0000\u0000\u0000\u001c\u00a3\u0001\u0000\u0000\u0000\u001e"+
		"\u00a6\u0001\u0000\u0000\u0000 \u00a9\u0001\u0000\u0000\u0000\"$\u0003"+
		"\u0002\u0001\u0000#\"\u0001\u0000\u0000\u0000$\'\u0001\u0000\u0000\u0000"+
		"%#\u0001\u0000\u0000\u0000%&\u0001\u0000\u0000\u0000&+\u0001\u0000\u0000"+
		"\u0000\'%\u0001\u0000\u0000\u0000(*\u0003\u0004\u0002\u0000)(\u0001\u0000"+
		"\u0000\u0000*-\u0001\u0000\u0000\u0000+)\u0001\u0000\u0000\u0000+,\u0001"+
		"\u0000\u0000\u0000,.\u0001\u0000\u0000\u0000-+\u0001\u0000\u0000\u0000"+
		"./\u0003\u0006\u0003\u0000/0\u0005\u0000\u0000\u00010\u0001\u0001\u0000"+
		"\u0000\u000012\u0005\u000f\u0000\u000023\u0005\u0001\u0000\u000034\u0007"+
		"\u0000\u0000\u000045\u0005\u0002\u0000\u00005\u0003\u0001\u0000\u0000"+
		"\u000067\u0005\u000b\u0000\u000078\u0005\u000f\u0000\u000089\u0005\u0002"+
		"\u0000\u00009\u0005\u0001\u0000\u0000\u0000:<\u0003\b\u0004\u0000;:\u0001"+
		"\u0000\u0000\u0000<=\u0001\u0000\u0000\u0000=;\u0001\u0000\u0000\u0000"+
		"=>\u0001\u0000\u0000\u0000>\u0007\u0001\u0000\u0000\u0000?@\u0005\u000f"+
		"\u0000\u0000@A\u0005\u0003\u0000\u0000AF\u0003\n\u0005\u0000BC\u0005\u0004"+
		"\u0000\u0000CE\u0003\n\u0005\u0000DB\u0001\u0000\u0000\u0000EH\u0001\u0000"+
		"\u0000\u0000FD\u0001\u0000\u0000\u0000FG\u0001\u0000\u0000\u0000GI\u0001"+
		"\u0000\u0000\u0000HF\u0001\u0000\u0000\u0000IJ\u0005\u0005\u0000\u0000"+
		"J\t\u0001\u0000\u0000\u0000KL\u0005\u000f\u0000\u0000LM\u0005\u0001\u0000"+
		"\u0000MR\u0003\f\u0006\u0000NO\u0005\u0006\u0000\u0000OQ\u0003\f\u0006"+
		"\u0000PN\u0001\u0000\u0000\u0000QT\u0001\u0000\u0000\u0000RP\u0001\u0000"+
		"\u0000\u0000RS\u0001\u0000\u0000\u0000Sd\u0001\u0000\u0000\u0000TR\u0001"+
		"\u0000\u0000\u0000UV\u0005\u000e\u0000\u0000VW\u0005\u0007\u0000\u0000"+
		"WX\u0005\u0003\u0000\u0000XY\u0003\f\u0006\u0000YZ\u0005\u0005\u0000\u0000"+
		"Zd\u0001\u0000\u0000\u0000[`\u0003\f\u0006\u0000\\]\u0005\u0006\u0000"+
		"\u0000]_\u0003\f\u0006\u0000^\\\u0001\u0000\u0000\u0000_b\u0001\u0000"+
		"\u0000\u0000`^\u0001\u0000\u0000\u0000`a\u0001\u0000\u0000\u0000ad\u0001"+
		"\u0000\u0000\u0000b`\u0001\u0000\u0000\u0000cK\u0001\u0000\u0000\u0000"+
		"cU\u0001\u0000\u0000\u0000c[\u0001\u0000\u0000\u0000d\u000b\u0001\u0000"+
		"\u0000\u0000ek\u0003\u000e\u0007\u0000fk\u0003\u0010\b\u0000gk\u0003\u0012"+
		"\t\u0000hi\u0005\r\u0000\u0000ik\u0005\u000f\u0000\u0000je\u0001\u0000"+
		"\u0000\u0000jf\u0001\u0000\u0000\u0000jg\u0001\u0000\u0000\u0000jh\u0001"+
		"\u0000\u0000\u0000k\r\u0001\u0000\u0000\u0000lm\u0005\u0011\u0000\u0000"+
		"m\u000f\u0001\u0000\u0000\u0000no\u0005\u0010\u0000\u0000op\u0003\u0018"+
		"\f\u0000p\u0011\u0001\u0000\u0000\u0000qr\u0005\u0003\u0000\u0000rt\u0005"+
		"\u0010\u0000\u0000su\u0003\u0014\n\u0000ts\u0001\u0000\u0000\u0000uv\u0001"+
		"\u0000\u0000\u0000vt\u0001\u0000\u0000\u0000vw\u0001\u0000\u0000\u0000"+
		"wx\u0001\u0000\u0000\u0000xy\u0005\u0005\u0000\u0000y\u0013\u0001\u0000"+
		"\u0000\u0000z{\u0005\u000f\u0000\u0000{\u0083\u0005\u0003\u0000\u0000"+
		"|\u0084\u0003\u0016\u000b\u0000}~\u0005\u000e\u0000\u0000~\u007f\u0005"+
		"\u0007\u0000\u0000\u007f\u0080\u0005\u0003\u0000\u0000\u0080\u0081\u0003"+
		"\u0016\u000b\u0000\u0081\u0082\u0005\u0005\u0000\u0000\u0082\u0084\u0001"+
		"\u0000\u0000\u0000\u0083|\u0001\u0000\u0000\u0000\u0083}\u0001\u0000\u0000"+
		"\u0000\u0084\u0085\u0001\u0000\u0000\u0000\u0085\u0086\u0005\u0005\u0000"+
		"\u0000\u0086\u0015\u0001\u0000\u0000\u0000\u0087\u008c\u0003\u0018\f\u0000"+
		"\u0088\u0089\u0005\u0006\u0000\u0000\u0089\u008b\u0003\u0018\f\u0000\u008a"+
		"\u0088\u0001\u0000\u0000\u0000\u008b\u008e\u0001\u0000\u0000\u0000\u008c"+
		"\u008a\u0001\u0000\u0000\u0000\u008c\u008d\u0001\u0000\u0000\u0000\u008d"+
		"\u0017\u0001\u0000\u0000\u0000\u008e\u008c\u0001\u0000\u0000\u0000\u008f"+
		"\u0092\u0003\u001a\r\u0000\u0090\u0091\u0005\f\u0000\u0000\u0091\u0093"+
		"\u0005\u000e\u0000\u0000\u0092\u0090\u0001\u0000\u0000\u0000\u0092\u0093"+
		"\u0001\u0000\u0000\u0000\u0093\u0096\u0001\u0000\u0000\u0000\u0094\u0095"+
		"\u0005\r\u0000\u0000\u0095\u0097\u0005\u000f\u0000\u0000\u0096\u0094\u0001"+
		"\u0000\u0000\u0000\u0096\u0097\u0001\u0000\u0000\u0000\u0097\u0019\u0001"+
		"\u0000\u0000\u0000\u0098\u00a2\u0005\u000f\u0000\u0000\u0099\u009a\u0005"+
		"\u000f\u0000\u0000\u009a\u00a2\u0003\u001c\u000e\u0000\u009b\u009c\u0005"+
		"\u000f\u0000\u0000\u009c\u00a2\u0003\u001e\u000f\u0000\u009d\u009e\u0005"+
		"\u000f\u0000\u0000\u009e\u00a2\u0003 \u0010\u0000\u009f\u00a0\u0005\u000f"+
		"\u0000\u0000\u00a0\u00a2\u0005\u000f\u0000\u0000\u00a1\u0098\u0001\u0000"+
		"\u0000\u0000\u00a1\u0099\u0001\u0000\u0000\u0000\u00a1\u009b\u0001\u0000"+
		"\u0000\u0000\u00a1\u009d\u0001\u0000\u0000\u0000\u00a1\u009f\u0001\u0000"+
		"\u0000\u0000\u00a2\u001b\u0001\u0000\u0000\u0000\u00a3\u00a4\u0005\b\u0000"+
		"\u0000\u00a4\u00a5\u0005\u000f\u0000\u0000\u00a5\u001d\u0001\u0000\u0000"+
		"\u0000\u00a6\u00a7\u0005\t\u0000\u0000\u00a7\u00a8\u0005\u000f\u0000\u0000"+
		"\u00a8\u001f\u0001\u0000\u0000\u0000\u00a9\u00aa\u0005\u000f\u0000\u0000"+
		"\u00aa\u00ab\u0005\n\u0000\u0000\u00ab\u00ac\u0005\u000f\u0000\u0000\u00ac"+
		"!\u0001\u0000\u0000\u0000\u000e%+=FR`cjv\u0083\u008c\u0092\u0096\u00a1";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}