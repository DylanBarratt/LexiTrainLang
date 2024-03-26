grammar PeriodFile;

import BaseLexer;

//parser rules
file:(metaData)* (sessionImport)* periods EOF;

metaData: WORD ':' WORD '.';

sessionImport: IMPORT WORD '.';

periods: (period)+;

period
    : WORD '{' periodPair (',' periodPair)* '}' 
    ;

periodPair
    : WORD ':' data //specified day
    | WORD ':' WORD ('&&' data)? //import
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
    : WORD (LT | GT) WORD //lt or gt intensities
    | WORD WORD '-' WORD //between intensities
    | WORD WORD //at intensity
    ; 


//lexer rules
