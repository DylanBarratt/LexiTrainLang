<script>
    export let calendarData;
</script>



<div>
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

    
</div>