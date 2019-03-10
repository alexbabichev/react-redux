// This file holds our state type, as well as any other types related to this Redux store.
import { Template } from '../basic.types';

// Describing the shape of the system's slice of state
export interface TemplatesState {
  templates: Template[];
  error?: string | null;
  pending?: boolean;
}

// Types of actions that can be dispatched
export enum ActionType {
  GetListTemplates = 'Templates/GetList',
  CreateTemplate = 'Templates/Create',
  UpdateTemplate = 'Templates/Update',
  DeleteTemplate = "Templates/Delete"
}

// Interface for our actions (if the precise action type isn't
// known yet) which explains the 'payload' within the transformer.
export interface TemplatesAction<T> {
  type: ActionType;
  payload: T;
}