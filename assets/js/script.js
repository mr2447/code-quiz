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

//start game with a score: time of 24
var time = 50;
//declare intervalId as a variable to use to call time 
var intervalId;
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
//cycle through the questions starting at 0
var questionIndex = 0
var choicesIndex = 0

//function to start game
var startQuiz = function() {
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

function verifyResponse () {
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
        showEndScreen();
    }
} 
//function to stop timer
function endQuiz () {
    clearInterval(intervalId);
}
intervalId = setInterval(function(){
    time --;
    timer.textContent = time
    if (time <= 0) {
        endQuiz();
    } 
},1000);

function showEndScreen () {
    questionsScreen.setAttribute("class", "hide");
    endScreen.removeAttribute("class", "hide");
    form.addEventListener("submit", showFeedBack);

};

function showFeedBack () {
    
    endScreen.setAttribute("class", "hide");
    feedBack.removeAttribute("class", "hide");
}




//  //show total at the end
// alert("You got " + time)
startBtn.addEventListener("click", startQuiz);