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
const questions = [
    {
        name: "question1",
        question: "What's your favourite class?"
        answers: [
            {
                button: "Defense against the dark arts",
                points: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slytherin: 0,
                    ravenclaw: 0
                }
            },
            {
                button: "Charms",
                points: {
                    gryffindor: 0,
                    hufflepuff: 0,
                    slytherin: 0,
                    ravenclaw: 0
                }
            },
        ]
    },
]