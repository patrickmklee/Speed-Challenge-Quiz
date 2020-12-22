// Define master array with question and FOUR answer options
var QuestionArray = [ {
    qid : 0,
    q : "What is the first line in an HTML file?",
    a : ["#!/usr/bin/bash", "<head>", "<html>", "<!DOCTYPE html>"],
    correctAnswerId : 3
    },
    { 
    qid : 1,
    q: "CSS is an acronym for",
    a: ["Cascading Style Sheets", 'Custom Style Sheets', 'Colored Silly Socks', 'Cascaded Style Sheet'],
    correctAnswerId : 0
    },
    { 
    qid : 2,
    q: "How can the following line be shortened: counter = counter - 1", 
    a: ['counter--', 'counter=counter-1', '--counter;', 'counter--1'],
    correctAnswerId : 0
    }
];


const QUIZ_TIME_INIT = 15;
const NUM_QUESTIONS = 3;
//const 
var questionsRemaining = 3;

//var timeRemaining 


// var body = document.body;
// Element Objects
// var highscoreEl = document.createElement("nav")
// var 
var quizContentEl = document.getElementById('quiz-content');
var questionEl = document.getElementById("question-wrap");
var answerOptionsEl = document.getElementById("answer-options");
var containerEl = document.getElementById("interact");
var scoreValueEl = document.querySelector("#scoreValue");
//var quizEl = document.getElementById(quiz-wrapper)
// var questi
var timerEl = document.getElementById('timer');
var startEl = document.querySelector('#start');

// var formEl = document.createElement("form");
// var formDivEl = document.createElement("div");
// formDivEl.setAttribute('style', 'text-align: center');
// choiceFormEl = document.createAttribute()
// var questEl = document.getElementById('question');
// var choicesElArray = document.getElementsByClassName('choices');
// var startBtn = document.getElementById('start');
//var 
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

var taskQuestionHandler = function(event) {
    // if (event.target != HTMLButtonElement) {
    console.log(event.type);
    console.log(event.target);
        // return
    // } 
    var questionId = quizContentEl.getAttribute('value');//JSON.parse(quizContentEl.getAttribute('value'));
    var correctId = QuestionArray[questionId].correctAnswerId;
    var scoreValue_tmp = parseInt(scoreValueEl.textContent);
    var userAnswer = parseInt(event.target['value']);
    console.log(event.target['value']);
    console.log("Correct answer is: "+ correctId);
    if (userAnswer === correctId){
        console.log("Correct Answer!");
        scoreValue_tmp++;
    } else {
        console.log("Sorry, thats Incorrect");
    }
    console.log(`Your score: ${scoreValue_tmp}`);
    scoreValueEl.textContent = JSON.stringify(scoreValue_tmp);
}

