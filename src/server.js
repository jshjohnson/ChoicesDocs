module.exports = ({ app, express, path, logger, promisify, routes }) => {
  let server;

  return {
    start: () => {
      app.use(express.static(path.resolve(__dirname, '../dist')));
      app.get('/version', routes.version);
      app.use('**', routes.default);

      server = app.listen(3000, () => {
        logger.info('Listening on port 3000');
      });
    },
    stop: async () => {
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
