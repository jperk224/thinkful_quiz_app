'use strict';
//////////Model in model.js//////////

//////////controller functions//////////

// create an array of indicies from the 'question' array of question objects
// the resulting index array is the source of randomization.
// this allows for dynamically adjusting the size of the question object
// array, allowing for the addition and removal of questions.
function createIndexArray(questionsArr) {
    const indexArrayAsString = Object.keys(questionsArr);
    const indexArrayAsInt = indexArrayAsString.map(element => parseInt(element, 10));
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






/////////Play game//////////

function quizGame() {
    // callback function when the page loads
    // render initial score
    // create index array to point to questions
    const questionIndexArray = createIndexArray(questions);
    // randomize the index array to randomize the game's questions
    const gameArray = shuffle(questionIndexArray);
    // Welcome the user and allow them to start the game
    // set up event listeners for game start or quit
    // renderFormAndStartGame(gameArray, questions);
}

// When the page loads, call quizGame
$(quizGame);