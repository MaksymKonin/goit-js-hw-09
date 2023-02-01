const bodyEl = document.body;
const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');
const TIME_DELAY = 1000;
let intervalId = null;

btnStartEl.addEventListener('click', onTargetButtonStartClick);
btnStopEl.addEventListener('click', onTargetButtonStopClick);

function onTargetButtonStartClick(evt) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  intervalId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, TIME_DELAY);
  btnStartEl.disabled = true;
  btnStopEl.disabled = false;
}

function onTargetButtonStopClick(evt) {
  clearInterval(intervalId);
  btnStartEl.disabled = false;
  btnStopEl.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
