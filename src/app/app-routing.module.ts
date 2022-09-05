import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DefaultComponent} from "./layouts/default/default.component";
import {DashboardComponent} from "./modules/dashboard/dashboard.component";
import {BuildingsComponent} from "./modules/buildings/buildings.component";
import {ProblemsComponent} from "./modules/problems/problems.component";
import {ProblemComponent} from "./modules/problem/problem.component";
import {BuildingComponent} from "./modules/building/building.component";
import {RoomComponent} from "./modules/room/room.component";
import {FavoritesComponent} from "./modules/favorites/favorites.component";
import {ComponentComponent} from "./modules/component/component.component";
import {AuthGuardGuard} from "./core/authentication/guards/auth-guard.guard";
import {environment} from "../environments/environment";

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuardGuard],
     data: {
      role: environment.roles.guest
     }
  }, {
    path: 'buildings',
    component: BuildingsComponent,
    canActivate: [AuthGuardGuard],
    data: {
      role: environment.roles.guest
    }
  }, {
    path: 'problems',
    component: ProblemsComponent,
    canActivate: [AuthGuardGuard],
    data: {
      role: environment.roles.user
    }
  }, {
    path: 'favorites',
    component: FavoritesComponent,
    canActivate: [AuthGuardGuard],
    data: {
      role: environment.roles.user
    }
  }, {
    path: "buildings/:bin",
    component: BuildingComponent,
    canActivate: [AuthGuardGuard],
    data: {
      role: environment.roles.guest
    }
  }, {
    path: 'problems/:pin',
    component: ProblemComponent,
    canActivate: [AuthGuardGuard],
    data: {
      role: environment.roles.user
    }
  },{
    path: "rooms/:rin",
    component: RoomComponent,
    canActivate: [AuthGuardGuard],
    data: {
      role: environment.roles.guest
    }
  }, {
    path: "components/:cin",
    component: ComponentComponent,
    canActivate: [AuthGuardGuard],
    data: {
      role: environment.roles.guest
    }
  }]
}, {
  path: '**', redirectTo: ""
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
