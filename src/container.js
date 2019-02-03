import { createContainer, asFunction, asValue } from 'awilix';
import React from 'react';
import PropTypes from 'prop-types';

import App from './components/App';
import Layout from './components/Layout';
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

container.register({
  App: asFunction(App),
  Layout: asFunction(Layout),
  Logo: asFunction(Logo),
  Footer: asFunction(Footer),
  Header: asFunction(Header),
  Navigation: asFunction(Navigation),
  LayoutContainer: asFunction(LayoutContainer),
  ContentSection: asFunction(ContentSection),
  Code: asFunction(Code),
});

export default container;
