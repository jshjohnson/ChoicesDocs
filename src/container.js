const { createContainer, asFunction, asValue } = require('awilix');
const React = require('react');

const App = require('./components/App');

const container = createContainer();

container.register({
  React: asValue(React),
});

container.register({
  App: asFunction(App),
});

module.exports = container;
