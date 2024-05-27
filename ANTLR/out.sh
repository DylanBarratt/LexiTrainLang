#!/bin/bash

if [ "$(basename "$PWD")" != "ANTLR" ]; then
    cd "ANTLR" || exit 1
fi

./check_lib.sh

rm -rf ./Java
mkdir ./Java

java -jar /usr/local/lib/antlr-4.13.1-complete.jar ./SessionFile.g4 -o ./Java -visitor
ls ./Java/*.java
echo "Session File Java files generated"

java -jar /usr/local/lib/antlr-4.13.1-complete.jar ./PeriodFile.g4 -o ./Java -visitor
ls ./Java/*.java
echo "Period File Java files generated"

java -jar /usr/local/lib/antlr-4.13.1-complete.jar ./Imports.g4 -o ./Java -visitor
ls ./Java/*.java
echo "Imports File Java files generated"

javac -cp /usr/local/lib/antlr-4.13.1-complete.jar ./Java/$TYPE*.java
ls ./Java/
echo "Java files compiled"

