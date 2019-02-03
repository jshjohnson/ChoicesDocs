import { asFunction, asValue } from 'awilix';
import pino from 'pino';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { promisify } from 'util';
import path from 'path';
import compression from 'compression';

import parentContainer from '../container';
import packageJson from '../../package.json';
import server from './server';
import routes from './routes';
import template from './templates/index.html';

const container = parentContainer.createScope();

container.register({
  express: asValue(express),
  app: asFunction(express).singleton(),
  logger: asValue(pino()),
  ReactDOMServer: asValue(ReactDOMServer),
  StaticRouter: asValue(StaticRouter),
  promisify: asValue(promisify),
  path: asValue(path),
  compression: asValue(compression),
});

container.register({
  packageJson: asValue(packageJson),
  server: asFunction(server).singleton(),
  routes: asFunction(routes).singleton(),
  template: asValue(template),
});

export default container.cradle;
