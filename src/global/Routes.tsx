import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Page2 from '../pages/Page2';
import Home from '../pages/Home';

const pages = [
  { path: '/page2', component: Page2 },
  { path: '/', component: Home },
];

const Routes: React.FC = () => {
  return (
    <Switch>
      {pages.map(({ path, component }) => {
        return <Route path={path} component={component} />;
      })}
    </Switch>
  );
};

export default Routes;
