//getting my variable from html
var startButton = document.querySelector(".start-button")
var timerLeft = document.querySelector(".timer-count")
var score = document.querySelector(".current-score")
var hidden1 = document.querySelectorAll(".hide")
var displayQuestions = document.querySelector(".question-box")
var currentQuestion = document.querySelector("#questions")
var answerChoices = document.querySelector("#options")
var unhide = document.querySelector("#initial-hide")


var questionCount = 0


//creating a variable storing my questions
var questionBank=[
    {
        question:"what is js commonly known as",
        answers:["javascript", "java soap","javva srcipt", "jeva scr1pt"],
        correct: "javascript"
    },

    {
        question:"what shortcut is used to comment a section in html",
        answers:["CTRL + /", "Shift + |","Alt + C", "CTRL + ALT"],
        correct: "CTRL + /",
    },

    {
        question: "what brackets are used for arrays",
        answers:["()","{}","[]","<>"],
        correct:"[]",
    },
]


startButton.addEventListener("click",startQuiz);

function startQuiz(){

    console.log(hidden1);
    console.log("started quiz");
    //hidden1.style.display ="none";
    for (var i = 0;i<hidden1.length;i++){
        hidden1[i].setAttribute("style","display:none")};
    
    //revealing the question box
    unhide.style.display="block"
    

    //creating my timer for the game
    timerCount=60;
    var timerInterval = setInterval(function(){
    timerCount--;
    timerLeft.textContent=timerCount;

    if (timerCount == 0){
        clearInterval(timerInterval);
    }
    },1000)

    //calling set question function
    setQuestion()
}

function setQuestion(){
    currentQuestion.innerText = questionBank[questionCount].question;
    
    for (var i=0;i<questionBank[questionCount].answers.length;i++){
        var answer=document.createElement("button");
        answer.setAttribute("id", "answers")
        answer.textContent=questionBank[questionCount].answers[i];
        answerChoices.appendChild(answer);

    

        // currentQuestion.innerText = questionBank[i].question;
        
        //answerChoices.innerText = questionBank[i].answers
        
        
    }
    var answerButtons = document.querySelectorAll("#answers");
    for (i=0;i<answerButtons.length;i++){
        console.log(answerButtons)
        answerButtons[i].addEventListener("click",selectAnswer);
    };
}


// var answerButtons = document.getElementById("answers");
// answerButtons.addEventListener("click",selectAnswer)

function selectAnswer(){
    console.log("hi")

}


