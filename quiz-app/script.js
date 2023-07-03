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
    },
    
];

const questionElement = document.getElementById("question");
const answersButtons = document.getElementById("answer-buttons");
const nextButton = document. getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex +1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.Text;
        button.classList.add("btn");
        answersButtons.appendChild(button);
        button.addEventListener("click", SelectionAnswer);
    });

}

function resetState(){
    nextButton.style.display = "none";
    while(answersButtons.firstChild){
        answersButtons.removeChild(answersButtons.firstChild);
    }
}
startQuiz();