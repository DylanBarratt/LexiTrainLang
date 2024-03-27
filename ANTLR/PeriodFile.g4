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
    : WORD ':' data ('&&' data)* //specified day
    | NUM '*' '{' data '}' //looped days (unspecified day)
    | data ('&&' data)* //non-specified day
    ;

data
    : imported //imported
    | workouts //single line session
    | session //inline session
    ;

imported: IMPORTED;

workouts //single line session
    : workout ('&&' workout)*
    ;

workout: SPORT workloadL;

session //inline session
    : '{' SPORT (sessionSection)+ '}' //name of sport and the sections of the session
    ;

sessionSection: WORD '{' (workloads | NUM '*' '{' workloads '}') '}'; //single workloads or repeated workloads

workloads: workloadL ('&&' workloadL)*;

workloadL: workload (LOAD NUM)? (NOTES WORD)?; // workload load notes

workload
    : WORD // no specified intensity (just time)
    | WORD lt 
    | WORD gt
    | WORD between
    | WORD WORD //at intensity
    ; 


lt : LT WORD; // < HRZ2
gt : GT WORD; // > HRZ2
between : WORD BW WORD;  //HRZ1 - HRZ3