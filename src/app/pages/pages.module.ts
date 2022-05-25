import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilCreateComponent } from './profil-create/profil-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProfilCreateComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PagesModule { }
