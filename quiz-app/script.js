const question = [
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
const answersButton = document.getElementById("answer-button");
const nextButton = document. getElementById("next-btn")
