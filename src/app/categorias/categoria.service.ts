import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private hhtp: HttpClient) { }

  categoriasURI='http://localhost:8080/categorias';
}
