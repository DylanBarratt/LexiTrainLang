<!-- App.svelte -->
<script lang="ts">
import Ide from './components/IDE.svelte';
import SessionUpload from './components/SessionUpload.svelte';

import { ParseFull, ParseImports, ParseSession } from './lib/Antlr';
import type { FileString, PeriodFile, Session } from './lib/DataTypes';
  import { flattenPeriods } from './lib/DateData';

let ideText: string;
let requiredImports: Array<string> = [];
let unparsedSessionFiles: object = {};

function getRequiredImports(periodInp: string): Array<string> {
  try {
    return ParseImports(periodInp);
  } catch (e) {
    console.error(e);
  }
}

//abbrv to remove confusion with variable of similar name - Dyaln
function parseSFS(): object {
  let parsedSessionFiles: object = {};

  Object.entries(unparsedSessionFiles).forEach(([key, value]) => {
    let s: Session = parseSF(value);
    parsedSessionFiles[s.Metadata.Title] = s;
  });
  return parsedSessionFiles;
}


//abbrv to remove confusion with variable of similar name - Dyaln
function parseSF(sessionInp: string): Session {
  try {
    return ParseSession(sessionInp);
  } catch (e) {
    console.error(e);
  }
}

function parseFullPeriod(periodInp: string, sessions: Object): PeriodFile {
  let fullParse: PeriodFile;
  try {
    return ParseFull(periodInp, sessions);
  } catch (e) {
    console.error(e);
  }
}

function updateIdeText(textareaData: CustomEvent<string>) {
  ideText = textareaData.detail;

  requiredImports = getRequiredImports(ideText);
}

function sessionFileProcessed(event: CustomEvent<FileString>) {  
  if (typeof unparsedSessionFiles[event.detail.Name] === 'undefined') {
    unparsedSessionFiles[event.detail.Name] = event.detail.FileContents;
  }
}

function removeOldSessionFile(event: CustomEvent<string>) {
  if (unparsedSessionFiles.hasOwnProperty(event.detail)) {
    delete unparsedSessionFiles[event.detail];
  }
}

function parseAll() {
  let parsedSessions = parseSFS();

  let parsedPeriodFile: PeriodFile = parseFullPeriod(ideText, parsedSessions);

  //todo: process metadata
  //todo: flatten periods
  console.log(flattenPeriods(parsedPeriodFile));
  
}
</script>

<main>
  <h1>Enter ur training</h1>
  <Ide on:textSubmitted={updateIdeText} />

  {#if requiredImports.length > 0}
    {#each requiredImports as importName}
      <SessionUpload 
        fileNeeded={importName} 
        on:FileProccessed={sessionFileProcessed}
        on:RemoveOldName={removeOldSessionFile}/>
    {/each}

    <button type="submit" on:click={parseAll}>Parse all!</button>
  {/if}
</main>