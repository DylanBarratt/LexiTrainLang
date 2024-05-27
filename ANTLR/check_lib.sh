#!/bin/bash
# Check if the file exists

LIB_PATH="/usr/local/lib/antlr-4.13.1-complete.jar"

if ls "$LIB_PATH" >/dev/null 2>&1; then
    echo "ANTLR JAR file exists."
else
    echo "ANTLR JAR file does not exist. You can download it from:"
    echo "https://github.com/antlr/antlr4/blob/master/doc/getting-started.md"
fi
