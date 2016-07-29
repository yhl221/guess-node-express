const readline = require('readline');
const request = require('request');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let remain = 6;

let answer = '';

const BASE_URL = 'http://localhost:3000';

request.get(`${BASE_URL}/answer`, (err, res, body) => {
  answer = JSON.parse(body).answer;
  start();
});

function start() {
  console.log('Welcome!\n');
  newTurn();
}

function newTurn() {
  rl.question(`Please input your number(${remain}):\n`, (input) => {
    run(input);
  });
}

function run(input) {

  request.post({url: `${BASE_URL}/compare`, form: {answer, input}}, (err, res, body) => {

    if (input.length < 4) {
      console.log("Input length must be 4!");
      newTurn();
    } else if (hasDuplicate(input)) {
      console.log("Cannot input duplicate numbers!");
      newTurn();
    } else {

      const result = JSON.parse(body).result;

      if (remain === 1) {
        console.log("Game Over");
        rl.close();
      } else if (result === "4A0B") {
        console.log("Congratulations!");
        rl.close();
      } else {
        remain--;
        console.log(`${result}`);
        newTurn();
      }
    }
  });
}

function hasDuplicate(input) {
  const inputCount = (new Set(input.split(''))).size;
  return inputCount < 4;
}
