<!-- App.svelte -->
<script>
  import { Parse } from './lib/Antlr.js';
  import Calendar from './components/Calendar.svelte';

  let textareaData = `Name: "123".
author: "Dylan".
date: "19/01/2003".

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

  let antlrError = null;
  let calendarData = null;

  function ParseTA() {
    calendarData = null;

    try {
      calendarData = Parse(textareaData);
      console.log(calendarData);
      antlrError = null; //no error yay!
    } catch (error) {
      antlrError = error.message;
      console.log(antlrError);
    }
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

<main>
  <h1> Please enter ur training yo</h1>

  <form on:submit|preventDefault={ParseTA}>
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

  {#if antlrError}
    <br/>
    <p style="color: red;">ANTLR Error: {antlrError}</p>
  {/if}

  {#if calendarData}
    <br/>
    <Calendar {calendarData} />
  {/if}
</main>