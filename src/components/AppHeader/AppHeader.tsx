import React, { PureComponent } from 'react';
import { withRouter, RouteComponentProps } from "react-router-dom";
import { NavbarToggler, NavbarBrand, Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

import { User } from '../../store/basic.types';

import { BlandLogo } from './BrandLogo';

import './AppHeader.scss';

interface Props {
  user: User;
  onSignOut: Function;
}

class AppHeader extends PureComponent<Props & RouteComponentProps> {
  state = {
    isDropDown: false,
  }

  private toggleUserMenu = () => {
    this.setState({
      isDropDown: !this.state.isDropDown,
    });
  }

  private handleLogoClick = () => {
    this.props.history.push('/explorer/');
  }

  private handleProfile = () => {
    this.toggleUserMenu();
    this.props.history.push('/explorer/profile/');
  }

  private handleSignout = () => {
    this.toggleUserMenu();
    this.props.onSignOut();
  }

  public render() {
    return (
      <header className="AppHeader navbar">
        <NavbarToggler className="d-lg-none">
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>

        <NavbarBrand onClick={this.handleLogoClick}>
          <BlandLogo />
        </NavbarBrand>

        {this.props.user && <Dropdown isOpen={this.state.isDropDown} toggle={this.toggleUserMenu}>
          <DropdownToggle tag="span" onClick={this.toggleUserMenu} data-toggle="dropdown" aria-expanded={this.state.isDropDown}>
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

export default withRouter(AppHeader);