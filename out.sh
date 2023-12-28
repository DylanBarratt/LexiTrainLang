#!/bin/bash
TYPE="SessionFile"

java -jar /usr/local/lib/antlr-4.13.1-complete.jar $TYPE.g4 -o ./Java
ls ./Java/*.java
echo "Java files generated"
javac ./Java/$TYPE*.java
ls ./Java/
echo "Java files compiled"

