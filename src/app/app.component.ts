import {Component, HostListener} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uismartcampus';

  supportLanguages = ['en', 'de'];

  constructor(public translateService: TranslateService) {
    this.translateService.addLangs(this.supportLanguages);
    this.translateService.setDefaultLang('en');
    const browserLanguage = this.translateService.getBrowserLang() != undefined
      ? this.translateService.getBrowserLang() : 'en';
    //check whether language has already been set by the user before a previous reload and use it,
    // otherwise use browser language
    if (sessionStorage.getItem('languageChosen') != null) {
      this.translateService.use(sessionStorage.getItem('languageChosen') as string);
    } else {
      // @ts-ignore
      this.translateService.use(browserLanguage.toString());
    }
  }
}
