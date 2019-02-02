require('@babel/polyfill');

import dependencies from './container';

const { React, ReactDOM, App } = dependencies;

ReactDOM.hydrate(<App />, document.querySelector('#root'));