grammar LexiTrain;

//parser rules
lexi:(metaData)* periods EOF;

metaData: WORD ':' WORD '.';

periods: (period)+;

period
    : WORD '{' periodPair (',' periodPair)* '}' 
    ;

periodPair
    : WORD ':' data
    | NUM REPEAT '{' data '}'
    | data
    ;

data
    : dataPair ('&&' dataPair)*
    ;

dataPair
    : SPORT (WORD)* (LOAD)? 
    ;

//lexer rules
REPEAT : '*';

NUM: [0-9]+;
WORD: [a-zA-Z0-9]+ | '"' (ESC|.)*? '"';
LOAD: WORD '=' NUM;
SPORT: '(' WORD ')';

LINE_COMMENT : '//' .*? '\r'? '\n' -> skip ;
WS : [ \t\r\n]+ -> skip ;

fragment ESC : '\\"' | '\\\\' ;