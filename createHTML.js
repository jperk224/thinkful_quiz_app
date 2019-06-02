// Output feedback based on score
function printKudos(playerScore) {
    if(playerScore >= 9) {
      return `You are a true Braves fan!`
    } else if(playerScore >= 5 && playerScore < 9) {
      return `Not bad, but you need to watch more TBS`
    } else {
      return `Less than 5? You must be a Phillies Fan!`
    }
  }

// Create html content to render during quiz play
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
          <legend>Game Over!</legend>
          <p>Your final score is ${playerScore} out of ${gameArray.length}</p>
          <p>${printKudos(playerScore)}</p>
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
          <img src="./images/sunTrustpark.jpg">
        </fieldset>
      </form>
    `
  
    return [questionString, correctAnswer, correctForm, wrongForm, quitGame];
  }