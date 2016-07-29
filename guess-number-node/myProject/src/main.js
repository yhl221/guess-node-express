'use strict';
let count = 6;
const scanf = require('scanf');
const AnswerGenerator = require('../src/answer-generator.js');
const CompareNumber = require('../src/compare-number.js');

function main() {
    console.log('Welcome!');
    const random = AnswerGenerator.checkRandomNumber();
    console.log(random);
    let randomString = '';
    for (const element of random)
        randomString += element;
    while (count > 0) {
        console.log(`Please input your number(${count})`);
        let input = scanf('%c');
        let isReapeat = isRepeat(input);
        if (!isReapeat) {
            console.log('Cannot input duplicate numbers!');
        } else {
            const result = CompareNumber.compareNumber(randomString, input);
            if (result === '4A0B') {
                console.log('Congratulations!');
                break;
            }
            else {
                console.log(result);
            }
        }
        count -= 1;
    }
    if (count === -1)
        console.log('Game Over');
}


function isRepeat(input) {
    let inputSplited = Array.from(input);
    for (const inputSplit of inputSplited) {
        let findNumber = inputSplited.some(e=>e === inputSplit);
        if (findNumber)
            return true;
    }
    return false;
}

module.exports = main();