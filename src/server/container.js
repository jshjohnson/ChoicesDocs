const { createContainer, asFunction, asValue } = require('awilix');
const pino = require('pino');
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { promisify } = require('util');
const path = require('path');

const parentContainer = require('../container');
const packageJson = require('../../package.json');
const server = require('./server');
const routes = require('./routes');
const template = require('./templates/index.html');

const container = parentContainer.createScope();

container.register({
  express: asValue(express),
  app: asFunction(express).singleton(),
  logger: asValue(pino()),
  ReactDOMServer: asValue(ReactDOMServer),
  promisify: asValue(promisify),
  path: asValue(path),
});

container.register({
  packageJson: asValue(packageJson),
  server: asFunction(server).singleton(),
  routes: asFunction(routes).singleton(),
  template: asValue(template),
});

module.exports = container.cradle;
