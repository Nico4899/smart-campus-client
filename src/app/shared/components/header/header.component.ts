import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthServiceService} from "../../../core/authentication/auth-service.service";
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isDark: boolean = false;
  translateService: TranslateService;

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  @Output() toggleDarkModeForMe: EventEmitter<any> = new EventEmitter();

  constructor(private readonly authService: AuthServiceService, translateService: TranslateService) {
    this.translateService = translateService;
  }

  ngOnInit(): void {
    let dark = sessionStorage.getItem('toggleDark') as string;
    if (dark) {
      this.isDark = dark != '1';
    }
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
  }

  toggleDarkMode() {
    this.toggleDarkModeForMe.emit();
    this.isDark = !this.isDark;
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

  useLanguage(language: string): void {
    this.translateService.use(language);
    sessionStorage.setItem('languageChosen', language);
  }

  getName(): any[] | string {
    return this.authService.eMail.slice(0, 5);
  }
}
