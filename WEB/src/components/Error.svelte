<script>
let errorMessage = '';
let showError = false;

// Function to handle errors
function handleError(error) {
    errorMessage = error.message || 'An error occurred';
    showError = true;

    // Hide the error message after 5 seconds
    setTimeout(() => {
    showError = false;
    }, 5000);
}

// Function to dismiss the error message
function dismissError() {
    showError = false;
}

// Error boundary component to catch errors
let ErrorBoundary = null;
$: ErrorBoundary = {
    $$inline: true,
    component: null,
    subscribe: handleError
};
</script>

<style>
    .error-popup {
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #ff5555;
        color: white;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
        cursor: pointer;
    }
    </style>

{#if showError}
<div class="error-popup" on:click={dismissError}>
    <p>{errorMessage}</p>
</div>
{/if}

<slot></slot>

  