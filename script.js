// Wait for the DOM content to load before running logic
document.addEventListener('DOMContentLoaded', () => {
    // Dynamically output current year to footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
