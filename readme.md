# LexiTrain project
The project source is split into three parts: the ANTLR code, the website compiler code, and the documentation code.

## Running ANTLR code
In the Examples directory, the test.sh file will run the test file in ANTLR/examples with the specified grammar. (ANTLR needs to be installed to run this)

## Running the WEB compiler code
The web code is run using node. The first time will need an npm install (`npm i`).
`npm run dev` will locally run a development build for testing

## Running the documentation
mkdocs needs to be installed for a fresh compile. Then the host_site.sh script can be run to serve the documentation on an ubuntu apache server.