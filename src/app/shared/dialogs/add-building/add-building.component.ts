import { Component, OnInit } from '@angular/core';

import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'

import {MatFormField} from '@angular/material/form-field'

@Component({
  selector: 'app-add-building',
  templateUrl: './add-building.component.html',
  styleUrls: ['./add-building.component.css']
})
export class AddBuildingComponent implements OnInit {

  buildingname: string = "";

  buildingnumber: string = "";

  minfloor: string = "";

  maxfloor: string = "";

  latvalue: string = "";

  lngvalue: string = "";



  constructor() { }

  ngOnInit(): void {
  }

  onClickAccept(): void {
    //TODO:  make API call via connector
  }

  onCloseClock(): void {
    // Delete everythong
  }

  checkValues(): boolean {
    // TODO
    return true;
  }

}
