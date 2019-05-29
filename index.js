function createGameArray(questionArray) {
  return [...questionArray];
}

let gameArray = createGameArray(questions);
let playerScore = 0;
let questionNumber = 2;

// Create a question
function createQuestion(gameArray) {
  let questionString = ``;
  let correctAnswer = ``;
  let correctForm = ``;
  let wrongForm = ``;
  if (questionNumber < gameArray.length) {
    questionString = `
            <fieldset>
                <legend>Question ${questionNumber} of ${
      gameArray.length
    }</legend> 
                <p>${gameArray[questionNumber].question}</p>
                <button class="answer">${
                  gameArray[questionNumber].answers[0]
                }</button>
                <button class="answer">${
                  gameArray[questionNumber].answers[1]
                }</button>
                <button class="answer">${
                  gameArray[questionNumber].answers[2]
                }</button>
                <button class="answer">${
                  gameArray[questionNumber].answers[3]
                }</button>
            </fieldset>
        `;
    correctAnswer = gameArray[questionNumber].correctAnswer;
    correctForm = `
            <fieldset>
                <p>You got it! ${correctAnswer} is correct!</p>
                <button class="continue">Continue</button>
            </fieldset>
    `;
    wrongForm = `
    <fieldset>
                <p>Wrong! The correct answer is ${correctAnswer}</p>
                <button class="continue">Continue</button>
            </fieldset>
    `;
  } else {
    questionString = `Game Over`;
  }
  return [questionString, correctAnswer, correctForm, wrongForm];
}

// answer question
function answerQuestion(correctAnswer) {
  $(".answer").on("click", function(event) {
    event.preventDefault();
    const userAnswer = $(this).text();
    if (userAnswer === correctAnswer) {
      playerScore++;
      renderScore(playerScore, gameArray);
      renderCorrectForm(gameArray)
    } else {
      renderWrongForm(gameArray);
    }
  });
}

// Continue to next quesiton from feedback div
function nextQuestion() {
  // event listener to close feedback div and render next question
}

// Render the player's score
// Parameters -- player's score, question index pointer array
function renderScore(score, gameArray) {
  const scoreString = `<h2>Score: ${score}/${gameArray.length}</h2>`;
  $(".score").html(scoreString);
}

function startGame(indexArray, quesitonsArr) {
  $(".js_game_start").on("click", function(event) {
    event.preventDefault();
    $(".js_game_start")
      .closest("form")
      .addClass("hidden");
    $(".question_container").removeClass("hidden");
  });
}

function renderQuestion(gameArray) {
  let singleQuestionArray = createQuestion(gameArray);
  $(".question").html(singleQuestionArray[0]);
  return singleQuestionArray[1];
}

function renderCorrectForm(gameArray) {
  let singleQuestionArray = createQuestion(gameArray);
  $(".question").html(singleQuestionArray[2]);
}

function renderWrongForm(gameArray) {
  let singleQuestionArray = createQuestion(gameArray);
  $(".question").html(singleQuestionArray[3]);
}

function playGame() {
  renderScore(playerScore, gameArray);
  let questionAnswer = renderQuestion(gameArray);
  startGame();
  answerQuestion(questionAnswer);
  // renderNextQuestion();
}

$(playGame);
