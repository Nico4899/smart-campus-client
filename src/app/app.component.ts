import { Component } from '@angular/core';
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
    const browserLanguage = this.translateService.getBrowserLang()!=undefined ? this.translateService.getBrowserLang() : 'en';
    console.log(browserLanguage);
    console.log(localStorage.getItem('languageChosen') as string);
    if (localStorage.getItem('languageChosen')!=null) {
      this.translateService.use(localStorage.getItem('languageChosen') as string);
    } else {
      // @ts-ignore
      this.translateService.use(browserLanguage.toString());
    }
  }
}
