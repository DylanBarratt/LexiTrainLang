lexer grammar BaseLexer;

NUM: [0-9]+;
WORD: [a-zA-Z0-9]+ | '"' (ESC|.)*? '"';
LOAD: WORD '=' NUM;
SPORT: '(' WORD ')';

LINE_COMMENT : '//' .*? '\r'? '\n' -> skip ;
WS : [ \t\r\n]+ -> skip ;

fragment ESC : '\\"' | '\\\\' ;