<script>
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

export let name;
export let file = null;

let errorMessage = '';

async function handleFileUpload(event) {
    const selectedFile = event.target.files[0];

    if (!selectedFile) {
        errorMessage = 'No file selected.';
        return;
    }
    
    if (!selectedFile) {
        console.error('No file selected.');
        return;
    }
    
    // Check file extension
    const allowedExtensions = ['slt'];
    const fileExtension = selectedFile.name.split('.').pop().toLowerCase();

    if (!allowedExtensions.includes(fileExtension)) {
        errorMessage = 'Invalid file type. Please select a .slt file.';
        return;
    }


    dispatch('fileUploaded', {Name: name, File: selectedFile});
}
</script>

<style>
.file-upload-container {
    margin: 15px;
    margin-bottom: 50px;
    width: 25ch;
}

</style>

<div class="file-upload-container">
    <label for="fileUpload">Upload {name}</label>
    <br />
    <hr />
    <input type="file" id="fileUpload" accept=".slt" class="file-upload-input" on:change={handleFileUpload}>
    
    
    {#if errorMessage}
        <div class="error">
            <p>{errorMessage}</p>
        </div>
    {/if}
    {#if file}
      <p class="selected-file">Selected file: {file.name}</p>
    {/if}
</div>