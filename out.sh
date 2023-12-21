#!/bin/bash
java -jar /usr/local/lib/antlr-4.13.1-complete.jar LexiTrain.g4 -o ./Java
ls ./Java/*.java
echo "Java files generated"
javac ./Java/LexiTrain*.java
ls ./Java/
echo "Java files compiled"

