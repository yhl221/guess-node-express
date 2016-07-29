'use strict';
class AnswerGenerator{
    static checkRandomNumber() {
        const digits = [0, 1, 2, 3, 4, 5,6, 7, 8, 9];
        let randomNumber = [];
        for (let i = 0; i < 4; i++) {
            randomNumber.push(digits.splice(Math.random() * digits.length, 1)[0]);
        }
        return randomNumber;
    }
}

module.exports=AnswerGenerator;
