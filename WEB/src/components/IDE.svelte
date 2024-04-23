<script lang="ts">
import { createEventDispatcher } from 'svelte';
import FileUpload from './FileUpload.svelte';
import { FileUploadOut } from '../lib/DataTypes';

const dispatch = createEventDispatcher();

let textareaData: string = `title: "IM meso 3".
author: "Dylan Barratt".

import run_base.

"week 1" {
	Tue: (bike) 4hr < HRZ3 note="long ride road",
	Wed: (swim) 30min load=20 note="swim lesson",
	Thu: [run_base],
	3 * {[run_base]}

}


"week 2" {
	Mon: note="Slight deload week with varsity. Could cycle to watch cycling varsity?",
	Tue: (bike) 3hr HRZ2,
	Wed: (tri) 60min load=60 note="Varsity Race!",
	Thu: [run_base],
	Fri: (swim) 1hr30min load=70 note="long swim",
	Sat: (swim) 1hr load=40 note="tech swim" && (bike) 1hr HRZ2,
	Sun: (run) 2hr30min < HRZ3 note="long run"
}

"week 3" {
	Tue: (bike) 4hr < HRZ3 note="long ride road",
	Wed: (swim) 30min load=40 note="tech work",
	Thu: [run_base],
	Fri: (swim) 1hr load=50 note="long swim" && (bike) 1hr HRZ2,
	Sat: (swim) 1hr load=40 note="tech swim" && (bike) 1hr30min HRZ2,
	Sun: (tri) load=60 note="bucs sprint tri"
}`;

let uploadedFile: string = "";

let changePeriodUpload = true;
function togglePeriodUpload() {
  changePeriodUpload = !changePeriodUpload;
}

function btnSubmit() {
  if (changePeriodUpload) {
    dispatch('textSubmitted', textareaData);
  } else {
    dispatch('textSubmitted', uploadedFile);
  }
}

function updateFile(event: CustomEvent<FileUploadOut>) {
  change();
  
  let fileRaw = event.detail;

  const reader = new FileReader();

  reader.onload = function(event) {
    uploadedFile = event.target.result as string;
  };

  reader.onerror = function(event) {
      throw new Error('Error occurred while reading the file:', event.target.error);
  };

  reader.readAsText(fileRaw.File); 
}

function change() {
  dispatch('change');
}

</script>

<style>
.ide-container {
  width: 100%;
  min-height: 200px;
  height: 60vh;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-family: 'Courier New', Courier, monospace;
}

.code-input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  resize: none;
}
</style>

<br />
<div>
  <form>
    <button on:click|preventDefault={togglePeriodUpload}>{changePeriodUpload ? 'Use File Upload' : 'Use IDE'}</button>
    <br /><br />
    {#if changePeriodUpload}
      <div class="ide-container">
        <textarea class="code-input" on:input={change} bind:value={textareaData}></textarea>
      </div>
    {:else}
      <FileUpload 
        fileNeeded="Peroid File" 
        fileExtensions={[".lt"]}
        on:FileUploaded={updateFile}/>
    {/if}
  
    <br />   
    <button on:click|preventDefault={btnSubmit}>Submit</button>
  </form>
</div> <br />