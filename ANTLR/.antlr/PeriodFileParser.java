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
		IMPORT=11, LOAD=12, NOTES=13, SPORT=14, IMPORTED=15, NUM=16, WORD=17, 
		LINE_COMMENT=18, WS=19;
	public static final int
		RULE_file = 0, RULE_metaDatas = 1, RULE_metaData = 2, RULE_sessionImport = 3, 
		RULE_periods = 4, RULE_period = 5, RULE_day = 6, RULE_dayLoop = 7, RULE_dayData = 8, 
		RULE_dayNotes = 9, RULE_workout = 10, RULE_imported = 11, RULE_session = 12, 
		RULE_sessionSection = 13, RULE_workloads = 14, RULE_workloadL = 15, RULE_workload = 16, 
		RULE_lt = 17, RULE_gt = 18, RULE_between = 19;
	private static String[] makeRuleNames() {
		return new String[] {
			"file", "metaDatas", "metaData", "sessionImport", "periods", "period", 
			"day", "dayLoop", "dayData", "dayNotes", "workout", "imported", "session", 
			"sessionSection", "workloads", "workloadL", "workload", "lt", "gt", "between"
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
		public MetaDatasContext metaDatas() {
			return getRuleContext(MetaDatasContext.class,0);
		}
		public PeriodsContext periods() {
			return getRuleContext(PeriodsContext.class,0);
		}
		public TerminalNode EOF() { return getToken(PeriodFileParser.EOF, 0); }
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
			enterOuterAlt(_localctx, 1);
			{
			setState(40);
			metaDatas();
			setState(44);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==IMPORT) {
				{
				{
				setState(41);
				sessionImport();
				}
				}
				setState(46);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(47);
			periods();
			setState(48);
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
	public static class MetaDatasContext extends ParserRuleContext {
		public List<MetaDataContext> metaData() {
			return getRuleContexts(MetaDataContext.class);
		}
		public MetaDataContext metaData(int i) {
			return getRuleContext(MetaDataContext.class,i);
		}
		public MetaDatasContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_metaDatas; }
	}

	public final MetaDatasContext metaDatas() throws RecognitionException {
		MetaDatasContext _localctx = new MetaDatasContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_metaDatas);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(53);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(50);
					metaData();
					}
					} 
				}
				setState(55);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
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
		enterRule(_localctx, 4, RULE_metaData);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(56);
			match(WORD);
			setState(57);
			match(T__0);
			setState(58);
			_la = _input.LA(1);
			if ( !(_la==NUM || _la==WORD) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(59);
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
		enterRule(_localctx, 6, RULE_sessionImport);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(61);
			match(IMPORT);
			setState(62);
			match(WORD);
			setState(63);
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
		enterRule(_localctx, 8, RULE_periods);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(66); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(65);
				period();
				}
				}
				setState(68); 
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
		enterRule(_localctx, 10, RULE_period);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(70);
			match(WORD);
			setState(71);
			match(T__2);
			setState(72);
			day();
			setState(77);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(73);
					match(T__3);
					setState(74);
					day();
					}
					} 
				}
				setState(79);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			}
			setState(81);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__3) {
				{
				setState(80);
				match(T__3);
				}
			}

			setState(83);
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
		public DayLoopContext dayLoop() {
			return getRuleContext(DayLoopContext.class,0);
		}
		public TerminalNode NUM() { return getToken(PeriodFileParser.NUM, 0); }
		public DayContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_day; }
	}

	public final DayContext day() throws RecognitionException {
		DayContext _localctx = new DayContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_day);
		try {
			setState(95);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case WORD:
				enterOuterAlt(_localctx, 1);
				{
				setState(85);
				match(WORD);
				setState(86);
				match(T__0);
				setState(87);
				dayLoop();
				}
				break;
			case NUM:
				enterOuterAlt(_localctx, 2);
				{
				setState(88);
				match(NUM);
				setState(89);
				match(T__5);
				setState(90);
				match(T__2);
				setState(91);
				dayLoop();
				setState(92);
				match(T__4);
				}
				break;
			case T__2:
			case NOTES:
			case SPORT:
			case IMPORTED:
				enterOuterAlt(_localctx, 3);
				{
				setState(94);
				dayLoop();
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
	public static class DayLoopContext extends ParserRuleContext {
		public List<DayDataContext> dayData() {
			return getRuleContexts(DayDataContext.class);
		}
		public DayDataContext dayData(int i) {
			return getRuleContext(DayDataContext.class,i);
		}
		public DayLoopContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dayLoop; }
	}

	public final DayLoopContext dayLoop() throws RecognitionException {
		DayLoopContext _localctx = new DayLoopContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_dayLoop);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(97);
			dayData();
			setState(102);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(98);
					match(T__6);
					setState(99);
					dayData();
					}
					} 
				}
				setState(104);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
			}
			setState(106);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__6) {
				{
				setState(105);
				match(T__6);
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
		public DayNotesContext dayNotes() {
			return getRuleContext(DayNotesContext.class,0);
		}
		public DayDataContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dayData; }
	}

	public final DayDataContext dayData() throws RecognitionException {
		DayDataContext _localctx = new DayDataContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_dayData);
		try {
			setState(112);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IMPORTED:
				enterOuterAlt(_localctx, 1);
				{
				setState(108);
				imported();
				}
				break;
			case SPORT:
				enterOuterAlt(_localctx, 2);
				{
				setState(109);
				workout();
				}
				break;
			case T__2:
				enterOuterAlt(_localctx, 3);
				{
				setState(110);
				session();
				}
				break;
			case NOTES:
				enterOuterAlt(_localctx, 4);
				{
				setState(111);
				dayNotes();
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
	public static class DayNotesContext extends ParserRuleContext {
		public TerminalNode NOTES() { return getToken(PeriodFileParser.NOTES, 0); }
		public TerminalNode WORD() { return getToken(PeriodFileParser.WORD, 0); }
		public DayNotesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dayNotes; }
	}

	public final DayNotesContext dayNotes() throws RecognitionException {
		DayNotesContext _localctx = new DayNotesContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_dayNotes);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(114);
			match(NOTES);
			setState(115);
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
		enterRule(_localctx, 20, RULE_workout);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(117);
			match(SPORT);
			setState(118);
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
	public static class ImportedContext extends ParserRuleContext {
		public TerminalNode IMPORTED() { return getToken(PeriodFileParser.IMPORTED, 0); }
		public ImportedContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_imported; }
	}

	public final ImportedContext imported() throws RecognitionException {
		ImportedContext _localctx = new ImportedContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_imported);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(120);
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
		enterRule(_localctx, 24, RULE_session);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(122);
			match(T__2);
			setState(123);
			match(SPORT);
			setState(125); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(124);
				sessionSection();
				}
				}
				setState(127); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==WORD );
			setState(129);
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
		enterRule(_localctx, 26, RULE_sessionSection);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(131);
			match(WORD);
			setState(132);
			match(T__2);
			setState(140);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__4:
			case T__6:
			case LOAD:
			case NOTES:
			case WORD:
				{
				setState(133);
				workloads();
				}
				break;
			case NUM:
				{
				setState(134);
				match(NUM);
				setState(135);
				match(T__5);
				setState(136);
				match(T__2);
				setState(137);
				workloads();
				setState(138);
				match(T__4);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(142);
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
		enterRule(_localctx, 28, RULE_workloads);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(144);
			workloadL();
			setState(149);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(145);
					match(T__6);
					setState(146);
					workloadL();
					}
					} 
				}
				setState(151);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			}
			setState(153);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__6) {
				{
				setState(152);
				match(T__6);
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
		enterRule(_localctx, 30, RULE_workloadL);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(156);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WORD) {
				{
				setState(155);
				workload();
				}
			}

			setState(160);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LOAD) {
				{
				setState(158);
				match(LOAD);
				setState(159);
				match(NUM);
				}
			}

			setState(164);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==NOTES) {
				{
				setState(162);
				match(NOTES);
				setState(163);
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
		enterRule(_localctx, 32, RULE_workload);
		try {
			setState(175);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(166);
				match(WORD);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(167);
				match(WORD);
				setState(168);
				lt();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(169);
				match(WORD);
				setState(170);
				gt();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(171);
				match(WORD);
				setState(172);
				between();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(173);
				match(WORD);
				setState(174);
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
		enterRule(_localctx, 34, RULE_lt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(177);
			match(LT);
			setState(178);
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
		enterRule(_localctx, 36, RULE_gt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(180);
			match(GT);
			setState(181);
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
		enterRule(_localctx, 38, RULE_between);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(183);
			match(WORD);
			setState(184);
			match(BW);
			setState(185);
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
		"\u0004\u0001\u0013\u00bc\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007"+
		"\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007"+
		"\u0012\u0002\u0013\u0007\u0013\u0001\u0000\u0001\u0000\u0005\u0000+\b"+
		"\u0000\n\u0000\f\u0000.\t\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0001\u0005\u00014\b\u0001\n\u0001\f\u00017\t\u0001\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0004\u0004\u0004C\b\u0004\u000b\u0004\f\u0004"+
		"D\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0005\u0005"+
		"L\b\u0005\n\u0005\f\u0005O\t\u0005\u0001\u0005\u0003\u0005R\b\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0003"+
		"\u0006`\b\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0005\u0007e\b\u0007"+
		"\n\u0007\f\u0007h\t\u0007\u0001\u0007\u0003\u0007k\b\u0007\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0003\bq\b\b\u0001\t\u0001\t\u0001\t\u0001\n\u0001"+
		"\n\u0001\n\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f\u0004\f~\b"+
		"\f\u000b\f\f\f\u007f\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0001\r\u0001\r\u0003\r\u008d\b\r\u0001\r\u0001\r\u0001"+
		"\u000e\u0001\u000e\u0001\u000e\u0005\u000e\u0094\b\u000e\n\u000e\f\u000e"+
		"\u0097\t\u000e\u0001\u000e\u0003\u000e\u009a\b\u000e\u0001\u000f\u0003"+
		"\u000f\u009d\b\u000f\u0001\u000f\u0001\u000f\u0003\u000f\u00a1\b\u000f"+
		"\u0001\u000f\u0001\u000f\u0003\u000f\u00a5\b\u000f\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0003\u0010\u00b0\b\u0010\u0001\u0011\u0001\u0011\u0001\u0011"+
		"\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0013\u0001\u0013\u0001\u0013"+
		"\u0001\u0013\u0001\u0013\u0000\u0000\u0014\u0000\u0002\u0004\u0006\b\n"+
		"\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&\u0000\u0001"+
		"\u0001\u0000\u0010\u0011\u00be\u0000(\u0001\u0000\u0000\u0000\u00025\u0001"+
		"\u0000\u0000\u0000\u00048\u0001\u0000\u0000\u0000\u0006=\u0001\u0000\u0000"+
		"\u0000\bB\u0001\u0000\u0000\u0000\nF\u0001\u0000\u0000\u0000\f_\u0001"+
		"\u0000\u0000\u0000\u000ea\u0001\u0000\u0000\u0000\u0010p\u0001\u0000\u0000"+
		"\u0000\u0012r\u0001\u0000\u0000\u0000\u0014u\u0001\u0000\u0000\u0000\u0016"+
		"x\u0001\u0000\u0000\u0000\u0018z\u0001\u0000\u0000\u0000\u001a\u0083\u0001"+
		"\u0000\u0000\u0000\u001c\u0090\u0001\u0000\u0000\u0000\u001e\u009c\u0001"+
		"\u0000\u0000\u0000 \u00af\u0001\u0000\u0000\u0000\"\u00b1\u0001\u0000"+
		"\u0000\u0000$\u00b4\u0001\u0000\u0000\u0000&\u00b7\u0001\u0000\u0000\u0000"+
		"(,\u0003\u0002\u0001\u0000)+\u0003\u0006\u0003\u0000*)\u0001\u0000\u0000"+
		"\u0000+.\u0001\u0000\u0000\u0000,*\u0001\u0000\u0000\u0000,-\u0001\u0000"+
		"\u0000\u0000-/\u0001\u0000\u0000\u0000.,\u0001\u0000\u0000\u0000/0\u0003"+
		"\b\u0004\u000001\u0005\u0000\u0000\u00011\u0001\u0001\u0000\u0000\u0000"+
		"24\u0003\u0004\u0002\u000032\u0001\u0000\u0000\u000047\u0001\u0000\u0000"+
		"\u000053\u0001\u0000\u0000\u000056\u0001\u0000\u0000\u00006\u0003\u0001"+
		"\u0000\u0000\u000075\u0001\u0000\u0000\u000089\u0005\u0011\u0000\u0000"+
		"9:\u0005\u0001\u0000\u0000:;\u0007\u0000\u0000\u0000;<\u0005\u0002\u0000"+
		"\u0000<\u0005\u0001\u0000\u0000\u0000=>\u0005\u000b\u0000\u0000>?\u0005"+
		"\u0011\u0000\u0000?@\u0005\u0002\u0000\u0000@\u0007\u0001\u0000\u0000"+
		"\u0000AC\u0003\n\u0005\u0000BA\u0001\u0000\u0000\u0000CD\u0001\u0000\u0000"+
		"\u0000DB\u0001\u0000\u0000\u0000DE\u0001\u0000\u0000\u0000E\t\u0001\u0000"+
		"\u0000\u0000FG\u0005\u0011\u0000\u0000GH\u0005\u0003\u0000\u0000HM\u0003"+
		"\f\u0006\u0000IJ\u0005\u0004\u0000\u0000JL\u0003\f\u0006\u0000KI\u0001"+
		"\u0000\u0000\u0000LO\u0001\u0000\u0000\u0000MK\u0001\u0000\u0000\u0000"+
		"MN\u0001\u0000\u0000\u0000NQ\u0001\u0000\u0000\u0000OM\u0001\u0000\u0000"+
		"\u0000PR\u0005\u0004\u0000\u0000QP\u0001\u0000\u0000\u0000QR\u0001\u0000"+
		"\u0000\u0000RS\u0001\u0000\u0000\u0000ST\u0005\u0005\u0000\u0000T\u000b"+
		"\u0001\u0000\u0000\u0000UV\u0005\u0011\u0000\u0000VW\u0005\u0001\u0000"+
		"\u0000W`\u0003\u000e\u0007\u0000XY\u0005\u0010\u0000\u0000YZ\u0005\u0006"+
		"\u0000\u0000Z[\u0005\u0003\u0000\u0000[\\\u0003\u000e\u0007\u0000\\]\u0005"+
		"\u0005\u0000\u0000]`\u0001\u0000\u0000\u0000^`\u0003\u000e\u0007\u0000"+
		"_U\u0001\u0000\u0000\u0000_X\u0001\u0000\u0000\u0000_^\u0001\u0000\u0000"+
		"\u0000`\r\u0001\u0000\u0000\u0000af\u0003\u0010\b\u0000bc\u0005\u0007"+
		"\u0000\u0000ce\u0003\u0010\b\u0000db\u0001\u0000\u0000\u0000eh\u0001\u0000"+
		"\u0000\u0000fd\u0001\u0000\u0000\u0000fg\u0001\u0000\u0000\u0000gj\u0001"+
		"\u0000\u0000\u0000hf\u0001\u0000\u0000\u0000ik\u0005\u0007\u0000\u0000"+
		"ji\u0001\u0000\u0000\u0000jk\u0001\u0000\u0000\u0000k\u000f\u0001\u0000"+
		"\u0000\u0000lq\u0003\u0016\u000b\u0000mq\u0003\u0014\n\u0000nq\u0003\u0018"+
		"\f\u0000oq\u0003\u0012\t\u0000pl\u0001\u0000\u0000\u0000pm\u0001\u0000"+
		"\u0000\u0000pn\u0001\u0000\u0000\u0000po\u0001\u0000\u0000\u0000q\u0011"+
		"\u0001\u0000\u0000\u0000rs\u0005\r\u0000\u0000st\u0005\u0011\u0000\u0000"+
		"t\u0013\u0001\u0000\u0000\u0000uv\u0005\u000e\u0000\u0000vw\u0003\u001e"+
		"\u000f\u0000w\u0015\u0001\u0000\u0000\u0000xy\u0005\u000f\u0000\u0000"+
		"y\u0017\u0001\u0000\u0000\u0000z{\u0005\u0003\u0000\u0000{}\u0005\u000e"+
		"\u0000\u0000|~\u0003\u001a\r\u0000}|\u0001\u0000\u0000\u0000~\u007f\u0001"+
		"\u0000\u0000\u0000\u007f}\u0001\u0000\u0000\u0000\u007f\u0080\u0001\u0000"+
		"\u0000\u0000\u0080\u0081\u0001\u0000\u0000\u0000\u0081\u0082\u0005\u0005"+
		"\u0000\u0000\u0082\u0019\u0001\u0000\u0000\u0000\u0083\u0084\u0005\u0011"+
		"\u0000\u0000\u0084\u008c\u0005\u0003\u0000\u0000\u0085\u008d\u0003\u001c"+
		"\u000e\u0000\u0086\u0087\u0005\u0010\u0000\u0000\u0087\u0088\u0005\u0006"+
		"\u0000\u0000\u0088\u0089\u0005\u0003\u0000\u0000\u0089\u008a\u0003\u001c"+
		"\u000e\u0000\u008a\u008b\u0005\u0005\u0000\u0000\u008b\u008d\u0001\u0000"+
		"\u0000\u0000\u008c\u0085\u0001\u0000\u0000\u0000\u008c\u0086\u0001\u0000"+
		"\u0000\u0000\u008d\u008e\u0001\u0000\u0000\u0000\u008e\u008f\u0005\u0005"+
		"\u0000\u0000\u008f\u001b\u0001\u0000\u0000\u0000\u0090\u0095\u0003\u001e"+
		"\u000f\u0000\u0091\u0092\u0005\u0007\u0000\u0000\u0092\u0094\u0003\u001e"+
		"\u000f\u0000\u0093\u0091\u0001\u0000\u0000\u0000\u0094\u0097\u0001\u0000"+
		"\u0000\u0000\u0095\u0093\u0001\u0000\u0000\u0000\u0095\u0096\u0001\u0000"+
		"\u0000\u0000\u0096\u0099\u0001\u0000\u0000\u0000\u0097\u0095\u0001\u0000"+
		"\u0000\u0000\u0098\u009a\u0005\u0007\u0000\u0000\u0099\u0098\u0001\u0000"+
		"\u0000\u0000\u0099\u009a\u0001\u0000\u0000\u0000\u009a\u001d\u0001\u0000"+
		"\u0000\u0000\u009b\u009d\u0003 \u0010\u0000\u009c\u009b\u0001\u0000\u0000"+
		"\u0000\u009c\u009d\u0001\u0000\u0000\u0000\u009d\u00a0\u0001\u0000\u0000"+
		"\u0000\u009e\u009f\u0005\f\u0000\u0000\u009f\u00a1\u0005\u0010\u0000\u0000"+
		"\u00a0\u009e\u0001\u0000\u0000\u0000\u00a0\u00a1\u0001\u0000\u0000\u0000"+
		"\u00a1\u00a4\u0001\u0000\u0000\u0000\u00a2\u00a3\u0005\r\u0000\u0000\u00a3"+
		"\u00a5\u0005\u0011\u0000\u0000\u00a4\u00a2\u0001\u0000\u0000\u0000\u00a4"+
		"\u00a5\u0001\u0000\u0000\u0000\u00a5\u001f\u0001\u0000\u0000\u0000\u00a6"+
		"\u00b0\u0005\u0011\u0000\u0000\u00a7\u00a8\u0005\u0011\u0000\u0000\u00a8"+
		"\u00b0\u0003\"\u0011\u0000\u00a9\u00aa\u0005\u0011\u0000\u0000\u00aa\u00b0"+
		"\u0003$\u0012\u0000\u00ab\u00ac\u0005\u0011\u0000\u0000\u00ac\u00b0\u0003"+
		"&\u0013\u0000\u00ad\u00ae\u0005\u0011\u0000\u0000\u00ae\u00b0\u0005\u0011"+
		"\u0000\u0000\u00af\u00a6\u0001\u0000\u0000\u0000\u00af\u00a7\u0001\u0000"+
		"\u0000\u0000\u00af\u00a9\u0001\u0000\u0000\u0000\u00af\u00ab\u0001\u0000"+
		"\u0000\u0000\u00af\u00ad\u0001\u0000\u0000\u0000\u00b0!\u0001\u0000\u0000"+
		"\u0000\u00b1\u00b2\u0005\b\u0000\u0000\u00b2\u00b3\u0005\u0011\u0000\u0000"+
		"\u00b3#\u0001\u0000\u0000\u0000\u00b4\u00b5\u0005\t\u0000\u0000\u00b5"+
		"\u00b6\u0005\u0011\u0000\u0000\u00b6%\u0001\u0000\u0000\u0000\u00b7\u00b8"+
		"\u0005\u0011\u0000\u0000\u00b8\u00b9\u0005\n\u0000\u0000\u00b9\u00ba\u0005"+
		"\u0011\u0000\u0000\u00ba\'\u0001\u0000\u0000\u0000\u0011,5DMQ_fjp\u007f"+
		"\u008c\u0095\u0099\u009c\u00a0\u00a4\u00af";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}