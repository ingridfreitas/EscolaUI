import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient) { }

  listar(): Curso[] {
    return [
      { id: 1, nomecurso: 'Desenvolvimento de Sistemas' },
      { id: 2, nomecurso: 'Química' },
      { id: 3, nomecurso: 'Marketing'},
      { id: 4, nomecurso: 'Logística'}
    ]
  }
}
