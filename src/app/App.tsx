import React, { Component } from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import { ProtectedRoute, ProtectedRouteProps } from '../components/PrivateRoute/PrivateRoute';

import { AppState } from '../store';
import { SystemState } from '../store/system/system.types';

import { subsribeChanges, updateAuth } from '../store/system/system.actions';

import Explorer from '../pages/Explorer/Explorer';
import SignIn from '../pages/SignIn/SignIn';

interface AppProps {
  system: SystemState;
  updateAuth: typeof updateAuth;
}

class App extends Component<AppProps> {
  componentDidMount() {
    subsribeChanges(this.props.updateAuth);
  }

  render() {
    const defaultProtectedRouteProps: ProtectedRouteProps = {
      isAuthenticated: this.props.system.signedIn,
      authenticationPath: '/signin/'
    };

    return (
      <Router>
        <Switch>
          <Route path="/signin/" component={SignIn} />
          <ProtectedRoute {...defaultProtectedRouteProps} path="/explorer/" component={Explorer} />
          <Redirect from="/" to="/explorer/" />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  system: state.system
});

export default connect(mapStateToProps, { updateAuth })(App);
