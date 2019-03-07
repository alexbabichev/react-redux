import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { AppState } from '../../store';
import { SystemState } from '../../store/system/system.types';


import AppHeader from '../../components/AppHeader/AppHeader';
import AppSidebar from '../../components/AppSidebar/AppSidebar';

import Profile from '../../components/Profile/Profile';

import './Explorer.scss';


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
          <h1>AppContent</h1>
          <Switch>
            <Route path="/explorer/profile" component={Profile} />
          </Switch>
        </div>
      </section>
    )
  }
}

// export default Explorer;

const mapStateToProps = (state: AppState) => ({
  system: state.system
});

export default connect(mapStateToProps)(Explorer);
