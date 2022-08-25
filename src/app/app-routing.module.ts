import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DefaultComponent} from "./layouts/default/default.component";
import {DashboardComponent} from "./modules/dashboard/dashboard.component";
import {BuildingsComponent} from "./modules/buildings/buildings.component";
import {ProblemsComponent} from "./modules/problems/problems.component";
import {BuildingComponent} from "./modules/building/building.component";
import {ProblemComponent} from "./modules/problem/problem.component";
import {RoomComponent} from "./modules/room/room.component";
import {ComponentComponent} from "./modules/component/component.component";

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
    path:"buildings/:bin",
    component: BuildingComponent
  }, {
    path:"problems/:pin",
    component: ProblemComponent
  }, {
    path:"buildings/:bin/rooms/:rin",
    component: RoomComponent
  }, {
    path:"buildings/:bin/rooms/:rin/components/:cin",
    component: ComponentComponent
  }, {
    path:"buildings/:bin/components/:cin",
    component: ComponentComponent
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
