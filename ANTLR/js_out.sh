#!/bin/bash

java -jar /usr/local/lib/antlr-4.13.1-complete.jar ./PeriodFile.g4 -o ../WEB/lt -Dlanguage=JavaScript 

java -jar /usr/local/lib/antlr-4.13.1-complete.jar ./SessionFile.g4 -o ../WEB/lt -Dlanguage=JavaScript 

echo "JS files generated"