'use strict';
//////////Model//////////
const questions = [
    {
        id: 1,
        question: 'Who holds the record for the most homeruns in Atlanta Braves franchise history?',
        answerA: 'Hank Aaron',
        answerB: 'Chipper Jones',
        answerC: 'Dale Murphy',
        answerD: 'Eddie Mathews',
        correctAnswer: 'Hank Aaron'
    },
    {
        id: 2,
        question: 'Who is the youngest player to hit a homerun in the World Series?',
        answerA: 'Mark Lemke - 18 years, 204 days',
        answerB: 'Andruw Jones - 19 years, 180 days',
        answerC: 'Chipper Jones - 21 years, 187 days',
        answerD: 'Jason Heyward - 19 years, 82 days',
        correctAnswer: 'Andruw Jones - 19 years, 180 days'
    },
    {
        id: 3,
        question: 'What is the name of the current Braves Mascot?',
        answerA: 'Chief Noc-A-Homa',
        answerB: 'Philly Phanatic',
        answerC: 'San Diego Chicken',
        answerD: 'Blooper',
        correctAnswer: 'Blooper'
    },
    {
        id: 4,
        question: 'What was Chipper Jones\' final career OBP?',
        answerA: '.392',
        answerB: '.578',
        answerC: '.401',
        answerD: '.312',
        correctAnswer: '.401'
    },
    {
        id: 5,
        question: 'How many Cy Young awards did Greg Maddux win while pitching in Atlanta?',
        answerA: 'Three',
        answerB: 'Four',
        answerC: 'Two',
        answerD: 'Six',
        correctAnswer: 'Three'
    },
    {
        id: 6,
        question: 'Which of these pitchers was not a member of the \'Big Three\' Braves pitching rotation?',
        answerA: 'Greg Maddux',
        answerB: 'John Smoltz',
        answerC: 'Tom Glavine',
        answerD: 'Kent Mercker',
        correctAnswer: 'Kent Mercker'
    },
    {
        id: 7,
        question: 'The Atlanta Braves defeated the Cleveland Indians to with the 1995 World Series.  Who caught the ceremonial first pitch to open the series in Atlanta?',
        answerA: 'Mike Mordecai',
        answerB: 'Chipper Jones',
        answerC: 'Javy Lopez',
        answerD: 'Damon Berryhill',
        correctAnswer: 'Mike Mordecai'
    },
    {
        id: 8,
        question: 'Which of these players spent their entire career wearing an Atlanta Braves uniform?',
        answerA: 'Chipper Jones',
        answerB: 'Javy Lopex',
        answerC: 'Greg Maddux',
        answerD: 'Tom Glavine',
        correctAnswer: 'Chipper Jones'
    },
    {
        id: 9,
        question: 'In 2005, Brian McCann hit his first career postseason home run in the NLDS against the Houston Astros.  Whom did he hit it off of?',
        answerA: 'Jeff Bagwell',
        answerB: 'Doug Drabek',
        answerC: 'Roger Clemens',
        answerD: 'Andy Pettitte',
        correctAnswer: 'Roger Clemens'
    },
    {
        id: 10,
        question: 'When was the last time the Atlanta Braves won a playoff series?',
        answerA: '2012',
        answerB: '2007',
        answerC: '2001',
        answerD: '1998',
        correctAnswer: '2001'
    },
]

const questionIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//////////controller//////////
function createRandomQuestionIndex(arr) {
    // render the first random question from 'questions'
    // to be hidden by renderWelcome
    // and then unhidden when the user starts the game
    const questionIndex = Math.floor(Math.random() * arr.length);
    arr.splice(questionIndex, 1);
    return questionIndex;
}

function renderStart(arr) {
    // render the welcome form to start the game or quit
    console.log('rendering welcome form');
    const firstQuestionIndex = createRandomQuestionIndex(arr);
    console.log(firstQuestionIndex);
    console.log(questions[firstQuestionIndex]);
}

function renderQuestion(index) {
    // return the element from 'quesitons' for the index given

}

//////////Event Listeners//////////
function startGame() {
    $(".js-start, .js-quit").on('click', function(event) {
        console.log("'startGame' ran");
        event.preventDefault();
        $(this).closest('form').addClass("js-hidden");
    });
}

//////////View//////////
function quizGame() {
    // callback function when the page loads
    // Welcome the user and allow them to start or quit
    // Activate the functions responsible for handling user events (e.g. start, quit, play, playAgain)
    renderStart(questionIndex);
    startGame();
    // TODO: loop through remaining questionIndex with event listeners to answer each question
}

// When the page loads, call quizGame
$(quizGame);