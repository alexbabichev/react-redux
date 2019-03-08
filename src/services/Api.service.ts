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
    documentId: 'id1',
    documentName: 'documentName',
    documentLink: 'documentLink',
    recipientName: 'recipientName',
    revoked: false,
    expireTimestamp: Date.now()
  }, {
    documentId: 'id2',
    documentName: 'documentName2',
    documentLink: 'documentLink2',
    recipientName: 'recipientName2',
    revoked: true,
    expireTimestamp: Date.now()
  }


];