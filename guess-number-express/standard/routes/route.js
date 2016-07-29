module.exports = app => {
  app.use('/', require('./routers/game-api'));
};
