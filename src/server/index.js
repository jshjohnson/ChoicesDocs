const { logger, server } = require('./container');

process.on('SIGTERM', server.stop);
process.on('SIGINT', server.stop);
process.on('unhandledPromiseRejection', err => {
  logger.fatal({ err }, 'Encountered unhandled error');
  process.exit(1);
});

server.start();
