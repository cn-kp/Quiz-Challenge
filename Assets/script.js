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
var hidden2=document.querySelector("#initial-hide");


//creating a variable storing my questions
var questionBank=[
    {
        question:"what is js commonly known as",
        answers:["javascript", "javasoap","javvasrcipt", "jevascr1pt"],
        correct: "javascript",
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

    {
        question:"what is used in conjunction with a if statement to indicate an alternative action",
        answers:["for","while","else","let"],
        correct:"else",
    },

    {   
        question:"which of the following is not a tag used in html",
        answers:["<Head>","<body>","<learn>","<footer>"],
        correct:"<learn>",
    },
    {
        question:"which of the following is not a tag used in html",
        answers:["<Head>","<body>","<learn>","<footer>"],
        correct:"<learn>",
    },
    {
        question:"which of the following is not a tag used in html",
        answers:["<Head>","<body>","<learn>","<footer>"],
        correct:"<learn>",
    },
    {
        question:"what is js commonly known as",
        answers:["javascript", "javasoap","javvasrcipt", "jevascr1pt"],
        correct: "javascript",
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

    {
        question:"what is used in conjunction with a if statement to indicate an alternative action",
        answers:["for","while","else","let"],
        correct:"else",
    },
]

//variables for timer
var timerCount=60;
var timePenalty=10;

//listens for clicks made to start button and runs the start quiz function
startButton.addEventListener("click",startQuiz);

//function for starting the quiz
function startQuiz(){
    timerInterval();
    console.log("started quiz");
    for (var i = 0;i<hidden1.length;i++){
        hidden1[i].setAttribute("style","display:none")};
    
    //revealing the question box
    unhide.style.display="block"

    //calling set question function
    setQuestion();
    
    //score section
    score=0;
}

var questionCount = 0

function timerInterval() {
        let timer1 = 
        setInterval(function(){
        let timerText=document.querySelector("#timer")
        timerCount--;
        timerLeft.textContent=timerCount;
        console.log(timerCount)
        
        if (timerCount <= 0){
            clearInterval(timer1);
            //if timer hits 0 or less then the game is over and runs the end quiz function
            endQuiz();
            timerLeft.textContent="time is up";
        }
    
        },1000)
}

//question function - sets the questions based on the question index and creates the answer options
function setQuestion(){
    currentQuestion.innerText = questionBank[questionCount].question;
    console.log(questionCount);
    answerChoices.innerHTML=""

    for (var i=0;i<questionBank[questionCount].answers.length;i++){
        var answer=document.createElement("button");
        answer.setAttribute("id", "answers")
        answer.textContent=questionBank[questionCount].answers[i];
        answerChoices.appendChild(answer);
    }
    var answerButtons = document.querySelectorAll("#answers");
    
    for (i=0;i<answerButtons.length;i++){
        console.log(answerButtons)
        answerButtons[i].addEventListener("click",selectAnswer);
        
    };
}

//compared the answer selected by user to the correct answer and updates question index and runs set question again
function selectAnswer(event){
    if(event.target.textContent===questionBank[questionCount].correct){
        score++;
        questionCount++;
        scoreCount.innerText=score;
        setQuestion();
    }else {
        console.log(event.target.textContent);
        questionCount++;
        timerCount=timerCount-10;
        setQuestion();
    }
}

function endQuiz (){
    questionBox.innerHTML=""
    console.log("hi peeps")
    hidden2.style.display="none";
    
    scoreBox.style.display="block";
    timerText.style.display="none";


    //creating the page for when game is over

    var endH1=document.createElement("h1");
    endH1.textContent="Game Over";
    questionBox.appendChild(endH1);

    var endScore=document.createElement("p");
    endScore.textContent="your end score is: " + score;
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

    var allScores =localStorage.getItem("allScores");
    allScores=JSON.parse(allScores)
    allScores.push(finalScore);

}



