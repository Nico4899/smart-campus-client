import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthServiceService} from "../auth-service.service";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  basicRoles: string[] = [environment.roles.guest];

  constructor(private readonly authService: AuthServiceService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const intersection = [...this.basicRoles, ...this.authService.userRoles].filter(e => route.data['roles'].includes(e));
    return intersection.length != 0;
  }
}
