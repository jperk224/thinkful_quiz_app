function createGameArray(questionArray) {
  return [...questionArray];
}

// Shuffles the question index pointer array in place to randomize game questions
// Taking advantage of pass by reference, modifying the array passed in as the argument
function shuffle(questionArray) {
  for (let i = questionArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questionArray[i], questionArray[j]] = [questionArray[j], questionArray[i]];
  }
  return questionArray;
}


let gameArray = createGameArray(questions);
shuffle(gameArray);
let playerScore = 0;
let questionNumber = 0;

// Create html content
function createHTML(gameArray) {
  let questionString = ``;
  let correctAnswer = ``;
  let correctForm = ``;
  let wrongForm = ``;
  let quitGame = ``;
  if (questionNumber < gameArray.length) {
    questionString = `
    <form class="question">        
    <fieldset>
                <legend>Question ${questionNumber + 1}</legend> 
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
          <img src="${gameArray[questionNumber].imgAttr.url}" alt="${gameArray[questionNumber].imgAttr.alt}" title="${gameArray[questionNumber].imgAttr.alt}">
          <button class="continue">Continue</button>
        </fieldset>
      </form>
    `;
    wrongForm = `
      <form class="feedback">
        <fieldset>
          <p>Wrong! The correct answer is ${correctAnswer}</p>
          <img src="${gameArray[questionNumber].imgAttr.url}" alt="${gameArray[questionNumber].imgAttr.alt}" title="${gameArray[questionNumber].imgAttr.alt}">
          <button class="continue">Continue</button>
        </fieldset>
      </form>
    `;
  } else {
    questionString = `
    <form class="game_over">
      <fieldset>
        <p>Game Over! Your final score is ${playerScore} out of ${gameArray.length}</p>
        <p>Would you like to play again?</p>
        <button class="new_game">Yes</button>
        <button class="quit">No</button>
      </fieldset>
    </form>
  `;
  }

  quitGame = `
  <form class="quit_game">
      <fieldset>
        <p>Thanks for Playing!</p>
        <p>And remember, Go Braves!!</p>
        <img src="https://stadiumjourney.com/wp-content/uploads/2017/07/Overview-of-the-field-900x560.jpg" alt="An image of Suntrust Park" title="Suntrust Park">
      </fieldset>
    </form>
  `

  return [questionString, correctAnswer, correctForm, wrongForm, quitGame];
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
      renderQuestionTracker(gameArray);
      $(".feedback").remove();
      let questionAnswer = renderQuestion(gameArray);
      answerQuestion(questionAnswer);
    }
  });
}
function newGame() {
  $(".question_container").on("click", ".new_game", function(event) {
    event.preventDefault();
    location.reload();
  });
}

function quitGame(gameArray) {
  $(".question_container").on("click", ".quit", function(event) {
    event.preventDefault();
    renderQuit(gameArray);
  });
}

    // questionNumber = 0;
    // playerScore = 0;
    // shuffle(gameArray);
    // renderScore(playerScore, gameArray);
    // $(this).closest('form').remove();
    // $(".js_game_start").closest("form").removeClass("hidden");
    // $(".question_container").addClass("hidden");
    // startGame();
    // takeQuiz(playerScore, gameArray);
  
    
  
    // } else {
    //   questionNumber = 0;
    //   playerScore = 0;
    //   shuffle(gameArray);
    //   renderScore(playerScore, gameArray);
    // }
    // $(".feedback").remove();
    // let questionAnswer = renderQuestion(gameArray);
    // answerQuestion(questionAnswer);

// Render the player's score
// Parameters -- player's score, question index pointer array
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
  newGame();
  quitGame(gameArray);
}

$(playGame);
