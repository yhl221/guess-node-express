const AnswerGenerator = require('../models/answer-generator');
const CompareNumber = require('../models/compare-number');

class GameController {

  generate(req, res) {
    const generator = new AnswerGenerator();
    res.json({answer: generator.generate()});
  }

  compare(req, res) {
    const compareNumber = new CompareNumber();
    const result = compareNumber.compare(req.body.answer, req.body.input);
    res.json({result});
  }

}

module.exports = GameController;
