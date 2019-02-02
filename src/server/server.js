export default function({ app, express, logger, promisify, routes }) {
  let server;

  return {
    start: () => {
      app.use('/static', express.static('dist/public'));
      app.get('/version', routes.version);
      app.get('*', routes.default);

      server = app.listen(3000, () => {
        logger.info('Listening on port 3000');
      });
    },
    stop: async () => {
      try {
        if (!server) {
          throw ReferenceError('No server to shut down');
        }

        logger.info('Shutting down server');
        const closeServer = promisify(server.close);
        await closeServer.call(server);
      } catch (err) {
        logger.fatal({ err }, 'Forcing server to shut down');
        process.exit(1);
      }
    },
  };
}
