<script lang="ts">
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { Link } from 'svelte-routing';
import Ide from '../components/IDE.svelte';
import type { DayFinal, ExtraDayT, FileString, PeriodFile, parseReturnObj } from '../lib/DataTypes';;
import ErrorC from '../components/ErrorC.svelte';
import { getRequiredImports, parseAll, sessionFileProcessed, removeOldSessionFile } from '../lib/Parse';
import SessionUpload from '../components/SessionUpload.svelte';
import { DayDataToString, shortenString } from '../lib/HelperFunctions';

let showPdfBtn = false;

let periodInp: string;
let requiredImports: Array<string> = [];
let unparsedSessionFiles: object = {};

let parseReturn: PeriodFile;

let errorMessage: string = null;


function updateIdeText(dat: CustomEvent<string>) {
    periodInp = dat.detail;
    requiredImports = getRequiredImports(periodInp);

    if (requiredImports.length == 0) {
        parseAllA();
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
        parseReturn = parseAll(periodInp, requiredImports, unparsedSessionFiles);
        showPdfBtn = true;
    } catch(e) {
        errorMessage = e;
    }
}

function generatePDF() {
    const doc = new jsPDF();

    if (parseReturn === undefined) {
        return;
    }

    let margin = 14;
    let curY = 0;

    //title
    curY = margin * 2;
    doc.setFontSize(48);
    if (parseReturn.Metadata.Title) {
        doc.text(shortenString(parseReturn.Metadata.Title, 20), margin , curY);
    } else {
        doc.text("LexiTrain", margin , curY);
    }
    curY += margin;

    //metadata
    if (parseReturn.Metadata.Author !== null) {
        doc.setFontSize(26); 
        doc.text("By: " + parseReturn.Metadata.Author, margin, curY)
        curY += margin;
    }

    if (parseReturn.Metadata.Date !== null) {
        doc.setFontSize(22); 
        doc.text("Written on: " + parseReturn.Metadata.Date, margin, curY)
        curY += margin;
    }

    if (parseReturn.Metadata.Start_Date !== null) {
        doc.setFontSize(22); 
        doc.text("Start on: " + parseReturn.Metadata.Start_Date, margin, curY)
        curY += margin;
    }

    if (parseReturn.Metadata.End_Date !== null) {
        doc.setFontSize(22); 
        doc.text("Start on: " + parseReturn.Metadata.End_Date, margin, curY)
        curY += margin;
    }

    //periods
    let days = [["mon", "tue", "wed", "thu", "fri", "sat", "sun", "any"]]

    var bodyData = [];
    parseReturn.Periods.forEach(period => {

        var week = Array(8).fill("");
        //TODO write a sessions to string function
        period.Days.forEach(day => {
            let dn = day.DayName
            if (day.DayName === null) {
                dn = "any"
            }

            switch(dn.toLowerCase()) {
                case "mon":
                    week[0] = DayDataToString(day.Sessions);
                    break;
                case "tue":
                    week[1] = DayDataToString(day.Sessions);
                    break;
                case "wed":
                    week[2] = DayDataToString(day.Sessions);
                    break;
                case "thu":
                    week[3] = DayDataToString(day.Sessions);
                    break;
                case "fri":
                    week[4] = DayDataToString(day.Sessions);
                    break;
                case "sat":
                    week[5] = DayDataToString(day.Sessions);
                    break;
                case "sun":
                    week[6] = DayDataToString(day.Sessions);
                    break;
                default: //any
                    week[7] = DayDataToString(day.Sessions);
                    break;
            }
        })  
        
        bodyData.push(week);
    });
    
    autoTable(doc, {
        startY: curY,

        headStyles: {
            lineColor: [0, 0, 0], // Border color
            fillColor: '#6b6b6b', // Background color for the heading row
        },
        styles: {
            cellWidth: 23, 
            lineWidth: 0.1, // Border width
        },
        bodyStyles: {
            overflow: 'linebreak',
        },
        
        head: days,
        body: bodyData,
    });

    doc.save('compiled.pdf');
}

function change() {
    requiredImports = [];
    unparsedSessionFiles = {};
    parseReturn = null;
    showPdfBtn = false;
}
</script>

<ErrorC bind:msg={errorMessage}/>
<main>
    <h1>LexiTrain to PDF</h1>

    <Link to="/"> Go to calendar compiler </Link> <br />

    <Ide on:textSubmitted={updateIdeText} on:change={change}/> 

    {#if requiredImports.length > 0}
    {#each requiredImports as importName, i}
        <SessionUpload 
            {i}
            fileNeeded={importName} 
            on:FileProccessed={updateSessionFile}
            on:RemoveOldName={removeOld}/>
    {/each}

    <button type="submit" on:click={parseAllA}>Parse all!</button> <br /> <br />
    {/if}

    {#if showPdfBtn}
        <button on:click={generatePDF}>Generate PDF</button>
    {/if}

</main>
