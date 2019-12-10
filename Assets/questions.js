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
        question: 'What is the brithday of America?',
        answers: [
            { text: '1776', correct: true },
            { text: '1876', correct: false }
        ]
    }
]