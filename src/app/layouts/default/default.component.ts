import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  sideBarOpen = false;
  isDark = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  sideBarToggler($event: any) {
    this.sideBarOpen = !this.sideBarOpen;
  }

  darkModeToggler($event: any) {
    this.isDark = !this.isDark;
  }

  @HostBinding('class')
  get themeMode() {
    return this.isDark ? 'darkMode' : 'lightMode';
  }

}
