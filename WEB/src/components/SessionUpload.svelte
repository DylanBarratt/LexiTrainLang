<script lang='ts'>
import type { FileString, FileUploadOut } from "../lib/DataTypes";
import FileUpload from "./FileUpload.svelte";
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher<{FileProccessed: FileString, RemoveOldName: string}>();


export let fileNeeded: string;

let fileContents: string;
let oldFileName: string;

$: fileContents;

function fileUploaded(event: CustomEvent<FileUploadOut>) {
    dispatch('RemoveOldName', oldFileName);
    
    let fileRaw = event.detail;

    const reader = new FileReader();

    reader.onload = function(event) {
        fileContents = event.target.result as string;
        oldFileName = fileRaw.Name;
        dispatch('FileProccessed', {Name: fileRaw.Name, FileContents: fileContents});
    };

    reader.onerror = function(event) {
        throw new Error('Error occurred while reading the file:', event.target.error);
    };

    reader.readAsText(fileRaw.File); 
}
</script>

<div>
    <FileUpload {fileNeeded} on:FileUploaded={fileUploaded}/>

    {#if fileContents}
        <!-- todo probs very unsafe lol -->
        <p>{@html fileContents.replace(/\n/g, '<br/>').replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;')}</p>
        <br />
    {/if}
</div>