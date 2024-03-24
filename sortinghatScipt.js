const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
const button6 = document.querySelector("#button6");
const text = document.querySelector("#text");
const originalText = text.innerText;
const hatText = document.querySelector("#hatText");
const originalHatText = hatText.innerText;
let gryffindorPoints = 0;
let hufflepuffPoints = 0;
let slytherinPoints = 0;
let ravenclawPoints = 0;
let currentQuestion = 0;
const buttons = [button1, button2, button3, button4, button5, button6]
const choiceText = ["Good choice!", "Lovely!", "Merlin's beard!","You're a wizard!"]
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
            }
        ]
    },
    {
        name: "question2",
        question: "What's your favourite beast?",
        answers: [
            {
                button: "Dragon",
                points: {
                    gryffindor: 5,
                    hufflepuff: 0,
                    slytherin: 10,
                    ravenclaw: 0
                }
            },
            {
                button: "Hyppogryff",
                points: {
                    gryffindor: 5,
                    hufflepuff: 0,
                    slytherin: 0,
                    ravenclaw: 10
                }
            },
            {
                button: "Acromantula",
                points: {
                    gryffindor: 10,
                    hufflepuff: 0,
                    slytherin: 5,
                    ravenclaw: 0
                }
            },
            {
                button: "Phoenix",
                points: {
                    gryffindor: 5,
                    hufflepuff: 10,
                    slytherin: 0,
                    ravenclaw: 0
                }
            },
            {
                button: "Basilisk",
                points: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slytherin: 15,
                    ravenclaw: 0
                }
            },
            {
                button: "Centaur",
                points: {
                    gryffindor: 0,
                    hufflepuff: 5,
                    slytherin: 0,
                    ravenclaw: 10
                }
            }
        ]
    },
    {
        name: "question3",
        question: "A wild puffskein appears. What do you do?",
        answers: [
            {
                button: "You now it's harmless, you leave it be.",
                points: {
                    gryffindor: 0,
                    hufflepuff: 5,
                    slytherin: 0,
                    ravenclaw: 5
                }
            },
            {
                button: "You encage it so you can sell it later.",
                points: {
                    gryffindor: 5,
                    hufflepuff: 0,
                    slytherin: 10,
                    ravenclaw: 0
                }
            },
            {
                button: "Your reflexes get you to cast stupify.",
                points: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slytherin: 10,
                    ravenclaw: 5
                }
            },
            {
                button: "You take it with you so you can study it later.",
                points: {
                    gryffindor: 5,
                    hufflepuff: 0,
                    slytherin: 0,
                    ravenclaw: 10
                }
            },
            {
                button: "You see it's in danger and take it somewhere safe.",
                points: {
                    gryffindor: 5,
                    hufflepuff: 10,
                    slytherin: 0,
                    ravenclaw: 5
                }
            }
        ]
    },
    {
        name: "question4",
        question: "What's your favourite beast?",
        answers: [
            {
                button: "Dragon",
                points: {
                    gryffindor: 5,
                    hufflepuff: 0,
                    slytherin: 10,
                    ravenclaw: 0
                }
            },
            {
                button: "Hyppogryff",
                points: {
                    gryffindor: 5,
                    hufflepuff: 0,
                    slytherin: 0,
                    ravenclaw: 10
                }
            },
            {
                button: "Acromantula",
                points: {
                    gryffindor: 10,
                    hufflepuff: 0,
                    slytherin: 5,
                    ravenclaw: 0
                }
            },
            {
                button: "Phoenix",
                points: {
                    gryffindor: 5,
                    hufflepuff: 10,
                    slytherin: 0,
                    ravenclaw: 0
                }
            },
            {
                button: "Basilisk",
                points: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slytherin: 15,
                    ravenclaw: 0
                }
            },
            {
                button: "Centaur",
                points: {
                    gryffindor: 0,
                    hufflepuff: 5,
                    slytherin: 0,
                    ravenclaw: 10
                }
            }
        ]
    },
    {
        name: "question5",
        question: "What's your favourite beast?",
        answers: [
            {
                button: "Dragon",
                points: {
                    gryffindor: 5,
                    hufflepuff: 0,
                    slytherin: 10,
                    ravenclaw: 0
                }
            },
            {
                button: "Hyppogryff",
                points: {
                    gryffindor: 5,
                    hufflepuff: 0,
                    slytherin: 0,
                    ravenclaw: 10
                }
            },
            {
                button: "Acromantula",
                points: {
                    gryffindor: 10,
                    hufflepuff: 0,
                    slytherin: 5,
                    ravenclaw: 0
                }
            },
            {
                button: "Phoenix",
                points: {
                    gryffindor: 5,
                    hufflepuff: 10,
                    slytherin: 0,
                    ravenclaw: 0
                }
            },
            {
                button: "Basilisk",
                points: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slytherin: 15,
                    ravenclaw: 0
                }
            },
            {
                button: "Centaur",
                points: {
                    gryffindor: 0,
                    hufflepuff: 5,
                    slytherin: 0,
                    ravenclaw: 10
                }
            }
        ]
    },
    {
        name: "question6",
        question: "What's your favourite beast?",
        answers: [
            {
                button: "Dragon",
                points: {
                    gryffindor: 5,
                    hufflepuff: 0,
                    slytherin: 10,
                    ravenclaw: 0
                }
            },
            {
                button: "Hyppogryff",
                points: {
                    gryffindor: 5,
                    hufflepuff: 0,
                    slytherin: 0,
                    ravenclaw: 10
                }
            },
            {
                button: "Acromantula",
                points: {
                    gryffindor: 10,
                    hufflepuff: 0,
                    slytherin: 5,
                    ravenclaw: 0
                }
            },
            {
                button: "Phoenix",
                points: {
                    gryffindor: 5,
                    hufflepuff: 10,
                    slytherin: 0,
                    ravenclaw: 0
                }
            },
            {
                button: "Basilisk",
                points: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slytherin: 15,
                    ravenclaw: 0
                }
            },
            {
                button: "Centaur",
                points: {
                    gryffindor: 0,
                    hufflepuff: 5,
                    slytherin: 0,
                    ravenclaw: 10
                }
            }
        ]
    },
    {
        name: "question7",
        question: "What's your favourite beast?",
        answers: [
            {
                button: "Dragon",
                points: {
                    gryffindor: 5,
                    hufflepuff: 0,
                    slytherin: 10,
                    ravenclaw: 0
                }
            },
            {
                button: "Hyppogryff",
                points: {
                    gryffindor: 5,
                    hufflepuff: 0,
                    slytherin: 0,
                    ravenclaw: 10
                }
            },
            {
                button: "Acromantula",
                points: {
                    gryffindor: 10,
                    hufflepuff: 0,
                    slytherin: 5,
                    ravenclaw: 0
                }
            },
            {
                button: "Phoenix",
                points: {
                    gryffindor: 5,
                    hufflepuff: 10,
                    slytherin: 0,
                    ravenclaw: 0
                }
            },
            {
                button: "Basilisk",
                points: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slytherin: 15,
                    ravenclaw: 0
                }
            },
            {
                button: "Centaur",
                points: {
                    gryffindor: 0,
                    hufflepuff: 5,
                    slytherin: 0,
                    ravenclaw: 10
                }
            }
        ]
    },
    {
        name: "question8",
        question: "What's your favourite beast?",
        answers: [
            {
                button: "Dragon",
                points: {
                    gryffindor: 5,
                    hufflepuff: 0,
                    slytherin: 10,
                    ravenclaw: 0
                }
            },
            {
                button: "Hyppogryff",
                points: {
                    gryffindor: 5,
                    hufflepuff: 0,
                    slytherin: 0,
                    ravenclaw: 10
                }
            },
            {
                button: "Acromantula",
                points: {
                    gryffindor: 10,
                    hufflepuff: 0,
                    slytherin: 5,
                    ravenclaw: 0
                }
            },
            {
                button: "Phoenix",
                points: {
                    gryffindor: 5,
                    hufflepuff: 10,
                    slytherin: 0,
                    ravenclaw: 0
                }
            },
            {
                button: "Basilisk",
                points: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slytherin: 15,
                    ravenclaw: 0
                }
            },
            {
                button: "Centaur",
                points: {
                    gryffindor: 0,
                    hufflepuff: 5,
                    slytherin: 0,
                    ravenclaw: 10
                }
            }
        ]
    },
]
//initialize button 1
button1.onclick = showQuestion;

