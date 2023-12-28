grammar PeriodFile;

import BaseLexer;

//parser rules
file:(metaData)* periods EOF;

metaData: WORD ':' WORD '.';

periods: (period)+;

period
    : WORD '{' periodPair (',' periodPair)* '}' 
    ;

periodPair
    : WORD ':' data //specified day
    | NUM '*' '{' data '}' //looped days (unspecified day)
    | data //non-specified day
    ;

data
    : workouts //single line session
    | session //inline session
    ;

workouts //single line session
    : workout ('&&' workout)*
    ;

workout: SPORT (WORD)* (LOAD)? ;

session //inline session
    : '{' SPORT (sessionSection)+ '}' //name of sport and the sections of the session
    ;

sessionSection 
    : WORD '{' (workloads | NUM '*' '{' workloads '}') '}' //single workloads or repeated workloads
    ;

workloads: workload ('&&' workload)*;

workload
    : WORD '<' WORD //less than intensities
    | WORD WORD '-' WORD //between intensities
    | WORD WORD //at intensity
    ; 

    
//lexer rules
