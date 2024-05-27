#!/bin/bash

if [ "$(basename "$PWD")" != "ANTLR" ]; then
    cd "ANTLR" || exit 1
fi

./check_lib.sh
./out.sh


TEST_FILE="../examples/test.lt"
TYPE="PeriodFile"

echo "Testing $TEST_FILE"
cd Java
cp ../$TYPE.g4 ./
java -Xmx500M -cp "/usr/local/lib/antlr-4.13.1-complete.jar:$CLASSPATH" org.antlr.v4.gui.TestRig $TYPE file -tokens $TEST_FILE
java -Xmx500M -cp "/usr/local/lib/antlr-4.13.1-complete.jar:$CLASSPATH" org.antlr.v4.gui.TestRig $TYPE file -gui $TEST_FILE
rm $TYPE.g4
