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
  }
}
