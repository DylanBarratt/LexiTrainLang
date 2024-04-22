<script lang="ts">
import jsPDF from 'jspdf';
import { Link } from 'svelte-routing';
import Ide from '../components/IDE.svelte';
import type { DayFinal, ExtraDayT } from '../lib/DataTypes';;
import ErrorC from '../components/ErrorC.svelte';

let pdfContent = '';

let ideText: string;

let requiredImports: Array<string> = [];
let unparsedSessionFiles: object = {};
let days: Array<DayFinal> = [];
let extraDays: Array<ExtraDayT> = [];
let dated: boolean = false;

let errorMessage: string = null;

function updateIdeText(dat: CustomEvent<string>) {    
    ideText = dat.detail;
}

function generatePDF() {
    const doc = new jsPDF();
    doc.text(pdfContent, 10, 10);
    doc.save('example.pdf');
}
</script>

<style>
h1 {
    color: #333;
}

button {
    background-color: #007bff;
    color: white;
    padding: 0.5em 1em;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>
    

<ErrorC bind:msg={errorMessage}/>
<main>
    <h1>LexiTrain to PDF</h1>
    <Link to="/"> Go to calendar </Link>
    <p>{pdfContent}</p>
    <Ide on:textSubmitted={updateIdeText}/> 
    <button on:click={generatePDF}>Generate PDF</button>
</main>

