import {Injectable} from '@angular/core';
import {AuthConfig, OAuthService} from "angular-oauth2-oidc";
import {environment} from "../../../environments/environment";

const config: AuthConfig = {
  issuer: environment.keycloak.issuer,
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: environment.keycloak.clientId,
  scope: environment.keycloak.scope,
  oidc: true,
  responseType: 'code'
}

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private readonly oAuthService: OAuthService) {
    this.oAuthService.configure(config);
    this.oAuthService.loadDiscoveryDocument();
  }

  logout() {
    this.oAuthService.logOut();
  }

  login() {
    this.oAuthService.initLoginFlow();
  }

  isLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  isUser(): boolean {
    return this.isAdmin();
  }

  isAdmin(): boolean {
    return true;
  }
}
