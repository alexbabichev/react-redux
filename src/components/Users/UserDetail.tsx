import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
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
    <section className="Base">
      <header className="BaseHeader">
        <h1>
          <small>
            <NavLink to="/explorer/users/">
              <i className="icon-arrow-left"></i>
            </NavLink>
          </small>
          &nbsp;{user.name || 'New user'}
          {props.users.pending && <small><Spinner size="sm" /></small>}
        </h1>
      </header>
      <section className="BaseContent">
        <UserForm user={user} onSubmit={handleForm} />
      </section>
    </section>
  )
}

export default UserDetail;