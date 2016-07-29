const CompareNumber=require('../src/compare-number.js');
const AnswerGenerator = require('../src/answer-generator.js');

class Guess{
    
    static guess(answer){
        let random=AnswerGenerator.checkRandomNumber();
        let result=CompareNumber.compareNumber(random,answer);
        return result;
    }
}

module.exports=Guess;