import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthServiceService} from "../auth-service.service";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  basicRoles: string[] = [environment.roles.guest];
  grantedRoles: string[] = [];

  constructor(private readonly authService: AuthServiceService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true; // TODO test if granted roles or basic roles contains the given role
  }
}
