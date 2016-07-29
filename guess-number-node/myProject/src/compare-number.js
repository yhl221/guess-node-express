'use strict';
class CompareNumber {

    static compareNumber(random, guess) {
        let randomArray = Array.from(random);
        let guessArray = Array.from(guess);
        let numberAndPostTrue = 0;
        let numberTrueAndPosFalse = 0;
        for (const random of randomArray) {
            let findNumber = guessArray.some(e=>e === random);
            if (findNumber) {
                if (randomArray.indexOf(random) === guessArray.indexOf(random))
                    numberAndPostTrue++;
                else
                    numberTrueAndPosFalse++;
            }
        }

        return `${numberAndPostTrue}A${numberTrueAndPosFalse}B`;
    }
}

module.exports = CompareNumber;