import {Component, HostBinding, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  sideBarOpen = false;
  isDark = false;

  supportLanguages = ['en', 'de'];

  constructor(public translateService: TranslateService, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {

    // translation services
    this.translateService.addLangs(this.supportLanguages);
    this.translateService.setDefaultLang('en');
    const browserLanguage = this.translateService.getBrowserLang() ? this.translateService.getBrowserLang() : 'en';

    // add custom icons
    this.matIconRegistry.addSvgIcon('kit-header', this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/KIT_ICON_HEADER.svg"));
    this.matIconRegistry.addSvgIcon('kit-footer', this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/KIT_ICON_FOOTER.svg"));

    // session settings
    let side = sessionStorage.getItem('toggleSide') as string;
    let dark = sessionStorage.getItem('toggleDark') as string;
    let lang = sessionStorage.getItem('languageChosen') as string;
    if (lang) {
      this.translateService.use(lang);
    } else {
      // @ts-ignore
      this.translateService.use(browserLanguage.toString());
    }
    if (side) {
      this.sideBarOpen = side != '1';
    }
    if (dark) {
      this.isDark = dark != '1';
    }
  }

  ngOnInit(): void {
  }

  sideBarToggler($event: any) {
    this.sideBarOpen = !this.sideBarOpen;
    sessionStorage.setItem('toggleSide', this.sideBarOpen ? '0' : '1');
  }

  darkModeToggler($event: any) {
    this.isDark = !this.isDark;
    sessionStorage.setItem('toggleDark', this.isDark ? '0' : '1');
  }

  @HostBinding('class')
  get themeMode() {
    return this.isDark ? 'darkMode' : 'lightMode';
  }

}
