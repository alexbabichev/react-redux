import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { AppState } from '../../store';
import { SystemState } from '../../store/system/system.types';
import { signIn } from '../../store/system/system.actions';

import './SignIn.scss';

interface Props {
  system: SystemState;
  signIn: typeof signIn;
}

class SignIn extends Component<Props> {

  onSignIn = () => {
    this.props.signIn();
  }

  render() {
    if (this.props.system.signedIn) {
      return <Redirect to="/explorer/" />;
    }

    return (
      <section className="SignIn">
        <header className="SignInHeader">
          <h2 className="signin__title">Welcome to Cronica</h2>
          <h3 className="signin__second-title">Sign in to use the service</h3>
        </header>
        <div className="SignInBody text-center ">
          <p>Use your Google Account to sign in</p>
          <p>
            <button className="btn btn-lg btn-primary" onClick={this.onSignIn}>
              <img src="https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png" />
              &nbsp;
              Sign In with Google
            </button>
          </p>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  system: state.system
});

export default connect(mapStateToProps, { signIn })(SignIn);
