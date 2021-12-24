var scoreList = document.querySelector(".scoreList");
var clearButton=document.querySelector(".reset")

clearButton.addEventListener("click",function(){
    localStorage.clear();
})
//attempts to retrive allscore data from local storage 
var scoresAppend=localStorage.getItem("allScores");
scoresAppend=JSON.parse("allScores");
console.log(scoresAppend)

//appends all the scores into a list 
var leaderBoard = document.createElement("li");
if (scoresAppend!==null){
    for ( i=0; i<allScores.length;i++){
        leaderBoard.textContent = scoresAppend[i].initials + " " + scoresAppend[i].score;
        scoreList.appendChild(leaderBoard);
    }
}
