import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../../core/authentication/auth-service.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  translateService: TranslateService;

  constructor(private readonly authService: AuthServiceService, translateService: TranslateService) {
    this.translateService = translateService;
  }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  isUser(): boolean{
    return this.authService.isUser();
  }

  isAdmin(): boolean{
    return this.authService.isAdmin();
  }

  getName(): any[] | string{
    return this.authService.eMail.slice(0, 5);
  }

}
