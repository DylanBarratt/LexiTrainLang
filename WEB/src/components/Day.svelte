<script lang="ts">
import { afterUpdate } from 'svelte';
import type { DayFinal, ValidSport } from "../lib/DataTypes";

export let dayNum: number;
export let dayData: DayFinal;

let sports: Array<ValidSport> = [];

function loadDaySports() {   
    if (dayData == null) return;
    sports = [];

    if (typeof dayData === 'undefined') return;
    
    dayData.Sessions.forEach(session => {
        sports.push(session.Sport);
    });

    sports = sports;
}

afterUpdate(loadDaySports);
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

    {#if sports.length > 0} 
        {#each sports as sport}
            <i class={sport}></i>
            <br />
        {/each}
    {/if}
</div>