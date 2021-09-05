var startBtn = document.querySelector("#startBtn");
var startScreen = document.querySelector("#start-screen");
var questionsScreen = document.querySelector("#questions");
var endScreen = document.querySelector("#end-screen");
var feedback = document.querySelector ("#feedback");
var timer = document.querySelector("#timer");
var time = 10;
var intervalId;
var questions = [
    {
        question: "1. What number is?",
        choices: ["1", "2", "3", "4"],
        answer: "3",
    },
    {
        question:"2. What number is?",
    }
];
for (var i = 0; i < questions.length; i++) {
    console.log(questions[i]);
  }
var startQuiz = function() {
    startScreen.setAttribute("class", "hide");
    questionsScreen.removeAttribute("class", "hide");
    intervalId = setInterval(function(){
        time --;
        timer.textContent = time
        if (time <= 0) {
            endQuiz();
        } 
    },1000);
}
//function to stop timer
function endQuiz () {
    clearInterval(intervalId);
}
 
startBtn.addEventListener("click", startQuiz);