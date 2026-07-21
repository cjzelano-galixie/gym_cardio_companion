// ==========================================================================
// 1. ADVANCED WORKOUT DATABASE (Multi-Level & Sandbox Modes)
// ==========================================================================
const workoutData = {
  treadmill: {
    title: "Treadmill",
    metricLabel: "Distance (Miles)",
    metricType: "miles",
    easy: {
      phases: [
        {
          name: "Warm-Up",
          time: "05:00",
          targets: "3.0 - 3.5 MPH",
          instruction: "Brisk walking pace to wake up the legs.",
        },
        {
          name: "Steady Cruise",
          time: "20:00",
          targets: "4.5 - 5.0 MPH",
          instruction:
            "Comfortable, easy jogging speed. Keep breathing relaxed.",
        },
        {
          name: "Cool-Down",
          time: "05:00",
          targets: "2.5 MPH / 0% Incline",
          instruction: "Slow walk to let your heart rate drop.",
        },
      ],
    },
    moderate: {
      phases: [
        {
          name: "Warm-Up",
          time: "05:00",
          targets: "3.5 MPH / 1% Incline",
          instruction: "Brisk warm-up walk at a standard baseline incline.",
        },
        {
          name: "Tempo Run",
          time: "20:00",
          targets: "5.5 - 6.5 MPH",
          instruction:
            "Challenging but sustainable running pace. Focus on form.",
        },
        {
          name: "Cool-Down",
          time: "05:00",
          targets: "2.5 MPH",
          instruction: "Easy walk to recover.",
        },
      ],
    },
    challenging: {
      phases: [
        {
          name: "Warm-Up",
          time: "05:00",
          targets: "3.5 MPH / 2% Incline",
          instruction:
            "Aggressive warm-up getting ready for high speed or hills.",
        },
        {
          name: "Incline Intervals",
          time: "20:00",
          targets: "6.5+ MPH / 2-4% Incline",
          instruction:
            "Challenging running intervals. Push through the hill resistance!",
        },
        {
          name: "Cool-Down",
          time: "05:00",
          targets: "2.5 MPH",
          instruction: "Slow recovery walk.",
        },
      ],
    },
  },
  bike: {
    title: "Stationary Bike",
    metricLabel: "Distance (Miles)",
    metricType: "miles",
    easy: {
      name: "Easy Cruise",
      phases: [
        {
          name: "Warm-Up",
          time: "05:00",
          targets: "70-80 RPM / Gear 4",
          instruction: "Gentle spin to get the blood flowing.",
        },
        {
          name: "Steady Cruise",
          time: "15:00",
          targets: "80-90 RPM / Gear 8",
          instruction: "Comfortable aerobic pace. Keep it smooth.",
        },
        {
          name: "Cool-Down",
          time: "05:00",
          targets: "70 RPM / Gear 4",
          instruction: "Slow down your legs completely.",
        },
      ],
    },
    moderate: {
      name: "Standard Interval Climb",
      phases: [
        {
          name: "Warm-Up",
          time: "05:00",
          targets: "70-80 RPM / Gear 4",
          instruction:
            "Easy, getting legs moving comfortably. Focus on smooth breathing.",
        },
        {
          name: "Base Pace",
          time: "03:00",
          targets: "85-90 RPM / Gear 8",
          instruction: "Moderate effort. Can talk but breathing heavier.",
        },
        {
          name: "The Climb",
          time: "01:00",
          targets: "70-80 RPM / Gear 12",
          instruction:
            "Heavy effort. Simulates a steep hill climb. Keep core engaged.",
        },
        {
          name: "Base Pace",
          time: "03:00",
          targets: "85-90 RPM / Gear 8",
          instruction: "Recover into moderate effort, breathing settles a bit.",
        },
        {
          name: "The Climb",
          time: "01:00",
          targets: "70-80 RPM / Gear 12",
          instruction: "Second climb push. Keep core engaged.",
        },
        {
          name: "Base Pace",
          time: "03:00",
          targets: "85-90 RPM / Gear 8",
          instruction: "Steady cruise before the sprint set.",
        },
        {
          name: "The Climb",
          time: "01:00",
          targets: "70-80 RPM / Gear 12",
          instruction: "Third and final climb push.",
        },
        {
          name: "Speed Intervals",
          time: "05:00",
          targets: "100+ RPM Sprints / Gear 8",
          instruction:
            "Repeat 5x: Sprint fast for 30 seconds, cruise slow for 30 seconds.",
        },
        {
          name: "Cool-Down",
          time: "05:00",
          targets: "70-80 RPM / Gear 4",
          instruction:
            "Slow down your legs completely, prepare your body for the sauna.",
        },
      ],
    },
    challenging: {
      name: "Endurance Burner",
      phases: [
        {
          name: "Warm-Up",
          time: "05:00",
          targets: "80-90 RPM / Gear 4",
          instruction: "Brisk warm-up pace.",
        },
        {
          name: "Sustained Push",
          time: "12:00",
          targets: "90-100 RPM / Gear 8",
          instruction:
            "Higher cadence, moderate resistance. This is your engine work — stay smooth, don't grind.",
        },
        {
          name: "Climb Surge",
          time: "01:00",
          targets: "70-80 RPM / Gear 12",
          instruction: "Short, hard climb push. Keep core engaged.",
        },
        {
          name: "Recovery Spin",
          time: "02:00",
          targets: "85-90 RPM / Gear 8",
          instruction: "Bring effort back down, keep legs turning.",
        },
        {
          name: "Speed Finisher",
          time: "05:00",
          targets: "100+ RPM Sprints / Gear 8",
          instruction:
            "Repeat 5x: Sprint fast for 30 seconds, cruise slow for 30 seconds.",
        },
        {
          name: "Cool-Down",
          time: "05:00",
          targets: "70 RPM / Gear 3",
          instruction: "Flush the lactic acid out of your legs.",
        },
      ],
    },
  },
  elliptical: {
    title: "Elliptical",
    metricLabel: "Distance (Miles)",
    metricType: "miles",
    easy: {
      name: "Light Stride",
      phases: [
        {
          name: "Warm-Up",
          time: "03:00",
          targets: "Low Resistance / Low Incline",
          instruction:
            "Easy, natural pace. Lightly hold stationary handles to find rhythm.",
        },
        {
          name: "Steady Burn",
          time: "15:00",
          targets: "Mod Resistance / Low Incline",
          instruction: "Consistent, conversational pace.",
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
    moderate: {
      name: "Sculpt & Sprint",
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
    challenging: {
      name: "The Mountain Peak",
      phases: [
        {
          name: "Warm-Up",
          time: "05:00",
          targets: "Med Resistance / Med Incline",
          instruction: "Aggressive warm-up.",
        },
        {
          name: "Peak Interval",
          time: "15:00",
          targets: "High Resistance / High Incline",
          instruction: "Heavy push. Maximum resistance blocks.",
        },
        {
          name: "Cool-Down",
          time: "05:00",
          targets: "Low Resistance / Low Incline",
          instruction: "Gradually decrease speed.",
        },
      ],
    },
  },
  stairmaster: {
    title: "Stairmaster",
    metricLabel: "Flights Climbed",
    metricType: "flights",
    easy: {
      name: "Base Climb",
      phases: [
        {
          name: "Warm-Up",
          time: "03:00",
          targets: "Level 1-2 (Very Slow)",
          instruction: "Find a smooth rhythm.",
        },
        {
          name: "Steady Climb",
          time: "10:00",
          targets: "Level 3 (Manageable)",
          instruction: "Main block. Keep pace completely consistent.",
        },
        {
          name: "Cool-Down",
          time: "02:00",
          targets: "Level 1 (Crawling Pace)",
          instruction: "Take deep recovery breaths before sauna.",
        },
      ],
    },
    moderate: {
      name: "Stairway Endurance",
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
    challenging: {
      name: "Anabolic Ladder Climb",
      phases: [
        {
          name: "Warm-Up",
          time: "03:00",
          targets: "Level 3",
          instruction: "Get warm quickly.",
        },
        {
          name: "Interval Stacks",
          time: "15:00",
          targets: "Level 5 Sprints / Level 3 Rest",
          instruction:
            "Alternate 1 minute fast stepping, 1 minute recovery stepping.",
        },
        {
          name: "Cool-Down",
          time: "03:00",
          targets: "Level 1",
          instruction: "Let your heart rate drop completely.",
        },
      ],
    },
  },
};

// ==========================================================================
// 1b. COUCH TO 5K TIMELINE ENGINE (Comprehensive 9-Week Day-by-Day Progression)
// ==========================================================================
function generateC25kPhases(week, day) {
  const phases = [];

  // All C25K sessions globally launch with a 5-minute warm-up
  phases.push({
    name: "Warm-Up",
    time: "05:00",
    targets: "3.0 - 3.5 MPH",
    instruction: "Brisk warm-up walk.",
  });

  if (week === 1) {
    for (let i = 1; i <= 8; i++) {
      phases.push({
        name: `Jog Interval (${i}/8)`,
        time: "01:00",
        targets: "4.5 - 5.0 MPH",
        instruction: "Keep pace steady.",
      });
      phases.push({
        name: `Walk Recovery (${i}/8)`,
        time: "01:30",
        targets: "3.0 MPH",
        instruction: "Catch your breath.",
      });
    }
  } else if (week === 2) {
    for (let i = 1; i <= 6; i++) {
      phases.push({
        name: `Jog Interval (${i}/6)`,
        time: "01:30",
        targets: "4.5 - 5.0 MPH",
        instruction: "Focus on form.",
      });
      phases.push({
        name: `Walk Recovery (${i}/6)`,
        time: "02:00",
        targets: "3.0 MPH",
        instruction: "Recover fully.",
      });
    }
  } else if (week === 3) {
    for (let i = 1; i <= 2; i++) {
      phases.push({
        name: `Jog Interval (${i}/2)`,
        time: "01:30",
        targets: "4.5 - 5.0 MPH",
        instruction: "Easy jog.",
      });
      phases.push({
        name: `Walk Recovery (${i}/2)`,
        time: "01:30",
        targets: "3.0 MPH",
        instruction: "Relax.",
      });
      phases.push({
        name: `Jog Interval (${i}/2)`,
        time: "03:00",
        targets: "4.5 - 5.0 MPH",
        instruction: "Settle into the rhythm.",
      });
      phases.push({
        name: `Walk Recovery (${i}/2)`,
        time: "03:00",
        targets: "3.0 MPH",
        instruction: "Full recovery walk.",
      });
    }
  } else if (week === 4) {
    phases.push(
      {
        name: "Jog Interval (1/4)",
        time: "03:00",
        targets: "4.5 - 5.0 MPH",
        instruction: "Steady jog.",
      },
      {
        name: "Walk Recovery (1/3)",
        time: "01:30",
        targets: "3.0 MPH",
        instruction: "Short recovery walk.",
      },
      {
        name: "Jog Interval (2/4)",
        time: "05:00",
        targets: "4.5 - 5.0 MPH",
        instruction: "First big push!",
      },
      {
        name: "Walk Recovery (2/3)",
        time: "02:30",
        targets: "3.0 MPH",
        instruction: "Catch your breath fully.",
      },
      {
        name: "Jog Interval (3/4)",
        time: "03:00",
        targets: "4.5 - 5.0 MPH",
        instruction: "Keep your form tight.",
      },
      {
        name: "Walk Recovery (3/3)",
        time: "01:30",
        targets: "3.0 MPH",
        instruction: "Last walk break.",
      },
      {
        name: "Jog Interval (4/4)",
        time: "05:00",
        targets: "4.5 - 5.0 MPH",
        instruction: "Finish strong!",
      },
    );
  } else if (week === 5) {
    if (day === 1) {
      phases.push(
        {
          name: "Jog Interval (1/2)",
          time: "05:00",
          targets: "4.5 - 5.0 MPH",
          instruction: "Settle into your pace.",
        },
        {
          name: "Walk Recovery",
          time: "03:00",
          targets: "3.0 MPH",
          instruction: "Walk recovery.",
        },
        {
          name: "Jog Interval (2/2)",
          time: "05:00",
          targets: "4.5 - 5.0 MPH",
          instruction: "Maintain consistency.",
        },
      );
    } else if (day === 2) {
      phases.push(
        {
          name: "Jog Interval (1/2)",
          time: "08:00",
          targets: "4.5 - 5.0 MPH",
          instruction: "Longer block, find cruise control.",
        },
        {
          name: "Walk Recovery",
          time: "05:00",
          targets: "3.0 MPH",
          instruction: "Extended recovery walk.",
        },
        {
          name: "Jog Interval (2/2)",
          time: "08:00",
          targets: "4.5 - 5.0 MPH",
          instruction: "Match the first round.",
        },
      );
    } else {
      phases.push({
        name: "Continuous Run",
        time: "20:00",
        targets: "4.5 - 4.8 MPH",
        instruction: "No walking! Mental milestone day.",
      });
    }
  } else if (week === 6) {
    if (day === 1) {
      phases.push(
        {
          name: "Jog Interval (1/3)",
          time: "05:00",
          targets: "4.5 - 5.2 MPH",
          instruction: "Comfortable jog.",
        },
        {
          name: "Walk Recovery (1/2)",
          time: "03:00",
          targets: "3.0 MPH",
          instruction: "Recovering walk.",
        },
        {
          name: "Jog Interval (2/3)",
          time: "08:00",
          targets: "4.5 - 5.0 MPH",
          instruction: "Pushing your aerobic threshold!",
        },
        {
          name: "Walk Recovery (2/2)",
          time: "03:00",
          targets: "3.0 MPH",
          instruction: "Catch breath.",
        },
        {
          name: "Jog Interval (3/3)",
          time: "05:00",
          targets: "4.5 - 5.0 MPH",
          instruction: "Bring it home.",
        },
      );
    } else if (day === 2) {
      phases.push(
        {
          name: "Jog Interval (1/2)",
          time: "10:00",
          targets: "4.5 - 5.0 MPH",
          instruction: "Ten straight minutes. Breathe steady.",
        },
        {
          name: "Walk Recovery",
          time: "03:00",
          targets: "3.0 MPH",
          instruction: "Final walk break of Week 6.",
        },
        {
          name: "Jog Interval (2/2)",
          time: "10:00",
          targets: "4.5 - 5.0 MPH",
          instruction: "Ten more minutes!",
        },
      );
    } else {
      phases.push({
        name: "Continuous Run",
        time: "22:00",
        targets: "4.5 - 4.8 MPH",
        instruction: "Clear your head and just lock into the music.",
      });
    }
  } else if (week === 7) {
    phases.push({
      name: "Continuous Run",
      time: "25:00",
      targets: "4.5 - 5.0 MPH",
      instruction: "No walking breaks. Focus on steady breathing!",
    });
  } else if (week === 8) {
    phases.push({
      name: "Continuous Run",
      time: "28:00",
      targets: "4.5 - 5.0 MPH",
      instruction: "Find your cruise control setting and stay there.",
    });
  } else if (week === 9) {
    phases.push({
      name: "Continuous Run",
      time: "30:00",
      targets: "4.5 - 5.0 MPH",
      instruction: "The Final Milestone! 5K distance realization.",
    });
  }

  // All C25K sessions finalize with a standard 5-minute cooldown
  phases.push({
    name: "Cool-Down",
    time: "05:00",
    targets: "2.5 MPH / 0% Incline",
    instruction: "Slow walk to drop heart rate.",
  });
  return phases;
}

// ==========================================================================
// 2. STATE CONFIGURATIONS
// ==========================================================================
const GOOGLE_SHEETS_API_URL =
  "https://script.google.com/macros/s/AKfycby_MBSZNvBfTFjE8YMZDJqqdEDamyAzsfZtD8aQnXZrQCeIRJCLbqxaf3jLiAksZhLK/exec";
let currentRoutine = "bike";
let currentIntensity = "moderate";
let activeProgramType = "sandbox";
let isC25kMode = false;
let c25kCurrentWeek = 1;
let c25kCurrentDay = 1;
let currentPhaseIndex = 0;
let timerInterval = null;
let timeRemainingSeconds = 0;
let isTimerRunning = false;
let workoutStarted = false; // True once the timer has been actively started; cleared on reset/program-switch

let localWorkoutHistory = [];

// ==========================================================================
// 3. CORE ELEMENT SELECTORS
// ==========================================================================
const phaseTitleEl = document.getElementById("current-phase");
const targetsEl = document.getElementById("target-metrics");
const instructionEl = document.getElementById("focus-instruction");
const timerDisplayEl = document.getElementById("timer-display");

const navButtons = document.querySelectorAll(".nav-btn");
const intensityButtons = document.querySelectorAll(".intensity-btn");
const tabButtons = document.querySelectorAll(".tab-btn");
const appScreens = document.querySelectorAll(".app-screen");

const startPauseBtn = document.getElementById("start-pause-btn");
const resetBtn = document.getElementById("reset-btn");
const logModal = document.getElementById("log-modal");
const logForm = document.getElementById("workout-log-form");
const historyLogList = document.getElementById("history-log-list");

// ==========================================================================
// 4. HELPER UTILITIES
// ==========================================================================
function convertTimeToSeconds(timeString) {
  const parts = timeString.split(":");
  return parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
}

function formatTimeDisplay(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function formatDecimalInput(input) {
  // 1. Keep only numbers and one decimal point
  let value = input.value.replace(/[^0-9.]/g, "");

  // 2. Prevent multiple decimals
  const parts = value.split(".");
  if (parts.length > 2) {
    value = parts[0] + "." + parts.slice(1).join("");
  }

  // 3. Limit to 2 digits before dot, 2 after
  const newParts = value.split(".");
  if (newParts[0].length > 2) {
    newParts[0] = newParts[0].substring(0, 2);
  }
  if (newParts[1] !== undefined && newParts[1].length > 2) {
    newParts[1] = newParts[1].substring(0, 2);
  }

  input.value = newParts.join(".");
}

function showStatusOverlay() {
  const overlay = document.getElementById("status-overlay");
  if (overlay) {
    overlay.classList.remove("hidden");
    // Auto-hide after 2.5 seconds
    setTimeout(() => {
      overlay.classList.add("hidden");
    }, 2500);
  }
}

function saveWorkoutSessionSnapshot() {
  // If no workout has started, don't save anything
  if (timeRemainingSeconds <= 0) return;

  const sessionState = {
    routine: currentRoutine, // e.g., 'elliptical'
    intensity: currentIntensity, // e.g., 'moderate'
    secondsRemaining: timeRemainingSeconds,
    phaseIndex: currentPhaseIndex,
    programType: activeProgramType, // Tracks 'hiit', 'c25k', etc.
    isPaused: timerInterval === null, // True if paused, False if ticking
    isC25k: isC25kMode,
    activeProgram: activeProgramType,
  };

  sessionStorage.setItem("active_cardio_session", JSON.stringify(sessionState));
}

function clearWorkoutSessionSnapshot() {
  sessionStorage.removeItem("active_cardio_session");
}

// Called ONCE on startup to recover a paused session after a page refresh.
// Never called mid-session — globals are the source of truth while the page is alive.
function tryRestoreSession() {
  const savedData = sessionStorage.getItem("active_cardio_session");
  if (!savedData) return;

  let snap;
  try {
    snap = JSON.parse(savedData);
  } catch (e) {
    clearWorkoutSessionSnapshot();
    return;
  }

  // Restore all global state from the snapshot
  activeProgramType = snap.programType || snap.activeProgram || "sandbox";
  currentRoutine = snap.routine || "bike";
  currentIntensity = snap.intensity || "moderate";
  isC25kMode = snap.isC25k || false;
  currentPhaseIndex = snap.phaseIndex || 0;
  timeRemainingSeconds = snap.secondsRemaining || 0;
  workoutStarted = timeRemainingSeconds > 0;

  // Re-apply program-specific button visibility (mirrors switchActiveProgram logic)
  const bikeBtn = document.querySelector('[data-routine="bike"]');
  const ellipticalBtn = document.querySelector('[data-routine="elliptical"]');
  const stairmasterBtn = document.querySelector('[data-routine="stairmaster"]');
  const treadmillBtn = document.querySelector('[data-routine="treadmill"]');

  [bikeBtn, ellipticalBtn, stairmasterBtn, treadmillBtn].forEach((btn) => {
    if (btn) btn.style.display = "block";
  });

  if (activeProgramType === "hiit") {
    if (bikeBtn) bikeBtn.style.display = "none";
    if (stairmasterBtn) stairmasterBtn.style.display = "none";
  } else if (activeProgramType === "combo") {
    if (bikeBtn) bikeBtn.style.display = "none";
    if (treadmillBtn) treadmillBtn.style.display = "none";
  } else if (activeProgramType === "c25k") {
    if (bikeBtn) bikeBtn.style.display = "none";
    if (ellipticalBtn) ellipticalBtn.style.display = "none";
    if (stairmasterBtn) stairmasterBtn.style.display = "none";
  } else if (activeProgramType === "recovery") {
    if (ellipticalBtn) ellipticalBtn.style.display = "none";
    if (stairmasterBtn) stairmasterBtn.style.display = "none";
    if (treadmillBtn) treadmillBtn.style.display = "none";
  }

  navButtons.forEach((btn) =>
    btn.classList.toggle("active", btn.dataset.routine === currentRoutine),
  );
  intensityButtons.forEach((btn) =>
    btn.classList.toggle("active", btn.dataset.intensity === currentIntensity),
  );
}

// ==========================================================================
// 5. APPLICATION LAYOUT RENDER LOGIC
// ==========================================================================
// Helper to clean up titles like "Warm-Up (EASY)"
function cleanPhaseTitle(title) {
  // Regex to remove the parentheses and the text inside them
  return title.replace(/\s*\([^)]*\)/, "").trim();
}

function renderActiveWorkoutConfiguration() {
  let initialPhase;

  const c25kBanner = document.getElementById("c25k-status-banner");
  const c25kBannerText = document.getElementById("c25k-banner-text");
  const routineSelector = document.getElementById("routine-selector");
  const intensitySelector = document.getElementById("intensity-selector");

  // DYNAMIC COMPILER: Branch targets safely without mutating the master source
  if (isC25kMode) {
    const generatedPhases = generateC25kPhases(c25kCurrentWeek, c25kCurrentDay);
    initialPhase = generatedPhases[currentPhaseIndex];

    if (c25kBanner) c25kBanner.classList.remove("hidden");
    if (c25kBannerText)
      c25kBannerText.textContent = `WEEK ${c25kCurrentWeek}, DAY ${c25kCurrentDay}`;

    phaseTitleEl.textContent = initialPhase.name;

    if (routineSelector) routineSelector.style.display = "none";
    if (intensitySelector) intensitySelector.style.display = "none";
  } else {
    const routine = workoutData[currentRoutine];
    const targetProgram = routine[currentIntensity];
    initialPhase = targetProgram.phases[currentPhaseIndex];

    if (c25kBanner) c25kBanner.classList.add("hidden");

    phaseTitleEl.textContent = cleanPhaseTitle(initialPhase.name);

    if (routineSelector) routineSelector.style.display = "flex";
    if (intensitySelector) intensitySelector.style.display = "flex";
  }

  targetsEl.textContent = initialPhase.targets;
  instructionEl.textContent = initialPhase.instruction;

  // timeRemainingSeconds === 0 is the deliberate "fresh start" sentinel set by
  // switchActiveProgram / switchWorkout / switchIntensity / resetTimer.
  // Any positive value means a paused-mid-phase time that must be preserved.
  if (!isTimerRunning && timeRemainingSeconds <= 0) {
    timeRemainingSeconds = convertTimeToSeconds(initialPhase.time);
  }
  updateTimerDisplay();
}

function updateTimerDisplay() {
  timerDisplayEl.textContent = formatTimeDisplay(timeRemainingSeconds);
}

function switchWorkout(routineKey) {
  if (!workoutData[routineKey]) return;
  currentRoutine = routineKey;
  currentPhaseIndex = 0;
  timeRemainingSeconds = 0; // Sentinel: tell render to load from phase start
  workoutStarted = false;
  pauseTimer();
  clearWorkoutSessionSnapshot();

  navButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.routine === currentRoutine);
  });
  renderActiveWorkoutConfiguration();
}

function switchIntensity(intensityKey) {
  const machineConfig = workoutData[currentRoutine];
  if (!machineConfig || !machineConfig[intensityKey]) return;
  currentIntensity = intensityKey;
  currentPhaseIndex = 0;
  timeRemainingSeconds = 0; // Sentinel: tell render to load from phase start
  workoutStarted = false;
  pauseTimer();
  clearWorkoutSessionSnapshot();

  intensityButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.intensity === currentIntensity);
  });
  renderActiveWorkoutConfiguration();
}

