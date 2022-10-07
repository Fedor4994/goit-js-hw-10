const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startButton.addEventListener('click', onStartButtonClick);

function onStartButtonClick() {
  const intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;
  stopButton.addEventListener('click', onStopButtonClick);
  function onStopButtonClick() {
    clearInterval(intervalId);
    startButton.disabled = false;
    stopButton.disabled = true;
  }
}
