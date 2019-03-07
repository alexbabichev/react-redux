import React, { Component } from 'react';
import { NavbarToggler, NavbarBrand } from 'reactstrap';


import { User } from '../../store/basic.types';

import './AppHeader.scss';

interface Props {
  user: User | null | undefined
}

class AppHeader extends Component<Props> {

  render() {
    return (
      <header className="AppHeader navbar">
        <NavbarToggler className="d-lg-none">
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>
        <NavbarBrand>
          <svg className="AppHeader__logo" xmlns="http://www.w3.org/2000/svg" width="114" height="28" viewBox="0 0 114 28">
            <g fill="none" fillRule="evenodd">
              <text className="header__logo-text" fill="#FFF" fontFamily="MuseoSansCyrl" fontSize="21.538" fontWeight="700" letterSpacing=".103" transform="translate(0 -2)">
                <tspan x="38.462" y="22.308">cronica</tspan>
              </text>
              <path className="logo-circle" fill="#52A1FF" fillRule="nonzero" d="M13.846.308v3.077c-5.948 0-10.77 4.821-10.77 10.769s4.822 10.77 10.77 10.77c2.974 0 5.666-1.206 7.615-3.155l2.176 2.176A13.803 13.803 0 0 1 13.847 28C6.198 28 0 21.8 0 14.154 0 6.507 6.2.308 13.846.308z"/>
              <path className="logo-tick" stroke="#76D6FF" strokeWidth="3.077" d="M26.89 4.527L13.834 17.581l-6.527-6.527"/>
            </g>
          </svg>
        </NavbarBrand>
        {this.props.user &&
          <div className="AppHeader__username">
            <img src={this.props.user.image} />
            {this.props.user.name}
          </div>
        }
      </header>
    )
  }
}

export default AppHeader;