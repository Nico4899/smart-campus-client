import { Injectable } from '@angular/core';
import {AuthConfig, OAuthService} from "angular-oauth2-oidc";
import {environment} from "../../../environments/environment";

const config: AuthConfig = {
  issuer: environment.keycloak.issuer,
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: environment.keycloak.clientId,
  scope: environment.keycloak.scope
}
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private readonly oAuthService: OAuthService) {
    oAuthService.configure(config);
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

  getRoles(): string[] {
    return []; // TODO implement real szenario
  }
}
