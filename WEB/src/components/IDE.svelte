<script>
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

let textareaData = `title: "IM meso 3".
author: "Dylan Barratt".

import run_base.

"week 1" {
	Tue: (bike) 4hr < HRZ3 note="long ride road",
	Wed: (swim) 30min load=20 note="swim lesson",
	Thu: [run_base],
	Fri: (swim) 1hr30min load=70 note="long swim",
	Sat: (swim) 1hr load=40 note="tech swim" && (bike) 1hr30min HRZ2,
	Sun: (run) 2hr30min < HRZ3 note="long run"
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

function btnSubmit() {
    dispatch('textSubmitted', textareaData);
}
</script>

<style>
.container {
    display: flex;
}

.line-numbers {
    font-family: monospace;
    margin-right: 5px;
    margin-left: 10px;
    background-color: #f4f4f4;
}

.textarea-container {
    flex: 1;
}

textarea {
    width: 90vw;
    height: 600px;
    resize: none;
}
</style>

<div>
    <form on:submit|preventDefault={btnSubmit}>
        <div class="container">
          <div class="line-numbers">
            {#each textareaData.split('\n') as line, i (i)}
              <div>{i + 1}</div>
            {/each}
          </div>
          <div class="textarea-container">
            <textarea bind:value={textareaData}></textarea>
          </div>
        </div>
        <br />
        <button type="submit">Submit</button>
    </form>
</div>