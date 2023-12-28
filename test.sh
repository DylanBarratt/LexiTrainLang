#!/bin/bash
./out.sh

TEST_FILE="../examples/loop_period.lt"

echo "Testing $TEST_FILE"
cd Java
cp ../*.g4 ./
java -Xmx500M -cp "/usr/local/lib/antlr-4.13.1-complete.jar:$CLASSPATH" org.antlr.v4.gui.TestRig LexiTrain lexi -tokens $TEST_FILE
java -Xmx500M -cp "/usr/local/lib/antlr-4.13.1-complete.jar:$CLASSPATH" org.antlr.v4.gui.TestRig LexiTrain lexi -gui $TEST_FILE
rm *.g4