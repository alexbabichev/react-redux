import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import { User } from '../../store/basic.types';

import './AppSidebar.scss';

interface Props {
  user: User | null | undefined
}

class AppSidebar extends Component<Props> {

  render() {
    return (
      <div>
        <ul className="Nav">
          <li className="NavItem">
            <NavLink activeClassName="active" className="NavLink" to="/explorer/search-documents/">
              <i className="icon-docs"></i> Search
            </NavLink>
          </li>
          <li className="NavItem">
            <NavLink activeClassName="active" className="NavLink" to="/explorer/profile/">
              <i className="icon-plus"></i> Profile
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

export default AppSidebar;