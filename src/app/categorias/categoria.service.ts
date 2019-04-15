import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

export class CategoriaFiltro {
  nome: string;
  pagina = 0;
  itensporpagina = 2;
}

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  categoriasUrl = 'http://localhost:8080/categorias';

  pesquisar(filtro: CategoriaFiltro): Promise<any> {

    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensporpagina.toString()
      }
    });

    if (filtro.nome) {
      params = params.append('nome', filtro.nome)
    }
    return this.http.get<any>(`${this.categoriasUrl}`, { params })
      .toPromise()
      .then(response => {
        const categorias = response.content;
        const resultado = {
          categorias,
          total: response.totalElemtents
        }
        return resultado;
      });
  }
}
