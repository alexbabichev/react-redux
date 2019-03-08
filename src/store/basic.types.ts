// This file holds our common and shared types

export interface User {
  id?: string;
  name?: string;
  image?: string;
  email?: string;
}

export interface Document {
  documentId?: string;
  documentName?: string;
  documentLink?: string;
  recipientName?: string;
  expireTimestamp?: number;
  revoked?: boolean;
  pending?: boolean;
}