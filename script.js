// --- Variables ---
let startTime = 0;
let elapsedTime = 0;
let timerInterval;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

// --- Format Time Function ---
function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const milliseconds = Math.floor((ms % 1000) / 10);

  return (
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0") + ":" +
    String(milliseconds).padStart(2, "0")
  );
}

// --- Start Stopwatch ---
document.getElementById("startBtn").addEventListener("click", () => {
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      display.textContent = formatTime(elapsedTime);
    }, 10);
  }
});

// --- Pause Stopwatch ---
document.getElementById("pauseBtn").addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
});

// --- Reset Stopwatch ---
document.getElementById("resetBtn").addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  display.textContent = "00:00:00";
  laps.innerHTML = "";
});

// --- Record Lap ---
document.getElementById("lapBtn").addEventListener("click", () => {
  if (elapsedTime > 0) {
    const li = document.createElement("li");
    li.textContent = "Lap " + (laps.children.length + 1) + " - " + formatTime(elapsedTime);
    laps.appendChild(li);
  }
});
