import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './Layout/log-in/log-in.component';
import { SigninComponent } from './Layout/sign-in/sign-in.component';
import { PageNotFoundComponent } from './Layout/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: "login" ,component : LogInComponent},
  {path: "signin" ,component : SigninComponent},
  {path: "",redirectTo : "login" , pathMatch:"full"},
  {path: "**" , component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
