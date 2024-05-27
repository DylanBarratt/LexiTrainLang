#!/bin/bash

if [ "$(basename "$PWD")" != "ANTLR" ]; then
    cd "ANTLR" || exit 1
fi

sudo ./check_lib.sh

rm -rf ../WEB/SRC/lib/lt

java -jar /usr/local/lib/antlr-4.13.1-complete.jar ./PeriodFile.g4 -o ../WEB/src/lib/lt -Dlanguage=JavaScript -visitor

java -jar /usr/local/lib/antlr-4.13.1-complete.jar ./SessionFile.g4 -o ../WEB/src/lib/lt -Dlanguage=JavaScript -visitor

java -jar /usr/local/lib/antlr-4.13.1-complete.jar ./Imports.g4 -o ../WEB/src/lib/lt -Dlanguage=JavaScript -visitor

echo "JS files generated"
