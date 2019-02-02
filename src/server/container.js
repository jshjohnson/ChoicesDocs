const { createContainer, asFunction, asValue } = require('awilix');
const pino = require('pino');
const express = require('express');
const ReactDOMServer = require('react-dom/server');
const { promisify } = require('util');

const packageJson = require('../../package.json');
const server = require('./server');
const routes = require('./routes');

const container = createContainer();

container.register({
  app: asFunction(express).singleton(),
  logger: asValue(pino()),
  ReactDOMServer: asValue(ReactDOMServer),
  promisify: asValue(promisify),
});

container.register({
  server: asFunction(server).singleton(),
  routes: asFunction(routes).singleton(),
  packageJson: asValue(packageJson),
});

module.exports = container.cradle;
