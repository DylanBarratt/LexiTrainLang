grammar PeriodFile;

import BaseLexer;

//parser rules
file:(metaData)* (sessionImport)* periods EOF;

metaData: WORD ':' (WORD|NUM) '.';

sessionImport: IMPORT WORD '.';

periods: (period)+; // e.g. multiple weeks

period // e.g. a week
    : WORD '{' day (',' day)* '}' 
    ;

day
    : WORD ':' dayData ('&&' dayData)* //specified day
    | NUM '*' '{' dayData '}' //looped days (unspecified day)
    | dayData ('&&' dayData)* //non-specified day
    ;

dayData
    : imported //imported
    | workout //single line session
    | session //inline session
    | NOTES WORD
    ;

imported: IMPORTED;

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