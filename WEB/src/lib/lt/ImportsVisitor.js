// Generated from ./Imports.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by ImportsParser.

export default class ImportsVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by ImportsParser#file.
	visitFile(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by ImportsParser#importStatement.
	visitImportStatement(ctx) {
	  return this.visitChildren(ctx);
	}



}