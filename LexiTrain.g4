grammar LexiTrain;

//parser rules
lexi:
    | (metaDatas) EOF
    ;

metaDatas: 
    | (metaData)+
    ;

metaData: TEXT ': ' VALUE;

//lexer rules
VALUE : '"' (ESC|.)*? '"';
fragment ESC : '\\"' | '\\\\' ;

TEXT : [a-zA-Z ]+ ;


WS : [ \t\r\n]+ -> skip ;