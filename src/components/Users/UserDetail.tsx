import React, { ReactElement } from 'react';
import { Spinner } from 'reactstrap';
import { FormState } from 'react-use-form-state';

import { User } from '../../store/basic.types';
import { UsersState } from '../../store/users/users.types';

import UserForm, { FormFields } from './UserForm';

export interface Props {
  id?: string;
  users: UsersState;
}

function UserDetail(props: Props): ReactElement {
  const list = props.users.users || [];
  const user: User | undefined = list.find(user => user.id === props.id);

  const handleForm = (data: FormState<FormFields>) => {
    console.log('handleForm', data);
  }

  if (!list.length)
    return (
      <div className="text-center">
        <Spinner style={{ width: '3rem', height: '3rem' }} />
      </div>
    )

  if (!user)
    return (
      <p>No user</p>
    )

  return (
    <UserForm user={user} onSubmit={handleForm} />
  )
}

export default UserDetail;