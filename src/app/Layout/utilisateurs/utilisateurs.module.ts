import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';
import { UserprofilComponent } from './userprofil/userprofil.component';
import { UserprofilModifyComponent } from './userprofil-modify/userprofil-modify.component';

import { HeaderComponent } from '../../@shared/header/header.component';

import { RouterModule, Routes } from '@angular/router';
import { UserServiceService } from './user-service.service';
import { ErrorInputDirective } from './error-input.directive';
import { UserFunctionnalityPipe } from './user-functionnality.pipe';

const utilisateursRoute : Routes = [
  {path: "list/:id/modify" ,component : UserprofilModifyComponent},
  {path: "list/:id" ,component : UserprofilComponent},
  {path: "list" ,component : ListComponent},
]


@NgModule({
  declarations: [
    ListComponent,
    UserprofilComponent,
    UserprofilModifyComponent,
    HeaderComponent,
    ErrorInputDirective,
    UserFunctionnalityPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(utilisateursRoute)
  ],
  providers:[UserServiceService]
})
export class UtilisateursModule { }
