import dependencies from './container';
import '../client/style.css';

const { server, logger } = dependencies;

require('@babel/polyfill');

process.on('SIGTERM', server.stop);
process.on('SIGINT', server.stop);
process.on('unhandledRejection', err => {
  logger.fatal({ err }, 'Encountered unhandled error');
  process.exit(1);
});

server.start();
