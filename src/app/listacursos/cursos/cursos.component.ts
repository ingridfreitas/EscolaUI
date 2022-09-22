import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/core/model';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: Curso[] = [];
  displayedColumns = ['id', 'nomecurso'];

  constructor(private cursoService: CursosService) { }

  ngOnInit(): void {
    this.cursos = this.cursoService.listar();
  }

}
