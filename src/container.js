import { createContainer, asFunction, asValue } from 'awilix';
import React from 'react';
import { Route, Switch } from 'react-router';
import PropTypes from 'prop-types';
import hljs from 'highlight.js/lib/highlight';
import highlightLangJS from 'highlight.js/lib/languages/javascript';
import highlightLangCSS from 'highlight.js/lib/languages/css';
import highlightLangShell from 'highlight.js/lib/languages/shell';

import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import ExamplesPage from './pages/ExamplesPage';

import App from './components/App';
import Header from './components/Header';
import Navigation from './components/Navigation';
import LayoutContainer from './components/LayoutContainer';
import ContentSection from './components/ContentSection';
import Code from './components/Code';
import Logo from './components/Logo';
import Footer from './components/Footer';

const container = createContainer();

container.register({
  React: asValue(React),
  PropTypes: asValue(PropTypes),
  highlight: asValue(hljs),
  highlightLangJS: asValue(highlightLangJS),
  highlightLangCSS: asValue(highlightLangCSS),
  highlightLangShell: asValue(highlightLangShell),
});

/* Pages */
container.register({
  HomePage: asFunction(HomePage),
  ErrorPage: asFunction(ErrorPage),
  ExamplesPage: asFunction(ExamplesPage),
});

/* Components */
container.register({
  Route: asValue(Route),
  Switch: asValue(Switch),
  App: asFunction(App),
  Logo: asFunction(Logo),
  Footer: asFunction(Footer),
  Header: asFunction(Header),
  Navigation: asFunction(Navigation),
  LayoutContainer: asFunction(LayoutContainer),
  ContentSection: asFunction(ContentSection),
  Code: asFunction(Code),
});

export default container;
