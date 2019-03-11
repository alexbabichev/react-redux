import React, { ReactElement } from 'react';
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Spinner } from 'reactstrap';

import { TemplatesState } from '../../store/templates/templates.types';

export interface Props {
  templates: TemplatesState;
}

function TemplatesList(props: Props & RouteComponentProps): ReactElement {
  const templates = props.templates.templates || [];

  const handleClick = (id?: number) => {
    props.history.push(`/explorer/issue-document/${id + '' || ''}`);
  }

  if (!props.templates || !templates.length)
    return (
      <section className="text-center">
        <Spinner style={{ width: '3rem', height: '3rem' }} />
      </section>
    );

  return (
    <div className="row TemplatesList">
      <div className="col-4" >
        <div className="card" onClick={ () => handleClick()} >
          <div className="card-header">
            [ default ]
            </div>
          <div className="card-body">
            <b>Generic Document</b>
            <small><br /><br /><br /></small>
          </div>
        </div>
      </div>
      {templates.map(template => (
        <div className="col-4" key={template.templateId} >
          <div className="card" onClick={() => handleClick(template.templateId)} >
            <div className="card-header">
              [ {template.templateId} ]
            </div>
            <div className="card-body">
              <b>{template.name}</b>
              <br />
              {template.items 
                ? <small className="dimmed">Fields: {template.items.fields.length}<br />Tables: {template.items.tables.length}</small>
                : <small className="dimmed">Fields: 0<br />Tables: 0</small>}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default withRouter(TemplatesList);