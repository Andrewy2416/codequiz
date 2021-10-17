var questions = [{
    title: "Commonly used data types DO NOT include..",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    answer: "Alerts"
},
{
    title: "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
    answer: "Quotes"
},
{
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
    answer: "Parentheses"
},
{
    title: "Arrays in Javascript can be used to store ____.",
    choices: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the above"],
    answer: "All of the above"
},
{
    title: "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
    choices: ["Last", "Put", "Push", "Pop"],
    answer: "Push"
}
]

var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

function start() {

    timeLeft = 75;
    document.getElementById("timeLeft").innerHTML = timeLeft;
    
    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;
        //proceed to end the game function when timer is below 0 at any time
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame(); 
        }
    }, 1000);

    next();
}

//end's the game when timer runs out and added textcontent for when end game window shows up
function endGame() {
    clearInterval(timer);
    
    var quizContent = `
    <h2>Game over!</h2>
    <h3>You got a ` + score +  ` /100!</h3>
    <h3>That means you got ` + score / 20 +  ` questions correct!</h3>
    <input type="text" id="name" placeholder="First name"> 
    <button onclick="setScore()">Set score!</button>`;
    
    document.getElementById("quizBody").innerHTML = quizContent;
    }
    
//local storage functions
function setScore() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName",  document.getElementById('name').value);
    getScore();
    }
    
    
    function getScore() {
    var quizContent = `
    <h2>` + localStorage.getItem("highscoreName") + `'s highscore is:</h2>
    <h1>` + localStorage.getItem("highscore") + `</h1><br> 
    
    <button onclick="clearScore()">Clear score!</button><button onclick="resetGame()">Play Again!</button>
    
    `;
    
    document.getElementById("quizBody").innerHTML = quizContent;
    }
    
    //function to clear score from local storage
    function clearScore() {
    localStorage.setItem("highscore", "");
    localStorage.setItem("highscoreName",  "");
    
    resetGame();
    }

    //resets game
function resetGame() {
    clearInterval(timer);
    score = 0;
    currentQuestion = -1;
    timeLeft = 0;
    timer = null;
    
    document.getElementById("timeLeft").innerHTML = timeLeft;
    
    var quizContent = `
    <h1>
        JavaScript Quiz!
    </h1>
    <h3>
        Click To Start Quiz   
    </h3>
    <button onclick="start()">Start!</button>`;
    
    document.getElementById("quizBody").innerHTML = quizContent;
    }
    
    //deduct 15seconds from the timer if user chooses an incorrect answer
    function incorrect() {
    timeLeft -= 15; 
    next();
    }
    
    //increases the score by 20points if the user chooses the correct answer
    function correct() {
    score += 20;
    next();
    }

    
