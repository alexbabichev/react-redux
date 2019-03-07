import React, { Component } from 'react';

import { User } from '../../store/basic.types';

// import './Profile.scss';

interface Props {
  user: User | null | undefined
}

class Profile extends Component<Props> {

  render() {
    return (
      <h1>Profile</h1>
    )
  }
}

export default Profile;