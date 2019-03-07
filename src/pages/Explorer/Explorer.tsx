import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AppState } from '../../store';
import { SystemState } from '../../store/system/system.types';


import AppHeader from '../../components/AppHeader/AppHeader';
import AppSidebar from '../../components/AppSidebar/AppSidebar';


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
