import { any } from "prop-types";

export interface GApiSettings {
  clientId: string;
  cookiepolicy?: string;
  scope?: string;
}

export interface GApi {
  load(arg0: string, arg1: Function): void;
  auth2: {
    init(arg0: GApiSettings): Promise<Auth2>
  }
}

export interface Auth2 {
  isSignedIn: {
    listen(arg0: Function | null): void;
  };
  currentUser: {
    get(): Function;
  }
  signIn(): Promise<any> | Function;
  signOut(): Promise<any> | Function;
}

export type GoogleUser = any;