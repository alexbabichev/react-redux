import React, { Component } from 'react';

import './Users.scss';

interface Props {

}

class NewTemplate extends Component<Props> {

  render() {
    return (
      <section className="Base">
        <header className="BaseHeader">
          <h1>Users</h1>
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
              <tr>
                <td>1</td>
                <td>super-root</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>ADMIN</td>
                <td><a href="#">edit</a></td>
              </tr>
              <tr>
                <td>2</td>
                <td>super-user</td>
                <td>Super</td>
                <td>User</td>
                <td>super-mail@mail.com</td>
                <td>ADMIN</td>
                <td><a href="#">edit</a></td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>
    )
  }
}

export default NewTemplate;
