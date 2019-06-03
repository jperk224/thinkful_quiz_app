// Copy the original question array to shuffle
function createGameArray(questionArray) {
  return [...questionArray];
}

// Shuffles the question array in place to randomize game questions
function shuffle(questionArray) {
  for (let i = questionArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questionArray[i], questionArray[j]] = [questionArray[j], questionArray[i]];
  }
  return questionArray;
}

// Initialize global variables
let gameArray = createGameArray(questions);
shuffle(gameArray);
let playerScore = 0;
let questionNumber = 0;

// play through questions
function takeQuiz(playerScore, gameArray) {
  let questionAnswer = renderQuestion(gameArray);
  answerQuestion(questionAnswer);
  nextQuestion(gameArray);
}

// user answers an individual question
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

// Continue to next quesiton from feedback form
function nextQuestion(gameArray) {
  $(".question_container").on("click", ".continue", function(event) {
    event.preventDefault(); 
    if(questionNumber < gameArray.length) {
      questionNumber++;
      renderQuestionTracker(gameArray);
      $(".feedback").remove();
      let questionAnswer = renderQuestion(gameArray);
      answerQuestion(questionAnswer);
    }
  });
}

function newGame(gameArray) {
  $(".question_container").on("click", ".new_game", function(event) {
    event.preventDefault();
    playerScore = 0;
    questionNumber = 0;
    shuffle(gameArray);
    renderScore(playerScore, gameArray);
    renderQuestionTracker(gameArray);
    $(".question_container").off();
    takeQuiz(playerScore, gameArray);
    newGame(gameArray);
    quitGame(gameArray);
  });
}

function quitGame(gameArray) {
  $(".question_container").on("click", ".quit", function(event) {
    event.preventDefault();
    renderQuit(gameArray);
  });
}

function renderScore(score, gameArray) {
  const scoreString = `<h2>Score: ${score}/${gameArray.length}</h2>`;
  $(".score").html(scoreString);
}  

function renderQuestionTracker(gameArray) {
  const questionsAttemptedString = `Questions Attempted: ${questionNumber}`;
  const questionsRemainingString = `Questions Remaining: ${gameArray.length - questionNumber}`;
  $(".questions_attempted").html(questionsAttemptedString);
  $(".questions_remaining").html(questionsRemainingString);
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
  let singleQuestionArray = createHTML(gameArray);
  $(".question_container").html(singleQuestionArray[0]);
  return singleQuestionArray[1];
}

function renderCorrectForm(gameArray) {
  let singleQuestionArray = createHTML(gameArray);
  $(".question_container").html(singleQuestionArray[2]);
}

function renderWrongForm(gameArray) {
  let singleQuestionArray = createHTML(gameArray);
  $(".question_container").html(singleQuestionArray[3]);
}

function renderQuit(gameArray) {
  let singleQuestionArray = createHTML(gameArray);
  $(".question_container").html(singleQuestionArray[4]);
}

function playGame() {
  renderScore(playerScore, gameArray);
  renderQuestionTracker(gameArray);
  startGame();
  takeQuiz(playerScore, gameArray);
  newGame(gameArray);
  quitGame(gameArray);
}

$(playGame);
