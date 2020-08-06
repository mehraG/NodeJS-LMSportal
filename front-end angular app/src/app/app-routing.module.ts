import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound.component';
import { UsersModule } from './users/users.module'; // this is necessary for lazy loading otherwise angular can't find users module

const routes: Routes = [
  {path:'', redirectTo:'users',pathMatch:'full'},
  {path:'users', loadChildren:'./users/users.module#UsersModule'}, // lazy loading
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 