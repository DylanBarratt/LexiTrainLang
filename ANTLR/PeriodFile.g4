grammar PeriodFile;

import BaseLexer;

//parser rules
file: metaDatas (sessionImport)* (periods)* EOF;

metaDatas: (metaData)*;
metaData: WORD ':' (WORD|NUM) '.';

sessionImport: IMPORT WORD '.';

periods: (period)+; // e.g. multiple weeks

period // e.g. a week
    : WORD '{' day (',' day)* (',')? '}' 
    ;

day
    : WORD ':' dayLoop //specified day
    | NUM '*' '{' dayLoop '}' //looped days (unspecified day)
    | dayLoop //non-specified day
    ;

dayLoop: dayData ('&&' dayData)* ('&&')?;

dayData
    : imported //imported
    | workout //single line session
    | session //inline session
    | dayNotes
    ;

dayNotes: NOTES WORD;

workout: SPORT workloadL;

imported: IMPORTED;

session //inline session
    : '{' SPORT (sessionSection)+ '}' //name of sport and the sections of the session
    ;

sessionSection: WORD '{' (workloads | NUM '*' '{' workloads '}') '}'; //single workloads or repeated workloads

workloads: workloadL ('&&' workloadL)* ('&&')?;

workloadL: (workload)? (LOAD NUM)? (NOTES WORD)?; // workload load notes (all are optional)

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