import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from '../pages/Index';
import Test from '../pages/Test';

export default function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/test">
            <Test/>
          </Route>
          <Route path="/">
            <Index/>
          </Route>
        </Switch>
      </BrowserRouter>
  );
}