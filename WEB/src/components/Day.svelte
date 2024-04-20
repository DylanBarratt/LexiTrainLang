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

function showDataModal() {
    console.log(dayData);
    
}

afterUpdate(loadDaySports);
</script>

<style>
    button {
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        font: inherit;
        color: inherit;
        cursor: pointer;

        width: 100%;
        height: 100%;

        display: flex;  
        align-items: flex-start; 
        justify-content: flex-start; 
        flex-direction: column;
    }

    .day {
        border: 1px solid #ccc;
        height: 125px;  
        padding: 10px;
        margin: 0;
    }
    
    .dayNum {
        font-weight: bold;
        margin: 2.5px;
    }

</style>

{#if dayData != null}
<div class="day">
    <button class="dayNotNull" 
    on:click={showDataModal}>
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
    </button>
<div>
        
</div>
</div>


{:else}
<div class="day">
    <p class="dayNum">
        {#if dayNum < 10}
            0{dayNum}
        {:else}
            {dayNum}
        {/if}    
    </p>
</div>
{/if}

