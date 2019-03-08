import { Document } from '../store/basic.types';

class ApiService {
  
  public baseApiUrl = '';

  constructor() {

  }

  public fetchDocuments(): Promise<Document[]> {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        resolve(DocumentsMock);
      }, 1000);
    });
  }
}

export const apiService = new ApiService();

const DocumentsMock: Document[] = [
  {
    documentId: 'documentId',
    documentName: 'documentName',
    documentLink: 'documentLink',
    recipientName: 'recipientName',
    revoked: false,
    expireTimestamp: 0
  }
];