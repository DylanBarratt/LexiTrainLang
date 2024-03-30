<script lang="ts">
    export let dayNum: number;
</script>

<style>
    .day {
        border: 1px solid #ccc;
        padding: 5px;
        height: 125px;  
    }
    
    .dayNum {
        font-weight: bold;
        margin: 2.5px;
    }

</style>

<div class="day">
    <p class="dayNum">
    {#if dayNum < 10}
        0{dayNum}
    {:else}
        {dayNum}
    {/if}    
    </p>
</div>