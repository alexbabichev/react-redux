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
          <h2>Role:</h2>
          <p>{this.props.user.role || 'none'}</p>
          <br />
          <h2>Auth token:</h2>
          <p className="ellipsis">{this.props.user.token}</p>
          <br />
          <h2>Name:</h2>
          <p>{this.props.user.name}</p>
          <p>
            Given name: {this.props.user.firstname}
            <br />
            Family name: {this.props.user.lastname}</p>
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