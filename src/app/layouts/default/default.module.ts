import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultComponent} from "./default.component";
import {DashboardComponent} from "../../modules/dashboard/dashboard.component";
import {RouterModule} from "@angular/router";
import {BuildingsComponent} from "../../modules/buildings/buildings.component";
import {SharedModule} from "../../shared/shared.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {ProblemsComponent} from "../../modules/problems/problems.component";
import {BuildingComponent} from "../../modules/building/building.component";
import {ProblemComponent} from "../../modules/problem/problem.component";
import {RoomComponent} from "../../modules/room/room.component";
import {MatListModule} from "@angular/material/list";
import {ComponentComponent} from "../../modules/component/component.component";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";
import {CampusLocationPipe} from "../../shared/pipes/campus-location.pipe";
import {ComponentTypePipe} from "../../shared/pipes/component-type.pipe";
import {RoomTypePipe} from "../../shared/pipes/room-type.pipe";
import {ProblemStatePipe} from "../../shared/pipes/problem-state.pipe";
import {ProblemsStateOperationPipe} from "../../shared/pipes/problems-state-operation.pipe";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    BuildingsComponent,
    ProblemsComponent,
    BuildingComponent,
    ProblemComponent,
    RoomComponent,
    ComponentComponent,
    CampusLocationPipe,
    ComponentTypePipe,
    RoomTypePipe,
    ProblemStatePipe,
    ProblemsStateOperationPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    MatSortModule
  ]
})
export class DefaultModule {
}
