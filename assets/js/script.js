var startBtn = document.querySelector("#startBtn");
var startScreen = document.querySelector("#start-screen");
var questionsScreen = document.querySelector("#questions");
var endScreen = document.querySelector("#end-screen");
var feedback = document.querySelector ("#feedback");
var timer = document.querySelector("#timer");
var questionIndex = 0
//start game with a score: time of 24
var time = 50;
//declare intervalId as a variable to use to call time 
var intervalId;
//The array of questions for the game.
var quizQuestions = [
    {
        question: "1. What number is one?",
        choices: ["A", "2", "3", "4"],
        answer: "1",
    },
    {
        question:"2. What number is two?",
        choices: ["6", "2", "3", "4"],
        answer: "2"
    },
    {
        question:"3. What number is three?",
        choices: ["7", "2", "3", "4"],
        answer: "3",
    }
];

var questionIndex = 0
//function to start game
var startQuiz = function() {
    startScreen.setAttribute("class", "hide");
    questionsScreen.removeAttribute("class", "hide");
    showQuestion();
    

}
//function to  showQuestions
function showQuestion () {

    // variable to store the HTML output, which includes the questions and answer choices 
    var output = [];

    // for each question...
    
        //Display current question to user
        currentQuestion = (quizQuestions[questionIndex].question);
        currentChoices = (quizQuestions[questionIndex].choices);
    
        //write the first question in h1 of questionsScreen .textContent(currentQuestion) after this step
        var questionName = document.createElement('h1');
        questionName.textContent = (quizQuestions[questionIndex].question);
        //append questionName to questionsScreen
        questionsScreen.appendChild(questionName);

        var questionList = document.createElement('ul');
        for (var i = 0; i < currentChoices.length; i++) {
            console.log(currentChoices[i])
            var questionListChoices = document.createElement('li');
            questionListChoices.textContent = currentChoices[i];
            questionList.appendChild(questionListChoices);
        }
        questionsScreen.appendChild(questionList);
        questionsScreen.addEventListener("click", verifyResponse)
    };

function verifyResponse () {
    questionIndex++;
    showQuestion();

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

//  //show total at the end
// alert("You got " + time)
startBtn.addEventListener("click", startQuiz);