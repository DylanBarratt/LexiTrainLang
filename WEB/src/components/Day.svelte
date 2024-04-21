<script lang="ts">
import { afterUpdate } from 'svelte';
import { ValidSport, type DayFinal } from "../lib/DataTypes";
import SportIcon from './SportIcon.svelte';
import Modal from './Modal.svelte';

export let dayNum: number;
export let dayData: DayFinal;

let sports: Array<ValidSport> = [];

function loadDaySports() {   
    if (dayData == null) return;
    sports = [];

    if (typeof dayData === 'undefined') return;
    
    dayData.Sessions.forEach(session => {
        if (session.Sport == null && session.Notes != null) {
            sports.push(ValidSport.Note)
        } else {
            sports.push(session.Sport);
        }
    });

    sports = sports;
}

function showDataModal() {
    //day modal is generated on press rather than pre generated per day
    var dataModal = new Modal({
        target: document.body,
        props: { modalType: 0, data: dayData }
    })
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
    
    .dayNum {
        font-weight: bold;
        margin: 2.5px;
    }

</style>

{#if dayData != null}
<div class="day">
    <!-- TODO: display notes here somehow -->
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
                <SportIcon sport={sport} />
                <br />
            {/each}
        {/if}     
    </button>
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

