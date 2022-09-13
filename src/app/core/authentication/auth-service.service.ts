import {Injectable} from '@angular/core';
import {AuthConfig, OAuthService} from "angular-oauth2-oidc";
import {environment} from "../../../environments/environment";
import {JwksValidationHandler} from "angular-oauth2-oidc-jwks";

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
    this.oAuthService.tokenValidationHandler = new JwksValidationHandler();
    this.oAuthService.loadDiscoveryDocumentAndTryLogin()
  }

  logout() {
    this.oAuthService.logOut();
  }

  login() {
    this.oAuthService.initImplicitFlow( );
  }

  isLoggedIn(): boolean {
    console.log(this.userRoles);
    return this.oAuthService.hasValidAccessToken();
  }

  isUser(): boolean {
    return this.isAdmin() || this.userRoles.indexOf(environment.roles.user) != 0;
  }

  isAdmin(): boolean {
    return this.userRoles.indexOf(environment.roles.admin) != 0;
  }

  get userRoles() {
    let claims = this.oAuthService.getIdentityClaims() as {groups: string[]};
    if(claims == null) return [];
    return claims["groups"];
  }

  get eMail() {
    let claims = this.oAuthService.getIdentityClaims() as {email: string};
    if(claims == null) return [];
    return claims["email"];
  }

  get token() {
    return this.oAuthService.getIdToken();
  }
}
