lexer grammar BaseLexer;

LT: '<';
GT: '>';
IMPORT: 'import';

NUM: [0-9]+;
WORD: [a-zA-Z0-9_/]+ | '"' (ESC|.)*? '"';
LOAD: WORD '=' NUM;
SPORT: '(' WORD ')';


LINE_COMMENT : '//' .*? '\r'? '\n' -> skip ;
WS : [ \t\r\n]+ -> skip ;

fragment ESC : '\\"' | '\\\\' ;