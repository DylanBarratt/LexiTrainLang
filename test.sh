#!/bin/bash
./out.sh

cd Java
cp ../*.g4 ./
java -Xmx500M -cp "/usr/local/lib/antlr-4.13.1-complete.jar:$CLASSPATH" org.antlr.v4.gui.TestRig LexiTrain lexi -tokens ../examples/test2.lt
java -Xmx500M -cp "/usr/local/lib/antlr-4.13.1-complete.jar:$CLASSPATH" org.antlr.v4.gui.TestRig LexiTrain lexi -gui ../examples/test2.lt
rm *.g4