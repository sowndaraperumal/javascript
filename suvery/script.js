const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c",
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correct: "b",
    },
    {
        question: "What is the largest ocean on Earth?",
        a: "Atlantic Ocean",
        b: "Indian Ocean",
        c: "Arctic Ocean",
        d: "Pacific Ocean",
        correct: "d",
    },
];

let currentQuiz = 0;
let score = 0;

const quizElement = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart');

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    quizElement.innerHTML = `
        <div class="question">${currentQuizData.question}</div>
        <label><input type="radio" name="answer" value="a"> ${currentQuizData.a}</label>
        <label><input type="radio" name="answer" value="b"> ${currentQuizData.b}</label>
        <label><input type="radio" name="answer" value="c"> ${currentQuizData.c}</label>
        <label><input type="radio" name="answer" value="d"> ${currentQuizData.d}</label>
    `;
}

function getSelected() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let selectedAnswer;
    answers.forEach((answer) => {
        if (answer.checked) {
            selectedAnswer = answer.value;
        }
    });
    return selectedAnswer;
}

submitButton.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quizElement.classList.add('hidden');
            submitButton.classList.add('hidden');
            scoreElement.innerHTML = `You scored ${score} out of ${quizData.length}!`;
            scoreElement.classList.remove('hidden');
            restartButton.classList.remove('hidden');
        }
    } else {
        alert('Please select an answer!');
    }
});

// restartButton.addEventListener('click', () => {
//     currentQuiz = 0;
//     score = 0;
//     scoreElement.classList.add('hidden');
//     restartButton.classList.add('hidden');
//     submitButton.classList.remove('hidden');
//     loadQuiz();
// });

// Load the first quiz question
loadQuiz();
