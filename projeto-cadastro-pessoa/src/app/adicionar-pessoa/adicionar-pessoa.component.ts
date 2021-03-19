import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import {FormGroup, Validators, FormBuilder} from '@angular/forms-37e32626';
import {PessoaModule} from '../shared/pessoa.module';
import {DataService} from '../shared/data.service';

@Component({
  templateUrl: './adicionar-pessoa.component.html',
  styleUrls: ['./adicionar-pessoa.component.css']
})
export class AdicionarPessoaComponent implements OnInit {
  form: FormGroup;
  loginOuEmailExistente = false;

  constructor(private data: DataService, public api: ApiService, private router: any, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      idade: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
      email: ['', [Validators.required, Validators.email]],
     
    });

    // testar conexão
    this.api.getAllPessoas().subscribe(() => {
    }, (err: any) => {
      this.data.storage = 'Erro: Não foi possível acessar o banco de dados.';
      this.router.navigate(['/erro']);
    });
  }

  get f() { return this.form.controls; }

  onAdicionarPessoa() {
    this.api.getAllPessoas().subscribe((data: PessoaModule[]) => {
      const pessoasExistentes = data;

      this.loginOuEmailExistente = pessoasExistentes.some((pessoaExistente) => {
        return  pessoaExistente.email === this.f.email.value;
      });

      if (!this.loginOuEmailExistente) {
        this.api.createPessoa(this.form.value).subscribe(() => {
          this.data.add = true;
          this.router.navigate(['/lista']);
        }, (err) => {
          this.data.storage = 'Erro: Não foi possível adicionar pessoa no banco de dados.';
          this.router.navigate(['/erro']);
        });
      }
    }, (err) => {
      this.data.storage = 'Erro: Não foi possível acessar o banco de dados.';
      this.router.navigate(['/erro']);
    });
  }

}
