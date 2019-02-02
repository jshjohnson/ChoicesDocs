import { asValue } from 'awilix';
import ReactDOM from 'react-dom';

import parentContainer from '../container';

const container = parentContainer.createScope();

container.register({
  ReactDOM: asValue(ReactDOM),
});

export default container.cradle;
