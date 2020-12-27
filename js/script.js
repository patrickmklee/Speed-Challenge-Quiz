// Define master array with question and FOUR answer options
var QuestionArray = [ {
    qid : 0,
    q : "Which of these HTML tags typically provides the 'metadata' of a webpage?",
    a : ["<div>", "<head>", "<h1>", "<body>"],
    "correctAnswerId" : 1
    },
    {
        qid : 1,
        q : "Which HTML attribute is used to insert a link to another page or section of content?",
        a : ["id", "style", "href", "link"],
        "correctAnswerId" : 2
    },
    { 
    qid : 2,
    q: "CSS is an acronym for",
    a: [ "Custom Style Sheets", "Cascading Style Sheets", "Colored Silly Socks", "Cascaded Style Sheet"],
    "correctAnswerId" : 1
    },
    
    { 
    qid : 3,
    q: "How can the following line be shortened: counter = counter - 1", 
    a: ['counter--', 'counter=counter-1', '--counter;', 'counter--1'],
    "correctAnswerId" : 0
    },
{
    qid : 4,
    q : "JavaScript can be used to",
    a : ["Add new elements", "Change style of elements", "Store information in the browser cache", "All of the above"],
    "CorrectAnswerId" : 3
}
];


const QUIZ_TIME_INIT = 30;
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
var containerEl = document.querySelector("#main-content");
var interactEl = document.getElementById("interact");
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
function welcomePage(){
    displayMessage("");
    quizContentEl.innerHTML = "";   
    var welcomeEl = document.createElement("h2");
    welcomeEl.textContent = "Welcome to the Speed Challenge Quiz";
    var infoEl = document.createElement("p");
    infoEl.textContent = "Click 'Start' to begin";
    var startBtn = document.createElement("button");
    startBtn.id = "start";
    startBtn.className = "btn";
    startBtn.textContent = "Start";
    interactEl.appendChild(welcomeEl);
    interactEl.appendChild(infoEl);
    interactEl.appendChild(startBtn);
    var quizPlaceholderEl = document.createElement("div");
    quizContentEl.appendChild(quizPlaceholderEl);
    resetTimer();
    // QUIZ_TIME_INIT;

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
    const msgEl = document.getElementById("message");
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
        return;
    } else {
        next = curr - decrementBy;
        timerEl.textContent = next;
    }
    return next;
}
function addScore(incrementBy){
    let currScore = parseInt(scoreValueEl.textContent);
    var nextScore = currScore+incrementBy;
    scoreValueEl.textContent=nextScore;    
}
// function taskQuestionHandler(QuestionDataObj) {

