// Generated from /home/dylan/Coding/LexiTrainLang/ANTLR/PeriodFile.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link PeriodFileParser}.
 */
public interface PeriodFileListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link PeriodFileParser#file}.
	 * @param ctx the parse tree
	 */
	void enterFile(PeriodFileParser.FileContext ctx);
	/**
	 * Exit a parse tree produced by {@link PeriodFileParser#file}.
	 * @param ctx the parse tree
	 */
	void exitFile(PeriodFileParser.FileContext ctx);
	/**
	 * Enter a parse tree produced by {@link PeriodFileParser#metaData}.
	 * @param ctx the parse tree
	 */
	void enterMetaData(PeriodFileParser.MetaDataContext ctx);
	/**
	 * Exit a parse tree produced by {@link PeriodFileParser#metaData}.
	 * @param ctx the parse tree
	 */
	void exitMetaData(PeriodFileParser.MetaDataContext ctx);
	/**
	 * Enter a parse tree produced by {@link PeriodFileParser#sessionImport}.
	 * @param ctx the parse tree
	 */
	void enterSessionImport(PeriodFileParser.SessionImportContext ctx);
	/**
	 * Exit a parse tree produced by {@link PeriodFileParser#sessionImport}.
	 * @param ctx the parse tree
	 */
	void exitSessionImport(PeriodFileParser.SessionImportContext ctx);
	/**
	 * Enter a parse tree produced by {@link PeriodFileParser#periods}.
	 * @param ctx the parse tree
	 */
	void enterPeriods(PeriodFileParser.PeriodsContext ctx);
	/**
	 * Exit a parse tree produced by {@link PeriodFileParser#periods}.
	 * @param ctx the parse tree
	 */
	void exitPeriods(PeriodFileParser.PeriodsContext ctx);
	/**
	 * Enter a parse tree produced by {@link PeriodFileParser#period}.
	 * @param ctx the parse tree
	 */
	void enterPeriod(PeriodFileParser.PeriodContext ctx);
	/**
	 * Exit a parse tree produced by {@link PeriodFileParser#period}.
	 * @param ctx the parse tree
	 */
	void exitPeriod(PeriodFileParser.PeriodContext ctx);
	/**
	 * Enter a parse tree produced by {@link PeriodFileParser#periodPair}.
	 * @param ctx the parse tree
	 */
	void enterPeriodPair(PeriodFileParser.PeriodPairContext ctx);
	/**
	 * Exit a parse tree produced by {@link PeriodFileParser#periodPair}.
	 * @param ctx the parse tree
	 */
	void exitPeriodPair(PeriodFileParser.PeriodPairContext ctx);
	/**
	 * Enter a parse tree produced by {@link PeriodFileParser#data}.
	 * @param ctx the parse tree
	 */
	void enterData(PeriodFileParser.DataContext ctx);
	/**
	 * Exit a parse tree produced by {@link PeriodFileParser#data}.
	 * @param ctx the parse tree
	 */
	void exitData(PeriodFileParser.DataContext ctx);
	/**
	 * Enter a parse tree produced by {@link PeriodFileParser#workouts}.
	 * @param ctx the parse tree
	 */
	void enterWorkouts(PeriodFileParser.WorkoutsContext ctx);
	/**
	 * Exit a parse tree produced by {@link PeriodFileParser#workouts}.
	 * @param ctx the parse tree
	 */
	void exitWorkouts(PeriodFileParser.WorkoutsContext ctx);
	/**
	 * Enter a parse tree produced by {@link PeriodFileParser#workout}.
	 * @param ctx the parse tree
	 */
	void enterWorkout(PeriodFileParser.WorkoutContext ctx);
	/**
	 * Exit a parse tree produced by {@link PeriodFileParser#workout}.
	 * @param ctx the parse tree
	 */
	void exitWorkout(PeriodFileParser.WorkoutContext ctx);
	/**
	 * Enter a parse tree produced by {@link PeriodFileParser#session}.
	 * @param ctx the parse tree
	 */
	void enterSession(PeriodFileParser.SessionContext ctx);
	/**
	 * Exit a parse tree produced by {@link PeriodFileParser#session}.
	 * @param ctx the parse tree
	 */
	void exitSession(PeriodFileParser.SessionContext ctx);
	/**
	 * Enter a parse tree produced by {@link PeriodFileParser#sessionSection}.
	 * @param ctx the parse tree
	 */
	void enterSessionSection(PeriodFileParser.SessionSectionContext ctx);
	/**
	 * Exit a parse tree produced by {@link PeriodFileParser#sessionSection}.
	 * @param ctx the parse tree
	 */
	void exitSessionSection(PeriodFileParser.SessionSectionContext ctx);
	/**
	 * Enter a parse tree produced by {@link PeriodFileParser#workloads}.
	 * @param ctx the parse tree
	 */
	void enterWorkloads(PeriodFileParser.WorkloadsContext ctx);
	/**
	 * Exit a parse tree produced by {@link PeriodFileParser#workloads}.
	 * @param ctx the parse tree
	 */
	void exitWorkloads(PeriodFileParser.WorkloadsContext ctx);
	/**
	 * Enter a parse tree produced by {@link PeriodFileParser#workload}.
	 * @param ctx the parse tree
	 */
	void enterWorkload(PeriodFileParser.WorkloadContext ctx);
	/**
	 * Exit a parse tree produced by {@link PeriodFileParser#workload}.
	 * @param ctx the parse tree
	 */
	void exitWorkload(PeriodFileParser.WorkloadContext ctx);
}