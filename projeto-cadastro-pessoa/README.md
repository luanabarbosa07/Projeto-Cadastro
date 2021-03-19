
# Projeto Cadastro Pessoa
Este projeto foi criado Para aprender Programar.

## Escopo
O teste consiste em criar uma aplicação para adicionar, alterar,listar e excluir usuarios. A aplicação deve ter um FRONTEND
para usuario fazer interação e uma APIque será responsavel pelas regras de negocio e persistencia dos dados.


- Construir a estrutura do projeto utilizando o npm (gerenciador de pacotes do Node.js);
- Criar uma pagina de cadastro de Pessoa com os seguintes campos: ID, Nome, Email, Idade, Login, Senha e Status (ativo/inativo);
- Criar uma listagem dos usuários cadastrados, através de uma GRID;
- Criar a rota linkando uma página a outra (Adicionar Pessoa e Listar Pessoa);
- Implementar o consumo da API disponibilizadas, através dos dois endpoints:
	- API de Listagem
	- API de Cadastro
- Criar um design básico para páginas (pode ser utilizado o bibliotecas/frameworks como bootstrap ou material-UI design disponíveis no repositório do npm)

## Tecnologias

- Microsoft . NET FRAMEWORK OU MICROSOFT .NET Core
- Sql Serve
- Angular 

## Requisitos

## Angular
caso a variável de ambiente não esteja configurada

siga os passos:
npm uninstall -g angular-cli
npm uninstall --save-dev angular-cli
npm cache clean
npm install -g @angular/cli
Depois de instalar você entra em sistema
Configuração avançadas do sistema
Variáveis de Ambiente
Path
Editar
Se essas variáveis do Angular não estiverem no path, você adiciona fecha o terminal, abre e tenta rodar o comando novamente. 


## Como executar
Execute `ng serve` para executar a versão de desenvolvimento. Depois acesse `http://localhost:4200/`.

Para executar o servidor de endpoints de API, em um outro terminal na mesma pasta execute `npm run json-server`. A API poderá ser acessada via `http://localhost:3000/`.

## Como compilar/construir
Execute `ng build` para buildar o projeto. Para buildar a versão de produção adicione a flag `--prod`. Os arquivos serão armazenados do diretório `dist`.