var taskQuestionHandler = function(QuestionDataObj) {
    if (!QuestionDataObj) return false
    else {
    var questionId = quizContentEl.getAttribute('value');//JSON.parse(quizContentEl.getAttribute('value'));
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
function createQuizEl(QuestionDataObj) {
// var createQuizEl = function(QuestionDataObj) {
    // quizContentEl.setAttribute
    if(!QuestionDataObj) {
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
    // quizContent
    // quizContentQuestionEl.textContent =QuestionDataObj.q;
    // quizContent.innerHTML = `<h2>${QuestionDataObj.q}</h2>`;
    // var quizAnswerChoicesListEl = document.createElement("ul");
    // quizAnswerChoicesListEl.classList.add("answer-list-ul");
    // quizAnswerChoices.classList.add("")

    // var quizChoicesEl = []
    for (var i=0;i<quizAnswerChoices.length; i++) {
        console.log("Element "+ i);
        let tmpButton = document.createElement("button");
        tmpButton.className="btn btn-choice"
        tmpButton.value = i;
        tmpButton.textContent = quizAnswerChoices[i];
        let tmpAnswerDiv = document.createElement("div");
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

var taskFormHandler = function(event) {
    event.preventDefault();
    var inputInitials = document.querySelector("input[name='user-initials']").value;
    // var scoreValue = document.querySelector(
    if (!inputInitials) return
    console.log("submit initials");
    console.log(this.value);
    console.log(inputInitials);
    // localStorage.setItem("score", this.value);
    localStorage.setItem(inputInitials, this.value);
    welcomePage();
}
function createFormEl(score) {

    var inputInitialsEl = document.createElement("input");
    var inputSubmitBtn = document.createElement("button");
    var inputCancelBtn = document.createElement("button");
    inputInitialsEl.placeholder = "Enter your initials";
    inputInitialsEl.name="user-initials";
    inputInitialsEl.className = "form-text";
    inputSubmitBtn.className = "btn";
    inputCancelBtn.className = "btn";
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
    // taskFormHandler(inputFormEl);
    // interactEl.appendChild(inputFormEl)
};
// var saveHighScore()

function endQuiz() {
    var score = scoreValueEl.textContent;
    // const welcomeEl = interactEl.getElementById("welcome");
    // welcomeEl.textContent = "Game Over";
    displayMessage("Your Score: "+scoreValueEl.textContent);
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
    
    
    // signUpButton.addEventListener('click', function(event) {
    //     event.preventDefault();
      
    //     var email = document.querySelector('#email').value;
    //     var password = document.querySelector('#password').value;
      
    //     if (email === '') {
    //       displayMessage('error', 'Email cannot be blank');
    //     } else if (password === '') {
    //       displayMessage('error', 'Password cannot be blank');
    //     } else {
    //       displayMessage('success', 'Registered successfully');
      
    //       // Save email and password to localStorage using `setItem()`
    //       localStorage.setItem('email', email);
    //       localStorage.setItem('password', password);
    //       // Render the last registered email and password
    //       renderLastRegistered();
    //     }
    //   });
}
// var StartQuiz = function(event) {
function StartQuiz() {
    // startEl.removeEventListener()
    // var currentScore = 0;
    var timeRemaining = QUIZ_TIME_INIT;
    // interactEl.innerHTML = "";
    scoreValueEl.classList.add("hidden");
    scoreValueEl.textContent=0;
    var answerOptionsArrayEl = [];
    // const questionObj = QuestionArray.pop();
    // const questionHTMLObj = createQuizEl(questionObj);
    // var questionObj = QuestionArray.pop();
    // var questionObj = QuestionArray.pop();
    // createQuestionEl(questionObj);
    // for (var qidx=0; qidx<QuestionArray.length; qidx++){
    // let questionObj = QuestionArray[qidx]
    // createQuizEl(questionObj);
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
    // var exitCase = false;
    var timerInterval = setInterval( function() {

        var timeRemaining = subtractTime(1);
        if (!timeRemaining) {
            console.log("Timer Expired");
            
            clearInterval(timerInterval);
            endQuiz();
            // return 1;
        } else {
            console.log("Enter timerInterval: "+ timeRemaining)
        }
        
    }, 1000);
    // return taskQuestionHandler()
    // var exitInterval = setInterval( function() {
    //         if (timerEl.textContent === "0") {
    //             exttCase = true;
    //             quizContentEl.textContent = "Game Over";
    //             clearInterval(exitInterval);
    //             return 1;
    //         } else {

    //         }
    //     }, 200);
    // return (timeRemaining === undefined);
}
var thisQid;

function eventDelegator(event) {
    if (!(event.target.matches('.btn-choice')||event.target.matches('#start'))) return;
    // let qidquestionObj.push(QuestionArray[qid]);

    if (event.target.matches('#start') ){
        console.log("eventDelegator recieved start 1");
        interactEl.innerHTML="";
        console.log("eventDelegator recieved start 2");
        StartQuiz();
        thisQid = 0;
    } else if (event.target.matches('.btn-choice')){
            console.log("got answer")
            // qid++;
            // let lastQuestionObj = questionObj.pop();
            // questionObj.push(QuestionArray[qid]);
            // let questionObj = QuestionArray.pop();
            
            var uanswer = parseInt(event.target['value']);
            var answerKey = QuestionArray[thisQid].correctAnswerId;
            console.log(uanswer);
            console.log(answerKey)
            // console.log
            var continueState;
            if (uanswer === answerKey) {
                console.log("right answer"); 
                addScore(10);
                displayMessage("Correct!", )
                continueState = 1;
            } else {
                console.log("Wrong answer");
                continueState = subtractTime(10);
                displayMessage("Incorrect")
            }
            let nextQid = thisQid + 1;
            if (!QuestionArray[nextQid] || !continueState){
                return endQuiz();
            }
            if (QuestionArray[nextQid] != undefined ) {
                // quizContentEl.innerHTML = "";
                thisQid++;
            } 
            else {
                return endQuiz();
            }
            
            // qid++;
            // return createQuizEl(questionObj);
    }
    let answerOptions = QuestionArray[thisQid].a;
    let questionText = QuestionArray[thisQid].q;
    let correctAnswer = QuestionArray[thisQid].correctAnswerId;
    
    var QuestionDataObj = {
        qid: thisQid,
        q: questionText,
        a: answerOptions,
        correctAnswerId : correctAnswer
        };
    // localStorage.setItem('check': correctAnswer);
    createQuizEl(QuestionDataObj);

        
        
        // return taskQuestionHandler(QuestionArray[qid]);
        // if (!questionResult) {
        //     endQuiz();
        //     console.log("taskQuestionHandler returned false")
        // } else {
        //     qid++;
        //     let questionObj = QuestionArray[qid]
        //     createQuizEl(questionObj);
        //     console.log("questionResult: "+questionResult);
        // }
  

    
 
    

            // quizContentEl.appendChild(questionHTMLObj);
            // quizContentEl.setAttribute('value', questionObj.qid)

            // let questionHTMLObj = createQuizEl(questionObj);
            // quizContentEl.appendChild(questionHTMLObj);
            // quizContentEl.setAttribute('value', questionObj.qid)
        // }

    
    // console.log(event.target)
}
resetTimer();
function getEventType(event) {
    const log = document.getElementById('log');
    console.log(event.target);
    log.innerText = `${event.type} Target:${event.target}
    ${log.innerText}`;
    // console.log(event.target);
}
containerEl.addEventListener('click', eventDelegator);