<br />
<p align="center">
  <img src="./Logo.png" alt="LexiTrain Logo"/>
</p>
<br />
<br />

## About
LexiTrain is a formal language used to describe training plans for endurance athletes, enabling the compilation of detailed and attractive training plans.
LexiTrain was created as a dissertation project in my final year as a computer science undergraduate at Swansea University.
The full dissertation can be read [here](./dissertation.pdf).

Overall, the dissertation achieved an 80% grade. 

The project source is split into three parts: the ANTLR code, the compiler code, and the documentation code.
The ANTLR code is the raw grammar files for the language with a few example files. It can be viewed [here](/ANTLR)
The compiler code is written using TypeScript in a Svelte web app. There is currently a compiler for a web calendar and pdf. It can be viewed [here](/WEB).
The documentation code is written in markdown and served as static HTML. It can be viewed [here](/DOCS).

## Demo
![LexiTrain Preview](./preview.gif)

## Tools Used
<p>
  <img src="https://www.svgrepo.com/show/373431/antlr.svg" alt="ANTLR logo" width="70" height="70" />
  <a href="https://www.antlr.org/">
    ANTLR 4
  </a>
</p>

<p>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Svelte_logo_by_gengns.svg/640px-Svelte_logo_by_gengns.svg.png" alt="Svelte logo" width="64" height="74" />
  <a href="https://svelte.dev/">
    Svelte
  </a>
</p>

<p>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png" alt="TypeScript logo" width="70" height="70" />
  <a href="https://www.typescriptlang.org/">
    TypeScript
  </a>
</p>

<br />

## Usage
_NOTE: These steps have only been tested on Ubuntu 24.04 LTS._
### Running ANTLR Code
**[ANTLR](https://github.com/antlr/antlr4/blob/master/doc/getting-started.md) and Java are required to run these scripts** <br />
_test.sh_ - runs a specified example file (currently _ANTLR/examples/test.lt_) with a specified grammar (currently _PeriodFile_), showing the tokenized version of the example file and the generated parse tree. <br />
_out.sh_ - generates and compiles the java files for all three grammars to a _./Java_ folder. <br />
_js_out.sh_ - generates and compiles the javascript files for all three grammars to _WEB/src/lib/lt_. <br />

### Running the WEB Compiler Code
**[Node](https://nodejs.org/en/download/) required** <br />
To locally host the svelte site (including both calendar compiler and pdf compiler)
```sh
npm i
npm run dev
```

### Running the Documentation
A compiled version can be viewed [here](./DOCS/site/). <br />
The _host_site.sh_ script can be run to serve the documentation on an ubuntu apache2 server (requires [apache 2](https://ubuntu.com/server/docs/how-to-install-apache2)). <br />
Running the script with the --build flag will build the docs ([mkdocs](https://www.mkdocs.org/user-guide/installation/) & [mcdocs material](https://squidfunk.github.io/mkdocs-material/getting-started/) need to be installed for this).