var createQuizEl = function(QuestionDataObj) {
    var quizAnswerChoices = QuestionDataObj.a;
    // quizContentEl.setAttribute
    quizContentEl.setAttribute('value', QuestionDataObj.qid);

    let quizContentQuestionEl = document.createElement("div");
    quizContentQuestionEl.textContent = QuestionDataObj.q;
    quizContentQuestionEl.classList.add("quiz-question");
    var quizChoicesEl = []
    for (var i=0;i<quizAnswerChoices.length; i++) {
        console.log("Element "+ i);
        let tmpButton = document.createElement("button");
        tmpButton.className ="btn btn-choice"
        // tmpButton.value = quizAnswerChoices[i];
        tmpButton.value = i;
        tmpButton.textContent = quizAnswerChoices[i];
        tmpButton.addEventListener('click', taskQuestionHandler);
        quizContentQuestionEl.appendChild(tmpButton);
    }
    quizContentEl.appendChild(quizContentQuestionEl);
    // quizContentQuestionEl = document.getElementById("quiz-question");
}
var createQuestionEl = function(QuestionDataObj) {
    // var listItemEl = document.createElement("li");
    var questionFormEl = document.createElement("form");
    // questionFormEl.className = "question-form";

    // create div to hold task info and add to list item
    var questionDataEl = document.createElement("div");
    questionDataEl.className = "question-info";
    tmp_innerHTML="<h2 class='question-text'>" + QuestionDataObj.q + "</h2>";
    var answerChoices = QuestionDataObj.a;
    for (i=0; i<4; i++) {
        tmp_innerHTML=tmp_innerHTML + "<li class='answer-options-list'> <button class='btn btn-choice' type='button'>"+JSON.stringify(answerChoices[i])+"</button></li>";
    }

    questionDataEl.innerHTML = tmp_innerHTML;
    
    //listItemEl.appendChild(taskInfoEl);
    questionFormEl.appendChild(questionDataEl);
    console.dir(questionFormEl);
    questionEl.appendChild(questionFormEl);

    // add list item to list
    // tasksToDoEl.appendChild(listItemEl);
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
    var currentScore = 0;
    var timeRemaining = QUIZ_TIME_INIT;
    containerEl.innerHTML = "";
    scoreValueEl.classList.add("hidden");
    scoreValueEl.textContent=0;
    var qidx=1;
    //questionEl.setAttribute('style', );
    // var questionTextEl = document.getElementById('question-text');
    // choicesEl = document.createElement("form");
    var answerOptionsArrayEl = [];
    // var questionObj = QuestionArray.pop();
    // var questionObj = QuestionArray.pop();
    // createQuestionEl(questionObj);
    // for (var qidx=0; qidx<QuestionArray.length; qidx++){
    let questionObj = QuestionArray[qidx]
    createQuizEl(questionObj);
    // }
    
    // var answerOptionBtn = document.getElementsByClassName('btn-choice');
    // console.log(answerOptionBtn);
    // console.dir(answerOptionBtn);
    // for (var l=0;l<answerOptionBtn.length;l++){
    //     answerOptionBtn.item(l).setAttribute("value", l)
    // }
    
    // for(var k=0;k<4;k++){
    //     answerOptionsArrayEl.push(document.createElement("button"));
    //     answerOptionsArrayEl[0].setAttribute('type', 'button');
    //     answerOptionsArrayEl[0].textContent = QuestionArray[qidx]['a'][k];
    // // //choicesEl.appendChild(answerOptionsArrayEl);
    // answerOptionsEl.appendChild(answerOptionsArrayEl.pop())
    // }
    // var choiceElA = document.createElement("button");
    // var choiceElB = document.createElement("button");
    // var choiceElC = document.createElement("button");
    // var choiceElD = document.createElement("button");
    //questionTextEl.textContent = QuestionArray[qidx]['q'];
    //var choices = JSON.parse(qidTochoices[ID1]);
    // choiceElA.textContent = QuestionArray[qidx]['a'][0];
    // choiceElA.textContent = QuestionArray[qidx]['a'][0];
    // choiceElB.textContent = QuestionArray[qidx]['a'][1];
    // choiceElC.textContent = QuestionArray[qidx]['a'][2];
    // choiceElD.textContent = QuestionArray[qidx]['a'][3];
    // questionEl.textContent = QuestionArray[qidx]['q'];
    
    // containerEl.appendChild(questionEl);
    // containerEl.appendChild(choicesEl);
    
    
    // choicesEl.appendChild(choiceElA);
    // choicesEl.appendChild(choiceElB);
    // choicesEl.appendChild(choiceElC);
    // choicesEl.appendChild(choiceElD)
    // questionEl.appendChild(questionTextEl)
    // questionEl.appendChild(answer);

    // var containerEl = document.body.getElementsByClassName("container")[0];
    // containerEl.appendChild(questionEl);
    
    // timerEl.textContent = QUIZ_TIME_INIT;
    console.log("Quiz Start");
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
                exttCase = true;
                quizContentEl.textContent = "Game Over";
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
    StartQuiz();
    // taskQuestionHandler;
}
);
    // if (StartQuiz() === 1){
    //     console.log("Done StartEl click")
    //     }
    // }
// DEBUGGING

function getEventType(event) {
    const log = document.getElementById('log');
    console.log(event.target);
    log.innerText = `${event.type} Target:${event.target}
    ${log.innerText}`;
    // console.log(event.target);
}
document.addEventListener('click',taskQuestionHandler);