// ==========================================================================
// 6. TIMER HEARTBEAT CONTROLS
// ==========================================================================
function startTimer() {
  if (isTimerRunning) return;

  isTimerRunning = true;
  workoutStarted = true;
  startPauseBtn.textContent = "Pause";
  startPauseBtn.style.backgroundColor = "var(--accent-coral)";
  startPauseBtn.style.color = "white";

  // Lock selectors during movement
  navButtons.forEach((btn) => {
    btn.style.opacity = "0.4";
    btn.style.cursor = "not-allowed";
  });
  intensityButtons.forEach((btn) => {
    btn.style.opacity = "0.4";
    btn.style.cursor = "not-allowed";
  });

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
  isTimerRunning = false;
  clearInterval(timerInterval);
  timerInterval = null;

  startPauseBtn.textContent = "Start";
  startPauseBtn.style.backgroundColor = "white";
  startPauseBtn.style.color = "var(--bg-navy)";

  navButtons.forEach((btn) => {
    btn.style.opacity = "1";
    btn.style.cursor = "pointer";
  });
  intensityButtons.forEach((btn) => {
    btn.style.opacity = "1";
    btn.style.cursor = "pointer";
  });
}

function resetTimer() {
  isTimerRunning = false;
  clearInterval(timerInterval);
  timerInterval = null;

  currentPhaseIndex = 0;
  timeRemainingSeconds = 0; // Sentinel: tell render to load from phase start
  workoutStarted = false;
  renderActiveWorkoutConfiguration();

  startPauseBtn.textContent = "Start";
  startPauseBtn.style.backgroundColor = "white";
  startPauseBtn.style.color = "var(--bg-navy)";

  navButtons.forEach((btn) => {
    btn.style.opacity = "1";
    btn.style.cursor = "pointer";
  });
  intensityButtons.forEach((btn) => {
    btn.style.opacity = "1";
    btn.style.cursor = "pointer";
  });
}

