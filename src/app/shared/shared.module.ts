import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {FooterComponent} from "./components/footer/footer.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FlexModule} from "@angular/flex-layout";
import {MatMenuModule} from "@angular/material/menu";
import {MatListModule} from "@angular/material/list";
import {RouterModule} from "@angular/router";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { RemoveBuildingComponent } from './dialogs/remove-building/remove-building.component';
import { RemoveComponentComponent } from './dialogs/remove-component/remove-component.component';
import { RemoveRoomComponent } from './dialogs/remove-room/remove-room.component';
import { RemoveProblemComponent } from './dialogs/remove-problem/remove-problem.component';
import { AddBuildingComponent } from './dialogs/add-building/add-building.component';
import { AddRoomComponent } from './dialogs/add-room/add-room.component';
import { AddComponentComponent } from './dialogs/add-component/add-component.component';
import { AddProblemComponent } from './dialogs/add-problem/add-problem.component';
import { EditBuildingComponent } from './dialogs/edit-building/edit-building.component';
import { EditComponentComponent } from './dialogs/edit-component/edit-component.component';
import { EditProblemComponent } from './dialogs/edit-problem/edit-problem.component';
import { EditRoomComponent } from './dialogs/edit-room/edit-room.component';
import { RemoveFavoriteComponent } from './dialogs/remove-favorite/remove-favorite.component';
import { BuildingsTableComponent } from './tables/buildings-table/buildings-table.component';
import { ComponentsTableComponent } from './tables/components-table/components-table.component';
import { RoomsTableComponent } from './tables/rooms-table/rooms-table.component';
import { ProblemsTableComponent } from './tables/problems-table/problems-table.component';
import { NotificationsTableComponent } from './tables/notifications-table/notifications-table.component';
import {MatTableModule} from "@angular/material/table";
import {DefaultModule} from "../layouts/default/default.module";
import {CampusLocationPipe} from "./pipes/enum/campus-location.pipe";
import {ComponentTypePipe} from "./pipes/enum/component-type.pipe";
import {RoomTypePipe} from "./pipes/enum/room-type.pipe";
import {ProblemStatePipe} from "./pipes/enum/problem-state.pipe";
import {ProblemsStateOperationPipe} from "./pipes/enum/problems-state-operation.pipe";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatSortModule} from "@angular/material/sort";
import { FavoriteBuildingsTableComponent } from './tables/favorites-tables/favorite-buildings-table/favorite-buildings-table.component';
import { FavoriteRoomsTableComponent } from './tables/favorites-tables/favorite-rooms-table/favorite-rooms-table.component';
import { FavoriteComponentsTableComponent } from './tables/favorites-tables/favorite-components-table/favorite-components-table.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    RemoveBuildingComponent,
    RemoveComponentComponent,
    RemoveRoomComponent,
    RemoveProblemComponent,
    AddBuildingComponent,
    AddRoomComponent,
    AddComponentComponent,
    AddProblemComponent,
    EditBuildingComponent,
    EditComponentComponent,
    EditProblemComponent,
    EditRoomComponent,
    RemoveFavoriteComponent,
    BuildingsTableComponent,
    ComponentsTableComponent,
    RoomsTableComponent,
    ProblemsTableComponent,
    NotificationsTableComponent,
    CampusLocationPipe,
    ComponentTypePipe,
    RoomTypePipe,
    ProblemStatePipe,
    ProblemsStateOperationPipe,
    FavoriteBuildingsTableComponent,
    FavoriteRoomsTableComponent,
    FavoriteComponentsTableComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BuildingsTableComponent,
    ComponentsTableComponent,
    NotificationsTableComponent,
    RoomsTableComponent,
    ComponentTypePipe,
    RoomTypePipe,
    CampusLocationPipe,
    ProblemsTableComponent,
    FavoriteBuildingsTableComponent,
    FavoriteRoomsTableComponent,
    FavoriteComponentsTableComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    FlexModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    MatSlideToggleModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule
  ]
})
export class SharedModule { }
