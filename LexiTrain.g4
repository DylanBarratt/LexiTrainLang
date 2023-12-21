grammar LexiTrain;

//Parser rules

lexi
    : metaData periods EOF
    ;

metaData: (attribute)*;

//TODO: ignore whitespace after colon
attribute: WORDS ': ' STRING;

periods: (period)*;

period
    : WORDS '{' day '}'
    | WORDS '{' '}' //Empty period
    ;

//TODO multiple days!
day
    : DATE ': ' WORDS
    ;
    
//Lexer rules
DATE
    : 'Mon'
    | 'Tue'
    | 'Wed'
    | 'Thu'
    | 'Fri'
    | 'Sat'
    | 'Sun'
    ;
WORDS: [a-zA-Z0-9 ]+;

STRING: '"' .*? '"';


WS : [ \t\r\n]+ -> skip ;