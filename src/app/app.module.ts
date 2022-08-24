import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { UserServiceService } from './Layout/utilisateurs/user-service.service';
import { UtilisateursModule } from './Layout/utilisateurs/utilisateurs.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SigninComponent } from './Layout/sign-in/sign-in.component';
import { LogInComponent } from './Layout/log-in/log-in.component';
import { PageNotFoundComponent } from './Layout/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    LogInComponent,
    PageNotFoundComponent
  ],
  imports: [
    UtilisateursModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
