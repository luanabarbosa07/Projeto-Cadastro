import { Inject, InjectionToken, NgModule } from '@angular/core';

/* consultado: https://stackoverflow.com/questions/51275878/angular-cant-resolve-all-parameters-for-component-ng-build-prod */
export const ID: InjectionToken<string> = new InjectionToken<number>('ID');
export const NOME: InjectionToken<string> = new InjectionToken<string>('NOME');
export const EMAIL: InjectionToken<string> = new InjectionToken<string>('EMAIL');
export const IDADE: InjectionToken<string> = new InjectionToken<number>('IDADE');


@NgModule({
  declarations: [],
  imports: []
})
export class PessoaModule {

  constructor(
    @Inject(ID) public id: number,
    @Inject(NOME) public nome: string,
    @Inject(EMAIL) public email: string,
    @Inject(IDADE) public idade: number
  
    ) {}
}
