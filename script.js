const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const lapBtn = document.getElementById('lapBtn');
const resetBtn = document.getElementById('resetBtn');
const lapList = document.getElementById('lapList');

let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let lapCount = 0;

function formatTime(ms) {
  const totalCentiseconds = Math.floor(ms / 10);
  const centiseconds = totalCentiseconds % 100;
  const totalSeconds = Math.floor(totalCentiseconds / 100);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  const pad = (num, size = 2) => String(num).padStart(size, '0');

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(centiseconds)}`;
}

function updateDisplay() {
  const currentTime = Date.now() - startTime + elapsedTime;
  display.textContent = formatTime(currentTime);
}

function startStopwatch() {
  startTime = Date.now();
  timerInterval = setInterval(updateDisplay, 10);

  startBtn.disabled = true;
  pauseBtn.disabled = false;
  lapBtn.disabled = false;
}

function pauseStopwatch() {
  clearInterval(timerInterval);
  elapsedTime += Date.now() - startTime;

  startBtn.disabled = false;
  startBtn.textContent = 'Resume';
  pauseBtn.disabled = true;
  lapBtn.disabled = true;
}

function recordLap() {
  lapCount += 1;
  const currentTime = Date.now() - startTime + elapsedTime;

  const li = document.createElement('li');
  const lapLabel = document.createElement('span');
  lapLabel.textContent = `Lap ${lapCount}`;
  const lapTime = document.createElement('span');
  lapTime.textContent = formatTime(currentTime);

  li.appendChild(lapLabel);
  li.appendChild(lapTime);
  lapList.prepend(li);
}

function resetStopwatch() {
  clearInterval(timerInterval);
  startTime = 0;
  elapsedTime = 0;
  lapCount = 0;

  display.textContent = '00:00:00.00';
  lapList.innerHTML = '';

  startBtn.disabled = false;
  startBtn.textContent = 'Start';
  pauseBtn.disabled = true;
  lapBtn.disabled = true;
}

startBtn.addEventListener('click', startStopwatch);
pauseBtn.addEventListener('click', pauseStopwatch);
lapBtn.addEventListener('click', recordLap);
resetBtn.addEventListener('click', resetStopwatch);