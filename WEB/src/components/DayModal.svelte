<script lang="ts">
import { ValidSport, type DayFinal } from "../lib/DataTypes";
import {get_current_component} from 'svelte/internal'
  import SportIcon from "./SportIcon.svelte";

const thisC = get_current_component()

    
export let dayData: DayFinal;

console.log(dayData.Sessions);


function destroyModal() {
    thisC.$destroy();
}

</script>

<style>
.modal {
    position: fixed; 
    top: 0; 
    left: 0; 

    width: 100%; 
    height: 100%; 

    background-color: rgba(0, 0, 0, 0.5); 
    z-index: 1000; 
}

.modal-content {
    position: absolute; 
    top: 50%; 
    left: 50%; 

    width: 75%;
    height: 75%;

    transform: translate(-50%, -50%); 

    background-color: white; 
    padding: 20px; 
    border-radius: 8px; 

    display: grid;
}

.close {
    justify-self: end;

    font-size: 20px; 
    cursor: pointer; 

    width: 2rem;
    height: 2rem;
}

.content {
    justify-self: center;
}
</style>

<div class="modal">
  <div class="modal-content">
    <button class="close" on:click={destroyModal}>&times;</button>
    
    <div class="content">
        {#each dayData.Sessions as session}
            {#if session.Notes != null}
                <h3>Note: {session.Notes}</h3>
            {/if}
    
            <SportIcon sport={session.Sport} />
        {/each}
    </div>
  </div>
</div>