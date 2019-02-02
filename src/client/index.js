import dependencies from './container';
import './style.css';

require('@babel/polyfill');

const { React, ReactDOM, App } = dependencies;

ReactDOM.hydrate(<App />, document.querySelector('#root'));
