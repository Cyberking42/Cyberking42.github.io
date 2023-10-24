const textElement = document.querySelector('.perc');
const texts = ["20% complete", "40% complete", "60% complete", "80% complete", "100% complete"];

let currentIndex = 0;
let intervalId;

function changeText() {
    textElement.textContent = texts[currentIndex];
    if (texts[currentIndex] === "100% complete") {
        clearInterval(intervalId); // Stop the interval when the text is "100% complete"
    }
    currentIndex = (currentIndex + 1) % texts.length;
}

intervalId = setInterval(changeText, 20000); // Change text every 20 seconds


document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

document.addEventListener('DOMContentLoaded', function () {
    const predefinedTexts = ["Stop code: CRITICAL_PROCESS_DIED", "Stop code: STATUS_SYSTEM_PROCESS_TERMINATED", "Stop code: EXFAT_FILE_SYSTEM", "Stop code: PAGE_NOT_ZERO", "Stop code: WDF_VIOLATION", "Stop code: CRITICAL_STRUCTURE_CORRUPTION", "Stop code: RESERVE_QUEUE_OVERFLOW", "Stop code: RAMDISK_BOOT_INITIALIZATION_FAILED"];
    const codeElement = document.querySelector('p.code2');
    
    // Generate a random index to select a text from the predefinedTexts array
    const randomIndex = Math.floor(Math.random() * predefinedTexts.length);

    // Set the text to a randomly chosen value from the predefined list
    codeElement.textContent = predefinedTexts[randomIndex];


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
