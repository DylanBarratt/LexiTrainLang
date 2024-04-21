<script lang="ts">
import { ValidSport, type DayFinal } from "../lib/DataTypes";
import SportIcon from "./SportIcon.svelte";
import IntensityZone from "./IntensityZone.svelte";

export let dayData: DayFinal;

console.log(dayData);

</script>

{#each dayData.Sessions as session}
    {#if session.Notes !== null} 
        <!-- if the session is just a note -->
        <SportIcon sport={ValidSport.Note} />
        <h3>Note: {session.Notes}</h3>
    {:else}
        <SportIcon sport={session.Sport} /> <br />
        {#each session.Sections as section}
            {#if section.Title !== null}
                {section.Title}: <br />
            {/if}
            {#each section.Workloads as workloadE}
                {#if workloadE.Load !== null}
                    Load: {workloadE.Load} <br />
                {/if}
                {#if workloadE.Notes !== null}
                    Notes: {workloadE.Notes} <br />
                {/if}
                {#if workloadE.Workload !== null}
                    {#if workloadE.Workload.Type === "none"}
                        {workloadE.Workload.Time}
                    {:else}
                        <IntensityZone iz={workloadE.Workload.Zone} time={workloadE.Workload.Time} type={workloadE.Workload.Type}/>
                    {/if}
                {/if}
            {/each}
            <br />
        {/each}
    {/if}
{/each}

<hr />
<br />