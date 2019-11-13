import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignUpPageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },  { path: 'newpass', loadChildren: './newpass/newpass.module#NewpassPageModule' },
  { path: 'editprof', loadChildren: './editprof/editprof.module#EditprofPageModule' },


];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
