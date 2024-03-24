<script>
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

let textareaData = `Name: "123".
author: "Dylan".
date: "19/01/2003".
start_date: 01/04/2024.

//this is a comment!

over_unders = 5overUnders.
base = 2hourBase.

"week 1" {
  Mon: {
        (run)
        "warmup" {60min HRZ1 - HRZ2}

        "main set" {
            2hours HRZ2 - HRZ3 &&
            1hours < HRZ2
        }

        "cool down" {
            60min HRZ1 - HRZ2
        }
  },
  Tue: (bike) 1hr30min HRZ2 && (run) 1hr HRZ2,
  Wed: (bike) 2hr HRZ2,
  Thu: (bike) 1hr HRZ2&&(run) 1hr HRZ2,
  Fri: (bike) 2hr HRZ2,
  Sat: (bike) 2hr HRZ2 && (run) 1hr30min HRZ2
}

"week 2" {
  Mon: (bike) 1hr HRZ1 "cool bike yo",
  Tue: (bike) 1hr30min HRZ2 && (run) 1hr HRZ2,
  Wed: (bike) 2hr HRZ2,
  Thu: (bike) 1hr HRZ2&&(run) 1hr HRZ2,
  Fri: (bike) 2hr HRZ2,
  Sat: (bike) 2hr HRZ2 && (run) 1hr30min HRZ2,
  2*{
    (run) base 
  }
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