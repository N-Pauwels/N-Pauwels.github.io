const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
const button6 = document.querySelector("#button6");
const text = document.querySelector("#text");
const hatText = document.querySelector("#hatText");
let gryffindorPoints = 0;
let hufflepuffPoints = 0;
let slytherinPoints = 0;
let ravenclawPoints = 0;
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
button1.addEventListener("click",showQuestion);

function showQuestion(){
    hatText.innerText = "The hat awaits your answer.";
    text.innerText = questions[currentQuestion].question;
    updateButtons(currentQuestion);
}
function updateButtons(current){
  console.log(questions[current].answers.length)
    for(let i = 0; i<questions[current].answers.length;i++){
        buttons[i].innerText = questions[current].answers[i].button;
        buttons[i].style.display = "initial"
        buttons[i].addEventListener("click",()=>{updateOnClick(current,i)});
    }
}
function updateOnClick(current,j){
    gryffindorPoints += questions[current].answers[j].points.gryffindor;
    hufflepuffPoints += questions[current].answers[j].points.hufflepuff;
    slytherinPoints += questions[current].answers[j].points.slytherin;
    ravenclawPoints += questions[current].answers[j].points.ravenclaw;
    hatText.innerText = "The hat thanks you for your answer.";
    text.innerText = `You have selected ${questions[current].answers[j].button}. Good choice!`;
    resetButtons();
}
function resetButtons(){
    for(let i=1;i<buttons.length;i++){
        buttons[i].style.display = "none";
    }
    buttons[0].innerText = "Continue";
    buttons[0].onclick = nextQuestion;
}
function nextQuestion(){
        if(currentQuestion >= questions.length-1){
        showResult();
    } else{
        currentQuestion++;
    }
}
function showResult(){
    const pointsArray = [gryffindorPoints,hufflepuffPoints,slytherinPoints,ravenclawPoints];
    pointsArray.sort();
    text.innerText = `Your house is ${pointsArray[0]}`
}