import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdicionarPessoaComponent } from './adicionar-pessoa/adicionar-pessoa.component';
import { PessoasComponent } from './pessoas/pessoas.component';

const routes: Routes = [
  { path: 'adicionar', component: AdicionarPessoaComponent },
  { path: 'lista', children: [
      { path: '', component: PessoasComponent },
      { path: ':id', component: PessoasComponent }
    ]
  },
  { path: '',
    redirectTo: '/adicionar',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
