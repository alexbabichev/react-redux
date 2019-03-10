import React, { ReactElement } from 'react';
import { NavLink } from "react-router-dom";

import { User } from '../../store/basic.types';

import './AppSidebar.scss';

interface Props {
  user: User
}

function AppSidebar(props: Props): ReactElement {
  return (
    <div>
      <ul className="Nav">
        <li className="NavItem">
          <NavLink activeClassName="active" className="NavLink" to="/explorer/search-documents/">
            <i className="icon-docs"></i> Search documents
          </NavLink>
        </li>
        <li className="NavItem">
          <NavLink activeClassName="active" className="NavLink" to="/explorer/new-template/">
            <i className="icon-plus"></i> New Template
          </NavLink>
        </li>
        <li className="NavItem">
          <NavLink activeClassName="active" className="NavLink" to="/explorer/new-document/">
            <i className="icon-plus"></i> New document
          </NavLink>
        </li>
        <li className="NavItem">
          <NavLink activeClassName="active" className="NavLink" to="/explorer/users/">
            <i className="icon-people"></i> Users
          </NavLink>
        </li>
        <li className="NavItem">
          <NavLink activeClassName="active" className="NavLink" to="/explorer/oauth-clients/">
            <i className="icon-ghost"></i> OAuth Clients
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default AppSidebar;