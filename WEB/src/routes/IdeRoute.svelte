<script lang="ts">
import { Link } from 'svelte-routing';
import Calendar from '../components/Calendar.svelte';
import ErrorC from '../components/ErrorC.svelte';
import Ide from '../components/IDE.svelte';
import SessionUpload from '../components/SessionUpload.svelte';

import { flattenParseT, type DayFinal, type ExtraDayT, type FileString, type parseReturnObj } from '../lib/DataTypes';
import { getRequiredImports, parseAll, removeOldSessionFile, sessionFileProcessed } from '../lib/Parse';
import { flattenPeriods } from '../lib/HelperFunctions';

let periodInp: string;
let requiredImports: Array<string> = [];
let unparsedSessionFiles: object = {};
let flattenedParse: flattenParseT;

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
    try {
        flattenedParse = flattenPeriods(parseAll(periodInp, requiredImports, unparsedSessionFiles));
        showCalender = true;
        console.log(flattenedParse.Metadata);
        
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

<style>
    .metaData {
        padding-left: 5vw;
    }
</style>

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
    <div class="metaData">
        {#if flattenedParse.Metadata["Title"] !== null} 
            <h2>{flattenedParse.Metadata["Title"]}</h2>
        {/if}
        {#if flattenedParse.Metadata["Author"] !== null} 
            <h3>Written by: {flattenedParse.Metadata["Author"]}</h3>
        {/if}
        {#if flattenedParse.Metadata["Date"] !== null} 
            <h3>{flattenedParse.Metadata["Date"]}</h3>
        {/if}
    </div>
    
    {#if flattenedParse.Days.length > 0 || flattenedParse.ExtraDays.length > 0}
        <Calendar days={flattenedParse.Days} extraDays={flattenedParse.ExtraDays} dated={flattenedParse.Dated}/>
        <br /><br /><br /><br />
    {/if}
{/if}