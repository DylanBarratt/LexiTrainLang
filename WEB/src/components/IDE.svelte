<script>
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

let textareaData = `title: "chrim!bo".
author:"Dylan Barratt".

//this is a comment!

import over_unders.
import base.

"week 1" {
	Mon: (bike) 1hr HRZ1 note="cool bike yo",
	Tue: {
        (run)
        "warmup" {60min HRZ1 - HRZ2}

        "main set" {
            2hours HRZ2 - HRZ3 &&
            1hours > HRZ2
        }

        "cool down" {
            60min HRZ1 - HRZ2
        }
    },
	Wed: (run) 1hr hrz2,
	Thu: (bike) 1hr HRZ2&&(run) 1hr HRZ2,
	Fri: [base],
	Sat: [base] && (run) 1hr30min HRZ2
}

"week 2"{
	Mon: (run)1hr HRZ2 note="Chrimbo run!",
	Tue:(bike) 1hr30min HRZ2 && (run) 1hr HRZ2,
	Wed: [base],
	Thu: {
        (bike)
        warmup {
            1hr HRZ1
        }

        main {
            5*{
                5min HRZ5 &&
                5min HRZ3
            }
        }

        cooldown {
            30min HRZ1 - HRZ2
        }
    },
	Fri: (bike) 2hr30min HRZ2,
	Sat: (bike) 2hr HRZ2,
	Sun: (run) 1hr30min HRZ2 && (bike) 1hr HRZ2
}

"week 3" {
	Mon: note="10mile tt?",
	Tue: (bike) 1hr30min HRZ2 && (run) 1hr HRZ2,
	Wed: (bike) 2hr HRZ2,
	Thu: (swim) 30min load=30 && (run) 1hr HRZ2,
	Fri: (bike) 2hr30min HRZ2,
	Sat: (bike) 2hr HRZ2 && (swim) 1hr load=40,
	Sun: (run) 1hr30min HRZ2 && (bike) 1hr HRZ2
}

"week 2" {
	5* {
        [base]
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