"use strict";
//////////Model in model.js//////////

//////////controller functions//////////

// create an array of indicies from the 'question' array of question objects
// the resulting index array is the source of randomization.
// this allows for dynamically adjusting the size of the question object
// array, allowing for the addition and removal of questions.
function createIndexArray(questionsArr) {
  const indexArrayAsString = Object.keys(questionsArr);
  const indexArrayAsInt = indexArrayAsString.map(element =>
    parseInt(element, 10)
  );
  return indexArrayAsInt;
}

// Shuffles the question index pointer array in place to randomize game questions
// Taking advantage of pass by reference, modifying the array passed in as the argument
function shuffle(indexArray) {
  for (let i = indexArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indexArray[i], indexArray[j]] = [indexArray[j], indexArray[i]];
  }
  return indexArray;
}

//////////listener functions//////////
function startGame() {
  $(".js-start").on('click', function(event) {
    event.preventDefault();
    console.log($(this).text());
    // call game play function
  });
}

//////////view functions//////////

// Render the player's score
// Arguments -- player's score, question index pointer array
function renderScore(score, indexArray) {
  const scoreString = `<h2>Score: ${score}/${indexArray.length}</h2>`;
  $(".score").html(scoreString);
}

// Render the welcome form
function renderStart() {
  let startFormString = `
    <form class="quiz_start">
        <fieldset>
            <legend>Atlanta Braves Quiz App</legend>
            <p>Welcome to the Quiz!</p>
            <p>Score as many points as you can and win a prize!</p>
            <button class="js-start">Start</button>
        </fieldset>
    </form>`;
    $(".container").html(startFormString);
}

/////////Play game//////////

function quizGame() {
  // callback function when the page loads
  // render initial score
  // create index array to point to questions
  let playerScore = 0;
  const questionIndexArray = createIndexArray(questions);
  // randomize the index array to randomize the game's questions
  const gameArray = shuffle(questionIndexArray);
  // Render the initial score
  renderScore(playerScore, questionIndexArray);
  // Welcome the user and allow them to start the game
  renderStart();
  // set up event listener for game start
  startGame();
}

// When the page loads, call quizGame
$(quizGame);
