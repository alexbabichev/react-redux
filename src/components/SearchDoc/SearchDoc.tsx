import React, { Component } from 'react';
import { FormState } from 'react-use-form-state';

import { SignUpForm, FormFields } from './Form';

interface Props {

}

class SearchDoc extends Component<Props> {

  handleForm = (data: FormState<FormFields>) => {
    console.log(data);
  }

  render() {
    return (
      <section className="Base">
        <header className="BaseHeader">
          <h1>Issued Documents</h1>
        </header>
        <section className="BaseContent">
          <SignUpForm onSubmit={this.handleForm}/>
        </section>
      </section>
    )
  }
}

export default SearchDoc;