import React, { ReactElement } from 'react';
import { NavLink } from "react-router-dom";
import { Spinner } from 'reactstrap';

import { UsersState } from '../../store/users/users.types';

export interface Props {
  users: UsersState;
}

function UserList(props: Props): ReactElement {

  const users = (props.users) ? props.users.users || [] : [];

  if (!props.users || !users.length)
    return (
      <div className="text-center">
        <Spinner style={{ width: '3rem', height: '3rem' }} />
      </div>
    )

  return (
    <section className="Base">
      <header className="BaseHeader">
        <h1>
          Users
          {props.users.pending && <small><Spinner size="sm" /></small>}
        </h1>
      </header>
      <section className="BaseContent">
        <table className="table table-striped table-hover UsersTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>USERNAME</th>
              <th>FIRSTNAME</th>
              <th>LASTNAME</th>
              <th>EMAIL</th>
              <th>ROLE</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <NavLink to={'/explorer/users/' + user.id}>
                    <i className="icon-pencil"></i> edit
                </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  )
}

export default UserList;