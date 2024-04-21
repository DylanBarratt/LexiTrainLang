<script lang="ts">
import { onMount } from "svelte";
import { ValidSport } from "../lib/DataTypes";

export let sport: ValidSport;

let itemType: string;

function getItemType(): void {
    switch (sport) {
        case ValidSport.Swimming:
            itemType = "fa-solid fa-person-swimming"
            break;
        case ValidSport.Cycling:
            itemType = "fa-solid fa-person-biking"
            break;
        case ValidSport.Running:
            itemType = "fa-solid fa-person-running"
            break;
        case ValidSport.Triathlon:
            itemType = "3"
            break;
        case ValidSport.Duathlon:
            itemType = "2"
            break;
        case ValidSport.Walking:
            itemType = "fa-solid fa-person-walking"
            break;
        case ValidSport.Gym:
            itemType = "fa-solid fa-dumbbell"
            break;
        case ValidSport.Other:
            itemType = "fa-solid fa-question"
            break;
        case ValidSport.Note:
            itemType = "fa-solid fa-note-sticky"
            break;
        
        default:
            break;
    }
}
// Swimming = "fa-solid fa-person-swimming",
// Cycling = "fa-solid fa-person-biking",
// Running = "fa-solid fa-person-running",
// Triathlon = "fa-solid fa-3", 
// Duathlon = "fa-solid fa-2",
// Walking = "fa-solid fa-person-walking",
// Gym = "fa-solid fa-dumbbell",
// Other = "fa-solid fa-question",
// Note = "fa-solid fa-note-sticky"

onMount(getItemType);
</script>

{#if itemType === "3"}
    <i class="fa-solid fa-person-swimming"></i><i class="fa-solid fa-person-biking"></i><i class="fa-solid fa-person-running"></i>
{:else if itemType === "2"}
    <i class="fa-solid fa-person-biking"></i><i class="fa-solid fa-person-swimming"></i>
{:else}
    <i class={itemType}></i>
{/if}
    