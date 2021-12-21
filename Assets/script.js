//getting my variable from html
var startButton = document.querySelector(".start-button")
var timerLeft = document.querySelector(".timer-count")
var scoreCount = document.querySelector(".current-score")
var hidden1 = document.querySelectorAll(".hide")
var displayQuestions = document.querySelector(".question-box")
var currentQuestion = document.querySelector("#questions")
var answerChoices = document.querySelector("#options")
var unhide = document.querySelector("#initial-hide")
var scoreBox = document.querySelector("#scores")
var timerText=document.querySelector("#timer")
var questionBox =document.querySelector("#questionBox")


//creating a variable storing my questions
var questionBank=[
    {
        question:"what is js commonly known as",
        answers:["javascript", "javasoap","javvasrcipt", "jevascr1pt"],
        correct: 1,
    },

    {
        question:"what shortcut is used to comment a section in html",
        answers:["CTRL + /", "Shift + |","Alt + C", "CTRL + ALT"],
        correct: 1,
    },

    {
        question: "what brackets are used for arrays",
        answers:["()","{}","[]","<>"],
        correct:3,
    },

    {
        question:"what is used in conjunction with a if statement to indicate an alternative action",
        answers:["for","while","else","let"],
        correct:3,
    },

    {   
        question:"which of the following is not a tag used in html",
        answers:["<Head>","<body>","<learn>","<footer>"],
        correct:3,
    }
]

//additional variables
var timerCount=60;
var timePenalty=10;

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
    var timerInterval = setInterval(function(){
    timerCount--;
    timerLeft.textContent=timerCount;

    if (timerCount == 0){
        clearInterval(timerInterval);
        endQuiz();
        timerLeft.textContent="time is up";
    }

    },1000)

    //calling set question function
    setQuestion();
    
    //score section
    score=0;
}

var questionCount = 0

//question function
function setQuestion(){
    currentQuestion.innerText = questionBank[questionCount].question;
    
    for (var i=0;i<questionBank[questionCount].answers.length;i++){
        var answer=document.createElement("button");
        answer.setAttribute("id", "answers")
        answer.textContent=questionBank[questionCount].answers[i];
        answerChoices.appendChild(answer);

    

        // currentQuestion.innerText = questionBank[i].question;
  
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

        // if (answerButtons[i]==questionBank[questionCount].correct){
        
        //     score++;
        //     scoreCount.innerText=score
        // }
        console.log("hi");
}

function endQuiz (){
    questionBox.innerHTML=""
    scoreBox.style.display="none";
    timerText.style.display="none";


    //creating the page for when game is over

    var endH1=document.createElement("h1");
    endH1.textContent="Game Over";
    questionBox.appendChild(endH1);

    var endScore=document.createElement("p");
    p.textContent="your end score is: " + score;
    questionBox.appendChild(endScore);

    var labelName = document.createElement("label")
    labelName.textContent="enter your name:";
    questionBox.appendChild(labelName);

    var userNameInput=document.createElement("input");
    userNameInput.setAttribute("type","text");
    userNameInput.textContent="";
    questionBox.appendChild(userNameInput);

    var summitButton=document.createElement("button");
    summitButton.setAttribute("type","sumbit");
    summitButton.textContent="submit Name"
    questionBox.appendChild(summitButton)

    //adding click listener to submit button
    summitButton.addEventListener("click", submission())
};   

function submission(){
    var userName = userNameInput.value;
    var finalScore = {
        userName: userName,
        score: score,
    }
    
}



