import React, { ReactElement, useState } from 'react';
import { Spinner } from 'reactstrap';

import { DocumentsState } from '../../store/documents/documents.types';
import { Document } from '../../store/basic.types';

export interface Props {
  documents: DocumentsState;
}

function SearchResult(props: Props): ReactElement {
  const length = (props.documents.documents) ? props.documents.documents.length : 0;
  const documents = props.documents.documents || [];

  if (props.documents.pending)
    return (
      <section className="SearchResult text-center">
        <Spinner style={{ width: '3rem', height: '3rem' }} />
      </section>
    );

  return (
    <section className="SearchResult">
      <h1>Search results ({length}): </h1>
      <p>&nbsp;</p>
      <div className="row">
        {documents.map((document, i) => (
          <div className="col-4">
            <div key={i} className="card ">
              <div className="card-header">
                [ {document.documentId} ] <b>{document.documentName}</b>
              </div>
              <div className="card-body">
                <p><a href="#">{document.documentLink}</a></p>
                <p>{new Date(document.expireTimestamp || 0).toLocaleString()}</p>
                <p>revoked: {document.revoked ? 'yes' : 'no'}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export { SearchResult };