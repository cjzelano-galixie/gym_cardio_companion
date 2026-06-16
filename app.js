// workout database
const workoutData = {
  bike: {
    title: "Stationary Bike",
    phases: [
      {
        name: "Warm-Up",
        time: "05:00",
        targets: "80-90 RPM / Level 2-3",
        instruction:
          "Easy, getting legs moving comfortably. Focus on smooth breathing.",
      },
      {
        name: "Base Pace",
        time: "04:00",
        targets: "90-100 RPM / Level 4",
        instruction: "Moderate effort. Can talk but breathing heavier.",
      },
      {
        name: "The Climb",
        time: "05:00",
        targets: "70-80 RPM / Level 6-7",
        instruction:
          "Heavy effort. Simulates a steep hill climb. Keep core engaged.",
      },
      {
        name: "Recovery",
        time: "01:00",
        targets: "80 RPM / Level 3",
        instruction: "Catch your breath, bring heart rate down slightly.",
      },
      {
        name: "Speed Intervals",
        time: "05:00",
        targets: "100+ RPM Sprints",
        instruction:
          "Repeat 5x: Sprint fast for 30 seconds, cruise slow for 30 seconds.",
      },
      {
        name: "Cool-Down",
        time: "05:00",
        targets: "70-80 RPM / Level 2",
        instruction:
          "Slow down your legs completely, prepare your body for the sauna.",
      },
    ],
  },
  elliptical: {
    title: "Elliptical",
    phases: [
      {
        name: "Warm-Up",
        time: "03:00",
        targets: "Low Resistance / Low Incline",
        instruction:
          "Easy, natural pace. Lightly hold stationary handles to find rhythm.",
      },
      {
        name: "Steady Fat Burn",
        time: "05:00",
        targets: "Mod Resistance / Med Incline",
        instruction:
          "Consistent, brisk pace. Lightly pump moving handles for full body.",
      },
      {
        name: "Glute Sculpt",
        time: "05:00",
        targets: "High Resistance / High Incline",
        instruction:
          "Pedal BACKWARDS for 1 min, then FORWARD for 1 min. Repeat.",
      },
      {
        name: "Sprints",
        time: "04:00",
        targets: "Mod Resistance / Low Incline",
        instruction:
          "Sprint fast for 45 seconds, recover at slow pace for 45s. Repeat.",
      },
      {
        name: "Cool-Down",
        time: "03:00",
        targets: "Low Resistance / Low Incline",
        instruction:
          "Slow, easy stride. Let go of moving handles and settle breathing.",
      },
    ],
  },
  stairmaster: {
    title: "Stairmaster",
    phases: [
      {
        name: "Warm-Up",
        time: "03:00",
        targets: "Level 1 or 2 (Very Slow)",
        instruction:
          "Find a smooth rhythm. Concentrate on deep, steady belly-breathing.",
      },
      {
        name: "Steady Climb",
        time: "04:00",
        targets: "Level 3 (Manageable Walk)",
        instruction:
          "Main block. Keep pace completely consistent. Drop back if talking is tough.",
      },
      {
        name: "1-Min Challenge",
        time: "01:00",
        targets: "Level 4 (Slightly Faster)",
        instruction:
          "Slightly quicker step. Test your endurance while keeping tight breath control.",
      },
      {
        name: "Cool-Down",
        time: "02:00",
        targets: "Level 1 (Crawling Pace)",
        instruction:
          "Slow feet down completely. Take deep recovery breaths before sauna.",
      },
    ],
  },
};

// application state
let currentRoutine = "bike";
let currentPhaseIndex = 0; //start at the first phase (Warm up)

// element selectors
const phaseTitleEl = document.getElementById("current-phase");
const targetsEl = document.getElementById("target-metrics");
const instructionEl = document.getElementById("focus-instruction");
const timerDisplayEl = document.getElementById("timer-display");
const navButtons = document.querySelectorAll(".nav-btn");

// navigation reder logic
function switchWorkout(routineKey) {
  currentRoutine = routineKey;
  currentPhaseIndex = 0;

  const routine = workoutData[routineKey];
  const initialPhase = routine.phases[currentPhaseIndex];

  phaseTitleEl.textContent = initialPhase.name;
  targetsEl.textContent = initialPhase.targets;
  instructionEl.textContent = initialPhase.instruction;
  timerDisplayEl.textContent = initialPhase.time;

  navButtons.forEach((btn) => {
    if (btn.dataset.routine === routineKey) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

// event listener to nav buttons
navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedRoutine = button.dataset.routine;
    switchWorkout(selectedRoutine);
  });
});

// timer engine variables
let timerInterval = null;
let timeRemainingSeconds = 300; //5 minutes in seconds, default start time.
let isTimerRunning = false;

const startPauseBtn = document.getElementById("start-pause-btn");
const resetBtn = document.getElementById("reset-btn");
const logModal = document.getElementById("log-modal");
const logForm = document.getElementById("workout-log-form");

// helper functions to convert mins and secs test from our data into total seconds
function convertTimeToSeconds(timeString) {
  const parts = timeString.split(":");
  const minutes = parseInt(parts[0], 10);
  const seconds = parseInt(parts[1], 10);
  return minutes * 60 + seconds;
}

function formatTimeDisplay(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

// timer control functions
function updateTimerDisplay() {
  timerDisplayEl.textContent = formatTimeDisplay(timeRemainingSeconds);
}

function startTimer() {
  if (isTimerRunning) return;

  isTimerRunning = true;
  startPauseBtn.textContent = "Pause";
  startPauseBtn.style.backgroundColor = "var(--accent-coral)";

  timerInterval = setInterval(() => {
    timeRemainingSeconds--;
    updateTimerDisplay();

    if (timeRemainingSeconds <= 0) {
      clearInterval(timerInterval);
      isTimerRunning = false;
      goToNextPhase();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  isTimerRunning = false;
  startPauseBtn.textContent = "Start";
  startPauseBtn.style.backgroundColor = "var(--bg-navy)";
}

function resetTimer() {
  pauseTimer();
  const routine = workoutData[currentRoutine];
  timeRemainingSeconds = convertTimeToSeconds(
    routine.phases[currentPhaseIndex].time,
  );
  updateTimerDisplay();
}

function goToNextPhase() {
  const routine = workoutData[currentRoutine];
  currentPhaseIndex++;

  if (currentPhaseIndex < routine.phases.length) {
    const nextPhase = routine.phases[currentPhaseIndex];

    phaseTitleEl.textContent = nextPhase.name;
    targetsEl.textContent = nextPhase.targets;
    instructionEl.textContent = nextPhase.instruction;
    timeRemainingSeconds = convertTimeToSeconds(nextPhase.time);
    updateTimerDisplay();

    startTimer();
  } else {
    endWorkout();
  }
}

function endWorkout() {
  pauseTimer();
  logModal.classList.remove("hidden");
}

startPauseBtn.addEventListener("click", () => {
  if (isTimerRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
});

resetBtn.addEventListener("click", resetTimer);

const originalSwitchWorkout = switchWorkout;
switchWorkout = function (routineKey) {
  originalSwitchWorkout(routineKey);
  const routine = workoutData[routineKey];
  timeRemainingSeconds = convertTimeToSeconds(routine.phases[0].time);
  updateTimerDisplay();
};

timeRemainingSeconds = convertTimeToSeconds(
  workoutData[currentRoutine].phases[0].time,
);
updateTimerDisplay();
