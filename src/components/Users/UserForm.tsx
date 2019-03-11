import React, { ReactElement } from 'react';

import { useFormState, FormState } from 'react-use-form-state';

import { User } from '../../store/basic.types';

export interface FormFields extends User {
  password: string;
}

export interface Props {
  user: User;
  onSubmit: (formState: FormState<FormFields>) => void;
}

function UserForm(props: Props): ReactElement {

  const [formState, { text }] = useFormState<FormFields>(props.user);

  const handleSubmit = () => { 
    props.onSubmit(formState);
  }

  return(
    <form className="BaseForm" onSubmit={handleSubmit} >
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Name" {...text('name')} />
      </div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Email" {...text('email')} />
      </div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Password" {...text('password')} />
      </div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Role" {...text('role')} />
      </div>
      <button type="button" className="btn btn-block btn-lg btn-primary" onClick={handleSubmit}>Submit</button>
    </form>
  )
}

export default UserForm;