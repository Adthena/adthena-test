import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from '@components/Nav';
import Home from '@components/Home';
import TaskOne from '@components/TaskOne';

const App = () => (
  <Router>
    <Nav />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/task-one" component={TaskOne} />
    </Switch>
  </Router>
);

export default App;
