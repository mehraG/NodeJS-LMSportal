import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { PreviewModalComponent } from './preview-modal/preview-modal.component';
import { UserService } from './user.service';

const usrRoutes: Routes = [
  {path:'', children:[
    {path:'', redirectTo:'create', pathMatch:'full'},
    {path:'create', component:CreateComponent},
    {path:'view', component:ViewComponent}
  ]}
]

@NgModule({
  declarations: [
    CreateComponent, 
    ViewComponent,
    PreviewModalComponent
  ],
  entryComponents: [
    PreviewModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forChild(usrRoutes)
  ],
  providers: [UserService],
  exports: [RouterModule]
})
export class UsersModule {
  constructor(){
    console.log('Users Module loaded')
  }
 }
