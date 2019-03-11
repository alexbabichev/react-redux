// This file holds our common and shared types

export interface User {
  id?: string;
  name?: string;
  firstname?: string;
  lastname?: string;
  image?: string;
  email?: string;
  role?: string;
  token?: string;
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

export interface Template {
  templateId?: number;
  name?: string;
  items?: TemplateItems | null; 
}

export interface TemplateItems {
  fields: TemplateField[]
  tables: any[]
  mutable: boolean;
}

export interface TemplateField {
  name: string;
  systemName: string;
  value?: string;
}

export interface TemplateTable {

}