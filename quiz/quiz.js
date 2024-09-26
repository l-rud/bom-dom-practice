//Multidimensional array to hold quiz questions and answers
const questions = [
    ['In the array let ages = [21, 22, 23, 24];, what is the length of the ages array?', '4'],
    ['If you have an array let nums = [1, 2, 3, 4, 5, 6];, what is the value at index 3?', '4'],
    ['If you create an empty array like this: let emptyArray = [];, what is the length of emptyArray?', '0'],
    ['In the array let days = ["Monday", "Tuesday", "Wednesday"];, what is the index of "Tuesday"?', '1'],
    ['In the array let scores = [95, 85, 75, 65, 55];, what is the minimum index?', '0'],
    ['If you concatenate the arrays let array1 = [1, 2]; and let array2 = [3, 4];, what is the length of the new array?', '4']
];

//Store the number of questions answered correctly/incorrectly
const correct = [];
const incorrect = [];
let correctAnswers = 0;

//Loop for to go through each question
//present each question to the user
//compare the user's response to answer in the array
for (let i = 0; i < questions.length; i++) {
    let question = questions[i][0];
    let answer = questions[i][1];
    let response = prompt(question);

    if (response === answer) {
        correctAnswers++;
        correct.push(question);
    } else {
        incorrect.push(question);
    }
}

function createListItems(arr) {
    let items = '';
    for (let i = 0; i < arr.length; i++) {
        items += `<li>${arr[i]}</li>`;
    }
    return items;
}

//Display the number of correct/incorrect answers to the user
let display = `
<h1> You got ${correctAnswers} question(s) correct</h1>
<h2> You got these questions right:</h2>
<ol>${createListItems(correct)}</ol>
<h2> You got these questions wrong:</h2>
<ol>${createListItems(incorrect)}</ol>
`;
document.querySelector('main').innerHTML = display;