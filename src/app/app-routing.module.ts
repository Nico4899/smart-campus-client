import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DefaultComponent} from "./layouts/default/default.component";
import {DashboardComponent} from "./modules/dashboard/dashboard.component";
import {BuildingsComponent} from "./modules/buildings/buildings.component";
import {ProblemsComponent} from "./modules/problems/problems.component";
import {BuildingComponent} from "./modules/building/building.component";
import {RoomComponent} from "./modules/room/room.component";
import {FavoritesComponent} from "./modules/favorites/favorites.component";

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'buildings',
    component: BuildingsComponent
  }, {
    path: 'problems',
    component: ProblemsComponent
  }, {
    path: 'favorites',
    component: FavoritesComponent
  }, {
    path:"buildings/:bin",
    component: BuildingComponent
  }, {
    path:"rooms/:rin",
    component: RoomComponent
  }]
}, {
  path:'**', redirectTo: ""
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
