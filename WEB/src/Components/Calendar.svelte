<script>
let currentDate = new Date();
let selectedDate = null;

export let calendarData;


function setSelectedDate(day) {
  selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
}

function prevMonth() {
  currentDate.setMonth(currentDate.getMonth() - 1);
  currentDate = new Date(currentDate);
  selectedDate = null;
}

function nextMonth() {
  currentDate.setMonth(currentDate.getMonth() + 1);
  currentDate = new Date(currentDate);
  selectedDate = null;
}

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
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
        <div>Monday</div>
        <div>Tuesday</div>
        <div>Wednesday</div>
        <div>Thursday</div>
        <div>Friday</div>
        <div>Saturday</div>
        <div>Sunday</div>
      </div>

    <div class="days">
      {#each Array.from({ length: getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth()) }, (_, i) => i + 1) as day}
        <div class="day {selectedDate && selectedDate.getDate() === day ? 'selected' : ''} {new Date().getDate() === day && new Date().getMonth() === currentDate.getMonth() ? 'current-day' : ''}" 
        on:click={() => setSelectedDate(day)}
        on:keypress={() => setSelectedDate(day)}>
         
            <div>{day}</div>
            
          </div>
      {/each}
    </div>

    <p>Selected Date: {selectedDate ? selectedDate.toLocaleDateString() : 'None'}</p>
  </div>