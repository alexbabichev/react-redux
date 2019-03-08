import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

import { AppState } from '../../store';
import { UsersState } from '../../store/users/users.types';
import { thunkGetList } from '../../store/users/users.actions';

import { User } from '../../store/basic.types';

import { UserList } from './UserList';
import { UserDetail } from './UserDetail';

import './Users.scss';

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
  users: UsersState;
  thunkGetList: Function;
}

class Users extends Component<Props> {

  activeUser: User = {};

  componentDidMount() {
    this.props.thunkGetList();
  }

  render() {

    return (
      <section className="Base">
        <header className="BaseHeader">
          <h1>Users</h1>
        </header>
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
      </section>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  users: state.users
});

export default connect(mapStateToProps, { thunkGetList })(Users);
