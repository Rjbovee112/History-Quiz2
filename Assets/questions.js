const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('questions-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')



startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    nextQuestion()
})

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)


function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    nextQuestion()
}

function nextQuestion() {
    resetState()
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

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild
            (answerButtonElement.firstChild)
    }
}

//
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }


}

function setStatusClass(element, correct) {
    clearStatusClasss(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClasss(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'When did history begin?',
        answers: [
            { text: '1776AD', correct: true },
            { text: '457AD', correct: false },
            { text: '32BC', correct: false },
            { text: '1492AD', correct: false }
        ]
    },
    {
        question: 'What country landed humans on the moon?',
        answers: [
            { text: 'USA', correct: true },
            { text: 'Germany', correct: false },
            { text: 'China', correct: false },
            { text: 'Russian', correct: false }
        ]
    },
    {
        question: 'How long did World War 2 last?',
        answers: [
            { text: '5y 1d', correct: true },
            { text: '3y 257d', correct: false },
            { text: '7y 52d', correct: false },
            { text: '4y 16d', correct: false }
        ]
    },
    {
        question: 'Who is the greatest modern US President?',
        answers: [
            { text: 'Reagan', correct: true },
            { text: 'Obama', correct: false },
            { text: 'Kennedy', correct: false },
            { text: 'Roosevelt', correct: false }
        ]
    }
]