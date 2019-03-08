import React, { Component } from 'react';
import { FormState } from 'react-use-form-state';
import { connect } from 'react-redux';

import { AppState } from '../../store';
import { DocumentsState } from '../../store/documents/documents.types';
import { thunkGetList } from '../../store/documents/documents.actions';

import { SearchForm, FormFields } from './SearchForm';
import { SearchResult } from './SearchResult';


interface Props {
  documents: DocumentsState;
  thunkGetList: Function;
}

class SearchDoc extends Component<Props> {

  handleForm = (data: FormState<FormFields>) => {
    this.fetchDocuments();
  }

  fetchDocuments = () => {
    this.props.thunkGetList();
  }

  render() {
    return (
      <section className="Base">
        <header className="BaseHeader">
          <h1>Issued Documents</h1>
        </header>
        <section className="BaseContent">
          <SearchForm onSubmit={this.handleForm}/>
          <SearchResult documents={this.props.documents} />
        </section>
      </section>
      
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  documents: state.documents
});

export default connect(mapStateToProps, { thunkGetList })(SearchDoc);