grammar SessionFile;

import BaseLexer;

//Parser rules
file: (metaData)+ (section)+;

metaData: WORD ':' WORD '.';

section: WORD '{' (workloads | NUM '*' '{' workloads '}') '}'; //single workloads or repeated workloads

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
