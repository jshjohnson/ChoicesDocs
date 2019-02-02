import { createContainer, asFunction, asValue } from 'awilix';

import React from 'react';
import ReactDOM from 'react-dom';

import parentContainer from '../container';
import App from '../components/App';

const container = parentContainer.createScope();

container.register({
  ReactDOM: asValue(ReactDOM),
});

container.register({
  App: asFunction(App),
});

export default container.cradle;
