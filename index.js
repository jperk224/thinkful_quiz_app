function createGameArray(questionArray) {
  return [...questionArray];
}

let gameArray = createGameArray(questions);
let playerScore = 0;
let questionNumber = 0;

// Create a question
function createQuestion(gameArray) {
  let questionString = ``;
  let correctAnswer = ``;
  let correctForm = ``;
  let wrongForm = ``;
  if (questionNumber < gameArray.length) {
    questionString = `
    <form class="question">        
    <fieldset>
                <legend>Question ${questionNumber + 1} of ${
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
            </form>
        `;
    correctAnswer = gameArray[questionNumber].correctAnswer;
    correctForm = `
      <form class="feedback">        
        <fieldset>
          <p>You got it! ${correctAnswer} is correct!</p>
          <button class="continue">Continue</button>
        </fieldset>
      </form>
    `;
    wrongForm = `
      <form class="feedback">
        <fieldset>
          <p>Wrong! The correct answer is ${correctAnswer}</p>
          <button class="continue">Continue</button>
        </fieldset>
      </form>
    `;
  } else {
    questionString = `Game Over`;
  }
  return [questionString, correctAnswer, correctForm, wrongForm];
}

// play through questions
function takeQuiz(playerScore, gameArray) {
  let questionAnswer = renderQuestion(gameArray);
  answerQuestion(questionAnswer);
  nextQuestion(gameArray);
}

// answer question
function answerQuestion(correctAnswer) {
  $(".question_container").on("click", ".answer", function(event) {
    event.preventDefault();
    const userAnswer = $(this).text();
    $(".question_container").find('form').remove();
    if (userAnswer === correctAnswer) {
      playerScore++;
      renderScore(playerScore, gameArray);
      renderCorrectForm(gameArray)
    } else {
      renderScore(playerScore, gameArray);
      renderWrongForm(gameArray);
    }
  });
}

// Continue to next quesiton from feedback div
function nextQuestion(gameArray) {
  $(".question_container").on("click", ".continue", function(event) {
    event.preventDefault(); 
    if(questionNumber < gameArray.length) {
      questionNumber++;
    } else {
      questionNumber = 0;
    }
    $(".feedback").remove();
    let questionAnswer = renderQuestion(gameArray);
    answerQuestion(questionAnswer);
  });
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
  $(".question_container").html(singleQuestionArray[0]);
  return singleQuestionArray[1];
}

function renderCorrectForm(gameArray) {
  let singleQuestionArray = createQuestion(gameArray);
  $(".question_container").html(singleQuestionArray[2]);
}

function renderWrongForm(gameArray) {
  let singleQuestionArray = createQuestion(gameArray);
  $(".question_container").html(singleQuestionArray[3]);
}

function playGame() {
  renderScore(playerScore, gameArray);
  startGame();
  takeQuiz(playerScore, gameArray);
  // let questionAnswer = renderQuestion(gameArray);
  // startGame();
  // answerQuestion(questionAnswer);
  // nextQuestion(gameArray);
}

$(playGame);
