<!-- App.svelte -->
<script lang="ts">
import { Parse } from './lib/Antlr.js';
import Calendar from './components/Calendar.svelte';

let textareaData = `Name: "123".
author: "Dylan".
date: "19/01/2003".
start_date: 01/04/2024.

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

let metaData = null;


function parseTA() {
  let rawData = null;

  try {
    rawData = Parse(textareaData);
    antlrError = null; //no error yay!
  } catch (error) {
    antlrError = error.message;
    return;
  }

  loadMetaData(rawData);
  loadCalendarData(rawData);
}

function loadMetaData(rawData) {
  metaData = rawData.Metadata;
}

function isValidDate(day: string) {
  const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun", 
  "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  const lowercaseDay = day.toLowerCase();
  return daysOfWeek.includes(lowercaseDay);
}

function isValidDateFormat(dateString) {
  const dateFormat = /^\d{2}\/\d{2}\/\d{4}$/;
  return dateFormat.test(dateString);
}

function stringToDate(dateString) {
  try {
      if (!isValidDateFormat(dateString)) {
        throw new Error('Invalid date format (' + dateString + '). Please use the format dd/mm/yyyy.');
      }

      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);

      const date = new Date(year, month, day);

      if (date.getDate() !== day || date.getMonth() !== month || date.getFullYear() !== year) {
        throw new Error('Invalid date.');
      }

      return date;
    } catch (error) {
      antlrError = error.message;
    }
}

function loadCalendarData(rawData) {
  let periods = rawData.Periods;

  let days = [];
  // combine weeks into single array with missed days as null
  periods.forEach(week => { 
    let weekData = Object.values(week);
    weekData.pop();

    for (let i = 0; i < 7; i++) {
      if ((typeof weekData[i] === 'undefined')) { 
        days.push(null);
      } else {
        days.push(weekData[i]);
      }
    }
  }); 

  let dates = [];
  let undatedDays = [];
  let date: Date = new Date();
  let reverse: boolean = false;


  if (typeof rawData.Metadata.Start_date === 'string') {
    date = stringToDate(rawData.Metadata.Start_date);
  }

  if (typeof rawData.Metadata.End_date === 'string') {
    date = stringToDate(rawData.Metadata.End_date);
    reverse = true
  }
  
  if (reverse) {
    days.reverse();
  }
  // give each day a date starting with the first available date that 
  // matches the specified day. If day not recognised, error?
  days.forEach(day => {
    if (day == null) { //ignore empty days
      return;
    } else if (day.Day == null && !(typeof day.Repeats === 'undefined')) {
      for (let i = 0; i < day.Repeats; i++) {
        undatedDays.push({Date: new Date(date), Data: day.Data})
      }
    } else {
      if (isValidDate(day.Day)) {
        dates.push({Date: new Date(date), Data: day.Data});
      } else {
        antlrError = "Invalid day: " + day;
      }
    }
    
    if (reverse) {
      date.setDate(date.getDate() - 1);
    } else {
      date.setDate(date.getDate() + 1);
    }
  });

  calendarData = [...dates, ...undatedDays];
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

  <form on:submit|preventDefault={parseTA}>
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

  {:else}
    {#if metaData}
      <div>
        {#if metaData.Name}
            <h2>Title: {metaData.Name}</h2>
        {/if}
        
        {#if metaData.Author}
            <h3>By {metaData.Author}</h3>
        {/if}

        {#if metaData.Date}
            <h4>Written on: {metaData.Date}</h4>
        {/if}
      </div>
    {/if}

    {#if calendarData}
      {#key calendarData}
        <br/>
        <Calendar {calendarData} />
      {/key}
    {/if}
  {/if}
</main>