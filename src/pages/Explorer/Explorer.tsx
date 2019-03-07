import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { AppState } from '../../store';
import { SystemState } from '../../store/system/system.types';

import AppHeader from '../../components/AppHeader/AppHeader';
import AppSidebar from '../../components/AppSidebar/AppSidebar';

import Profile from '../../components/Profile/Profile';
import SearchDoc from '../../components/SearchDoc/SearchDoc';


import './Explorer.scss';

function DefaultContent() {
  return <h1>AppContent!</h1>
}

interface Props {
  system: SystemState;
}

class Explorer extends Component<Props> {

  render() {
    return (
      <section className="App">
        <header className="AppHeader">
          <AppHeader user={this.props.system.user} />
        </header>
        <aside className="AppSidebar">
          <AppSidebar user={this.props.system.user} />
        </aside>
        <div className="AppContent">
          <Switch>
            <Route exact path="/explorer/" component={DefaultContent} />
            <Route path="/explorer/search-documents/" component={SearchDoc} />
            <Route path="/explorer/profile" render={props => (
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

export default connect(mapStateToProps)(Explorer);
