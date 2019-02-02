import { createContainer, asFunction, asValue } from 'awilix';
import React from 'react';

import App from './components/App';
import Navigation from './components/Navigation';

const container = createContainer();

container.register({
  React: asValue(React),
});

container.register({
  App: asFunction(App),
  Navigation: asFunction(Navigation),
});

export default container;
