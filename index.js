function createGameArray(questionArray) {
  return [...questionArray];
}

let gameArray = createGameArray(questions);
let playerScore = 0;
let questionNumber = 5;

// Create a question
function createQuestion(gameArray) {
  let questionString = ``;
  if (questionNumber < gameArray.length) {
    questionString = `
        <form class="question">
            <fieldset>
                <legend>Question X of X</legend> 
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
    console.log(questionString);
  } else {
    questionString = `Game Over`;
  }
  return questionString;
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
  $(".question_container").html(createQuestion(gameArray));
}

function playGame() {
  startGame();
  renderQuestion(gameArray);
}

$(playGame);