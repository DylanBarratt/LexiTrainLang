grammar LexiTrain;

//parser rules
lexi:(metaData)* periods EOF;

metaData: TEXT ': ' VALUE '.';

periods: (period)+;

period
    : TEXT '{' periodPair (',' periodPair)* '}' 
    ;

periodPair
    : TEXT ': ' data
    | data
    ;

data
    : dataPair ('&&' (' ')? dataPair)*
    ;

dataPair
    : '(' TEXT ')' (' ')? (TEXT)* (VALUE)? (load)?
    ;

load : TEXT '=' TEXT;

//lexer rules
VALUE : '"' (ESC|.)*? '"';
fragment ESC : '\\"' | '\\\\' ;

TEXT : [a-zA-Z0-9 ]+ ;

LINE_COMMENT : '//' .*? '\r'? '\n' -> skip ;
WS : [ \t\r\n]+ -> skip ;