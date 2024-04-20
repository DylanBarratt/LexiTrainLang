<script lang="ts">
import { intensityZoneProperties, type IntensityZone, WLType } from "../lib/DataTypes";

export let iz: Array<IntensityZone> = [];
export let time: string = null;
export let type: WLType = null;

let showHelperText = false;

let helperText = [
    "The Norwegian Olympic Federation five zone heart rate model",
    "The three zone intensity model by Dr. Stephen Seiler ",
    "The seven zone power model by Dr. Andrew Coggan"
];

function toggleHelperText() {
    showHelperText = !showHelperText;
}

</script>

<style>
div:hover {
    text-decoration: underline;
}
.helper-text {
    display: none;
    position: absolute;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 5px;
    z-index: 1;
}

</style>

<div 
    on:mouseenter={toggleHelperText} 
    on:mouseleave={toggleHelperText} 
    aria-describedby="helper-text"
    role="tooltip">

    {#if type === 'lt'}
        <p> {time} &lt; <i class="desc">{intensityZoneProperties[iz[0]].name}</i></p>
    {:else if type === 'gt'}
        <p> {time} &gt; <i class="desc">{intensityZoneProperties[iz[0]].name}</i></p>
    {:else if type === 'bt'}
        <p> {time} <i class="desc">{intensityZoneProperties[iz[0]].name}</i> - <i class="desc">{intensityZoneProperties[iz[1]].name}</i></p>
    {:else if type === 'at'}
        <p> {time} at <i class="desc">{intensityZoneProperties[iz[0]].name}</i></p> 
    {/if}




    <div class="helper-text" 
        style="{showHelperText ? 'display: block' : 'display: none'}" 
        role="tooltip" id="helper-text">
        <!-- same for both intensities in between as should be same model -->
        {helperText[intensityZoneProperties[iz[0]].type]}  
      </div> 
</div>

