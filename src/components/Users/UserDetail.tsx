import React, { ReactElement } from 'react';
import { Spinner } from 'reactstrap';

import { User } from '../../store/basic.types';
import { UsersState } from '../../store/users/users.types';

export interface Props {
  id?: string;
  users: UsersState;
}

function UserDetail(props: Props): ReactElement {
  const list = props.users.users || [];
  const user: User | undefined = list.find(user => user.id === props.id);

  if (!user)
    return(
      <p>No user</p>
    )

  return (
    <div>User {user.name}</div>
  )
}

export { UserDetail };