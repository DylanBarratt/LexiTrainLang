#!/bin/bash

java -jar /usr/local/lib/antlr-4.13.1-complete.jar LexiTrain.g4
javac LexiTrain*.java

ls *.java