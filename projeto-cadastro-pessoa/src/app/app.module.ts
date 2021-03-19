import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { ListaPessoasComponent } from './pessoas/lista-pessoas/lista-pessoas.component';
import { PessoaDetalhesComponent } from './pessoas/pessoa-detalhes/pessoa-detalhes.component';
import { AdicionarPessoaComponent } from './adicionar-pessoa/adicionar-pessoa.component';

import { ApiService } from './api.service';
import { DataService } from './shared/data.service';

@NgModule({
  declarations: [
    AppComponent,
    PessoasComponent,
    ListaPessoasComponent,
    PessoaDetalhesComponent,
    AdicionarPessoaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
