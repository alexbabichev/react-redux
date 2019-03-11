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

function IssueDocForm(props: Props): ReactElement {

  const [formIsValid, setFormValidity] = useState(false);
  const [formIsTouched, setFormTouch] = useState(false);

  const [formState, { text }] = useFormState<FormFields>();

  const handleSubmit = () => { 
    props.onSubmit(formState);
  }

  return (
    <form className="BaseForm IssueDocForm" onSubmit={handleSubmit} >
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Document Name" {...text('name')} />
      </div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Document Holder" {...text('holder')}  />
      </div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Issue Date"  {...text('date')} />
      </div>
      <button type="button" className="btn btn-block btn-lg btn-primary" onClick={handleSubmit} disabled={!formIsValid}>Submit</button>
    </form>
  )
}

export default IssueDocForm;