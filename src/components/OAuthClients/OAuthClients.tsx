import React, { Component } from 'react';

interface Props {

}

class NewTemplate extends Component<Props> {

  render() {
    return (
      <section className="Base">
        <header className="BaseHeader">
          <h1>OAuth Clients</h1>
        </header>
        <section className="BaseContent">
          <table className="table table-striped table-hover UsersTable">
            <thead>
              <tr>
                <th>ID</th>
                <th>Client Secret</th>
                <th>Grant Types</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>trustedclientid</td>
                <td>$2a$10$UOFU3ZAFNKz4Q1.tfbzXFOF0vEjQ2m8ae11qAmK3w7jLmi8f/5DOy</td>
                <td>refresh_token</td>
                <td><a href="#">edit</a></td>
                <td><a>delete</a></td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>
    )
  }
}

export default NewTemplate;
