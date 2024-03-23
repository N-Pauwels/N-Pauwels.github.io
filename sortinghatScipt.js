const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
const button6 = document.querySelector("#button6");
const text = document.querySelector("#text");
const hatText = document.querySelector("#hatText");
const gryffindorPoints = 0;
const hufflepuffPoints = 0;
const slytherinPoints = 0;
const ravenclawPoints = 0;
let currentQuestion = 0;
const buttons = [button1, button2, button3, button4, button5, button6]
const questions = [
    {
        name: "question1",
        question: "What's your favourite class?",
        answers: [
            {
                button: "Defense against the dark arts",
                points: {
                    gryffindor: 5,
                    hufflepuff: 0,
                    slytherin: 10,
                    ravenclaw: 0
                }
            },
            {
                button: "Charms",
                points: {
                    gryffindor: 5,
                    hufflepuff: 0,
                    slytherin: 0,
                    ravenclaw: 10
                }
            },
            {
                button: "Potions",
                points: {
                    gryffindor: 10,
                    hufflepuff: 0,
                    slytherin: 5,
                    ravenclaw: 0
                }
            },
            {
                button: "Herbology",
                points: {
                    gryffindor: 0,
                    hufflepuff: 10,
                    slytherin: 5,
                    ravenclaw: 0
                }
            },
            {
                button: "Beasts",
                points: {
                    gryffindor: 0,
                    hufflepuff: 10,
                    slytherin: 0,
                    ravenclaw: 5
                }
            },
        ]
    },
]
//initialize button 1
button1.onclick = showQuestion(currentQuestion);

function showQuestion(question){
    hatText.innerText = "The hat awaits your answer.";
    text.innerText = questions[question].question;
    updateButtons(question);
}
function updateButtons(current){
    for(let i = 0; i<questions[current].answers.length){
        buttons[i].innerText = questions[current].answers[i].button;
    }
}