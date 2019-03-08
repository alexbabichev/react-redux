import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from "react-router-dom";
import { NavbarToggler, NavbarBrand, Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

import { signOut } from '../../store/system/system.actions';
import { User } from '../../store/basic.types';

import { BlandLogo } from './BrandLogo';

import './AppHeader.scss';

interface Props {
  user: User | null | undefined;
  signOut: typeof signOut;
}

class AppHeader extends Component<Props & RouteComponentProps> {

  state = {
    isUserMenu: false,
  }

  toggleUserMenu = () => {
    this.setState({
      isUserMenu: !this.state.isUserMenu,
    });
  }

  handleLogo = () => {
    this.props.history.push('/explorer/');
  }

  handleProfile = () => {
    this.toggleUserMenu();
    this.props.history.push('/explorer/profile/');
  }

  handleSignout = () => {
    this.toggleUserMenu();
    this.props.signOut();
  }
  
  render() {    
    return (
      <header className="AppHeader navbar">
        <NavbarToggler className="d-lg-none">
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>

        <NavbarBrand onClick={this.handleLogo}>
          <BlandLogo />
        </NavbarBrand>

        {this.props.user && <Dropdown isOpen={this.state.isUserMenu} toggle={this.toggleUserMenu}>
          <DropdownToggle tag="span" onClick={this.toggleUserMenu} data-toggle="dropdown" aria-expanded={this.state.isUserMenu}>
            <div className="Username">
              <img src={this.props.user.image} />
              {this.props.user.name}
              <i className="DropDownArrow"></i>
            </div>
          </DropdownToggle>
          <DropdownMenu className="DropDownMenu">
            <div onClick={this.handleProfile}>Profile</div>
            <div onClick={this.handleSignout}>Sign Out</div>
          </DropdownMenu>
        </Dropdown>}
      </header>
    )
  }
}

const mapStateToProps = () => ({ });

export default withRouter(connect(mapStateToProps, { signOut })(AppHeader));