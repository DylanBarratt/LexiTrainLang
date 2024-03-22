<script lang="ts">

export let calendarData : any;

let currentDate : Date = new Date();
let dateIndent = getDateIndent();

let daysInMonth = Array.from({ 
  length: getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth()) 
}, (_, i) => i + 1); 

function setDaysInMonth() {
  daysInMonth = Array.from({ 
    length: getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth()) 
  }, (_, i) => i + 1);
}

function getFirstDayOfMonth(year, month) {
  // Create a new Date object with the given year and month (months are zero-indexed)
  const firstDayOfMonth = new Date(year, month, 1);
  
  // Use the getDay() method to get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const dayOfWeek = firstDayOfMonth.getDay();

  // Define an array of day names
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // Return the name of the first day of the month
  return dayNames[dayOfWeek];
}

function resetDate() {
  currentDate = new Date(currentDate);
  setDaysInMonth();
  dateIndent = getDateIndent();
}

function prevMonth() {
  currentDate.setMonth(currentDate.getMonth() - 1);
  resetDate();
}

function nextMonth() {
  currentDate.setMonth(currentDate.getMonth() + 1);
  resetDate();
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function filterDataByDate(targetDate: Date) {
  return calendarData.filter(item => {
      const itemDate = new Date(item.Date);
      // Extract year, month, and day from the target date and the item's date
      const targetYear = targetDate.getFullYear();
      const targetMonth = targetDate.getMonth();
      const targetDay = targetDate.getDate();

      const itemYear = itemDate.getFullYear();
      const itemMonth = itemDate.getMonth();
      const itemDay = itemDate.getDate();

      // Compare year, month, and day
      return targetYear === itemYear && targetMonth === itemMonth && targetDay === itemDay;
  });
}

function getDateIndent() {
  const y = currentDate.getFullYear(); // Get the current year
  const m = currentDate.getMonth(); // Get the current month (0-indexed)

  // Create a new Date object representing the first day of the month
  const firstDayOfMonth = new Date(y, m, 1);

  //convert to me days
  if (firstDayOfMonth.getDay() == 0) {
    return 7;
  } 

  // Get the day of the week for the first day of the month (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  return firstDayOfMonth.getDay() - 1;
}
//todo delete
console.log(calendarData);
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
      gap: 15px;
  }
  
  .month-year {
      font-size: 20px;
      font-weight: bold;
      width: 14ch;
  }
  
  .days {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
  }
  
  .day {
      border: 1px solid #ccc;
      padding: 5px;
      height: 125px;
      cursor: pointer;
  }
  
  .selected {
      border-color: rgb(255, 0, 0);
  }
  
  .current-day {
      background-color: #ccc;
  }
  
  .day-names {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
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
  
<div class="calendar">
    <div class="header">
      <div class="month-year">{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</div>
      <button on:click={prevMonth}>&lt;</button>
      <button on:click={nextMonth}>&gt;</button>
    </div>
  
    <div class="day-names">
      {#each ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as day}
        <div>{day}</div>
      {/each}
    </div>

    <div class="days">
      {#each {length: dateIndent} as _, i}
        <div class="day" />
      {/each}
      {#each daysInMonth as day}
        <div class="day">
          {day} <br /> <br />
          {filterDataByDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
        </div>
      {/each}
    </div>
</div>