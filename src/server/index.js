import dependencies from './container';
import '../client/style.css';

require('dotenv').config();
require('@babel/polyfill');

const { server, logger } = dependencies;

process.on('SIGTERM', server.stop);
process.on('SIGINT', server.stop);
process.on('unhandledRejection', err => {
  logger.fatal({ err }, 'Encountered unhandled error');
  process.exit(1);
});

server.start();
