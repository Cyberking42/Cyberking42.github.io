function updateDate() {
  const currentDate = new Date();
  const dateElement = document.getElementById('date');

  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  const dateArray = currentDate.toLocaleDateString('en-US', options).split('/');
  const dateFormatted = `${dateArray[1]}.${dateArray[0]}.2023`;

  dateElement.textContent = dateFormatted;
}

function updateTime() {
  const timeElement = document.getElementById('time');
  const currentTime = new Date();
  const timeString = `${currentTime.getHours().toString().padStart(2, '0')}:${currentTime.getMinutes().toString().padStart(2, '0')}`;

  timeElement.textContent = timeString;
}

// Update date immediately when the page loads
updateDate();
updateTime();

// Update time every second
setInterval(updateTime, 1000);

// Prevent the context menu
document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});

