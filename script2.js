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
