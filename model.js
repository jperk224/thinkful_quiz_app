//////////Model//////////
const questions = [
    {
        id: 1,
        question: 'Who holds the record for the most homeruns in Atlanta Braves franchise history?',
        answerA: 'Hank Aaron',
        answerB: 'Chipper Jones',
        answerC: 'Dale Murphy',
        answerD: 'Eddie Mathews',
        correctAnswer: 'Hank Aaron',
        imgURL: 'https://sabr.org/sites/default/files/images/AaronHenry1.jpg',
        imgAlt: 'Hank Aaron'

    },
    {
        id: 2,
        question: 'Who is the youngest player to hit a homerun in the World Series?',
        answerA: 'Mark Lemke - 18 years, 204 days',
        answerB: 'Andruw Jones - 19 years, 180 days',
        answerC: 'Chipper Jones - 21 years, 187 days',
        answerD: 'Jason Heyward - 19 years, 82 days',
        correctAnswer: 'Andruw Jones - 19 years, 180 days',
        imgURL: 'https://sabr.org/sites/default/files/images/AaronHenry1.jpg',
        imgAlt: 'Hank Aaron'
    },
    {
        id: 3,
        question: 'What is the name of the current Braves Mascot?',
        answerA: 'Chief Noc-A-Homa',
        answerB: 'Philly Phanatic',
        answerC: 'San Diego Chicken',
        answerD: 'Blooper',
        correctAnswer: 'Blooper',
        imgURL: 'https://sabr.org/sites/default/files/images/AaronHenry1.jpg',
        imgAlt: 'Hank Aaron'
    },
    {
        id: 4,
        question: 'What was Chipper Jones\' final career OBP?',
        answerA: '.392',
        answerB: '.578',
        answerC: '.401',
        answerD: '.312',
        correctAnswer: '.401',
        imgURL: 'https://sabr.org/sites/default/files/images/AaronHenry1.jpg',
        imgAlt: 'Hank Aaron'
    },
    {
        id: 5,
        question: 'How many Cy Young awards did Greg Maddux win while pitching in Atlanta?',
        answerA: 'Three',
        answerB: 'Four',
        answerC: 'Two',
        answerD: 'Six',
        correctAnswer: 'Three',
        imgURL: 'https://sabr.org/sites/default/files/images/AaronHenry1.jpg',
        imgAlt: 'Hank Aaron'
    },
    {
        id: 6,
        question: 'Which of these pitchers was not a member of the \'Big Three\' Braves pitching rotation?',
        answerA: 'Greg Maddux',
        answerB: 'John Smoltz',
        answerC: 'Tom Glavine',
        answerD: 'Kent Mercker',
        correctAnswer: 'Kent Mercker',
        imgURL: 'https://sabr.org/sites/default/files/images/AaronHenry1.jpg',
        imgAlt: 'Hank Aaron'
    },
    {
        id: 7,
        question: 'The Atlanta Braves defeated the Cleveland Indians to with the 1995 World Series.  Who caught the ceremonial first pitch to open the series in Atlanta?',
        answerA: 'Mike Mordecai',
        answerB: 'Chipper Jones',
        answerC: 'Javy Lopez',
        answerD: 'Damon Berryhill',
        correctAnswer: 'Mike Mordecai',
        imgURL: 'https://sabr.org/sites/default/files/images/AaronHenry1.jpg',
        imgAlt: 'Hank Aaron'
    },
    {
        id: 8,
        question: 'Which of these players spent their entire career wearing an Atlanta Braves uniform?',
        answerA: 'Chipper Jones',
        answerB: 'Javy Lopex',
        answerC: 'Greg Maddux',
        answerD: 'Tom Glavine',
        correctAnswer: 'Chipper Jones',
        imgURL: 'https://sabr.org/sites/default/files/images/AaronHenry1.jpg',
        imgAlt: 'Hank Aaron'
    },
    {
        id: 9,
        question: 'In 2005, Brian McCann hit his first career postseason home run in the NLDS against the Houston Astros.  Whom did he hit it off of?',
        answerA: 'Jeff Bagwell',
        answerB: 'Doug Drabek',
        answerC: 'Roger Clemens',
        answerD: 'Andy Pettitte',
        correctAnswer: 'Roger Clemens',
        imgURL: 'https://sabr.org/sites/default/files/images/AaronHenry1.jpg',
        imgAlt: 'Hank Aaron'
    },
    {
        id: 10,
        question: 'When was the last time the Atlanta Braves won a playoff series?',
        answerA: '2012',
        answerB: '2007',
        answerC: '2001',
        answerD: '1998',
        correctAnswer: '2001',
        imgURL: 'https://sabr.org/sites/default/files/images/AaronHenry1.jpg',
        imgAlt: 'Hank Aaron'
    }
]

// create an array of indicies from the 'question' array of question objects
// the resulting index array is the source of randomization in index.js
// this allows for dynamically adjusting the size of the question object
// array; allowing for the addition and removal of questions.

function createIndexArray(arr) {
    const indexArrayAsString = Object.keys(arr);
    const indexArrayAsInt = indexArrayAsString.map(element => parseInt(element, 10));
    return indexArrayAsInt;
}

const questionIndexArray = createIndexArray(questions);
console.log(questionIndexArray);

// create an array of random phrases to return on correct answers
let randomCheers = [
    'Keep up the good work',
    'You really know your stuff',
    'Way to go',
    'That one was hard and you knew it',
    'You are the world\'s best Braves fan'
]