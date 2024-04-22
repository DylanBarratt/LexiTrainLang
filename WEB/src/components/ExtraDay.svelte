<script lang="ts">
import type { ExtraDayT } from "../lib/DataTypes";
import Modal from "./Modal.svelte";
import SportIcon from "./SportIcon.svelte";

export let eDs: Array<ExtraDayT>;
  
function showDataModal() {
    //day modal is generated on press rather than pre generated per day
    var dataModal = new Modal({
        target: document.body,
        props: {modalType: 1, data: eDs}
    })
}

</script>

<style>
    .clickable:hover {
        cursor: pointer;
    }
</style>



{#if eDs.length === 0}
<div class="day">
    none
</div>
{:else if eDs.length <= 3}
<div class="day clickable" 
    on:click={showDataModal} 
    on:keydown={() => showDataModal}
    role="button" tabindex="-1">
    {#each eDs as eD}
        {#each eD.Sessions as session}
            <SportIcon sport={session.Sport}/>
        {/each}
        <br />
    {/each}
</div>
{:else if eDs.length > 3}
<div class="day clickable" 
    on:click={showDataModal} 
    on:keydown={() => showDataModal}
    role="button" tabindex="-1">
    {#each [0, 1, 2] as i}
        {#each eDs[i].Sessions as session}
            <SportIcon sport={session.Sport}/>
        {/each}
        <br />
    {/each}
    <p>...</p>
</div>
{/if}