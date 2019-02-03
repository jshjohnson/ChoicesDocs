import { asValue } from 'awilix';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import parentContainer from '../container';

const container = parentContainer.createScope();

container.register({
  ReactDOM: asValue(ReactDOM),
  BrowserRouter: asValue(BrowserRouter),
});

export default container.cradle;
