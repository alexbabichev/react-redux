import React, { ReactElement } from 'react';
import { Spinner } from 'reactstrap';

import { User } from '../../store/basic.types';

export interface Props {
  user: User;
}

function UserDetail(props: Props): ReactElement {
  return (
    <div>User {props.user.name}</div>
  )
}

export { UserDetail };