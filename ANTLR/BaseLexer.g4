lexer grammar BaseLexer;

LT: '<';
GT: '>';
BW: '-';

IMPORT: 'import';
LOAD: 'load=';
NOTES: 'note=';

NUM: [0-9]+;
WORD: [a-zA-Z0-9_/]+ | '"' (ESC|.)*? '"';
SPORT: '(' WORD ')';
IMPORTED: '[' WORD ']';


LINE_COMMENT : '//' .*? '\r'? '\n' -> skip ;
WS : [ \t\r\n]+ -> skip ;

fragment ESC : '\\"' | '\\\\' ;