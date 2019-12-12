const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('questions-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')

startButton.addEventListener('click', startGame)

let shuffledQuestions, currentQuestionIndex


function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    nextQuestion()
}

function nextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    })
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

