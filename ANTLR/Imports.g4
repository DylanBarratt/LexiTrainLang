grammar Imports;

file: (importStatement)* EOF;

importStatement: IMPORT;

IMPORT: 'import ' ([a-zA-Z0-9_/]+ | '"' (ESC|.)*? '"');
fragment ESC : '\\"' | '\\\\' ;

OTHER: . -> skip;