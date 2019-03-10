import React, { PureComponent } from 'react';

import { User } from '../../store/basic.types';

interface Props {
  user: User | null | undefined;
}

class Profile extends PureComponent<Props> {
  render() {
    return (
      <section className="Base">
        <header className="BaseHeader">
          <h1>Profile</h1>
        </header>
        {this.props.user && <section className="BaseContent">
          <h2>Auth token:</h2>
          <p>...</p>
          <br />
          <h2>Name:</h2>
          <p>{this.props.user.name}</p>
          <br />
          <h2>Email:</h2>
          <p>{this.props.user.email}</p>
        </section>
        }
      </section>
    )
  }
}

export default Profile;