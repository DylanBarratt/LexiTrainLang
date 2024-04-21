<script lang="ts">
import { afterUpdate } from 'svelte';

export let msg: string;

//in ms
const TIME_SHOWN = 5000;
var lastTimeout: number = undefined;

function scheduleDestroy() {
    if (lastTimeout != undefined) {
        clearTimeout(lastTimeout);
    }
    
    lastTimeout = setTimeout(() => {
        hide()
    }, TIME_SHOWN); // Hide after 5 seconds
}

function hide() {
    msg = null;
}

afterUpdate(scheduleDestroy);
</script>

<style>
    .error {
        position: fixed; 
        bottom: 20px; 
        right: 20px; 
        background-color: #ff3333; 
        color: #fff; 
        padding: 10px; 
        border-radius: 5px; 
        z-index: 9999;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
    }
</style>

{#if msg != null} 
<div class="error">
    {msg}
</div>
{/if}