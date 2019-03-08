// API Service

import { Document, User } from '../store/basic.types';

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

  public fetchUsers(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        resolve(UsersMock);
      }, 1000);
    });
  }
}

export const apiService = new ApiService();

// MOCKS

const DocumentsMock: Document[] = [{
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
}];

const UsersMock: User[] = [{
  id: 'id1',
  name: 'John Daw',
  email: 'email@mail.com',
  role: 'admin'
}, {
  id: 'id2',
  name: 'James Bond',
  email: 'email@mail.com',
  role: 'super-user'
}]