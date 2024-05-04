export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
        // Add event listener to the 'contextmenu' event
        window.addEventListener('contextmenu', (event) => {
            // Prevent default behavior
            event.preventDefault();
        });
    }
});