import { User } from '../store/basic.types';
import { GApi, GApiSettings, GoogleUser, Auth2 } from './gapi.interface';

declare const gapi: GApi;

const gapiSettings: GApiSettings = {
  client_id: '825046320659-o7ltcdfs9ich8a6htgmbmpcbrq1h33ir.apps.googleusercontent.com',
  cookiepolicy: 'single_host_origin',
  scope: 'profile'
};

class AuthService {

  public isAuthenticated = false;

  private user: User | null = null;
  private auth2: Auth2 | any;

  private eventHandler = (user: User | null) => { 
    console.log('GAPI user', this.isAuthenticated, this.user);
  };

  constructor() {
    this.onInit();
  }

  private onInit() {
    if (!gapi) return;

    gapi.load('auth2', () => {
      gapi.auth2.init(gapiSettings).then((auth2: any) => {
        this.auth2 = auth2;
        this.subscribe();
      }).catch(console.log);
    });
  }

  private extractUser(googleUser: GoogleUser): User {
    const profile = googleUser.getBasicProfile();

    return {
      id: profile.getId(),
      name: profile.getName(),
      email: profile.getEmail(),
      image: profile.getImageUrl()
    }
  }

  private subscribe() {
    if (!this.auth2) return;

    if (this.auth2.isSignedIn.get()) {
      this.user = this.extractUser(this.auth2.currentUser.get());
      this.eventHandler(this.user);
    }

    this.auth2.isSignedIn
      .listen((signedIn: boolean) => {
        this.isAuthenticated = signedIn;
        this.user = signedIn ? this.extractUser(this.auth2.currentUser.get()) : null;
        this.eventHandler(this.user);
      });
  }

  private unsubscribe() {
    if (!this.auth2) return;

    this.auth2.isSignedIn
      .listen(null);
  }

  // PUBLIC METHODS

  public setEventHandler(handler: (user: User | null) => void): void {
    this.eventHandler = handler;
  }

  public signIn(): Promise<User> {
    if (!this.auth2) Promise.reject();

    return this.auth2.signIn()
      .then((googleUser: GoogleUser) => this.extractUser(googleUser));
  }

  public signOut(): void {
    if (!this.auth2) return;

    this.auth2.signOut()
      .then(this.unsubscribe)
      .catch(console.log);
  }
}

export const authService = new AuthService();