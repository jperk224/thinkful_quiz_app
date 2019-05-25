'use strict';
//////////Model//////////
const questions = [
    {
        id: 1,
        question: 'Who holds the record for the most homeruns in Atlanta Braves franchise history?',
        answerA: 'Hank Aaron',
        answerB: 'Chipper Jones',
        answerC: 'Dale Murphy',
        answerD: 'Eddie Mathews'
    }
]



//////////controller//////////
function createOpeningQuestion() {
    // render the first random question from 'questions'
    // to be hidden by renderWelcome
    // and then unhidden when the user starts the game 
}

function renderWelcome() {
    // render the welcome form to start the game or quit
}



//////////Event Listeners//////////
function startGame() {
    $(".js-start, .js-quit").on('click', function(event) {
        console.log("'startGame' ran");
        event.preventDefault();
        $(this).closest('form').addClass("js-hidden");
    });
}




//////////View//////////
function quizGame() {
    // callback function when the page loads
    // Welcome the user and allow them to start or quit
    // Activate the functions responsible for handling user events (e.g. start, quit, play, playAgain)
    startGame();
}

// When the page loads, call quizGame
$(quizGame);