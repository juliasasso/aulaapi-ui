import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasPesquisaComponent } from './categorias-pesquisa/categorias-pesquisa.component';

import { InputTextModule } from 'primeng/inputtext';

import { ButtonModule } from 'primeng/button';

import {TableModule} from 'primeng/table';

import {TooltipModule} from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CategoriasPesquisaComponent],
  exports: [
    CategoriasPesquisaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule
  ]
})
export class CategoriasModule { }
