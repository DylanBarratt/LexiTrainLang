grammar SessionFile;

import BaseLexer;

//Parser rules
file: (metaData)+ (section)+;

metaData: WORD ':' (WORD|NUM) '.';

section: WORD '{'sectionContents'}' note?; 

sectionContents
    : workloads
    | (workloads '&&')? structure ('&&' workloads)?
    ;
    
structure: NUM '*' '{' workloads '}';

workloads: workload ('&&' workload)*;

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
