import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cursos'
  },
  {
    path: 'cursos',
    loadChildren: () => import('./listacursos/listacursos.module').then(m => m.ListacursosModule)
  },
  {
    path: 'alunos',
    loadChildren: () => import('./listaalunos/listaalunos.module').then(m => m.ListaalunosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
