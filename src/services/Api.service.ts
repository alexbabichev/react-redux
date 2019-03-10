// API Service

import { Document, User, Template } from '../store/basic.types';

class ApiService {

  public baseApiUrl = '';

  constructor() {

  }

  public fetchDocuments(): Promise<Document[]> {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        resolve(DocumentsMock);
      }, 600);
    });
  }

  public fetchTemplates(): Promise<Template[]> {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        resolve(TemplatesMock);
      }, 500);
    });
  }

  public fetchUsers(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        resolve(UsersMock);
      }, 400);
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
  firstname: 'John',
  lastname: 'Daw',
  email: 'email@mail.com',
  role: 'admin'
}, {
  id: 'id2',
  name: 'James Bond',
  firstname: 'James',
  lastname: 'Bond',
  email: 'email@mail.com',
  role: 'super-user'
}];

const TemplatesMock: Template[] = [{
  "templateId": 0,
  "name": "Test template",
  "items": null
}, {
  "templateId": 1,
  "name": "Transfer Advice",
  "items": null
}, {
  "templateId": 2,
  "name": "1",
  "items": null
}, {
  "templateId": 3,
  "name": "Test I",
  "items": null
}, {
  "templateId": 4,
  "name": "Test html bs",
  "items": null
}, {
  "templateId": 5,
  "name": "Test html with",
  "items": null
}, {
  "templateId": 6,
  "name": "Test constr",
  "items": null
}, {
  "templateId": 7,
  "name": "Transfer Advice 1.2",
  "items": null
}];