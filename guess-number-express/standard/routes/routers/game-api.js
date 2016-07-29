const router = require('express').Router();
const Controller = require('../../controllers/game-controller');

const controller = new Controller();

router.get('/answer', controller.generate);
router.post('/compare', controller.compare);

module.exports = router;
