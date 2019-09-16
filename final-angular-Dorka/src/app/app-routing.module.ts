import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { IndexComponent } from '../app/index/index.component';
import { UsersComponent } from '../app/users/users.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'users',
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
