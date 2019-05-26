'use strict';
//////////Model in model.js//////////

//////////controller//////////
function createRandomQuestionIndex(arr) {
    // render the first random question from 'questions'
    // to be hidden by renderWelcome
    // and then unhidden when the user starts the game
    const questionIndex = Math.floor(Math.random() * arr.length);
    let indexValue = arr[questionIndex];
    arr.splice(questionIndex, 1);
    return indexValue;
}

function generateQuestionString(arr, index) {
    // return the element from 'questions' for the index given
    console.log('creating question');
    return `
        <div class="question">
        <p>${arr[index].question}</p>
        </div>
            <div class="a answer"><p>${arr[index].answerA}</p></div>
            <div class="b answer"><p>${arr[index].answerB}</p></div>
            <div class="c answer"><p>${arr[index].answerC}</p></div>
            <div class="d answer"><p>${arr[index].answerD}</p></div>
        </div>
    `
}

//////////Event Listeners//////////
function startGame(arr1, arr2) {
    $(".js-start, .js-quit").on('click', function(event) {
        console.log("'startGame' ran");
        console.log(arr1);
        event.preventDefault();
        $(this).closest('form').addClass("js-hidden");
        var index = createRandomQuestionIndex(arr1);
        console.log(arr1);
        renderQuestion(arr2, index);
    });
}

//////////View//////////
function renderQuestion(arr, index) {
    // render the welcome form to start the game or quit
    console.log('rendering question');
    const question = generateQuestionString(arr, index);
    $(question).insertAfter(".quiz_start");
}

function quizGame() {
    // callback function when the page loads
    // Welcome the user and allow them to start or quit
    // Activate the functions responsible for handling user events (e.g. start, quit, play, playAgain)
    startGame(questionIndexArray, questions);
    // TODO: loop through remaining questionIndex with event listeners to answer each question
    // while(questionIndexArray.length > 0) {
    //     var index = createRandomQuestionIndex(questionIndexArray);
    //     renderQuestion(questions, index);
    // }
}

// When the page loads, call quizGame
$(quizGame);