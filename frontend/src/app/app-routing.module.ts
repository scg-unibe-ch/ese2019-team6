import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignUpPageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'search/services/:id', redirectTo: 'services/:id', pathMatch: 'full'},
  { path: 'newpass', loadChildren: './newpass/newpass.module#NewpassPageModule' },
  { path: 'editprof', loadChildren: './editprof/editprof.module#EditprofPageModule' },
  { path: 'services', redirectTo: 'search', pathMatch: 'full' },
  { path: 'services/:id', loadChildren: './services/services.module#ServicesPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'editprof2', loadChildren: './editprof2/editprof2.module#Editprof2PageModule' },
  { path: 'addservice', loadChildren: './addservice/addservice.module#AddservicePageModule' }

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
