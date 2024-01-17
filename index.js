const minimizeBtn = document.querySelector(".minimize-button");
const closeBtn = document.querySelector(".close-button");
const card = document.querySelector(".card");
const recordButton = document.querySelector(".record-button");
const pauseButton = document.querySelector(".pause-button");
const stopButton = document.querySelector(".stop-button");
const time = document.querySelector(".time");

let isContainerOpen = true;
let isRecording = false;

let hour = 0;
let minute = 0;
let second = 0;
let timer;

minimizeBtn.addEventListener("click", () => {
  if (isContainerOpen) {
    card.style.scale = 0;
    isContainerOpen = false;
  } else {
    card.style.scale = 1;
    isContainerOpen = true;
  }
});

closeBtn.addEventListener("click", () => {
  if (isContainerOpen) {
    card.style.scale = 0;
    isContainerOpen = false;
  } else {
    card.style.scale = 1;
    isContainerOpen = true;
  }
});

recordButton.addEventListener("click", function () {
  if (!isRecording) {
    timer = setInterval(startTimer, 1000);
    isRecording = true;
  } else {
    null;
  }
});

pauseButton.addEventListener("click", function () {
  if (isRecording) {
    clearInterval(timer);
    updateDisplay();
    isRecording = false;
  } else {
    null;
  }
});

stopButton.addEventListener("click", function () {
  if (isRecording) {
    clearInterval(timer);
    hour = 0;
    minute = 0;
    second = 0;
    updateDisplay();
    isRecording = false;
  } else {
    null;
  }
});

function startTimer() {
  second++;

  if (second == 60) {
    minute++;
    second = 0;
  }

  if (minute == 60) {
    hour++;
    minute = 0;
  }

  updateDisplay();
}

function updateDisplay() {
  let hrString = hour.toString().padStart(2, "0");
  let minString = minute.toString().padStart(2, "0");
  let secString = second.toString().padStart(2, "0");

  time.textContent = `${hrString}:${minString}:${secString}`;
}
