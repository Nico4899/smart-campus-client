import {Component, OnInit} from '@angular/core';
import {AuthServiceService} from "../../../core/authentication/auth-service.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public authService: AuthServiceService) {
  }

  ngOnInit(): void {
  }

}
