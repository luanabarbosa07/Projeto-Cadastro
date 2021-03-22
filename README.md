
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
REQUISITOS

Tabela de banco de dados
	Usuarios
o	Id: INTEIRO
o	Nome: TEXTO
o	Sobrenome: TEXTO
o	Email: TEXTO
o	DataNascimento: DATA
o	Escolaridade: INTEIRO

Regras de validação
	O e-mail deve ser validado.
	A data de nascimento não pode ser maior que hoje.
	A escolaridade deve permitir apenas os valores (Infantil, Fundamental, Médio e Superior)

Backend

	Criar uma API que permita adicionar, alterar, listar e excluir usuário.
	Os dados devem ser persistidos e lidos usando ORM Entity Framework com banco de dados SQL Server.

Frontend

	Criar uma aplicação Angular que permita adicionar, alterar, listar e excluir usuários.
	A arquitetura e layout do frontend fica à escolha, podendo ser uma ou mais telas, disposição de elementos, etc.

O QUE SERÁ AVALIADO

	Funcionamento conforme especificado.
	Arquitetura e estruturação do Backend e do Frontend.
	Boas práticas e organização.
	Nomenclaturas de arquivos, variáveis e métodos.
	Validação de dados.
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