function showQuestion(){
    gryffindorPoints = 0;
    hufflepuffPoints = 0;
    slytherinPoints = 0;
    ravenclawPoints = 0;
    currentQuestion = 0;
    hatText.innerText = "The hat awaits your answer.";
    text.innerText = questions[currentQuestion].question;
    updateButtons(currentQuestion);
}
function updateButtons(current){
  console.log(questions[current].answers.length)
    for(let i = 0; i<questions[current].answers.length;i++){
        buttons[i].innerText = questions[current].answers[i].button;
        buttons[i].style.display = "initial"
        buttons[i].onclick = ()=>{updateOnClick(current,i)};
    }
}
function updateOnClick(current,j){
    if(Math.random()<0.1){
        let newArray = []
        if(j===0){
            newArray = questions[current].answers.slice(1,questions[current].answers.length);
        } else if (j === questions[current].answers.length-1){
            newArray = questions[current].answers.slice(0,questions[current].answers.length-1);
        } else {
            let firstArray = questions[current].answers.slice(0,j);
            let secondArray = questions[current].answers.slice(j+1,questions[current].answers.length);
            newArray = firstArray.concat(secondArray);
            }
        console.log(newArray);
        let newSelection = Math.floor(Math.random()*newArray.length);
        gryffindorPoints += newArray[newSelection].points.gryffindor;
        console.log('gryffindor'+gryffindorPoints);
        hufflepuffPoints += newArray[newSelection].points.hufflepuff;
        console.log('hufflepuff' + hufflepuffPoints);
        slytherinPoints += newArray[newSelection].points.slytherin;
        console.log('slytherin' + slytherinPoints);
        ravenclawPoints += newArray[newSelection].points.ravenclaw;
        console.log('ravenclaw' + ravenclawPoints);
        hatText.innerText = "The hat thanks you for your answer. However, it seems a dark wizard inteverned.";
        text.innerText = `You wanted to select selected ${questions[current].answers[j].button}. Yet, you seemed to be under the imperius curse and have selected ${newArray[newSelection].button} instead!`; 
    } else{
        gryffindorPoints += questions[current].answers[j].points.gryffindor;
        console.log('gryffindor'+gryffindorPoints);
        hufflepuffPoints += questions[current].answers[j].points.hufflepuff;
        console.log('hufflepuff' + hufflepuffPoints);
        slytherinPoints += questions[current].answers[j].points.slytherin;
        console.log('slytherin' + slytherinPoints);
        ravenclawPoints += questions[current].answers[j].points.ravenclaw;
        console.log('ravenclaw' + ravenclawPoints);
        hatText.innerText = "The hat thanks you for your answer.";
        let choiceTextSelected = choiceText[Math.floor(Math.random()*choiceText.length)]
        text.innerText = `You have selected ${questions[current].answers[j].button}. ${choiceTextSelected}`;
    }
    resetButtons();
}
function resetButtons(){
    for(let i=1;i<buttons.length;i++){
        buttons[i].style.display = "none";
    }
    buttons[0].innerText = "Continue";
    buttons[0].onclick = nextQuestion;
    console.log('current question' + currentQuestion);
    console.log('questions'+questions.length)
}
function nextQuestion(){
    console.log("check");
        if(currentQuestion >= questions.length-1){
        showResult();
    } else{
        currentQuestion++;
        console.log('else curr quest'+currentQuestion);
        text.innerText = questions[currentQuestion].question;
        updateButtons(currentQuestion);
    }
}
function showResult(){
    const pointsArray = [{
        name: "Gryffindor",
        points: gryffindorPoints
        },
        {
        name: "Hufflepuff",
        points: hufflepuffPoints
        },
        {
        name: "Slytherin",
        points: slytherinPoints
        },
        {
        name: "Ravenclaw",
        points: ravenclawPoints
        }];
    console.log(pointsArray);
    const sort = (a,b)=>{
        if(a.points>b.points){
            return -1
        } else if(a.points<b.points){
            return 1
        } else{
            return 0
        }
    }
    pointsArray.sort(sort);
    console.log(pointsArray);
    hatText.innerText = "The hat reveals its decision.";
    text.innerText = `Your house is ${pointsArray[0].name}! Click "Restart" if you want to try again.`
    button1.onclick = restart;
    button1.innerText = "Restart"
}
function restart(){
    text.innerText = originalText;
    hatText.innerText = originalHatText;
    button1.innerText = "Continue";
    button1.onclick = showQuestion;
}