function goToNextPhase() {
  let activePhases = isC25kMode
    ? generateC25kPhases(c25kCurrentWeek, c25kCurrentDay)
    : workoutData[currentRoutine][currentIntensity].phases;

  currentPhaseIndex++;

  if (currentPhaseIndex < activePhases.length) {
    const nextPhase = activePhases[currentPhaseIndex];

    phaseTitleEl.textContent = isC25kMode
      ? nextPhase.name
      : `${nextPhase.name} (${currentIntensity.toUpperCase()})`;
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

  const distanceLabel = document.getElementById("distance-label");
  const distanceInput = document.getElementById("distance");

  if (currentRoutine === "treadmill" || isC25kMode) {
    distanceLabel.textContent = "Distance (Miles)";
    distanceInput.placeholder = "e.g. 2.50";
  } else if (currentRoutine === "stairmaster") {
    distanceLabel.textContent = "Floors Climbed";
    distanceInput.placeholder = "e.g. 01.05";
  } else {
    distanceLabel.textContent = "Distance (Miles/Calculated)";
    distanceInput.placeholder = "e.g. 01.05";
  }

  logForm.reset();
  logModal.classList.remove("hidden");
}

// ==========================================================================
// 7. USER HISTORY DASHBOARD UI
// ==========================================================================
function updateHistoryDashboardUI() {
  const milestoneHTML = `
    <div style="background: var(--bg-navy); color: white; padding: 15px; border-radius: 12px; margin-bottom: 15px; border: 1px solid var(--accent-sage);">
      <h4 style="margin: 0 0 5px 0; font-size: 0.95rem; color: var(--accent-sage);"> Progression Milestone</h4>
      <p style="margin: 0; font-size: 0.85rem; opacity: 0.9;">
        Current Status: <strong>Week ${c25kCurrentWeek}, Day ${c25kCurrentDay}</strong> is queued up next.
      </p>
    </div>
  `;

  if (localWorkoutHistory.length === 0) {
    historyLogList.innerHTML =
      milestoneHTML +
      `<p style="color: var(--accent-sage); font-style: italic; padding: 0 5px;">No workouts saved yet.</p>`;
    return;
  }

  const logsHTML = localWorkoutHistory
    .map((log) => {
      const distanceText = log.flights
        ? `${log.flights} Flights`
        : `${log.miles} Miles`;
      return `
      <div style="background: white; padding: 12px; border-radius: 10px; margin-bottom: 10px; border-left: 4px solid var(--accent-coral);">
          <div style="display:flex; justify-content: space-between; font-weight:600; font-size:0.9rem; margin-bottom:4px;">
              <span style="color: var(--bg-navy);">${log.machine}</span>
              <span style="color: var(--accent-sage);">${log.date}</span>
          </div>
          <div style="font-size:0.85rem; color: var(--text-dark);">
               <strong>${log.calories}</strong> Cal |  <strong>${distanceText}</strong> | ️ HR: <strong>${log.heartRate}</strong>
          </div>
          ${log.notes !== "None" && log.notes !== "" ? `<div style="font-size:0.75rem; color: var(--accent-sage); margin-top:5px; font-style:italic;">Notes: "${log.notes}"</div>` : ""}
      </div>
    `;
    })
    .join("");

  historyLogList.innerHTML = milestoneHTML + logsHTML;
}

// ==========================================================================
// 8. GLOBAL NAVIGATION INTERCEPTORS & EQUIPMENT HOOKS
// ==========================================================================
const navModal = document.getElementById("nav-modal");
const navCancel = document.getElementById("nav-cancel");
const navConfirm = document.getElementById("nav-confirm");

let pendingTargetScreenId = null;

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (isTimerRunning) return;
    switchWorkout(button.dataset.routine);
  });
});

intensityButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (isTimerRunning) return;
    switchIntensity(button.dataset.intensity);
  });
});

startPauseBtn.addEventListener("click", () => {
  if (isTimerRunning) {
    pauseTimer();
    saveWorkoutSessionSnapshot();
  } else {
    startTimer();
  }
});

resetBtn.addEventListener("click", () => {
  clearWorkoutSessionSnapshot();
  resetTimer();
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetScreenId = button.dataset.screen;
    const currentActiveTab = document.querySelector(".tab-btn.active");

    if (currentActiveTab && currentActiveTab.dataset.screen === targetScreenId)
      return;

    if (isTimerRunning) {
      pendingTargetScreenId = targetScreenId;
      saveWorkoutSessionSnapshot();
      if (navModal) navModal.classList.remove("hidden");
    } else {
      executeScreenSwitch(targetScreenId);
    }
  });
});

function executeScreenSwitch(targetScreenId) {
  appScreens.forEach((screen) => {
    screen.classList.toggle("hidden", screen.id !== targetScreenId);
  });
  tabButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.screen === targetScreenId);
  });
  renderActiveWorkoutConfiguration();
}

if (navCancel) {
  navCancel.addEventListener("click", () => {
    navModal.classList.add("hidden");
    pendingTargetScreenId = null;
  });
}

