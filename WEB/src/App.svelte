<!-- App.svelte -->
<script lang="ts">
import { Parse } from './lib/Antlr.js';
import Calendar from './components/Calendar.svelte';
import FileUpload from './components/FileUpload.svelte';
import Ide from './components/IDE.svelte';

let antlrError = null;

let calendarData = null;

let metaData = null;


function parseTA(textareaData) {
  //todo parse session imports first
  //if none found, skip straigth to a full parse
  //if found, stop and ask user for those session files.
  
  // console.log(rawData.SessionImports); //todo delete


  let rawData = null;

  try {
    rawData = Parse(textareaData.detail);
    antlrError = null; //no error yay!
  } catch (error) {
    console.log(error);
    antlrError = error.message;
    return;
  }

  console.log(rawData); //todo delete

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
    weekData.pop(); //remove week title

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

<main>
  <h1> Please enter ur training yo</h1>

  <Ide on:textSubmitted={parseTA}/>

  <FileUpload />

  {#if antlrError}
    <br/>
    <p class="error">ANTLR Error: {antlrError}</p>

  {:else}
    {#if metaData}
      <div>
        {#if metaData.Title}
            <h2>Title: {metaData.Title}</h2>
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