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
const choiceText = ["Good choice!", "Lovely!", "Merlin's beard!","You're a wizard!","Butterbeer's on me!", "Don't let the muggles get you down!","You have chosen wisely!","The hat approves.","I solemnly swear that's a fine choice.", "You're awesome!", "That's worth a chocolate frog!", "Bloody hell!", "The hat knew you'd say that.","What a great answer!"]
//define questions
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
                button: "Niels Pauwels",
                points: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slytherin: 0,
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
                button: "You know it's harmless, you leave it be.",
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
                button: "Your reflexes drive you to cast stupify.",
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
        question: "What's your favourite place in Hogwarts?",
        answers: [
            {
                button: "Astronomy tower",
                points: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slytherin: 0,
                    ravenclaw: 10
                }
            },
            {
                button: "Dungeons (I like it kinky)",
                points: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slytherin: 10,
                    ravenclaw: 0
                }
            },
            {
                button: "Kitchens",
                points: {
                    gryffindor: 0,
                    hufflepuff: 10,
                    slytherin: 0,
                    ravenclaw: 0
                }
            },
            {
                button: "Room of requirement",
                points: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slytherin: 0,
                    ravenclaw: 0
                }
            },
            {
                button: "Gryffindor tower",
                points: {
                    gryffindor: 10,
                    hufflepuff: 0,
                    slytherin: 0,
                    ravenclaw: 0
                }
            },
            {
                button: "Quidditch pitch",
                points: {
                    gryffindor: 5,
                    hufflepuff: 0,
                    slytherin: 5,
                    ravenclaw: 0
                }
            }
        ]
    },
    {
        name: "question5",
        question: "What would be your dreamjob?",
        answers: [
            {
                button: "Hogwarts Head master",
                points: {
                    gryffindor: 10,
                    hufflepuff: 10,
                    slytherin: 0,
                    ravenclaw: 10
                }
            },
            {
                button: "Auror",
                points: {
                    gryffindor: 15,
                    hufflepuff: 0,
                    slytherin: 0,
                    ravenclaw: 10
                }
            },
            {
                button: "Minister of Magic",
                points: {
                    gryffindor: 5,
                    hufflepuff: 0,
                    slytherin: 5,
                    ravenclaw: 0
                }
            },
            {
                button: "Hogwarts teacher",
                points: {
                    gryffindor: 5,
                    hufflepuff: 5,
                    slytherin: 0,
                    ravenclaw: 10
                }
            },
            {
                button: "Beast caretaker",
                points: {
                    gryffindor: 0,
                    hufflepuff: 10,
                    slytherin: 0,
                    ravenclaw: 0
                }
            },
            {
                button: "Dark wizard",
                points: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slytherin: 20,
                    ravenclaw: 0
                }
            }
        ]
    },
    {
        name: "question6",
        question: "What would you do if you were rich?",
        answers: [
            {
                button: "Rent Hogwarts for a big party.",
                points: {
                    gryffindor: 10,
                    hufflepuff: 0,
                    slytherin: 0,
                    ravenclaw: 5
                }
            },
            {
                button: "Build a mansion with view on Hogwarts Castle.",
                points: {
                    gryffindor: 0,
                    hufflepuff: 10,
                    slytherin: 0,
                    ravenclaw: 0
                }
            },
            {
                button: "Buy the Elder Wand.",
                points: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slytherin: 10,
                    ravenclaw: 0
                }
            },
            {
                button: "Invest in shares of Gringott's bank.",
                points: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slytherin: 0,
                    ravenclaw: 10
                }
            },
            {
                button: "Buy a dragon as a pet.",
                points: {
                    gryffindor: 10,
                    hufflepuff: 0,
                    slytherin: 10,
                    ravenclaw: 0
                }
            },
        ]
    },
    {
        name: "question7",
        question: "What's your favourite spell?",
        answers: [
            {
                button: "Stupify",
                points: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slytherin: 0,
                    ravenclaw: 0
                }
            },
            {
                button: "Imperio",
                points: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slytherin: 10,
                    ravenclaw: 0
                }
            },
            {
                button: "Bombarda",
                points: {
                    gryffindor: 10,
                    hufflepuff: 0,
                    slytherin: 0,
                    ravenclaw: 0
                }
            },
            {
                button: "Levioso",
                points: {
                    gryffindor: 0,
                    hufflepuff: 10,
                    slytherin: 0,
                    ravenclaw: 10
                }
            },
            {
                button: "Glacius",
                points: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slytherin: 0,
                    ravenclaw: 10
                }
            },
            {
                button: "Arresto Momentum",
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
        question: "Which character would you swipe right on Tinder?",
        answers: [
            {
                button: "Draco Malfoy",
                points: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slytherin: 10,
                    ravenclaw: 0
                }
            },
            {
                button: "Harry Potter",
                points: {
                    gryffindor: 10,
                    hufflepuff: 0,
                    slytherin: 0,
                    ravenclaw: 0
                }
            },
            {
                button: "Hermione Granger",
                points: {
                    gryffindor: 10,
                    hufflepuff: 0,
                    slytherin: 0,
                    ravenclaw: 0
                }
            },
            {
                button: "Luna Lovegood",
                points: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slytherin: 0,
                    ravenclaw: 10
                }
            },
            {
                button: "Peter Pettigrew",
                points: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slytherin: 15,
                    ravenclaw: 0
                }
            },
            {
                button: "Dobby",
                points: {
                    gryffindor: 5,
                    hufflepuff: 5,
                    slytherin: 0,
                    ravenclaw: 5
                }
            }
        ]
    },
    {
        name: "question9",
        question: "Dilemma time: What would you prefer?",
        answers: [
            {
                button: "Have Dobby's clothing style.",
                points: {
                    gryffindor: 0,
                    hufflepuff: 10,
                    slytherin: 0,
                    ravenclaw: 0
                }
            },
            {
                button: "Be the most powerful wizard, but look like Voldemort.",
                points: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slytherin: 20,
                    ravenclaw: 0
                }
            },
            {
                button: "Always have to wear a sweater that's knitted out of Dumbledore's beard.",
                points: {
                    gryffindor: 10,
                    hufflepuff: 0,
                    slytherin: 0,
                    ravenclaw: 0
                }
            },
            {
                button: "Turn everyone looking into your eyes into stone.",
                points: {
                    gryffindor: 10,
                    hufflepuff: 0,
                    slytherin: 10,
                    ravenclaw: 0
                }
            },
            {
                button: "Have infinite knowledge, but you're not able to share any knowledge with anyone.",
                points: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slytherin: 0,
                    ravenclaw: 20
                }
            }
        ]
    },
    {
        name: "question10",
        question: "Where would you rather go on a roadtrip on your broom?",
        answers: [
            {
                button: "Italy",
                points: {
                    gryffindor: 10,
                    hufflepuff: 0,
                    slytherin: 0,
                    ravenclaw: 0
                }
            },
            {
                button: "Ireland",
                points: {
                    gryffindor: 0,
                    hufflepuff: 10,
                    slytherin: 20,
                    ravenclaw: 0
                }
            },
            {
                button: "Norway",
                points: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slytherin: 0,
                    ravenclaw: 10
                }
            },
            {
                button: "USA",
                points: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slytherin: 10,
                    ravenclaw: 0
                }
            }
        ]
    },
    {
        name: "question11",
        question: "Which magical reality show would you watch?",
        answers: [
            {
                button: "Desperate Housewitches.",
                points: {
                    gryffindor: 0,
                    hufflepuff: 10,
                    slytherin: 0,
                    ravenclaw: 0
                }
            },
            {
                button: "Hogwarts Shore.",
                points: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slytherin: 10,
                    ravenclaw: 0
                }
            },
            {
                button: "Wizard seeks witch",
                points: {
                    gryffindor: 10,
                    hufflepuff: 0,
                    slytherin: 0,
                    ravenclaw: 0
                }
            },
            {
                button: "Pimp my broom",
                points: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slytherin: 0,
                    ravenclaw: 10
                }
            }
        ]
    },
]
//initialize button 1
button1.onclick = showQuestion;
function shuffleQuestion(questions){
    questions.sort(()=> Math.random()-0.5);
    return questions;
};

