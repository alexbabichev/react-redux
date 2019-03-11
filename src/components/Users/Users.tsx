import React, { Component } from 'react';
import { Route, Switch, RouteComponentProps, NavLink } from 'react-router-dom';
import { Spinner } from 'reactstrap';

import { connect } from 'react-redux';

import { AppState } from '../../store';
import { UsersState } from '../../store/users/users.types';
import { thunkGetList } from '../../store/users/users.actions';

import { User } from '../../store/basic.types';

import UserList from './UserList';
import UserDetail from './UserDetail';

import './Users.scss';

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
  users: UsersState;
  thunkGetList: () => void;
}

class Users extends Component<Props> {

  activeUser: User = {};

  componentDidMount() {
    this.props.thunkGetList();
  }

  render() {
    return (
      <Switch>
        <Route path="/explorer/users/:id" render={() => (
          <UserDetail users={this.props.users} id={this.props.match.params.id} />
        )} />
        <Route path="/explorer/users/create" render={() => (
          <UserDetail users={this.props.users} />
        )} />
        <Route exact path="/explorer/users/" render={() => (
          <UserList users={this.props.users} />
        )} />
      </Switch>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  users: state.users
});

export default connect(mapStateToProps, { thunkGetList })(Users);
