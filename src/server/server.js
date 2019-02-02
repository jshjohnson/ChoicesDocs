module.exports = ({ app, logger, promisify, routes }) => {
  let server;

  return {
    start() {
      app.get('/version', routes.version);
      app.use('**', routes.default);

      server = app.listen(3000, () => {
        logger.info('Listening on port 3000');
      });
    },
    async stop() {
      try {
        logger.info('Attempting to shut down server');
        const closeServer = promisify(server.close);
        await closeServer.call(server);
        logger.info('Shut down server');
      } catch (err) {
        logger.fatal({ err }, 'Forcing server to shut down');
        process.exit(1);
      }
    },
  };
};
