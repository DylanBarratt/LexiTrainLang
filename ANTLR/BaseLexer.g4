lexer grammar BaseLexer;

LT: '<';
GT: '>';
BW: '-';

IMPORT: 'import';
LOAD: 'load=';
NOTES: 'note=';

SPORT: '(' WORD ')';
IMPORTED: '[' WORD ']';

NUM: [0-9]+;
WORD: [a-zA-Z0-9_/]+ | '"' (ESC|.)*? '"';



LINE_COMMENT : '//' .*? '\r'? '\n' -> skip ;
WS : [ \t\r\n]+ -> skip ;

fragment ESC : '\\"' | '\\\\' ;