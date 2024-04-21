<script lang="ts">
import { afterUpdate } from 'svelte';
import { DayFinal, ExtraDayT } from "../lib/DataTypes";
import Day from "./Day.svelte";
import ExtraDay from './ExtraDay.svelte';

export let days: Array<DayFinal>;
export let extraDays: Array<ExtraDayT>;
export let dated: boolean;

let currentMonth : Date = getFirstDayOfMonth(new Date());
let monthArr: Array<DayFinal> = [];
let weekStarted: number = undefined;

function prevMonth() {
  currentMonth.setMonth(currentMonth.getMonth() - 1);
  resetDate();
}

function nextMonth() {
  currentMonth.setMonth(currentMonth.getMonth() + 1);
  resetDate();
}

function gotoCurrentMonth() {
  currentMonth.setMonth(new Date().getMonth());
  resetDate();
}

function resetDate() {  
  currentMonth = currentMonth;
  
  monthArr = [];
  weekStarted = undefined;
}

function getDaysInMonth(date: Date): number {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

function getFirstDayOfMonth(date: Date): Date {
  let y = date.getFullYear(); // Get the current year
  let m = date.getMonth(); // Get the current month (0-indexed)

  // Create a new Date object representing the first day of the month
  let firstDayOfMonth = new Date(y, m, 1);
  return firstDayOfMonth;
}

function getLastDayOfMonth(date: Date): Date {
  let y = date.getFullYear(); // Get the current year
  let m = date.getMonth(); // Get the current month (0-indexed)

  // Create a new Date object for the next month's first day
  let nextMonthFirstDay = new Date(y, m + 1, 1);
  
  // Subtract one day from the next month's first day
  let lastDayOfMonth = new Date(nextMonthFirstDay.getTime() - 1);

  return lastDayOfMonth;
}

function getDateIndent(date: Date): number {
  let firstDayOfMonth = getFirstDayOfMonth(date);

  if (firstDayOfMonth.getDay() == 0) {
    return 7 - 1;
  }

  return firstDayOfMonth.getDay() - 1;
}

function getDateOutdent(date: Date): number {
  let lastDayOfMonth = getLastDayOfMonth(date);

  if (lastDayOfMonth.getDay() == 0) {
    return 0;
  }

  return 7 - lastDayOfMonth.getDay();
}

//can add or subtract days from date
function getNextDay(currDate: Date, previousAmnt: number): Date {
  let previousDate = new Date(currDate);
  previousDate.setDate(previousDate.getDate() + previousAmnt); 
  return previousDate;
}

function filterDataByDate(targetDate: Date) {
  let filteredData = days.filter(item => {
    let itemDate = new Date(item.Date);
    // Extract year, month, and day from the target date and the item's date
    let targetYear = targetDate.getFullYear();
    let targetMonth = targetDate.getMonth();
    let targetDay = targetDate.getDate();

    let itemYear = itemDate.getFullYear();
    let itemMonth = itemDate.getMonth();
    let itemDay = itemDate.getDate();

    // Compare year, month, and day
    return targetYear === itemYear && targetMonth === itemMonth && targetDay === itemDay;
  });

  if (filteredData.length > 0) {
    return filteredData;
  }

  // Return null if no matching item is found
  return null;
}

function populateCalendarData() {
  monthArr = [];
  // console.log("indent", getDateIndent(currentMonth));
  // console.log("outdent", getDateOutdent(currentMonth));
  // console.log("length", getDateIndent(currentMonth) + getDaysInMonth(currentMonth) + getDateOutdent(currentMonth));
  // console.log("current date", currentMonth);
  
  let dateI = new Date();
  dateI = getNextDay(currentMonth, -getDateIndent(currentMonth));
  
  // find first date from data in this month (if any)
  // all other dates are just imcrement from that one. 
  for (let i = 0; i < getDateIndent(currentMonth) + getDaysInMonth(currentMonth) + getDateOutdent(currentMonth); i++) {
    let found = filterDataByDate(dateI);

    if (found == null) {
      monthArr.push(null);
    } else {

      if (weekStarted === undefined) {
        weekStarted = Math.floor(i / 7);
        console.log(weekStarted);
      }

      found.forEach(day => {
        monthArr.push(day); 
      });
    }
    dateI = getNextDay(dateI, 1);
  }

  if (!dated) {
    weekStarted = 0;
  }

  monthArr = monthArr; 
  console.log(monthArr);
}

function getDayNum(index: number): number {
  if (index + 1 - getDateIndent(currentMonth) < 1) {
    return getNextDay(currentMonth, index - getDateIndent(currentMonth)).getDate();
  } else if (index + 1 - getDateIndent(currentMonth) > getDaysInMonth(currentMonth)) {
    return index + 1 - getDateIndent(currentMonth) - getDaysInMonth(currentMonth);
  } else {
    return index + 1 - getDateIndent(currentMonth);
  }
}

afterUpdate(populateCalendarData);
</script>

<style>
.header {
  margin: 5vw;
}

.grid {
  margin-left: 5vw;
  margin-right: 5vw;
  width: 90vw;
}

.dayContainer {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
}

.day-names {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  border: 1px solid rgb(110, 110, 110);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>

<div class="calendar">
  <div class="header">
    <div class="month-year">{currentMonth.toLocaleString('default', { month: 'long' })} {currentMonth.getFullYear()}</div>
    <button on:click={prevMonth}>&lt;</button>
    <button on:click={nextMonth}>&gt;</button>
    <button on:click={gotoCurrentMonth}>Current Month</button>
  </div>

  {#if monthArr.length > 0}
    <div class="day-names grid">
      {#each ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Any"] as day}
        <div>{day}</div>
      {/each}
    </div>
    <div class="dayContainer grid">  
      {#each monthArr as day, i}
        {#if day === null}
          <Day dayNum={getDayNum(i)} dayData={null}/>
        {:else if day.Dated}
          <Day dayNum={getDayNum(i)} dayData={day}/>
        {/if}

        {#if i % 7 === 6}
          {#if Math.floor(i / 7) === weekStarted || !dated}
            <ExtraDay eDs={extraDays.filter(obj => obj.Period === Math.floor(i / 7) - weekStarted)} /> 
          {:else}
            <ExtraDay eDs={[]} />
          {/if}
        {/if}
      {/each}
    </div>
  {/if}
</div>
