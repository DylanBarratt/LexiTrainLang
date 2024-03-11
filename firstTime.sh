#!/bin/bash

cd WEB
npm install
cd ../ANTLR
./js_out.sh
cd ../WEB
node index.js