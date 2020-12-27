// Define master array with question and FOUR answer options
const QuestionArray = [ {
    qid : 0,
    q : "Which of these HTML tags typically provides the 'metadata' of a webpage?",
    a : ["<div>", "<meta>", "<h1>", "<body>"],
    correctAnswerId : 1
    },
    {
        qid : 1,
        q : "Which HTML attribute is used to insert a link to another page or section of content?",
        a : ["id", "a", "href", "link"],
        "correctAnswerId" : 2
    },
    { 
    qid : 2,
    q: "CSS is an acronym for",
    a: [ "Custom Style Sheets", "Cascading Style Sheets", "Colored Silly Socks", "Cascaded Style Sheet"],
    correctAnswerId : 1
    },
    
    { 
    qid : 3,
    q: "The expression 'counter--' is shorthand for", 
    a: ['-counter+1', 'counter = counter-1', 'counter = -counter-1', 'counter = counter+1'],
    correctAnswerId : 1
    },
{
    qid : 4,
    q : "JavaScript can be used to",
    a : ["Add new elements", "Change styling applied to elements", "Store information in the browser cache", "All of the above"],
    correctAnswerId : 3
}
];


const QUIZ_TIME_INIT = 45;

var quizContentEl = document.getElementById('quiz-content');
var questionEl = document.getElementById("question-wrap");
var answerOptionsEl = document.getElementById("answer-options");
var containerEl = document.querySelector("#main-content");
var interactEl = document.getElementById("interact");
var scoreValueEl = document.querySelector("#scoreValue");

var timerEl = document.getElementById('timer');

function welcomePage(){
    displayMessage("");
    quizContentEl.innerHTML = "";   
    var welcomeEl = document.createElement("h2");
    welcomeEl.textContent = "Welcome to Speed Quiz";
    var infoEl = document.createElement("p");
    infoEl.textContent = `Click 'Start' to begin`;
    var spanStartEl = document.createElement("span");
    spanStartEl.innerHTML = "<br />"
    var startBtn = document.createElement("button");
    startBtn.id = "start";
    startBtn.className = "btn";
    startBtn.textContent = "Start";
    spanStartEl.appendChild(startBtn);
    interactEl.appendChild(welcomeEl);
    interactEl.appendChild(infoEl);
    interactEl.appendChild(spanStartEl);
    var quizPlaceholderEl = document.createElement("div");
    quizContentEl.appendChild(quizPlaceholderEl);
    resetTimer();
}

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
function displayMessage(msgText, style) {
    let msgEl = document.getElementById("message");
    if (!style) {
        msgEl.className = "message-panel" //default
    } else {
        msgEl.className = style;
    }
    msgEl.textContent=msgText;
}
function resetTimer() {
    timerEl.textContent = QUIZ_TIME_INIT;
}
function subtractTime(decrementBy) {
    let curr = parseInt(timerEl.textContent);
    var next;
    if (decrementBy >= curr) {
        timerEl.textContent = "0";
        endQuiz();
    } else {
        next = curr - decrementBy;
        timerEl.textContent = next;
        return next;
    }
    // return next;
}
function addScore(incrementBy){
    let currScore = parseInt(scoreValueEl.textContent);
    var nextScore = currScore+incrementBy;
    scoreValueEl.textContent=nextScore;    
}
// function taskQuestionHandler(QuestionDataObj) {

var taskQuestionHandler = function(event,QuestionDataObj) {
    if (!QuestionDataObj) return false
    else {
    var correctId = QuestionDataObj['correctAnswerId'];// QuestionArray[questionId].correctAnswerId;
    var scoreValue_tmp = parseInt(scoreValueEl.textContent);
    var userAnswer = parseInt(event.target['value']);
    if (userAnswer === correctId){
        displayMessage("Correct!")
        scoreValue_tmp++;
        console.log(`Your score: ${scoreValue_tmp}`);
        scoreValueEl.textContent = scoreValue_tmp;
        return true
    } else {
        displayMessage("Incorrect")
        let retVal = subtractTime(10);
        return retVal;
        // return;
    }
}
    
};
var createQuizEl = function(QuestionDataObj) {
// var createQuizEl = function(QuestionDataObj) {
    // quizContentEl.setAttribute
    if(!QuestionDataObj.q) {
        return;
    }
    let quizAnswerChoices = QuestionDataObj.a;
    var quizContentQuestionEl = document.createElement("div");
    var quizAnswerContainerEl = document.createElement("div");
    quizContentQuestionEl.classList.add("quiz-question");
    // quizAnswerContainerEl.classList.add("quiz-input");
    // document.querySelectorAll
    // var quizQuestionHeadingEl = document.createElement("h2");
    quizContentQuestionEl.innerHTML =  `<div><h2>${QuestionDataObj.q}</h2></div>`;
    for (let i=0;i<quizAnswerChoices.length; i++) {
        var tmpButton = document.createElement("button");
        tmpButton.className="btn btn-choice"
        tmpButton.value = i;
        tmpButton.textContent = quizAnswerChoices[i];
        var tmpAnswerDiv = document.createElement("div");
        // tmpAnswerDiv.className = ""
        tmpAnswerDiv.appendChild(tmpButton);
        quizContentQuestionEl.appendChild(tmpAnswerDiv)
    }
    // quizContentQuestionEl.textContent=QuestionDataObj.q;
    // quizContentQuestionEl.appendChild(quizAnswerContainerEl);
    // quizContentEl.setAttribute('value', QuestionDataObj.qid)
    // return quizAnswerContainerEl;
    // quizAnswerContainerEl.appendChild(quizAnswerChoicesListEl)
    // quizContentQuestionEl.appendChild(quizAnswerContainerEl)
    let oldCh = quizContentEl.firstElementChild;
    quizContentEl.replaceChild(quizContentQuestionEl,oldCh);
    // quizContentQuestionEl = document.getElementById("quiz-question");
}
// var createHighscoreEntry = function(userHighscoreObj){

