import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AppState } from '../../store';
import { SystemState } from '../../store/system/system.types';


import Header from '../../components/AppHeader/AppHeader';

interface Props {
  system: SystemState;
}

class Explorer extends Component<Props> {

  render() {
    console.log(this.props);
    return(
      <section className="app">
        <Header user={this.props.system.user} />
        <div>Explorer</div>
      </section>
    )
  }
}

// export default Explorer;

const mapStateToProps = (state: AppState) => ({
  system: state.system
});

export default connect(mapStateToProps)(Explorer);
