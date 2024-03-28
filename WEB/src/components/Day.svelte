<script lang="ts">
    export let dayNum: any;
    export let dayData: any;

    let modalVis = false;

    function showModal(event) {
        if (event.key === 'Enter') {
            modalVis = true;
        } else if (event.key == null) {
            modalVis = true;
        }
    }

    function hideModal() {
        modalVis = false;
    }

    // console.log(dayData); //TODO WHY IS THIS NULLLLLLL!!!!
</script>

<style>
.day {
    border: 1px solid #ccc;
    padding: 5px;
    height: 125px;  
}

.dayNum {
    font-weight: bold;
    margin: 2.5px;
}

.modal-hidden {
    display: none;
    visibility: hidden;
}

.modal-show {
    position: fixed; /* or absolute */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.685); /* semi-transparent background */
    z-index: 9999; /* adjust as needed to ensure it's on top */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: left;
    cursor: auto;
}

.modal-content {
    position: relative;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    width: 50%;
    height: 50%;
    overflow: auto;
}

.hide-button {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 48px;
    height: 48px;
    text-align: center;
    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
}

.hide-button span {
    font-size: 48px;
    margin: 0;
    padding: 0;
    text-align: center;
}

.press {
    cursor: pointer;
}

.press:hover {
    color: #414141;
}
</style>

<div class="day" 
    on:click={showModal}
    on:keydown={showModal}
    tabindex={dayNum} role="button" >
    <p class="dayNum">{dayNum}</p>
    {#if dayData}
      {#each dayData as session}
        {#each session.Data as data}
            {#if data.Sport == null} 
                {data.Data}
            {:else}
            <div>
                {data.Sport} 
                {#if typeof data.Data != 'undefined'}
                    {data.Data}
                {:else if typeof data.Sections != 'undefined'}
                    <div class="press">
                        <br /> click for more details...
                    </div>
                    <div class:modal-hidden={!modalVis} class:modal-show={modalVis}
                        on:click={showModal} 
                        on:keydown={showModal} role="button" tabindex="-1">
                        <div class="modal-content" 
                            on:click={e => e.stopPropagation()}
                            on:keydown={e => e.stopPropagation()} role="button" tabindex="-1">
                        <div class="hide-button" 
                            on:click|stopPropagation={hideModal}
                            on:keydown|stopPropagation={hideModal} role="button" tabindex="-1">
                            <span>&times;</span>
                        </div>
                            <h2>{data.Sport}</h2>
                            {#each data.Sections as section}
                                <h3>{section.Title}:</h3>
                                {#each section.Workloads as workload}
                                <p>
                                    {#each workload.Data as load}
                                        {load}&nbsp;
                                    {/each}
                                </p> 
                                {/each}                
                            {/each}
                        </div>
                    </div>
                {/if}
              </div>
              <br />
            {/if}
          
        {/each}
      {/each}  
    {/if}

    
</div>