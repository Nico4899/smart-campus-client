import { Component, OnInit } from '@angular/core';

import {AddBuildingComponent} from '../add-building/add-building.component'

import {MatDialog} from '@angular/material/dialog'

@Component({
  selector: 'app-add-building-button',
  templateUrl: './add-building-button.component.html',
  styleUrls: ['./add-building-button.component.css']
})
export class AddBuildingButtonComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  onOpenDialogClick() {
    this.matDialog.open(AddBuildingComponent);
  }

}
