import dependencies from './container';
import './style.css';

require('@babel/polyfill');

const { React, ReactDOM, BrowserRouter, App } = dependencies;

ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
);
