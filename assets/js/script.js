var startBtn = document.querySelector("#startBtn");
var startScreen = document.querySelector("#start-screen");
var questionsScreen = document.querySelector("#questions");
var endScreen = document.querySelector("#end-screen");
var feedback = document.querySelector ("#feedback");
var timer = document.querySelector("#timer");
var questionTitle = document.querySelector("#question-title");
var questionList = document.querySelector("#question-list");
var endScreen = document.querySelector("#end-screen");
var submitBtn = document.querySelector("#submit-btn");
var feedBack = document.querySelector("#feedback");
var form = document.querySelector("#task-form");
var goBack = document.querySelector("#go-back-btn");
var clearScore = document.querySelector("#clear-score-btn");
var finalScore = document.querySelector("#final-score");
var initialInput = document.querySelector("#initial");
var scoreList = document.querySelector("#score-list")

//start game with a score: time of 24
var time = 50;

//declare intervalId as a variable to use to call time 
//The array of questions for the game.
var quizQuestion = [
    {
        question: "1. What letter is A?",
        choices: ["A", "B", "C", "D"],
        answer: "A",
    },
    {
        question:"2. What number is two?",
        choices: ["1", "2", "3", "4"],
        answer: "2"
    },
    {
        question:"3. What number is eight?",
        choices: ["5", "6", "7", "8"],
        answer: "8",
    }
];

var storedInformation = JSON.parse(localStorage.getItem("ScoreArray") )|| [];



//cycle through the questions starting at 0
var questionIndex = 0
var choicesIndex = 0

//function to start game
var startQuiz = function() {
    startTimer()
    var questionIndex = 0
    startScreen.setAttribute("class", "hide");
    questionsScreen.removeAttribute("class", "hide");
        
    showQuestion();
    for (var i = 0; i < quizQuestion[questionIndex].choices.length; i++) {
    showChoices();
    };  
}

//function to  showQuestions
function showQuestion () {

    //Display current question and choices 
    var currentQuestion = (quizQuestion[questionIndex].question);
    
    //write the question in h1
    questionTitle.textContent = currentQuestion;
    
};

// show choice function

function showChoices () {
   
    var currentChoice = (quizQuestion[questionIndex].choices[choicesIndex]);
    var btn = document.createElement ("button");
    btn.setAttribute("class", "button");
    btn.innerHTML = currentChoice;
    + "<br>";
    questionList.appendChild(btn);
    choicesIndex++;
    btn.addEventListener("click", verifyResponse);
};

function verifyResponse (event) {
    
    //store chosenChoice
    event.target.innerHTML
    var chosenChoice = event.target.innerHTML;

    if (chosenChoice === quizQuestion[questionIndex].answer) {
        console.log("correct!")
    } else {
        console.log("wrong!");
        time-=10;
    }
 
    //dispaly
    questionIndex++;
    if (questionIndex < quizQuestion.length) {
        choicesIndex = 0;
        showQuestion();
        questionList.innerHTML = ""
        for (var i = 0; i < quizQuestion[questionIndex].choices.length; i++) {
        showChoices();
        };
    } else {
        endQuiz()
        console.log(time);
        showEndScreen();
    }
} 
//function to stop timer
function endQuiz () {
    clearInterval(intervalId);
    console.log(time);
}

function startTimer () {
    intervalId = setInterval(function(){
        time --;
        timer.textContent = time;
        console.log(time);
        if (time <= 0) {
        endQuiz();
        minusTime();
        }  
    },1000);
};


function showEndScreen () {
    questionsScreen.setAttribute("class", "hide");
    endScreen.removeAttribute("class", "hide");
    
    finalScore.innerHTML = time;
    var checkScore = localStorage.getItem("store-final-score")

};
form.addEventListener("submit", function (event) {
    saveInitial(event);
    showFeedBack(event);
});

function saveInitial (event) {
    event.preventDefault();
    var scoreObject = {"score": time, "initials": initial.value}

    storedInformation.push(scoreObject);
    localStorage.setItem("ScoresArray", JSON.stringify(storedInformation));

};
  

function showFeedBack (event) {
    console.log("showing feedBack");
    event.preventDefault()
    endScreen.setAttribute("class", "hide");
    feedBack.removeAttribute("class", "hide");
    //var playerInformations = JASON.parse(localStorage.getItem("ScoresArray"));
    var initial = storedInformation[0].initials;
    var time = storedInformation[0]. score;
   scoreList.textContent = initial + " - " + time;
   
    goBack.addEventListener("click", playAgain);
    clearScore.addEventListener("click", alertScore);

};

function playAgain () {

    showStartScreen();
    console.log(quizQuestion[questionIndex])

}

function showStartScreen () {
    feedBack.setAttribute("class", "hide");
    startScreen.removeAttribute("class", "hide");
};

function alertScore () {
    localStorage.removeItem("store-initial");
    localStorage.removeItem("store-final-score");
    scoreList.textContent = "";
}



//  //show total at the end
// alert("You got " + time)
startBtn.addEventListener("click", startQuiz);