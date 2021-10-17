var questions = [{
    title: "Commonly used data types DO NOT include..",
    choices: ["strings( )", "booleans( )", "alerts( )", "numbers( )"],
    answer: "alerts( )"
},
{
    title: "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas( )", "curly brackets( )", "quotes( )", "parenthesis( )"],
    answer: "quotes( )"
},
{
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes( )", "curly brackets( )", "parentheses( )", "square brackets( )"],
    answer: "parentheses( )"
},
{
    title: "Arrays in Javascript can be used to store ____.",
    choices: ["numbers and strings( )", "other arrays( )", "booleans( )", "all of the above( )"],
    answer: "all of the above( )"
},
{
    title: "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
    choices: ["last( )", "put( )", "push( )", "pop( )"],
    answer: "push( )"
}
]

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