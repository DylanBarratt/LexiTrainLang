grammar SessionFile;

import BaseLexer;

//Parser rules
file: (metaData)+ (section)+;

metaData: WORD ':' WORD '.';

section: WORD '{' (workloads | NUM '*' '{' workloads '}') '}'; //single workloads or repeated workloads

workloads: workload ('&&' workload)*;

workload
    : WORD '<' WORD //less than intensities
    | WORD WORD '-' WORD //between intensities
    | WORD WORD //at intensity
    ; 


//Lexer rules