if (navConfirm) {
  navConfirm.addEventListener("click", () => {
    if (navModal) navModal.classList.add("hidden");
    if (pendingTargetScreenId) {
      pauseTimer();
      executeScreenSwitch(pendingTargetScreenId);
      pendingTargetScreenId = null;
    }
  });
}

// ==========================================================================
// 9. HOME QUICK-LINKS PROGRAM SWITCH CONTROLS
// ==========================================================================
const programCards = document.querySelectorAll("#screen-workouts .timer-card");
const customModal = document.getElementById("custom-modal");
const modalCancel = document.getElementById("modal-cancel");
const modalConfirm = document.getElementById("modal-confirm");

let pendingProgramCard = null;

function switchActiveProgram(card) {
  const programType = card.dataset.program;
  activeProgramType = programType;

  const bikeBtn = document.querySelector('[data-routine="bike"]');
  const ellipticalBtn = document.querySelector('[data-routine="elliptical"]');
  const stairmasterBtn = document.querySelector('[data-routine="stairmaster"]');
  const treadmillBtn = document.querySelector('[data-routine="treadmill"]');

  isC25kMode = false;

  if (bikeBtn) bikeBtn.style.display = "block";
  if (ellipticalBtn) ellipticalBtn.style.display = "block";
  if (stairmasterBtn) stairmasterBtn.style.display = "block";
  if (treadmillBtn) treadmillBtn.style.display = "block";

  if (programType === "hiit") {
    if (bikeBtn) bikeBtn.style.display = "none";
    if (stairmasterBtn) stairmasterBtn.style.display = "none";
    currentRoutine = "elliptical";
    currentIntensity = "challenging";
  } else if (programType === "combo") {
    if (bikeBtn) bikeBtn.style.display = "none";
    if (treadmillBtn) treadmillBtn.style.display = "none";
    currentRoutine = "elliptical";
    currentIntensity = "moderate";
  } else if (programType === "c25k") {
    if (bikeBtn) bikeBtn.style.display = "none";
    if (ellipticalBtn) ellipticalBtn.style.display = "none";
    if (stairmasterBtn) stairmasterBtn.style.display = "none";

    currentRoutine = "treadmill";
    currentIntensity = "easy";
    isC25kMode = true;
  } else if (programType === "recovery") {
    if (ellipticalBtn) ellipticalBtn.style.display = "none";
    if (stairmasterBtn) stairmasterBtn.style.display = "none";
    if (treadmillBtn) treadmillBtn.style.display = "none";
    currentRoutine = "bike";
    currentIntensity = "easy";
  }

  navButtons.forEach((btn) =>
    btn.classList.toggle("active", btn.dataset.routine === currentRoutine),
  );
  intensityButtons.forEach((btn) =>
    btn.classList.toggle("active", btn.dataset.intensity === currentIntensity),
  );

  clearWorkoutSessionSnapshot(); // Kill any stale snapshot before the new program takes over
  clearInterval(timerInterval);
  timerInterval = null;
  isTimerRunning = false;
  workoutStarted = false;
  currentPhaseIndex = 0;
  timeRemainingSeconds = 0; // Sentinel: tell render to load from phase start

  if (startPauseBtn) {
    startPauseBtn.textContent = "Start";
    startPauseBtn.style.backgroundColor = "white";
    startPauseBtn.style.color = "var(--bg-navy)";
  }

  renderActiveWorkoutConfiguration();
  executeScreenSwitch("screen-timer");
}

