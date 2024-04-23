<script lang="ts">
import { Link } from 'svelte-routing';
import Calendar from '../components/Calendar.svelte';
import ErrorC from '../components/ErrorC.svelte';
import Ide from '../components/IDE.svelte';
import SessionUpload from '../components/SessionUpload.svelte';

import type { DayFinal, ExtraDayT, FileString, parseReturnObj } from '../lib/DataTypes';
import { getRequiredImports, parseAll, removeOldSessionFile, sessionFileProcessed } from '../lib/Parse';
import { flattenPeriods } from '../lib/HelperFunctions';

let periodInp: string;
let requiredImports: Array<string> = [];
let unparsedSessionFiles: object = {};
let days: Array<DayFinal> = [];
let extraDays: Array<ExtraDayT> = [];
let dated: boolean = false;

let errorMessage: string = null;
let showCalender: boolean = false;


function updateIdeText(dat: CustomEvent<string>) {
    periodInp = dat.detail;
    requiredImports = getRequiredImports(periodInp);

    if (requiredImports.length == 0) {
        parseAllA(); //skip import buttons
    }
}

function updateSessionFile(event: CustomEvent<FileString>) {
    unparsedSessionFiles = sessionFileProcessed(event.detail.Name, event.detail.FileContents, unparsedSessionFiles)
}

function removeOld(e: CustomEvent<string>) {
    unparsedSessionFiles = removeOldSessionFile(e.detail, unparsedSessionFiles);
}

function parseAllA() {
    var fpResult;
    try {
        fpResult = flattenPeriods(parseAll(periodInp, requiredImports, unparsedSessionFiles));
        //todo: process metadata
        days = fpResult[0];
        extraDays = fpResult[1];
        dated = fpResult[2];
        showCalender = true;
    } catch (e) {
        errorMessage = e;
    }


}

function resetOnChange() {
    requiredImports = [];
    unparsedSessionFiles = {};
    showCalender = false;
}
</script>

<ErrorC bind:msg={errorMessage}/>
<main>
    <h1>LexiTrain to Calendar</h1>
    <Link to="/pdf"> Go to pdf compiler </Link> <br />

    <Ide on:textSubmitted={updateIdeText} on:change={resetOnChange}/>

    {#if requiredImports.length > 0}
        {#each requiredImports as importName, i}
        <SessionUpload 
            {i}
            fileNeeded={importName} 
            on:FileProccessed={updateSessionFile}
            on:RemoveOldName={removeOld}/>
        {/each}

        <button type="submit" on:click={parseAllA}>Parse all!</button>
    {/if}
</main>

{#if showCalender}
    {#if days.length > 0 || extraDays.length > 0}
        <Calendar {days} {extraDays} {dated}/>
    {/if}
{/if}