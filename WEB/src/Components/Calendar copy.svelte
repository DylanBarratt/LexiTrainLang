<script>
    export let calendarData;
</script>


<style>
    /* Calendar container */
    .calendar {
      font-family: Arial, sans-serif;
      width: 100%;
      margin-top: 20px;
    }
  
    /* Table styles */
    table {
      width: 100%;
      border-collapse: collapse;
      border: 1px solid #ccc;
    }
  
    th, td {
      padding: 10px;
      text-align: center;
      border: 1px solid #ccc;
    }
  
    th {
      background-color: #f2f2f2;
    }
  
    /* Title styles */
    #periodTitle {
      margin-top: 20px;
      margin-bottom: 10px;
      font-size: 18px;
      color: #000000;
      text-align: center;
    }
</style>


<main>
<div>
    {#if calendarData.Metadata.Name}
        <h2>{calendarData.Metadata.Name}</h2>
    {/if}
    {#if calendarData.Metadata.Author}
        <h3>By {calendarData.Metadata.Author}</h3>
    {/if}
    {#if calendarData.Metadata.Date}
        <h4>{calendarData.Metadata.Date}</h4>
    {/if}
    </div>

    <!-- Calendar component -->
    <div class="calendar">
    {#each calendarData.Periods as period}
        <h2 id="periodTitle">{period.title}</h2>
        <table>
        <thead>
            <tr>
            <th>Day</th>
            <th>Sport</th>
            <th>Data</th>
            </tr>
        </thead>
        <tbody>
            {#each Object.values(period) as day}
            {#if typeof day === 'object' && day.Data}
                <tr>
                    <td>{day.Day}</td>
                    {#each day.Data as activity}
                        <td>{activity.Sport}</td>
                        <td>{activity.Data}</td>
                    {/each}
                </tr>
            {/if}
            {/each}
        </tbody>
        </table>
    {/each}
</div>
</main>