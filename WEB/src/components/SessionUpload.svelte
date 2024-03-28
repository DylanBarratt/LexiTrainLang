<script lang='ts'>
import FileUpload from "./FileUpload.svelte";
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

export let name;

let fileContents;

function fileUploaded(event) {
    let fileRaw = event.detail;

    const reader = new FileReader();

    reader.onload = function(event) {
        var text = event.target.result;
        fileContents = text;
        dispatch('fileProccessed', {Name: name, FileContent: fileContents});
    };

    reader.onerror = function(event) {
        console.error('Error occurred while reading the file:', event.target.error);
    };

    reader.readAsText(fileRaw.File); 
}
</script>

<style>

</style>

<div>
    <FileUpload {name} on:fileUploaded={fileUploaded}/>

    {#if fileContents}
        <!-- todo probs very unsafe lol -->
        <p>{@html fileContents.replace(/\n/g, '<br/>').replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;')}</p>
        <br />
    {/if}
</div>