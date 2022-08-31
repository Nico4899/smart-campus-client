import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isDark: boolean = false;

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  @Output() toggleDarkModeForMe: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
  }

  toggleDarkMode() {
    this.toggleDarkModeForMe.emit();
    this.isDark = !this.isDark;
  }
}
