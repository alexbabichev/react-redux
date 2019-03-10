import { User } from '../store/basic.types';
import { GApi, GApiSettings, GoogleUser, Auth2 } from './gapi.interface';

import { apiService } from './api.service';

declare const gapi: GApi;

const gapiSettings: GApiSettings = {
  clientId: '825046320659-o7ltcdfs9ich8a6htgmbmpcbrq1h33ir.apps.googleusercontent.com',
  cookiepolicy: 'single_host_origin',
  scope: 'profile'
};

class AuthService {

  public isAuthenticated = !!sessionStorage.getItem('signedIn');

  private user: User = {};
  private auth2: Auth2 | any;
  private eventHandler = (user: User, isAuthenticated: boolean) => {};
  
  constructor() {
    this.onInit();
  }

  private onInit() {
    if (!gapi) return;

    gapi.load('auth2', () => {
      gapi.auth2.init(gapiSettings)
        .then((auth2: any) => {
          this.auth2 = auth2;
          this.subscribe();
        })
        .catch(console.log);
    });
  }

  private extractUser(googleUser: GoogleUser): User {
    const profile = googleUser.getBasicProfile();

    apiService.authToken = googleUser.getAuthResponse().id_token;
    sessionStorage.setItem('signedIn', '~');
    
    return {
      id: profile.getId(),
      name: profile.getName(),
      firstname: profile.getGivenName(),
      lastname: profile.getFamilyName(),
      email: profile.getEmail(),
      image: profile.getImageUrl(),
      token: googleUser.getAuthResponse().id_token
    }
  }

  private subscribe() {
    if (!this.auth2) return;

    if (this.auth2.isSignedIn.get()) {
      this.isAuthenticated = true;
      this.user = this.extractUser(this.auth2.currentUser.get());
      this.eventHandler(this.user, this.isAuthenticated );
    }

    this.auth2.isSignedIn
      .listen((signedIn: boolean) => {
        this.isAuthenticated = signedIn;
        this.user = signedIn ? this.extractUser(this.auth2.currentUser.get()) : {};
        this.eventHandler(this.user, this.isAuthenticated );
      });
  }

  private unsubscribe() {
    if (!this.auth2) return;

    this.auth2.isSignedIn
      .listen(null);
  }

  // PUBLIC METHODS

  public setEventHandler(handler: (user: User, isAuthenticated: boolean) => void) {
    this.eventHandler = handler;
  }

  public signIn(): Promise<User> {
    if (!this.auth2) Promise.reject();

    return this.auth2.signIn()
      .then((googleUser: GoogleUser) => this.extractUser(googleUser));
  }

  public signOut(): void {
    if (!this.auth2) return;

    sessionStorage.removeItem('signedIn');

    this.auth2.signOut()
      .then(this.unsubscribe)
      .catch(console.log);
  }
}

export const authService = new AuthService();