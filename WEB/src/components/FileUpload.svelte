<script>
let file = null;

async function handleFileUpload(event) {
    const selectedFile = event.target.files[0];
    file = selectedFile;
    // You can perform additional actions here, such as uploading the file to a server
    console.log("File selected:", file);
}
</script>

<style>
.file-upload-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}

.file-upload-input {
    display: none;
}

.file-upload-label {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

.file-upload-label:hover {
    background-color: #0056b3;
}

.selected-file {
    margin-top: 10px;
}
</style>

<div class="file-upload-container">
    <label for="fileUpload" class="file-upload-label">Choose a file</label>
    <input type="file" id="fileUpload" class="file-upload-input" on:change={handleFileUpload}>
    {#if file}
      <p class="selected-file">Selected file: {file.name}</p>
    {/if}
</div>