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
		public TerminalNode EOF() { return getToken(PeriodFileParser.EOF, 0); }
		public List<SessionImportContext> sessionImport() {
			return getRuleContexts(SessionImportContext.class);
		}
		public SessionImportContext sessionImport(int i) {
			return getRuleContext(SessionImportContext.class,i);
		}
		public List<PeriodsContext> periods() {
			return getRuleContexts(PeriodsContext.class);
		}
		public PeriodsContext periods(int i) {
			return getRuleContext(PeriodsContext.class,i);
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
			setState(50);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WORD) {
				{
				{
				setState(47);
				periods();
				}
				}
				setState(52);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(53);
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
			setState(58);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(55);
					metaData();
					}
					} 
				}
				setState(60);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
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
			setState(61);
			match(WORD);
			setState(62);
			match(T__0);
			setState(63);
			_la = _input.LA(1);
			if ( !(_la==NUM || _la==WORD) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(64);
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
			setState(66);
			match(IMPORT);
			setState(67);
			match(WORD);
			setState(68);
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
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(71); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(70);
					period();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(73); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
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
			setState(75);
			match(WORD);
			setState(76);
			match(T__2);
			setState(77);
			day();
			setState(82);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(78);
					match(T__3);
					setState(79);
					day();
					}
					} 
				}
				setState(84);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			}
			setState(86);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__3) {
				{
				setState(85);
				match(T__3);
				}
			}

			setState(88);
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
			setState(100);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case WORD:
				enterOuterAlt(_localctx, 1);
				{
				setState(90);
				match(WORD);
				setState(91);
				match(T__0);
				setState(92);
				dayLoop();
				}
				break;
			case NUM:
				enterOuterAlt(_localctx, 2);
				{
				setState(93);
				match(NUM);
				setState(94);
				match(T__5);
				setState(95);
				match(T__2);
				setState(96);
				dayLoop();
				setState(97);
				match(T__4);
				}
				break;
			case T__2:
			case NOTES:
			case SPORT:
			case IMPORTED:
				enterOuterAlt(_localctx, 3);
				{
				setState(99);
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
			setState(102);
			dayData();
			setState(107);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(103);
					match(T__6);
					setState(104);
					dayData();
					}
					} 
				}
				setState(109);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			}
			setState(111);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__6) {
				{
				setState(110);
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
			setState(117);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IMPORTED:
				enterOuterAlt(_localctx, 1);
				{
				setState(113);
				imported();
				}
				break;
			case SPORT:
				enterOuterAlt(_localctx, 2);
				{
				setState(114);
				workout();
				}
				break;
			case T__2:
				enterOuterAlt(_localctx, 3);
				{
				setState(115);
				session();
				}
				break;
			case NOTES:
				enterOuterAlt(_localctx, 4);
				{
				setState(116);
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
			setState(119);
			match(NOTES);
			setState(120);
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
			setState(122);
			match(SPORT);
			setState(123);
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
			setState(125);
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
			setState(127);
			match(T__2);
			setState(128);
			match(SPORT);
			setState(130); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(129);
				sessionSection();
				}
				}
				setState(132); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==WORD );
			setState(134);
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
			setState(136);
			match(WORD);
			setState(137);
			match(T__2);
			setState(145);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__4:
			case T__6:
			case LOAD:
			case NOTES:
			case WORD:
				{
				setState(138);
				workloads();
				}
				break;
			case NUM:
				{
				setState(139);
				match(NUM);
				setState(140);
				match(T__5);
				setState(141);
				match(T__2);
				setState(142);
				workloads();
				setState(143);
				match(T__4);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(147);
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
			setState(149);
			workloadL();
			setState(154);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(150);
					match(T__6);
					setState(151);
					workloadL();
					}
					} 
				}
				setState(156);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
			}
			setState(158);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__6) {
				{
				setState(157);
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
			setState(161);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WORD) {
				{
				setState(160);
				workload();
				}
			}

			setState(165);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LOAD) {
				{
				setState(163);
				match(LOAD);
				setState(164);
				match(NUM);
				}
			}

			setState(169);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==NOTES) {
				{
				setState(167);
				match(NOTES);
				setState(168);
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
			setState(180);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(171);
				match(WORD);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(172);
				match(WORD);
				setState(173);
				lt();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(174);
				match(WORD);
				setState(175);
				gt();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(176);
				match(WORD);
				setState(177);
				between();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(178);
				match(WORD);
				setState(179);
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
			setState(182);
			match(LT);
			setState(183);
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
			setState(185);
			match(GT);
			setState(186);
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
			setState(188);
			match(WORD);
			setState(189);
			match(BW);
			setState(190);
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
		"\u0004\u0001\u0013\u00c1\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007"+
		"\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007"+
		"\u0012\u0002\u0013\u0007\u0013\u0001\u0000\u0001\u0000\u0005\u0000+\b"+
		"\u0000\n\u0000\f\u0000.\t\u0000\u0001\u0000\u0005\u00001\b\u0000\n\u0000"+
		"\f\u00004\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0005\u00019\b\u0001"+
		"\n\u0001\f\u0001<\t\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004"+
		"\u0004\u0004H\b\u0004\u000b\u0004\f\u0004I\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0005\u0005Q\b\u0005\n\u0005\f\u0005T\t"+
		"\u0005\u0001\u0005\u0003\u0005W\b\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0003\u0006e\b\u0006\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0005\u0007j\b\u0007\n\u0007\f\u0007m\t"+
		"\u0007\u0001\u0007\u0003\u0007p\b\u0007\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0003\bv\b\b\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001"+
		"\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f\u0004\f\u0083\b\f\u000b\f\f"+
		"\f\u0084\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0001\r\u0003\r\u0092\b\r\u0001\r\u0001\r\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0005\u000e\u0099\b\u000e\n\u000e\f\u000e\u009c"+
		"\t\u000e\u0001\u000e\u0003\u000e\u009f\b\u000e\u0001\u000f\u0003\u000f"+
		"\u00a2\b\u000f\u0001\u000f\u0001\u000f\u0003\u000f\u00a6\b\u000f\u0001"+
		"\u000f\u0001\u000f\u0003\u000f\u00aa\b\u000f\u0001\u0010\u0001\u0010\u0001"+
		"\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001"+
		"\u0010\u0003\u0010\u00b5\b\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0001"+
		"\u0013\u0001\u0013\u0000\u0000\u0014\u0000\u0002\u0004\u0006\b\n\f\u000e"+
		"\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&\u0000\u0001\u0001"+
		"\u0000\u0010\u0011\u00c4\u0000(\u0001\u0000\u0000\u0000\u0002:\u0001\u0000"+
		"\u0000\u0000\u0004=\u0001\u0000\u0000\u0000\u0006B\u0001\u0000\u0000\u0000"+
		"\bG\u0001\u0000\u0000\u0000\nK\u0001\u0000\u0000\u0000\fd\u0001\u0000"+
		"\u0000\u0000\u000ef\u0001\u0000\u0000\u0000\u0010u\u0001\u0000\u0000\u0000"+
		"\u0012w\u0001\u0000\u0000\u0000\u0014z\u0001\u0000\u0000\u0000\u0016}"+
		"\u0001\u0000\u0000\u0000\u0018\u007f\u0001\u0000\u0000\u0000\u001a\u0088"+
		"\u0001\u0000\u0000\u0000\u001c\u0095\u0001\u0000\u0000\u0000\u001e\u00a1"+
		"\u0001\u0000\u0000\u0000 \u00b4\u0001\u0000\u0000\u0000\"\u00b6\u0001"+
		"\u0000\u0000\u0000$\u00b9\u0001\u0000\u0000\u0000&\u00bc\u0001\u0000\u0000"+
		"\u0000(,\u0003\u0002\u0001\u0000)+\u0003\u0006\u0003\u0000*)\u0001\u0000"+
		"\u0000\u0000+.\u0001\u0000\u0000\u0000,*\u0001\u0000\u0000\u0000,-\u0001"+
		"\u0000\u0000\u0000-2\u0001\u0000\u0000\u0000.,\u0001\u0000\u0000\u0000"+
		"/1\u0003\b\u0004\u00000/\u0001\u0000\u0000\u000014\u0001\u0000\u0000\u0000"+
		"20\u0001\u0000\u0000\u000023\u0001\u0000\u0000\u000035\u0001\u0000\u0000"+
		"\u000042\u0001\u0000\u0000\u000056\u0005\u0000\u0000\u00016\u0001\u0001"+
		"\u0000\u0000\u000079\u0003\u0004\u0002\u000087\u0001\u0000\u0000\u0000"+
		"9<\u0001\u0000\u0000\u0000:8\u0001\u0000\u0000\u0000:;\u0001\u0000\u0000"+
		"\u0000;\u0003\u0001\u0000\u0000\u0000<:\u0001\u0000\u0000\u0000=>\u0005"+
		"\u0011\u0000\u0000>?\u0005\u0001\u0000\u0000?@\u0007\u0000\u0000\u0000"+
		"@A\u0005\u0002\u0000\u0000A\u0005\u0001\u0000\u0000\u0000BC\u0005\u000b"+
		"\u0000\u0000CD\u0005\u0011\u0000\u0000DE\u0005\u0002\u0000\u0000E\u0007"+
		"\u0001\u0000\u0000\u0000FH\u0003\n\u0005\u0000GF\u0001\u0000\u0000\u0000"+
		"HI\u0001\u0000\u0000\u0000IG\u0001\u0000\u0000\u0000IJ\u0001\u0000\u0000"+
		"\u0000J\t\u0001\u0000\u0000\u0000KL\u0005\u0011\u0000\u0000LM\u0005\u0003"+
		"\u0000\u0000MR\u0003\f\u0006\u0000NO\u0005\u0004\u0000\u0000OQ\u0003\f"+
		"\u0006\u0000PN\u0001\u0000\u0000\u0000QT\u0001\u0000\u0000\u0000RP\u0001"+
		"\u0000\u0000\u0000RS\u0001\u0000\u0000\u0000SV\u0001\u0000\u0000\u0000"+
		"TR\u0001\u0000\u0000\u0000UW\u0005\u0004\u0000\u0000VU\u0001\u0000\u0000"+
		"\u0000VW\u0001\u0000\u0000\u0000WX\u0001\u0000\u0000\u0000XY\u0005\u0005"+
		"\u0000\u0000Y\u000b\u0001\u0000\u0000\u0000Z[\u0005\u0011\u0000\u0000"+
		"[\\\u0005\u0001\u0000\u0000\\e\u0003\u000e\u0007\u0000]^\u0005\u0010\u0000"+
		"\u0000^_\u0005\u0006\u0000\u0000_`\u0005\u0003\u0000\u0000`a\u0003\u000e"+
		"\u0007\u0000ab\u0005\u0005\u0000\u0000be\u0001\u0000\u0000\u0000ce\u0003"+
		"\u000e\u0007\u0000dZ\u0001\u0000\u0000\u0000d]\u0001\u0000\u0000\u0000"+
		"dc\u0001\u0000\u0000\u0000e\r\u0001\u0000\u0000\u0000fk\u0003\u0010\b"+
		"\u0000gh\u0005\u0007\u0000\u0000hj\u0003\u0010\b\u0000ig\u0001\u0000\u0000"+
		"\u0000jm\u0001\u0000\u0000\u0000ki\u0001\u0000\u0000\u0000kl\u0001\u0000"+
		"\u0000\u0000lo\u0001\u0000\u0000\u0000mk\u0001\u0000\u0000\u0000np\u0005"+
		"\u0007\u0000\u0000on\u0001\u0000\u0000\u0000op\u0001\u0000\u0000\u0000"+
		"p\u000f\u0001\u0000\u0000\u0000qv\u0003\u0016\u000b\u0000rv\u0003\u0014"+
		"\n\u0000sv\u0003\u0018\f\u0000tv\u0003\u0012\t\u0000uq\u0001\u0000\u0000"+
		"\u0000ur\u0001\u0000\u0000\u0000us\u0001\u0000\u0000\u0000ut\u0001\u0000"+
		"\u0000\u0000v\u0011\u0001\u0000\u0000\u0000wx\u0005\r\u0000\u0000xy\u0005"+
		"\u0011\u0000\u0000y\u0013\u0001\u0000\u0000\u0000z{\u0005\u000e\u0000"+
		"\u0000{|\u0003\u001e\u000f\u0000|\u0015\u0001\u0000\u0000\u0000}~\u0005"+
		"\u000f\u0000\u0000~\u0017\u0001\u0000\u0000\u0000\u007f\u0080\u0005\u0003"+
		"\u0000\u0000\u0080\u0082\u0005\u000e\u0000\u0000\u0081\u0083\u0003\u001a"+
		"\r\u0000\u0082\u0081\u0001\u0000\u0000\u0000\u0083\u0084\u0001\u0000\u0000"+
		"\u0000\u0084\u0082\u0001\u0000\u0000\u0000\u0084\u0085\u0001\u0000\u0000"+
		"\u0000\u0085\u0086\u0001\u0000\u0000\u0000\u0086\u0087\u0005\u0005\u0000"+
		"\u0000\u0087\u0019\u0001\u0000\u0000\u0000\u0088\u0089\u0005\u0011\u0000"+
		"\u0000\u0089\u0091\u0005\u0003\u0000\u0000\u008a\u0092\u0003\u001c\u000e"+
		"\u0000\u008b\u008c\u0005\u0010\u0000\u0000\u008c\u008d\u0005\u0006\u0000"+
		"\u0000\u008d\u008e\u0005\u0003\u0000\u0000\u008e\u008f\u0003\u001c\u000e"+
		"\u0000\u008f\u0090\u0005\u0005\u0000\u0000\u0090\u0092\u0001\u0000\u0000"+
		"\u0000\u0091\u008a\u0001\u0000\u0000\u0000\u0091\u008b\u0001\u0000\u0000"+
		"\u0000\u0092\u0093\u0001\u0000\u0000\u0000\u0093\u0094\u0005\u0005\u0000"+
		"\u0000\u0094\u001b\u0001\u0000\u0000\u0000\u0095\u009a\u0003\u001e\u000f"+
		"\u0000\u0096\u0097\u0005\u0007\u0000\u0000\u0097\u0099\u0003\u001e\u000f"+
		"\u0000\u0098\u0096\u0001\u0000\u0000\u0000\u0099\u009c\u0001\u0000\u0000"+
		"\u0000\u009a\u0098\u0001\u0000\u0000\u0000\u009a\u009b\u0001\u0000\u0000"+
		"\u0000\u009b\u009e\u0001\u0000\u0000\u0000\u009c\u009a\u0001\u0000\u0000"+
		"\u0000\u009d\u009f\u0005\u0007\u0000\u0000\u009e\u009d\u0001\u0000\u0000"+
		"\u0000\u009e\u009f\u0001\u0000\u0000\u0000\u009f\u001d\u0001\u0000\u0000"+
		"\u0000\u00a0\u00a2\u0003 \u0010\u0000\u00a1\u00a0\u0001\u0000\u0000\u0000"+
		"\u00a1\u00a2\u0001\u0000\u0000\u0000\u00a2\u00a5\u0001\u0000\u0000\u0000"+
		"\u00a3\u00a4\u0005\f\u0000\u0000\u00a4\u00a6\u0005\u0010\u0000\u0000\u00a5"+
		"\u00a3\u0001\u0000\u0000\u0000\u00a5\u00a6\u0001\u0000\u0000\u0000\u00a6"+
		"\u00a9\u0001\u0000\u0000\u0000\u00a7\u00a8\u0005\r\u0000\u0000\u00a8\u00aa"+
		"\u0005\u0011\u0000\u0000\u00a9\u00a7\u0001\u0000\u0000\u0000\u00a9\u00aa"+
		"\u0001\u0000\u0000\u0000\u00aa\u001f\u0001\u0000\u0000\u0000\u00ab\u00b5"+
		"\u0005\u0011\u0000\u0000\u00ac\u00ad\u0005\u0011\u0000\u0000\u00ad\u00b5"+
		"\u0003\"\u0011\u0000\u00ae\u00af\u0005\u0011\u0000\u0000\u00af\u00b5\u0003"+
		"$\u0012\u0000\u00b0\u00b1\u0005\u0011\u0000\u0000\u00b1\u00b5\u0003&\u0013"+
		"\u0000\u00b2\u00b3\u0005\u0011\u0000\u0000\u00b3\u00b5\u0005\u0011\u0000"+
		"\u0000\u00b4\u00ab\u0001\u0000\u0000\u0000\u00b4\u00ac\u0001\u0000\u0000"+
		"\u0000\u00b4\u00ae\u0001\u0000\u0000\u0000\u00b4\u00b0\u0001\u0000\u0000"+
		"\u0000\u00b4\u00b2\u0001\u0000\u0000\u0000\u00b5!\u0001\u0000\u0000\u0000"+
		"\u00b6\u00b7\u0005\b\u0000\u0000\u00b7\u00b8\u0005\u0011\u0000\u0000\u00b8"+
		"#\u0001\u0000\u0000\u0000\u00b9\u00ba\u0005\t\u0000\u0000\u00ba\u00bb"+
		"\u0005\u0011\u0000\u0000\u00bb%\u0001\u0000\u0000\u0000\u00bc\u00bd\u0005"+
		"\u0011\u0000\u0000\u00bd\u00be\u0005\n\u0000\u0000\u00be\u00bf\u0005\u0011"+
		"\u0000\u0000\u00bf\'\u0001\u0000\u0000\u0000\u0012,2:IRVdkou\u0084\u0091"+
		"\u009a\u009e\u00a1\u00a5\u00a9\u00b4";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}