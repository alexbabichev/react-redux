import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// import './IssueDoc.scss';

interface Props {

}

class IssueDoc extends Component<Props> {

  render() {
    return (
      <section className="Base">
        <header className="BaseHeader">
          <h1>
            <small>
              <NavLink to="/explorer/new-document/">
                <i className="icon-arrow-left"></i>
              </NavLink>
            </small>
            &nbsp;
            Issue Document</h1>
        </header>
      </section>
    )
  }
}

export default IssueDoc;
