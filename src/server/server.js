export default function({
  app,
  express,
  logger,
  promisify,
  routes,
  compression,
}) {
  let server;

  return {
    start: () => {
      app.use(compression());
      app.use('/public', express.static('dist/public'));
      app.get('/version', routes.version);
      app.get('/robots.txt', routes.robots);
      app.get('*', routes.default);

      server = app.listen(process.env.PORT || 3000, () => {
        logger.info(`Listening on port ${server.address().port}`);
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
