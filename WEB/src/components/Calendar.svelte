<script lang="ts">
import type { DayFinal } from "../lib/DataTypes";
import Day from "./Day.svelte";

export let Days: Array<DayFinal>;

let currentDate : Date = new Date();
let monthArr: Array<DayFinal> = [];

function prevMonth() {
  currentDate.setMonth(currentDate.getMonth() - 1);
  resetDate();
}

function nextMonth() {
  currentDate.setMonth(currentDate.getMonth() + 1);
  resetDate();
}

function currentMonth() {
  let d = new Date();
  currentDate.setMonth(d.getMonth());
  resetDate();
}

function resetDate() {
  console.log(currentDate);
  
  currentDate = new Date(currentDate);
  populateCalendarData();
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

function findByKey(array: Array<any>, key: any, value: any): any {
  return array.find(item => item[key] === value);
}

//can add or subtract days from date
function getNextDay(currDate: Date, previousAmnt: number): Date {
  let previousDate = new Date(currDate);
  previousDate.setDate(previousDate.getDate() + previousAmnt); 
  return previousDate;
}

function dateEquals(date1: Date, date2: Date): boolean {
  return (
    date1.getDay() == date2.getDay() && 
    date1.getMonth() == date2.getMonth() && 
    date1.getFullYear() == date2.getFullYear()
  );
}

function populateCalendarData(){
  monthArr = [];
  //todo delete
  console.log("indent", getDateIndent(currentDate));
  console.log("outdent", getDateOutdent(currentDate));
  console.log("length", getDateIndent(currentDate) + getDaysInMonth(currentDate) + getDateOutdent(currentDate));
  console.log("current date", currentDate);
  
  let startDate = new Date(getNextDay(getFirstDayOfMonth(currentDate), -getDateIndent(currentDate)));

  console.log("start date: ", startDate);
  

  for (let i = 0; i < getDateIndent(currentDate) + getDaysInMonth(currentDate) + getDateOutdent(currentDate); i++) {
    monthArr.push(Days.find((day: DayFinal) => dateEquals(day.Date, startDate)));
    startDate = getNextDay(startDate, 1);
  }

  console.log(monthArr);
}

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
  grid-template-columns: repeat(7, 1fr);
}

.day-names {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border: 1px solid rgb(110, 110, 110);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>

<div class="calendar">
  <div class="header">
    <div class="month-year">{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</div>
    <button on:click={prevMonth}>&lt;</button>
    <button on:click={nextMonth}>&gt;</button>
    <button on:click={currentMonth}>Current Month</button>
  </div>

  {#if monthArr.length > 0}
    <div class="day-names grid">
      {#each ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as day}
        <div>{day}</div>
      {/each}
    </div>
    <div class="dayContainer grid">  
      {#each monthArr as day, i}
        {#if ((i + 1) - getDateIndent(currentDate)) < 1}
          <Day dayNum={getNextDay(getFirstDayOfMonth(currentDate), i - getDateIndent(currentDate)).getDate()} />
        {:else}
          <Day dayNum={((i + 1) - getDateIndent(currentDate))} />
        {/if}
      {/each}
    </div>
  {/if}
</div>
