import { createContainer, asFunction, asValue } from 'awilix';
import React from 'react';

import App from './components/App';

const container = createContainer();

container.register({
  React: asValue(React),
});

container.register({
  App: asFunction(App),
});

export default container;
