# Quiz Game

## Description

This program is created to test the skill of the user in a series coding related questions. This program heavily relies on javascript to dynamically update the page with elements such as the timer, setting up the questions and to update and save the scores. As of now the questions are just dummy questions just used to ensure the application works to a certain extent.

## Deployment
- [GitHub Repository](https://github.com/cn-kp/Quiz-Challenge)
- [GitHub Deployed Link](https://cn-kp.github.io/Quiz-Challenge/)

## Installation

To install this program all you need is a text editior. I would recommend Visual Studio Code. then download or clone the repository of the program

## Usage

When the program is loaded, the user will be presented with a breif instruction and a start button option to run the quiz. 
![home page of quiz](./Assets/images/home.PNG)

The page then listens for a click function on the start button which will begin the quiz.
The User will then be displayed a question and the 60second timer will begin. The user will be required to select the answer to the displayed question. If the selected answer is correct, it will add 1 point to the user's score and the program will cycle to the next question, otherwise will penalise the user with a 10sec deduction and cycle to the next question.
![functionality of the program](./Assets/images/questions.PNG)

Once the timer hits 0, the questions will disappear and the final score will be displayed, with an option to submit a name associated with the user. This will then be saved to local storage and can be accessed, using a link to an external html. 
![end page](./Assets/images/end.PNG)

Unfortunately, the highest score leaderboard is not working and I am unsure how to debug this issue.

## Credits
This application was created by Kevin with the help of Instructors and Stack Overflow

