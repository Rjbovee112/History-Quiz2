const startButton = document.getElementById('start-btn')
const questionContainerEl = document.getElementById('question-container')
const questionEl = document.getElementById('question')
const answerButtonEl = document.getElementById('answer-buttons')

startButton.addEventListener('click', startGame)

let shuffledQuestions, currentQuestionIndex

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerEl.classList.remove('hide')
    setNextQuestion()
}

function nextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionEl.innerText = question.question

}


function selectAnswer() {

}

const questions = [
    {
        question: 'When did history start?',
        answers: [
            { text: '1776', correct: true },
            { text: '457', correct: false },
            { text: '0', correct: false },
            { text: '1492', correct: false }
        ]
    }
]

