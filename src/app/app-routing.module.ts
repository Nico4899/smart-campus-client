import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DefaultComponent} from "./layouts/default/default.component";
import {DashboardComponent} from "./modules/dashboard/dashboard.component";
import {BuildingsComponent} from "./modules/buildings/buildings.component";
import {ProblemsComponent} from "./modules/problems/problems.component";
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
      roles: [environment.roles.guest, environment.roles.user, environment.roles.admin]
    }
  }, {
    path: 'buildings',
    component: BuildingsComponent,
    canActivate: [AuthGuardGuard],
    data: {
      roles: [environment.roles.guest, environment.roles.user, environment.roles.admin]
    }
  }, {
    path: 'problems',
    component: ProblemsComponent,
    canActivate: [AuthGuardGuard],
    data: {
      roles: [environment.roles.user, environment.roles.admin]
    }
  }, {
    path: 'favorites',
    component: FavoritesComponent,
    canActivate: [AuthGuardGuard],
    data: {
      roles: [environment.roles.user, environment.roles.admin]
    }
  }, {
    path: "buildings/:bin",
    component: BuildingComponent,
    canActivate: [AuthGuardGuard],
    data: {
      roles: [environment.roles.guest, environment.roles.user, environment.roles.admin]
    }
  }, {
    path: "rooms/:rin",
    component: RoomComponent,
    canActivate: [AuthGuardGuard],
    data: {
      roles: [environment.roles.guest, environment.roles.user, environment.roles.admin]
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
