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
    RemoveFavoriteComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
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
    MatSlideToggleModule
  ]
})
export class SharedModule { }
