const { createContainer, asFunction, asValue } = require('awilix');
const pino = require('pino');
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { promisify } = require('util');
const path = require('path');
const fs = require('fs');

const template = fs.readFileSync(
  path.join(__dirname, './templates/index.html'),
  'utf8',
);

const packageJson = require('../package.json');
const server = require('./server');
const routes = require('./routes');

const Layout = require('./components/Layout');

const container = createContainer();

container.register({
  express: asValue(express),
  app: asFunction(express).singleton(),
  path: asValue(path),
  logger: asValue(pino()),
  React: asValue(React),
  ReactDOMServer: asValue(ReactDOMServer),
  promisify: asValue(promisify),
});

container.register({
  packageJson: asValue(packageJson),
  server: asFunction(server).singleton(),
  routes: asFunction(routes).singleton(),
  template: asValue(template),
  Layout: asFunction(Layout),
});

module.exports = container.cradle;
