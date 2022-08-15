import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaalunosRoutingModule } from './listaalunos-routing.module';
import { AlunosComponent } from './alunos/alunos.component';


@NgModule({
  declarations: [
    AlunosComponent
  ],
  imports: [
    CommonModule,
    ListaalunosRoutingModule
  ]
})
export class ListaalunosModule { }
