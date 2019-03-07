import React, { Component } from 'react';

import { User } from '../../store/basic.types';

import './AppSidebar.scss';

interface Props {
  user: User | null | undefined
}

class AppSidebar extends Component<Props> {

  render() {
    return (
      <ul className="Nav">
        <li className="NavItem">
          <a className="NavLink active" aria-current="true" href="#/explorer/search-documents">
            <i className="icon-docs"></i>
            Search documents
          </a>
        </li>
        <li className="NavItem">
          <a className="NavLink" aria-current="false" href="#/explorer/new-template">
            <i className="icon-plus"></i>
            New template
          </a>
        </li>
      </ul>
    )
  }
}

export default AppSidebar;