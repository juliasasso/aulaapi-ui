import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias-pesquisa',
  templateUrl: './categorias-pesquisa.component.html',
  styleUrls: ['./categorias-pesquisa.component.css']
})
export class CategoriasPesquisaComponent implements OnInit {
  
  categorias =  [
    {id: '1', nome:'Informatica'},
    {id: '1', nome:'Informatica'},
    {id: '1', nome:'Informatica'}
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
