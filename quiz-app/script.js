const questions = [
    {
        question: "Which is Larger animal in the world?",
        answers: [
            {Text: "Shark", correct: false},
            {Text: "Blue Whale", correct: true},
            {Text: "Elephant", correct: false},
            {Text: "Giraffe", correct: false},
        ]
    },
    {
        question: "What is the largest bird by wingspan?",
        answers: [
            {Text: "Bald Eagle", correct: false},
            {Text: "Albatross", correct: true},
            {Text: "Ostrich", correct: false},
            {Text: "Flamingo", correct: false},
        ]
    },
    {
        question: "What is the largest reptile?",
        answers: [
            {Text: "Snake", correct: false},
            {Text: "Lizard", correct: false},
            {Text: "Alligator", correct: true},
            {Text: "Turtle", correct: false},
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            {Text: "China", correct: false},
            {Text: "Japan", correct: true},
            {Text: "South Korea", correct: false},
            {Text: "India", correct: false},
        ]
    },
    {
        question: "What is the chemical symbol for the element gold?",
        answers: [
            {Text: "Au", correct: true},
            {Text: "Ag", correct: false},
            {Text: "Fe", correct: false},
            {Text: "Hg", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answersButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    const questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.Text;
        button.classList.add("btn");
        answersButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answersButtons.firstChild) {
        answersButtons.removeChild(answersButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answersButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