// }


var taskFormHandler = function(event) {
    event.preventDefault();
    
    var inputInitials = document.querySelector("input[name='user-initials']").value;
    
    if (!inputInitials) return
    var existingScore = localStorage.getItem(inputInitials)
    var scoreValue = this.value;
    if (existingScore === null) {
        localStorage.setItem(inputInitials, scoreValue);
    } else {
        if (scoreValue > existingScore) {
            localStorage.setItem(inputInitials, scoreValue);
        }
    }
    // createHighscoreEntry(userHighscoreObj);
    welcomePage();
    
}
function createFormEl(score) {

    var inputInitialsEl = document.createElement("input");
    var inputSubmitBtn = document.createElement("button");
    var inputCancelBtn = document.createElement("button");
    inputInitialsEl.placeholder = "Enter your initials";
    inputInitialsEl.name="user-initials";
    inputInitialsEl.className = "form-text";
    inputSubmitBtn.className = "btn-form";
    inputCancelBtn.className = "btn-form";
    inputSubmitBtn.type="submit";
    inputSubmitBtn.id = "save-score";
    inputCancelBtn.type="reset";
    inputCancelBtn.id = "discard-score";

    inputInitialsEl.setAttribute("type", "text");
    inputCancelBtn.textContent ="Cancel";
    inputSubmitBtn.textContent ="Submit";
    var inputFormEl = document.createElement("form");
    inputFormEl.value = score;
    // inputFormEl.textContent = "Your Score: "+score;
    quizContentEl.appendChild(inputFormEl);
    inputFormEl.appendChild(inputInitialsEl);
    inputFormEl.appendChild(inputSubmitBtn);
    inputFormEl.appendChild(inputCancelBtn);
    return inputFormEl;
};
// var saveHighScore()

function endQuiz() {
    continueState = false;
    var score = parseInt(timerEl.textContent);
    // const welcomeEl = interactEl.getElementById("welcome");
    // welcomeEl.textContent = "Game Over";
    displayMessage("Your Score: "+score);
    quizContentEl.innerHTML = "";
    let inputFormEl = createFormEl(score);
    // inputFormEl = score;
    // inputFormEl.prepend("<h2>Score");

    // inputFormEl.addEventListener('click', function(event);
    inputFormEl.addEventListener('submit', taskFormHandler );
    inputFormEl.addEventListener('reset',  function() {

        // inputFormEl.removeEventListener('submit',taskFormHandler);
        welcomePage();
    });
}
// var StartQuiz = function(event) {
resetTimer();

function StartQuiz() {
    var timeRemaining = QUIZ_TIME_INIT;
    scoreValueEl.classList.add("hidden");
    scoreValueEl.textContent=0;

    var timerInterval = setInterval( function() {
        if (continueState === true) {
            subtractTime(1);
        } else {
            clearInterval(timerInterval);
        }
        
    }, 1000);
}
var nextQid=0;
var thisQid=0;
var continueState=true;
function eventDelegator(event) {
    if(!(event.target.matches('#start'))) return;
    console.log("eventDelegator recieved start 1");
    interactEl.innerHTML="";
    console.log("eventDelegator recieved start 2");
    StartQuiz();
    thisQid = 0;
    nextQid = 0;
    var answerOptions = QuestionArray[0].a;
    var questionText = QuestionArray[0].q;
    var correctAnswer = QuestionArray[0].correctAnswerId;
    
    var QuestionDataObj = {
        qid: 0,
        q: questionText,
        a: answerOptions,
        correctAnswerId : correctAnswer
        };
    
    quizContentEl.addEventListener("click",quizEventHandler);
    createQuizEl(QuestionDataObj);
}
function quizEventHandler(event) {
    // event.preventDefault();
    if (!(event.target.matches('.btn-choice'))) return;
    // else {
    
    console.log("got answer")
    var uanswer = parseInt(event.target['value']);
    // let thisQid = nextQid;
    // let thisQ = QuestionArray[thisQid];
        nextQid++;
    var correctAnswer = QuestionArray[thisQid].correctAnswerId;
    // let answerKey = thisQ.correctAnswerId;
    console.log(uanswer);
    // console.log(answerKey);
    console.log(correctAnswer);

    // console.log
    // var continueState;
    if (uanswer === correctAnswer) {
        console.log("right answer"); 
        addScore(10);
        displayMessage("Correct!")
    } else {
        console.log("Wrong answer");
        subtractTime(10);
        displayMessage("Incorrect")
    }
    if (nextQid < QuestionArray.length) {
        thisQid++;
        var answerOptions = QuestionArray[nextQid].a;
        var questionText = QuestionArray[nextQid].q;
        var QuestionDataObj = {
            qid: nextQid,
            q: questionText,
            a: answerOptions,
            correctAnswerId : correctAnswer
            };
        createQuizEl(QuestionDataObj);
    } else {
        if (continueState === true){
            endQuiz();
        } else {
            return;
        }
        // continueState = false;
    }
}
// }
    
    // let nextQ = QuestionArray[nextQid];

    // if (continueState) {
    // nextQid = nextQid + 1;

    
        //  nextQ = QuestionArray[nextQid];
    // thisQid++;


    
function getEventType(event) {
    const log = document.getElementById('log');
    console.log(event.target);
    log.innerText = `${event.type} Target:${event.target}
    ${log.innerText}`;
    // console.log(event.target);
}
containerEl.addEventListener('click', eventDelegator);