grammar LexiTrain;


//Parser rules
lexi
    : day;

day
    : DATE TEXT;



//Lexer rules
//TODO: more date formats need to be recognized
DATE
    : 'Mon:'
    | 'Tue:'
    | 'Wed:'
    | 'Thu:'
    | 'Fri:'
    | 'Sat:'
    | 'Sun:'
    ;

TEXT: [a-zA-Z]+; 
WS : [ \t\r\n]+ -> skip ;