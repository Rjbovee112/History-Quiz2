const startButton = document.getElementById('start-btn')
const questionContainerEl = document.getElementById('question-container')
startButton.addEventListener('click', startGame)



function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    questionContainerEl.classList.remove('hide')
    nextQuestion()
}

function nextQuestion() {

}

function selectAnswer() {

}

const questions = [
    {
        question: 'When did history start? (Hint: Before this date, everything else was a mistake.),
        answers: [
            { text: '1776', correct: true },
            { text: '457', correct: false },
            { text: '0', correct: false },
            { text: '1492', correct: false }
        ]
    }
]

const questions = [
    {
        question: 'How long did World War 2 last?',
        answers: [
            { text: '5 years 1 day', correct: true },
            { text: '3 years 354 days', correct: false },
            { text: '4 years 67 days', correct: false },
            { text: '7 years 15 days ', correct: false }
        ]
    }
]

const questions = [
    {
        question: 'What is the only country to land humans on the moon?,
        answers: [
            { text: 'USA', correct: true },
            { text: 'China', correct: false },
            { text: 'USSR', correct: false },
            { text: 'United Kingdom', correct: false }
        ]
    }
]

const questions = [
    {
        question: 'On what day was the state of Utah founded?',
        answers: [
            { text: 'January 4, 1896', correct: true },
            { text: 'October 15th, 1889', correct: false },
            { text: 'September 5th, 1901 ', correct: false },
            { text: 'May, 18th 1876', correct: false }
        ]
    }
]