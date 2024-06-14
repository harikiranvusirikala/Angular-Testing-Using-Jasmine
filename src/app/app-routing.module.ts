import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { ProductsListComponent } from './products-list/products-list.component';
import { WelcomeComponent } from './welcome/welcome.component';



const routes: Routes = [
 
  {path:'login', component:LoginComponent},
 
  {path:'products', component:ProductsListComponent} ,

  {path:'', component:WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
