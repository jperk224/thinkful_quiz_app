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

function generateScoreString(int, arr) {
    return `
        <h2>${int}/${arr.length}</h2>
    `
}

function genarateFormString() {
    console.log('creating form');
    return `
    <form class="quiz_start">
        <fieldset>
            <legend>Atlanta Braves Quiz App</legend>
            <p>Welcome to the Quiz!</p>
            <p>Score as many points as you can and win a prize!</p>
            <button class="js-start">Start</button>
            <button class="js-quit">Quit</button>
        </fieldset>
    </form>
    `
}

function generateQuestionString(arr, index) {
    // return the element from 'questions' for the index given
    console.log('creating question');
    return [`
        <div class="question">
        <p>${arr[index].question}</p>
        </div>
            <div class="a answer"><p>${arr[index].answerA}</p></div>
            <div class="b answer"><p>${arr[index].answerB}</p></div>
            <div class="c answer"><p>${arr[index].answerC}</p></div>
            <div class="d answer"><p>${arr[index].answerD}</p></div>
        </div>
    `,
    arr[index].correctAnswer]
}

function quizLoop(arr1, arr2) {
    // loop through remaining questionIndex with event listeners to answer each question
    while(arr1.length > 0) {
        var index = createRandomQuestionIndex(arr1);
        console.log(arr1);
        // renderQuestion(questions, index);
        // TODO: Add quiz logic and score keeping
    }
}

//////////View//////////
function renderScore(int, arr) {
    const score = generateScoreString(int, arr);
    console.log("rendering score");
    $(".score").html(score);
}

function renderForm() {
    const form = genarateFormString();
    console.log('rendering form');
    $(".container").html(form);
}

function renderQuestion(arr1, arr2) {
    const index = createRandomQuestionIndex(arr1);        
    const question = generateQuestionString(arr2, index)[0];
    const answer = generateQuestionString(arr2, index)[1];
    console.log('rendering question');
    // $(question).insertAfter(".quiz_start");
    $(".container").html(question);
    return answer;
}

//////////Event Listeners//////////
function nextQuestion(arr1, arr2) {
    $(".js-start, .js-continue").on('click', function(event) {
        console.log("'startGame' ran");
        console.log(arr1);
        event.preventDefault();
        let correctAnswer = renderQuestion(arr1, arr2);
        console.log(arr1);
        console.log(originalQuestionIndexArray);
        console.log(correctAnswer);
        console.log(typeof(correctAnswer));
        return correctAnswer;
        // $(this).closest('form').addClass("js-hidden");
        // const index = createRandomQuestionIndex(arr1);
        // console.log(arr1);
        // renderQuestion(arr2, index);
    });
}

function answerQuestion(str) {
    // listen for the player's answer selection
    // if the answer is correct, render congrats and add +1 to score
    // if the answer is wrong, render the right answer
    $(".container").on('click', ".answer", function(event) {
        let userAnswer = $(this).text();
        var correctAnswer = str; // used var for scope reasons
        console.log(userAnswer);
        console.log(typeof(userAnswer));
        if(userAnswer === correctAnswer) {
            console.log('correct!!!');
        } else {
            console.log('Wrong!!!');
        }
    });
}

/////////Play game//////////

function quizGame() {
    // callback function when the page loads
    // render initial score
    renderScore(0, questions);
    // Welcome the user and allow them to start or quit
    renderForm();
    // Activate the functions responsible for handling user events (e.g. start, quit, play, playAgain)
    answerQuestion(nextQuestion(questionIndexArray, questions));
    // loop through remaining questionIndex with event listeners to answer each question
    // quizLoop(questionIndexArray, questions);
}

// When the page loads, call quizGame
$(quizGame);