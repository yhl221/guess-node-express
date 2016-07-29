'use strict';
const CompareNumber = require('../src/compare-number.js');
const AnswerGenerator=require('../src/answer-generator.js');
describe('guess number game', ()=> {
    let randomNumber = '1234';
    let firstInput = '1234';
    let secondInput = '4321';
    it('compare firstNumber to random', ()=> {
        const resultFirst = CompareNumber.compareNumber(randomNumber, firstInput);
        const expectFirstReault = '4A0B';
        expect(resultFirst).toEqual(expectFirstReault);
    });

    it('compare secondNumber to random', ()=> {
        const resultSecond = CompareNumber.compareNumber(randomNumber, secondInput);
        const expectSecondResult = '0A4B';
        expect(resultSecond).toEqual(expectSecondResult);
    });

    it('test AnswerGenerator',()=>{
        const answer=AnswerGenerator.checkRandomNumber();
        expect(answer).toBe(true);
    })
});