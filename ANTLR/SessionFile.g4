grammar SessionFile;

import BaseLexer;

//Parser rules
file: (metaData)+ (section)+;

metaData: WORD ':' (WORD|NUM) '.';

section: WORD '{'sectionContents'}'; 

sectionContents
    : workloads
    | (workloads '&&')? structure ('&&' workloads)?
    ;
    
structure: NUM '*' '{' workloads '}';

workloads: workloadL ('&&' workloadL)*;

workloadL: workload note?; // workload load notes

note: NOTES WORD;

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
