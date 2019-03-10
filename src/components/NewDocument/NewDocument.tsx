import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';

import { AppState } from '../../store';
import { TemplatesState } from '../../store/templates/templates.types';
import { thunkGetList } from '../../store/templates/templates.actions';

import { TemplatesList } from './TemplatesList';

import './NewDocument.scss';

interface Props {
  templates: TemplatesState;
  thunkGetList: () => void;
}

class NewDocument extends Component<Props> {

  componentDidMount() {
    this.props.thunkGetList();
  }

  render() {
    return (
      <section className="Base">
        <header className="BaseHeader">
          <h1>New Document
            {this.props.templates.pending && <small><Spinner size="sm" /></small>}
          </h1>
        </header>
        <section className="BaseContent">
          <p className="dimmed">Select document from template or choose Generic Document</p>
          <TemplatesList  templates={this.props.templates} />
        </section>

      </section>
    )
  }
}


const mapStateToProps = (state: AppState) => ({
  templates: state.templates
});

export default connect(mapStateToProps, { thunkGetList })(NewDocument);
