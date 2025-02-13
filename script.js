// Quiz Questions
const questions = [
    "How did we first meet?",
    "Where did we have our first kiss?",
    "What is our special date?"
];
const answers = ["9th grade", "lassi shop", "14th december"];

let currentQuestion = 0;

document.getElementById("startBtn").addEventListener("click", () => {
    document.getElementById("landing").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    loadQuestion();
});

// Load Next Question
function loadQuestion() {
    if (currentQuestion < questions.length) {
        document.getElementById("question").innerText = questions[currentQuestion];
    } else {
        showNextSection();
    }
}

// Check Answer
function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    if (userAnswer === answers[currentQuestion]) {
        alert("Correct! Moving to the next section.");
        currentQuestion++;
        showNextSection();
    } else {
        alert("Try Again!");
    }
}

// Show Next Section
function showNextSection() {
    const sections = ["timeline", "playlist", "countdown", "secret-note", "virtual-gift"];
    if (currentQuestion <= sections.length) {
        document.getElementById(sections[currentQuestion - 1]).style.display = "block";
        loadQuestion();
    }
}

// Countdown Timer
const countdownDate = new Date("Dec 14, 2025 00:00:00").getTime();
const timerInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("timer").innerText = ${days} days remaining!;

    if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById("timer").innerText = "The special day has arrived!";
    }
}, 1000);

// Secret Love Note
function unlockNote() {
    const userInput = prompt("Type the secret phrase:");
    if (userInput.toLowerCase() === "december 14, our beginning") {
        document.getElementById("love-note").style.display = "block";
    } else {
        alert("Wrong phrase! Try again.");
    }
}
