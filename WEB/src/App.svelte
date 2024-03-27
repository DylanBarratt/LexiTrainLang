<!-- App.svelte -->
<script lang="ts">
import { ParseFull, ParseImports, ParseSession } from './lib/Antlr.js';
import Calendar from './components/Calendar.svelte';
import FileUpload from './components/FileUpload.svelte';
import Ide from './components/IDE.svelte';

let antlrError = null;

let calendarData = null;
let metaData = null;

let ideText = null;

let importNames: Array<string> = [];
let importFiles = {};

function updateIdeText(textareaData) {
  ideText = textareaData.detail;

  antlrError = null;

  calendarData = null;
  metaData = null;

  importNames = [];
  importFiles = {};

  checkImports();
}

function checkImports() {
  importNames = ParseImports(ideText);

  if (importNames.length == 0) { //no imports so just parse full 
    parseTA();
    return;
  }

  importNames.forEach(name => {
    importFiles[name] = null;
  });
}

function fileUploaded(event) {
  let fileRaw = event.detail;

  const reader = new FileReader();

  reader.onload = function(event) {
    const fileContent = event.target.result;
    importFiles[fileRaw.Name] = fileContent;
  };

  reader.onerror = function(event) {
    console.error('Error occurred while reading the file:', event.target.error);
  };

  reader.readAsText(fileRaw.File); 
}

function checkImportedFiles() {
  let err: boolean;
  importNames.forEach(name => {
    if (importFiles[name] == null) {
      console.error("missing " + name);
      err = true;
    }
  });

  if (err) {
    return;
  }

  console.log("Imported files", importFiles); //todo delete
  parseTA();
}


function parseTA() {
  let rawData = null;

  try {
    rawData = ParseFull(ideText);
    antlrError = null; //no error yay!
  } catch (error) {
    console.log(error);
    antlrError = error.message;
    return;
  }

  //todo delete
  console.log("Raw data:")
  console.log(rawData); 

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


class DayType{
  Day: string; 
  Repeats: number;
  Data: [];
}

function dayNameToIndex(dayName: string): number {
  // Convert the day name to lowercase for case insensitivity
  var lowerCaseDayName = dayName.toLowerCase();
  
  // Define a map of day names to their indices
  var dayMap = {
    'sun': 0,
    'sunday': 0,
    'mon': 1,
    'monday': 1,
    'tue': 2,
    'tuesday': 2,
    'wed': 3,
    'wednesday': 3,
    'thu': 4,
    'thursday': 4,
    'fri': 5,
    'friday': 5,
    'sat': 6,
    'saturday': 6
  };
  
  // Look up the day index in the map
  return dayMap[lowerCaseDayName];
}

function loadCalendarData(rawData) {
  let periods = rawData.Periods;

  let days = [];
  let daysUntilFirst: number = 0;
  let firstNamedDay: string = null;
  // combine weeks into single array with missed days as null
  periods.forEach(week => { 
    let weekData: Array<DayType> = Object.values(week);
    weekData.pop(); //remove week title

    //assumes 7 days a period
    for (let i = 0; i < 7; i++) {
      if ((typeof weekData[i] === 'undefined')) { 
        days.push(null);
      } else {
        days.push(weekData[i]);

        if (firstNamedDay == null && weekData[i].Day != null) {
          firstNamedDay = weekData[i].Day;
        } else if (firstNamedDay == null) {
          daysUntilFirst++;
        }
      }
    }
  }); 

  console.log(dayNameToIndex(firstNamedDay));
  console.log(daysUntilFirst);

  let dates = [];
  let undatedDays = [];
  let date: Date = new Date();
  let reverse: boolean = false;
  
  if (typeof rawData.Metadata.End_date === 'string' && typeof rawData.Metadata.Start_date === 'string') {
    antlrError = "Both end date and start date not supported, please remove one.";
    return;
  }

  if (typeof rawData.Metadata.End_date === 'string') { //if end date
    date = stringToDate(rawData.Metadata.End_date);
    reverse = true
    days.reverse();
  } else if (typeof rawData.Metadata.Start_date === 'string') { //if start date
    date = stringToDate(rawData.Metadata.Start_date);
  } 

  if (firstNamedDay != null) { //if null just start on today.
    let dateFound: boolean = false;
    while (!dateFound) {
      if (date.getDay() == dayNameToIndex(firstNamedDay)) {
        dateFound = true;
        break;
      }

      date.setDate(date.getDate() + 1);
    }

    date.setDate(date.getDate() - daysUntilFirst) //offset first found by days previous
  }

  

  // give each day a date starting with the first available date that 
  // matches the specified day. If day not recognised, error
  days.forEach(day => {
    console.log(day); //todo delete
    if (day == null) { //ignore empty days
      return;
    } else if (day.Day == null && !(typeof day.Repeats === 'undefined')) {
      for (let i = 0; i < day.Repeats; i++) {
        //store undated sessions in the current week and mark as not dated
        undatedDays.push({Date: new Date(date), Data: day.Data, Dated: false}) 
      }
    } else if (day.Day == null) { //undated days
      undatedDays.push({Date: new Date(date), Data: day.Data, Dated: false})
    }else {
      if (isValidDate(day.Day)) {
        dates.push({Date: new Date(date), Data: day.Data, Dated: true});
      } else {
        antlrError = "Invalid day: " + day;
        return;
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

var dat = `title: "over unders".
sport: "cycling".
author: "Dylan Barratt".

warmup {
	1hr HRZ1
}

main {
	5*{
		5min HRZ5 &&
		5min HRZ3 - HRZ4
	}
}

"cool down" {
	30min HRZ1
}

"test" {
  30min
}`;

console.log(dat);
console.log(ParseSession(dat));
</script>

<main>
  <h1> Please enter ur training yo</h1>

  <Ide on:textSubmitted={updateIdeText}/>


  {#if importNames.length > 0}
    {#each importNames as name}
      <FileUpload {name} on:fileUploaded={fileUploaded}/>
    {/each}
    <button on:click={checkImportedFiles}>Submit Files</button>
  {/if}
  

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