import React, { Component } from 'react';

import CustomCKEditor from './CKEditor';

import './NewTemplate.scss';

interface Props {

}

class NewTemplate extends Component<Props> {

  render() {
    return (
      <section className="Base">
        <header className="BaseHeader">
          <h1>New Template</h1>
        </header>

        <section className="baseBody">
          <CustomCKEditor />
        </section>

      </section>
    )
  }
}

export default NewTemplate;
