import dependencies from './container';

require('@babel/polyfill');

const { React, ReactDOM, App } = dependencies;

ReactDOM.hydrate(<App />, document.querySelector('#root'));
