<!-- App.svelte -->
<script lang="ts">
import Calendar from './components/Calendar.svelte';
import Error from './components/Error.svelte';
import Ide from './components/IDE.svelte';
import SessionUpload from './components/SessionUpload.svelte';

import { ParseFull, ParseImports, ParseSession } from './lib/Antlr';
import type { Day, DayFinal, ExtraDayT, FileString, PeriodFile, Session } from './lib/DataTypes';
import { flattenPeriods } from './lib/HelperFunctions';

let periodInp: string;
let requiredImports: Array<string> = [];
let unparsedSessionFiles: object = {};
let days: Array<DayFinal> = [];
let extraDays: Array<ExtraDayT> = [];
let dated: boolean = false;

let errorMessage: string = null;

function getRequiredImports(periodInp: string): Array<string> {
  try {
    return ParseImports(periodInp);
  } catch (e) {
    errorMessage = e;
    console.error(e);
    return;
  }
}

//abbrv to remove confusion with variable of similar name - Dyaln
function parseSFS(): object {
  let parsedSessionFiles: object = {};
  let counter = 0;

  Object.entries(unparsedSessionFiles).forEach(([key, value]) => {    
    let s: Session = parseSF(value);
    parsedSessionFiles[requiredImports[counter]] = s;
    counter++;
  });
  return parsedSessionFiles;
}


//abbrv to remove confusion with variable of similar name - Dyaln
function parseSF(sessionInp: string): Session {
  try {
    return ParseSession(sessionInp);
  } catch (e) {
    errorMessage = e;
    console.error(e);
    return;
  }
}

function parseFullPeriod(periodInp: string, sessions: Object): PeriodFile {
  try {
    return ParseFull(periodInp, sessions);
  } catch (e) {
    errorMessage = e;
    console.error(e);
    return;
  }
}

function updateIdeText(dat: CustomEvent<string>) {
  periodInp = dat.detail;
  requiredImports = getRequiredImports(periodInp);

  if (requiredImports.length == 0) {
    parseAll();
  }
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
  let parsedSessions: object = null;
  let parsedPeriodFile: PeriodFile = null;

  try {
    parsedSessions = parseSFS();
    parsedPeriodFile = parseFullPeriod(periodInp, parsedSessions);
    days = flattenPeriods(parsedPeriodFile)[0];
    extraDays = flattenPeriods(parsedPeriodFile)[1];
    dated = flattenPeriods(parsedPeriodFile)[2];
  } catch (e) {
    errorMessage = e;
    console.error(e);
    return;
  }

  //todo: delete
  console.log("Parsed Sessions", parsedSessions);
  console.log("Parsed Period file uo", parsedPeriodFile);
  console.log("Days", days);
  console.log("Extra Days", extraDays);

  //todo: process metadata
}
</script>

<Error bind:msg={errorMessage}/>
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

{#if days.length > 0 || extraDays.length > 0}
  <Calendar {days} {extraDays} {dated}/>
{/if}
</main>