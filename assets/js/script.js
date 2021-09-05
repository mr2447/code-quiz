var startBtn = document.querySelector("#startBtn");
var startScreen = document.querySelector("#start-screen");
var questionsScreen = document.querySelector("#questions");
var endScreen = document.querySelector("#end-screen");
var feedback = document.querySelector ("#feedback");
var timer = document.querySelector("#timer");
//start game with a score: time of 24
var time = 50;
//declare intervalId as a variable to use to call time 
var intervalId;
//The array of questions for the game.
var quizQuestions = [
    {
        question: "1. What number is one?",
        choices: ["1", "2", "3", "4"],
        answer: "1",
    },
    {
        question:"2. What number is two?",
        choices: ["2", "4", "5", "6"],
        answer: "2"
    },
    {
        question:"3. What number is three?",
        choices: ["7", "8", "9", "10"],
        answer: "3",
    }
];

//function to start game
var startQuiz = function() {
    startScreen.setAttribute("class", "hide");
    questionsScreen.removeAttribute("class", "hide");
    // Loop over every question object
for (let i = 0; i < quizQuestions.length; i++) {
    //Display current question to user
    currentQuestion = (quizQuestions[i].question);

    //write the first question in h1 of questionsScreen
    var questionName = document.createElement('h1');
    var questionList = document.createElement('ul');
    var questionListChoices = document.createElement('li');
    questionListChoices.textContent = (quizQuestions[i].choices[i]);
    questionName.textContent = (quizQuestions[i].question);
    questionList.appendChild(questionListChoices);
    questionsScreen.appendChild(questionName);
    questionsScreen.appendChild(questionList);
    

    //Compare answers
    // if (
    //     (questions.answer === 2)
    // ) { time - 10;
    //     alert("Wrong!");
    // } else {
    //     alert("Correct!");
    // }
};

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
}

//  //show total at the end
// alert("You got " + time)
startBtn.addEventListener("click", startQuiz);