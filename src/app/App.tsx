import React, { Component } from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import { ProtectedRoute, ProtectedRouteProps } from '../components/PrivateRoute/PrivateRoute';

import { AppState } from '../store';
import { SystemState } from '../store/system/system.types';

import { userChanged, subsribeChanges } from '../store/system/system.actions';

import Explorer from '../pages/Explorer/Explorer';
import SignIn from '../pages/SignIn/SignIn';

import './App.scss';

interface AppProps {
  system: SystemState;
  userChanged: Function;
}

class App extends Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
    subsribeChanges(this.props.userChanged);
  }

  render() {
    const defaultProtectedRouteProps: ProtectedRouteProps = {
      isAuthenticated: this.props.system.signedIn || false,
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

export default connect(mapStateToProps, { userChanged })(App);
