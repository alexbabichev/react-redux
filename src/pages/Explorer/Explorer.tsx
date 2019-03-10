import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { AppState } from '../../store';
import { SystemState } from '../../store/system/system.types';
import { signOut } from '../../store/system/system.actions';

import AppHeader from '../../components/AppHeader/AppHeader';
import AppSidebar from '../../components/AppSidebar/AppSidebar';

import Profile from '../../components/Profile/Profile';
import SearchDoc from '../../components/SearchDoc/SearchDoc';
import NewTemplate from '../../components/NewTemplate/NewTemplate';
import Users from '../../components/Users/Users';
import OAuthClients from '../../components/OAuthClients/OAuthClients';

import './Explorer.scss';

function DefaultContent() {
  return <h1>AppContent!</h1>
}

interface Props {
  system: SystemState;
  signOut: typeof signOut;
}

class Explorer extends Component<Props> {

  handleSignOut = () => {
    this.props.signOut();
  }

  render() {
    return (
      <section className="App">
        <header className="AppHeader">
          <AppHeader user={this.props.system.user} onSignOut={this.handleSignOut} />
        </header>
        <aside className="AppSidebar">
          <AppSidebar user={this.props.system.user} />
        </aside>
        <div className="AppContent">
          <Switch>
            <Route exact path="/explorer/" component={DefaultContent} />
            <Route path="/explorer/search-documents/" component={SearchDoc} />
            <Route path="/explorer/new-template/" component={NewTemplate} />
            <Route path="/explorer/users/:id" component={Users} />
            <Route exact path="/explorer/users/" component={Users} />
            <Route exact path="/explorer/users/create" component={Users} />
            <Route path="/explorer/oauth-clients/" component={OAuthClients} />
            <Route path="/explorer/profile" render={() => (
              <Profile user={this.props.system.user}/>
            )}/> 
          </Switch>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  system: state.system
});

export default connect(mapStateToProps, { signOut })(Explorer);
