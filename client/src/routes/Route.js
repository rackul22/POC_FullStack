import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../auth/Login';
import WelcomeComponent from '../components/WelcomeComponent';
import Alert from '../auth/alert';

const AppRouter = () => {
  return (
    <Router>
      {/* <Alert> */}
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/Welcome' component={WelcomeComponent} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
