<script lang="ts">
import {get_current_component} from 'svelte/internal'
import DayModal from './DayModal.svelte';
import type { DayFinal } from '../lib/DataTypes';
import ExtraModal from './ExtraModal.svelte';

//0 for day, 1 for extra day
export let modalType:number;
export let data: any; //trust the dev to input right data :D

const thisC = get_current_component()

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
    height: 75vw; 

    background-color: rgba(0, 0, 0, 0.5); 
    z-index: 1000; 
}

.modal-content {
    position: absolute; 
    top: 35%; 
    left: 50%; 

    width: 50%;
    height: 50%;

    overflow-y: scroll;

    transform: translate(-50%, -50%); 

    background-color: white; 
    padding: 15px 15px 25px 25px;
    border-radius: 8px; 

    display: grid;
}

.close {
    position: sticky;
    justify-self: end;

    font-size: 20px; 
    cursor: pointer; 

    width: 2rem;
    height: 2rem;
}

.content {
    justify-self: left;
    width: 100%;
    height: 50%;
}
</style>

<div class="modal">
    <div class="modal-content">
      <button class="close" on:click={destroyModal}>&times;</button>
      <div class="content">
        {#if modalType === 0}
            <DayModal dayData={data} />
        {:else if modalType === 1}
            <ExtraModal {data} />
        {/if}
      </div>
    </div>
  </div>