import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListacursosRoutingModule } from './listacursos-routing.module';
import { CursosComponent } from './cursos/cursos.component';
import {MatCardModule} from '@angular/material/card';
import { MatTableModule} from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    ListacursosRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class ListacursosModule { }
