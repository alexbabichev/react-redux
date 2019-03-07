import React, { ReactElement, useState } from 'react';

import { useFormState, FormState } from 'react-use-form-state';

export interface FormFields {
  id: string;
  holder: string;
  name: string;
  date: string;
}

export interface Props {
  onSubmit: (data: FormState<FormFields>) => void;
}

function SignUpForm(props: Props): ReactElement {

  const [formIsValid, setFormValidity] = useState(false);
  const [formIsTouched, setFormTouch] = useState(false);
  const [formState, { text }] = useFormState<FormFields>(null, {
    onChange(e, stateValues, nextStateValues) {
      setFormValidity(checkForm(nextStateValues));
    }
  });

  const handleSubmit = () => { 
    props.onSubmit(formState)
  }

  function checkForm(nextStateValues: FormFields) {
    const values = Object.values(nextStateValues).join('');
    if (values.length) setFormTouch(true);
    return values.length > 0;
  }

  return (
    <form className="BaseForm" onSubmit={handleSubmit} >
      {(!formIsValid && formIsTouched)
        ? <p className="Label text-danger">Form invalid: Enter at least one field</p>
        : <p className="Label">Search for existing documents</p>
      }
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Document ID" {...text('id')} />
      </div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Document Holder" {...text('holder')}  />
      </div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Document Name" {...text('name')} />
      </div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Issue Date"  {...text('date')} />
      </div>
      <button type="button" className="btn btn-block btn-lg btn-primary" onClick={handleSubmit} disabled={!formIsValid}>Submit</button>
    </form>
  )
}

export { SignUpForm };