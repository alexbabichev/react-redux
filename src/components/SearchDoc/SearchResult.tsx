import React, { ReactElement, useState } from 'react';

import { DocumentsState } from '../../store/documents/documents.types';
import { Document } from '../../store/basic.types';

export interface Props {
  documents: DocumentsState;
}

function SearchResult(props: Props): ReactElement {
  const length = (props.documents.documents) ? props.documents.documents.length : 0;
  return (
    <section>
      <h1>Search results ({length}): </h1>
      <p>Pending: {props.documents.pending ? 'true' : 'false'}</p>
    </section>
  )
}

export { SearchResult };