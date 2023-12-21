// Generated from LexiTrain.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link LexiTrainParser}.
 */
public interface LexiTrainListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link LexiTrainParser#lexi}.
	 * @param ctx the parse tree
	 */
	void enterLexi(LexiTrainParser.LexiContext ctx);
	/**
	 * Exit a parse tree produced by {@link LexiTrainParser#lexi}.
	 * @param ctx the parse tree
	 */
	void exitLexi(LexiTrainParser.LexiContext ctx);
	/**
	 * Enter a parse tree produced by {@link LexiTrainParser#day}.
	 * @param ctx the parse tree
	 */
	void enterDay(LexiTrainParser.DayContext ctx);
	/**
	 * Exit a parse tree produced by {@link LexiTrainParser#day}.
	 * @param ctx the parse tree
	 */
	void exitDay(LexiTrainParser.DayContext ctx);
}