'use strict';
const Guess = require('../src/guess.js');
const AnswerGenerator=require('../src/answer-generator');

describe('Guess number',()=>{
    it('should play the game',()=>{
        let answer = '1234';

        spyOn(AnswerGenerator,'checkRandomNumber').and.returnValue('1234');
        const result=Guess.guess(answer);
        expect(result).toEqual('4A0B');
    });

});