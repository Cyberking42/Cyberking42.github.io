document.addEventListener('DOMContentLoaded', function () {
    const backgroundDiv = document.querySelector('.background-div');

    function requestFullscreen() {
        const body = document.documentElement || document.body;
        
        if (body.requestFullscreen) {
            body.requestFullscreen();
        } else if (body.mozRequestFullScreen) {
            body.mozRequestFullScreen();
        } else if (body.webkitRequestFullscreen) {
            body.webkitRequestFullscreen();
        } else if (body.msRequestFullscreen) {
            body.msRequestFullscreen();
        }
    }
    // Event handler for click
    backgroundDiv.addEventListener('click', function () {
        // Request fullscreen when the div is clicked
        requestFullscreen();
    });
});

function loadBar() {
    const loadingBar = document.querySelector(".loading-bar");

    // Generate random values within the specified range
    const randomIncrement = Math.floor(Math.random() * 12) + 1; // 1-13%
    const randomDelay = Math.floor(Math.random() * 18) + 3; // 3-18 sec

    // Update the loading bar width
    const currentWidth = parseFloat(loadingBar.style.width) || 0;
    const newWidth = currentWidth + randomIncrement;

    // Limit the width to 100%
    if (newWidth <= 86) {
        loadingBar.style.width = newWidth + "%";
    } else {
        loadingBar.style.width = "86%";
        return;
    }

    // Call the function again after the random delay
    setTimeout(loadBar, randomDelay * 1000);
}

// Start the loading process
loadBar();

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});