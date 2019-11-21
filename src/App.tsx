import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Routes from './global/Routes';
import Nav from './components/Nav';

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Nav />
      <Routes />
    </Router>
  );
};

export default App;
