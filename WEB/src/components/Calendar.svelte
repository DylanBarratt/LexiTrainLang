<script lang="ts">
import Day  from "./Day.svelte";


export let calendarData : any;

let periodLength: number = 7;
let daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

let currentDate : Date = new Date();
let dateIndent = getDateIndent();
let dateOutdent = getDateOutdent();

let daysInMonth = Array.from({ 
  length: getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth()) 
}, (_, i) => i + 1); 

function setDaysInMonth() {
  daysInMonth = Array.from({ 
    length: getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth()) 
  }, (_, i) => i + 1);
}

function resetDate() {
  currentDate = new Date(currentDate);
  setDaysInMonth();
  dateIndent = getDateIndent();
  dateOutdent = getDateOutdent();
}

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

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function filterDataByDate(targetDate: Date) {
  let filteredData = calendarData.filter(item => {
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

  // Return null if no matching item is found
  return filteredData.length > 0 ? filteredData : null;
}

function getFirstDayOfMonth(): Date {
  let y = currentDate.getFullYear(); // Get the current year
  let m = currentDate.getMonth(); // Get the current month (0-indexed)

  // Create a new Date object representing the first day of the month
  let firstDayOfMonth = new Date(y, m, 1);
  return firstDayOfMonth;
}

function getLastDayOfMonth(): Date {
  let y = currentDate.getFullYear(); // Get the current year
  let m = currentDate.getMonth(); // Get the current month (0-indexed)

  // Create a new Date object for the next month's first day
  let nextMonthFirstDay = new Date(y, m + 1, 1);
  
  // Subtract one day from the next month's first day
  let lastDayOfMonth = new Date(nextMonthFirstDay.getTime() - 1);

  return lastDayOfMonth;
}

function getNextDay(currDate: Date, previousAmnt: number): Date {
  let previousDate = new Date(currDate);
  previousDate.setDate(previousDate.getDate() + previousAmnt); 
  return previousDate;
}

function getDateIndent(): number {
  let firstDayOfMonth = getFirstDayOfMonth();

  if (firstDayOfMonth.getDay() == 0) {
    return periodLength - 1;
  }

  return firstDayOfMonth.getDay() - 1;
}

function getDateOutdent(): number {
  let lastDayOfMonth = getLastDayOfMonth();

  if (lastDayOfMonth.getDay() == 0) {
    return 0;
  }

  return periodLength - lastDayOfMonth.getDay();
}

//todo delete
// console.log(calendarData);
</script>

<style>
.calendar {
  font-family: Arial, sans-serif;
}

.header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
}

.header button {
  margin-left: 5px;
}

.month-year {
  font-size: 20px;
  font-weight: bold;
  width: 14ch;
}

.days {
  display: grid;
  grid-template-columns: repeat(var(--week-length), 1fr);
}

.past {
  border: 1px solid #ccc;
  padding: 5px;
  height: 125px;
  color: #979797;
}

.day-names {
  display: grid;
  grid-template-columns: repeat(var(--week-length), 1fr);
  border: 1px solid rgb(110, 110, 110);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.day-names div {
  border-right: 0.5px solid rgb(110, 110, 110);
  border-left: 0.5px solid rgb(110, 110, 110);
  font-weight: bold;
  padding: 10px;
  font-size: small;
}
</style>
  
<div class="calendar" style="--week-length: {periodLength};">
    <div class="header">
      <div class="month-year">{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</div>
      <button on:click={prevMonth}>&lt;</button>
      <button on:click={nextMonth}>&gt;</button>
      <button on:click={currentMonth}>Current Month</button>
    </div>
  
    <div class="day-names">
      {#each daysOfTheWeek.slice(0, periodLength) as day}
        <div>{day}</div>
      {/each}
    </div>

    <div class="days">
      {#each {length: dateIndent} as _, i}
        <div class="day past">
          {getNextDay(getFirstDayOfMonth(), i - dateIndent).getDate()}
        </div>
      {/each}


      {#each daysInMonth as day}
        <Day dayNum={day} dateData={filterDataByDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))} /> 
      {/each}


      {#each {length: dateOutdent} as _, i}
        <div class="day past">
          {getNextDay(getLastDayOfMonth(), i + 1).getDate()}
        </div>
      {/each}
    </div>
</div>