programCards.forEach((card) => {
  card.addEventListener("click", () => {
    const clickedProgram = card.dataset.program;
    if (activeProgramType === clickedProgram) {
      executeScreenSwitch("screen-timer");
      return;
    }
    if (isTimerRunning || workoutStarted) {
      pendingProgramCard = card;
      if (customModal) customModal.classList.remove("hidden");
    } else {
      switchActiveProgram(card);
    }
  });
});

if (modalCancel) {
  modalCancel.addEventListener("click", () => {
    customModal.classList.add("hidden");
    pendingProgramCard = null;
  });
}

if (modalConfirm) {
  modalConfirm.addEventListener("click", () => {
    customModal.classList.add("hidden");
    if (pendingProgramCard) {
      switchActiveProgram(pendingProgramCard);
      pendingProgramCard = null;
    }
  });
}

// ==========================================================================
// 10. UNIFIED DISPATCH ENGINE (Local Log + Google Sheets Sync)
// ==========================================================================
if (logForm) {
  logForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const programName = activeProgramType
      ? activeProgramType.toUpperCase()
      : "SANDBOX";
    const intensityOrProgressionText = isC25kMode
      ? `W${c25kCurrentWeek}D${c25kCurrentDay}`
      : currentIntensity.toUpperCase();
    const inputValue = document.getElementById("distance").value;

    // 1. Compile Local Dashboard Cache Item
    const newLogEntry = {
      date: new Date().toLocaleDateString(),
      machine: isC25kMode
        ? "Couch to 5K"
        : workoutData[currentRoutine]?.title || "Treadmill",
      intensity: intensityOrProgressionText,
      calories: document.getElementById("calories").value,
      heartRate: document.getElementById("avg-hr")?.value || "N/A",
      notes: document.getElementById("notes")?.value || "None",
      miles:
        isC25kMode || workoutData[currentRoutine]?.metricType === "miles"
          ? inputValue
          : null,
      flights:
        !isC25kMode && workoutData[currentRoutine]?.metricType === "flights"
          ? inputValue
          : null,
      c25kWeek: isC25kMode ? c25kCurrentWeek : null,
      c25kDay: isC25kMode ? c25kCurrentDay : null,
    };
    localWorkoutHistory.unshift(newLogEntry);

    // 2. Build Cloud Payload
    const payload = {
      program: programName,
      equipment: currentRoutine.toUpperCase(),
      intensityOrProgression: intensityOrProgressionText,
      calories: Number(document.getElementById("calories").value) || 0,
      distance: parseFloat(inputValue) || 0.0,
      avgHr: Number(document.getElementById("avg-hr")?.value) || "N/A",
      notes: document.getElementById("notes")?.value || "",
    };

    const submitBtn = document.getElementById("submit-log-btn");
    if (submitBtn) {
      submitBtn.textContent = "Syncing...";
      submitBtn.disabled = true;
    }

    // 3. Single Fetch Call Pipeline
    fetch(GOOGLE_SHEETS_API_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(() => {
        // Close modal and reset form
        const logModal = document.getElementById("log-modal");
        if (logModal) logModal.classList.add("hidden");
        logForm.reset();

        // Safe State Advancement
        if (isC25kMode) {
          if (c25kCurrentDay < 3) {
            c25kCurrentDay++;
          } else {
            c25kCurrentDay = 1;
            c25kCurrentWeek++;
          }
        }
        clearWorkoutSessionSnapshot();

        // Trigger your Sleek Confirmation Box
        showStatusOverlay();

        updateHistoryDashboardUI();
        resetTimer();
        executeScreenSwitch("screen-workouts");
      })
      .catch((err) => {
        console.error("Synchronization failure:", err);
        // Better UX: alert the user but allow them to keep their local log
        alert(
          "Sync failed, but your workout was saved locally. Check your internet connection to sync to the sheet later.",
        );
      })
      .finally(() => {
        if (submitBtn) {
          submitBtn.textContent = "Send to Spreadsheet";
          submitBtn.disabled = false;
        }
      });
  });
}

// ==========================================================================
// 11. INITIALIZATION INVOCATION
// ==========================================================================

fetch(GOOGLE_SHEETS_API_URL, {
  method: "GET",
  redirect: "follow",
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log("Successfully retrieved spreadsheet data:", data);

    if (data && data.c25kWeek && data.c25kDay) {
      c25kCurrentWeek = Number(data.c25kWeek);
      c25kCurrentDay = Number(data.c25kDay);
    }

    tryRestoreSession(); // One-time page-refresh recovery before first render
    renderActiveWorkoutConfiguration();
    updateHistoryDashboardUI();
  })
  .catch((err) => {
    console.warn(
      "Could not read sheet data on startup, using local states:",
      err,
    );
    tryRestoreSession(); // One-time page-refresh recovery before first render
    renderActiveWorkoutConfiguration();
    updateHistoryDashboardUI();
  });
