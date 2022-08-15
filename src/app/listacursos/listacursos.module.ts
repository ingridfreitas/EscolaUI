import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListacursosRoutingModule } from './listacursos-routing.module';
import { CursosComponent } from './cursos/cursos.component';


@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    ListacursosRoutingModule
  ]
})
export class ListacursosModule { }
