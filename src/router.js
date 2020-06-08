import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// pages
import Home from './pages/Main/Home/Home.page';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
