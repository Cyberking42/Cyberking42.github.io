const textElement = document.querySelector('.perc');
const texts = ["20% complete", "40% complete", "60% complete", "80% complete", "99% complete", "100% complete"];

let currentIndex = 0;

function changeText() {
    textElement.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
}

setInterval(changeText, 20000); // Change text every 20 seconds

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

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
