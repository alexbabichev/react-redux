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
          <div key={i} className="card col-4">
            <div className="card-body">
              <h4 className="card-title">{document.documentId} <b>{document.documentName}</b></h4>
              <p><a href="#">{document.documentLink}</a></p>
              <p>{new Date(document.expireTimestamp || 0).toLocaleString()}</p>
              <p>revoked: {document.revoked ? 'yes' : 'no'}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export { SearchResult };