import React, { ReactElement } from 'react';
import { Spinner } from 'reactstrap';

import { TemplatesState } from '../../store/templates/templates.types';

export interface Props {
  templates: TemplatesState;
}

function TemplatesList(props: Props): ReactElement {
  const templates = props.templates.templates || [];

  if (!props.templates || !templates.length)
    return (
      <section className="text-center">
        <Spinner style={{ width: '3rem', height: '3rem' }} />
      </section>
    );

  return (
    <div className="row">
      <div className="col-4" >
        <div className="card">
          <div className="card-header">
            [ default ]
            </div>
          <div className="card-body">
            <b>Generic Document</b>
          </div>
        </div>
      </div>
      {templates.map(template => (
        <div className="col-4" key={template.templateId} >
          <div className="card">
            <div className="card-header">
              [ {template.templateId} ]
            </div>
            <div className="card-body">
              <b>{template.name}</b>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export { TemplatesList };