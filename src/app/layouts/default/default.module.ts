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
import {RoomComponent} from "../../modules/room/room.component";
import {MatListModule} from "@angular/material/list";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {FormsModule} from "@angular/forms";
import {FavoritesComponent} from "../../modules/favorites/favorites.component";
import {MatTabsModule} from "@angular/material/tabs";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {BuildingManagementConnectorService} from "../../core/connectors/building-management-connector.service";
import {ProblemManagementConnectorService} from "../../core/connectors/problem-management-connector.service";
import {ComponentComponent} from "../../modules/component/component.component";
import {HttpClientModule} from "@angular/common/http";
import {OAuthModule} from "angular-oauth2-oidc";
@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    BuildingsComponent,
    ProblemsComponent,
    BuildingComponent,
    RoomComponent,
    FavoritesComponent,
    ComponentComponent
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
    MatMenuModule,
    FormsModule,
    MatTabsModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  exports: [
    MatSortModule,
    MatSnackBarModule
  ],
  providers: [
    MatSnackBar,
    BuildingManagementConnectorService,
    ProblemManagementConnectorService
  ]
})
export class DefaultModule {
}
