import { Component, OnInit } from '@angular/core';
import{LazyLoadEvent} from 'primeng/components/common/api';
import { CategoriaFiltro, CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categorias-pesquisa',
  templateUrl: './categorias-pesquisa.component.html',
  styleUrls: ['./categorias-pesquisa.component.css']
})
export class CategoriasPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new CategoriaFiltro();
  categorias = [];
  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.categoriaService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.categorias = resultado.categorias;
      });
  }
  aoMudarPagina(event: LazyLoadEvent) {
  const pagina =event.first / event.rows;
  this.pesquisar(pagina);
  }

}