function showQuestion(){
    gryffindorPoints = 0;
    hufflepuffPoints = 0;
    slytherinPoints = 0;
    ravenclawPoints = 0;
    currentQuestion = 0;
    hatText.innerText = "The hat awaits your answer.";
    shuffleQuestion(questions);
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
        hatText.innerText = "The hat thanks you for your answer. However, it seems a dark wizard intervened.";
        text.innerText = `You wanted to select "${questions[current].answers[j].button}". Yet, you seemed to be under the imperius curse and have selected "${newArray[newSelection].button}" instead!`; 
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
        text.innerText = `You have selected "${questions[current].answers[j].button}". ${choiceTextSelected}`;
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
        hatText.innerText = "The hat awaits your answer."
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
    const sort = (a,b)=> b.points - a.points;
    pointsArray.sort(sort);
    console.log(pointsArray);
    hatText.innerText = "The hat reveals its decision...";
    text.innerText = `Your house is ${pointsArray[0].name}! Click "Restart" if you want to try again.`
    document.body.style.backgroundImage = `url("../Images/${pointsArray[0].name}.jpg")`;
    text.style.fontSize = "150%"
    button1.onclick = restart;
    button1.innerText = "Restart"
}
function restart(){
    text.innerText = originalText;
    hatText.innerText = originalHatText;
    button1.innerText = "Continue";
    button1.onclick = showQuestion;
    document.body.style.backgroundImage = 'url("../Images/hogwarts-crest-6dulenundf2dcvsb.jpg")'
}