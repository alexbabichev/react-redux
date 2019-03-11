import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Redirect, RouteComponentProps } from 'react-router-dom';
import { Spinner } from 'reactstrap';

import { AppState } from '../../store';
import { TemplatesState } from '../../store/templates/templates.types';
import { thunkGetList } from '../../store/templates/templates.actions';


import IssueDocForm from './SearchForm';

import './IssueDoc.scss';

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
  templates: TemplatesState;
  thunkGetList: () => void;
}

class IssueDoc extends Component<Props> {

  pending = false;

  componentDidMount() {
    if (!this.props.templates.templates || !this.props.templates.templates.length) {
      this.pending = true;
      this.props.thunkGetList();
    }
  }

  handleForm = () => { }

  getTemplateById = (id: number) => {
    const templates = this.props.templates.templates || [];
    return templates.find(template => template.templateId === id);
  }

  render() {
    const id = parseInt(this.props.match.params.id);
    const templates = this.props.templates.templates || [];

    if (this.pending && !templates.length)
      return (
        <div className="text-center">
          <Spinner style={{ width: '3rem', height: '3rem' }} />
        </div>
      )

    const template = (Number.isInteger(id) ? this.getTemplateById(id) : {}) || {};

    if (!template.name && !!id)
      return (<Redirect to="/explorer/new-document/" />);

    return (
      <section className="Base">
        <header className="BaseHeader">
          <h1>
            <small>
              <NavLink to="/explorer/new-document/">
                <i className="icon-arrow-left"></i>
              </NavLink>
            </small>
            &nbsp;
            Issue {template.name ? template.name : 'Generic Document'}
          </h1>
        </header>
        <section className="BaseContent">
          <IssueDocForm onSubmit={this.handleForm} template={template} />
        </section>
      </section>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  templates: state.templates
});

export default connect(mapStateToProps, { thunkGetList })(IssueDoc);

