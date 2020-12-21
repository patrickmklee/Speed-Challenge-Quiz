// Define master array with question and FOUR answer options
var QuestionArray = [ {
    qid : 0,
    q : "What is the first line in an HTML file?",
    a : ["#!/usr/bin/bash", "<head>", "<html>", "<!DOCTYPE html>"]
    },
    { 
    qid : 1,
    q: "CSS is an acronym for",
    a: ["Cascading Style Sheets", 'Custom Style Sheets', 'Colored Silly Socks', 'Cascaded Style Sheet']},
    { 
    qid : 2,
    q: "How can the following line be shortened: counter = counter - 1;", 
    a: ['counter--;', 'counter=counter-1', '--counter;', 'counter--1;']
    }
];


const QUIZ_TIME_INIT = 5;
const NUM_QUESTIONS = 3;
//const 
var questionsRemaining = 3;
//var timeRemaining 
const qidToAnswer = { 
    ID0 : ["#!/usr/bin/bash", "<head>", "<html>", "<!DOCTYPE html>"],
    ID1 : ["Cascading Style Sheets"],//["Cascading Style Sheets", "Custom Style Sheets", "Colored Silly Socks", "Cascaded Style Sheet"],
    ID2 : ["counter--;","counter=counter-1", "--counter;", "counter--1;"]
};

// var body = document.body;
// Element Objects
var highscoreEl = document.createElement("nav")
var containerEl = document.getElementById("interact");
var timerEl = document.getElementById('timer');
var startEl = document.querySelector('#start');
// var formEl = document.createElement("form");
// var formDivEl = document.createElement("div");
// formDivEl.setAttribute('style', 'text-align: center');
// choiceFormEl = document.createAttribute()
// var questEl = document.getElementById('question');
// var choicesElArray = document.getElementsByClassName('choices');
// var startBtn = document.getElementById('start');

//function getRandomIndex(
function decTimer(timerVal) {
    if (timerVal > 0) {
        timerVal--;
        return true;
    } else {
        timerVal = 0;
        return false;
    }
}
// function getQuestion(){}
var createQuestionEl = function createQuestionEl(QuestionDataObj) {
    var listItemEl = document.createElement("li");
    var questionFormEl = document.createElement("form");
    questionFormEl.className = "question-form";

    // create div to hold task info and add to list item
    var questionDataEl = document.createElement("div");
    questionDataEl.className = "question-info";
    tmp_innerHTML="<h3 class='question-text'>" + taskDataObj.name + "</h3><div id=answer-choice><ul>";
    
    for (i=0; i<4; i++) {
        tmp_innerHTML=tmp_innerHTML + "<li class='choices-item'>"+ QuestionDataObj.choices[i]+"</li>";
    }

    questionDataEl.innerHTML = tmp_innerHTML+"</ul></div>";
    
    //listItemEl.appendChild(taskInfoEl);
    questionFormEl.appendChild(questionDataEl);
    questionDataEl.appendChild(questionFormEl);
    //questEl.textContent = QuestionArray[qid]['q'];
    //var j=0;
//    for (let j =0;j<choicesElArray.length;j++){
    /*choices = QuestionArray[idx]['a'];
    for (let j=0;j<4;j++) {
        let choiceEl = choicesElArray[j]
        choiceEl.textContent = choices[j];
    }
        console.log("loop "+j);
        console.log(optEl);
        //j++;
    */
}
// function updateChoices() {

// }
function StartQuiz() {
    // startEl.removeEventListener()
    var timeRemaining = QUIZ_TIME_INIT;
    // containerEl.innerHTML = '';
    var questionEl = document.createElement("h2");
    questionEl.setAttribute('style', 'font-size:25px; text-align:center;');
    var qidx=0;
    choicesEl = document.createElement("div");
    var choiceElA = document.createElement("button");
    var choiceElB = document.createElement("button");
    var choiceElC = document.createElement("button");
    var choiceElD = document.createElement("button");
    //var choices = JSON.parse(qidTochoices[ID1]);
    choiceElA.textContent = QuestionArray[qidx]['a'][0];
    choiceElA.textContent = QuestionArray[qidx]['a'][0];
    choiceElB.textContent = QuestionArray[qidx]['a'][1];
    choiceElC.textContent = QuestionArray[qidx]['a'][2];
    choiceElD.textContent = QuestionArray[qidx]['a'][3];
    questionEl.textContent = QuestionArray[qidx]['q'];
    
    containerEl.appendChild(questionEl);

    containerEl.appendChild(choicesEl);
    choicesEl.appendChild(choiceElA);
    choicesEl.appendChild(choiceElB);
    choicesEl.appendChild(choiceElC);
    choicesEl.appendChild(choiceElD);

    // var containerEl = document.body.getElementsByClassName("container")[0];
    // containerEl.appendChild(questionEl);
    
    // timerEl.textContent = QUIZ_TIME_INIT;
    console.log("Quiz Start");
    // updateQuestion(qidx);
    var exitCase = false;
    var timerInterval = setInterval( function() {
        console.log("Enter timerInterval: "+ timeRemaining)
        if (timeRemaining > 1) {
            exitCase = false;
            timeRemaining = timeRemaining - 1;
            timerEl.textContent = timeRemaining;
        } else {
            timerEl.textContent = "0";
            timeRemaining = undefined;
            clearInterval(timerInterval);
            // console.log(timerVal);
        };
    }, 1000);
    var exitInterval = setInterval(function() {
            
            if (timerEl.textContent === "0") {
                questionEl.textContent = "Game Over";
                clearInterval(exitInterval);
                return 1;
            } else {

            }
        }, 200);
    // return (timeRemaining === undefined);
}
//function init(){

startEl.addEventListener('click', function() {
    containerEl.innerHTML="";
    if (StartQuiz() === 1){
        console.log("Done StartEl click")
        }
    }
);
// init();

// function initLocal(){
    // localStorage.setItem();
    // localStorage.

// }
// startBtn.onclick = StartQuiz();