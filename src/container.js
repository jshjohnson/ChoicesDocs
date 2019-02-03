import { createContainer, asFunction, asValue } from 'awilix';
import React from 'react';
import { Route, Switch } from 'react-router';
import PropTypes from 'prop-types';
import Highlight from 'react-highlight';

import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';

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
});

/* Pages */
container.register({
  HomePage: asFunction(HomePage),
  ErrorPage: asFunction(ErrorPage),
})

/* Components */
container.register({
  Highlight: asValue(Highlight),
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
