import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import BasicLayout from '@components/BasicLayout/index';

export default function Routers() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={BasicLayout} />
      </Switch>
    </HashRouter>
  );
}
