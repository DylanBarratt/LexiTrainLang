<script lang="ts">
import { DayFinal, type ExtraDayT } from "../lib/DataTypes";
import DayModal from "./DayModal.svelte";
import SportIcon from "./SportIcon.svelte";

export let data: Array<ExtraDayT>;
</script>

{#each data as day}
    <DayModal dayData={{Date: null, Sessions: day.Sessions, Dated: false }}/>
{/each} 