import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriasModule } from './categorias/categorias.module';
import { CoreModule } from './core/core.module';
import { CategoriaService } from './categorias/categoria.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CategoriasModule
  ],
  providers: [CategoriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
