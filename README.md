<div align="center">
  <h1>Desafio Fullstack com Angular, Node.Js (Express) e MySQL</h1>
  <p>Este repositório contém o desafio final da trilha Fullstack, realizado durante o <a href="https://portal.formacaoti.senaicimatec.com.br/">programa de formação em TI do SENAI CIMATEC.</a></P>
  <br>
  <img src="https://app.travis-ci.com/CamilaTT/desafio-fullstack-cimatec.svg?branch=main">
</div>

## Visão geral
 O objetivo deste desafio foi desenvolver uma aplicação web do front-end ao backend, onde:
 
* Backend: API padrão rest que persiste os dados em um banco de dados MySQL e proporciona as ações de criar, listar, atualizar e deletar registros nos endpoints da aplicação. 
* Frontend: sistema de gerencialmento de dados de veículos consumidos da API, que permite cadastrar/autenticar usuários para acesso ao dashboard da aplicação. 

## Coleção de métodos da API

Método | URL | Ação
:--------- | :------ | -------
post | http://localhost:3000/user/login | logar um usuário
post | http://localhost:3000/user/signup | cadastrar novo usuário
get | http://localhost:3000/user/:id | buscar dados de usuário pelo id (rota privada)
patch | http://localhost:3000/user/:id | atualizar um determinado dado de usuário (rota privada)
delete | http://localhost:3000/user/:id | deletar um registro de usuário (rota privada)
---- | ---- | ----
get | http://localhost:3000/vehicle | listar todos os veículos
get | http://localhost:3000/vehicle/:id | buscar veículo pelo id
post | http://localhost:3000/vehicle | cadastrar um novo veículo
put | http://localhost:3000/vehicle/:id | atualizar veículo pelo id
delete | http://localhost:3000/vehicle/:id | deletar veículo pelo id
---- | ---- | ----
get | http://localhost:3000/vehicledata | listar todos os dados de veículo ou o correspondente ao valor passado pelo usuário
get | http://localhost:3000/vehicledata/:id | buscar dados de veículo pelo id
post | http://localhost:3000/vehicledata | cadastar novos dados de veículo
put | http://localhost:3000/vehicledata/:id | atualizar dados do veículo pelo id
delete | http://localhost:3000/vehicledata/:id | deletar dados do veículo pelo id

## Demonstração do dashboard
[demo](https://user-images.githubusercontent.com/87024844/187356530-4da6d4cc-70e0-4c50-829b-2658f2caf3a8.mp4)

## Como executar a aplicação
### Pré-requisitos 
Para executar essa aplicação em ambiente de desenvolvimento, você precisa ter instalado na sua máquina as seguintes ferramentas:
* [GIT](https://git-scm.com/)
* [Node.js](https://nodejs.org/en/)
* [MySQL Workbench - para criação do banco de dados](https://www.mysql.com/products/workbench/)
* [Postman - para teste dos métodos da api (opcional)](https://www.postman.com/downloads/)

### Preparando o ambiente
 #### Para o backend 
* Crie um banco de dados no MySQL com um nome de sua escolha
* Clone este repositório através do git bash: `git clone <https://github.com/CamilaTT/desafio-fullstack-cimatec>`
* Acesse a pasta do projeto em um terminal/cmd: `cd desafio-fullstack-cimatec/api`
* Instale as dependências: `npm install`
* Crie um arquivo .env na raiz da aplicação e insira as seguintes variáveis de ambiente do node:

```
DB_HOST = host do banco de dados (ex: localhost)
DB_PORT = porta de acesso ao banco de dados
DB_USER = nome de usuário do banco
DB_PASSWORD = senha de acesso ao banco
DB_NAME = nome do banco de dados 
  
SECRET = string complexa que servirá para assinatura do token de autenticação de usuário
```
* Execute a aplicação: `npm start` 
```bash
# O servidor iniciará na porta 3000 - acesse <http://localhost:3000>
```
 #### Para o frontend

```bash
# Com este repositório já clonado, acesse a pasta do projeto em outro terminal/cmd
$ cd desafio-fullstack-cimatec/frontend

# Instale as dependências
$ npm install

# Execute a aplicação
$ ng serve --o

# O servidor iniciará na porta 4200 (a opção --o inicia a aplicação em seu navegador)
```

### Desenvolvendo 

Execute `ng generate component component-name` para gerar um novo componente. Você também pode usar `ng generate Directive|pipe|service|class|guard|interface|enum|module`.

 - #### Build
Execute `ng build` para realizar o build do projeto. Os artefatos de compilação serão armazenados no diretório `dist/.`

 - #### Testes unitários
Execute `ng test` para realizar os testes unitários via <a href="https://karma-runner.github.io">Karma.</a>

 - #### Testes "end-to-end"
Execute `ng e2e` para realizar os testes "end-to-end" através de uma plataforma de sua escolha. Para usar este comando, você precisa primeiro adicionar um pacote que implemente recursos deste tipo de teste. 

<br>
<h2>Tecnologias</h2>
<div align="center">
<img src="https://img.shields.io/static/v1?label=Angular&message=14.0.4&color=DD0031&style=for-the-badge">
<img src="https://img.shields.io/static/v1?label=RxJS&message=7.5.0&color=B7178C&style=for-the-badge">
<img src="https://img.shields.io/static/v1?label=Bootstrap&message=5.2.0&color=7952B3&style=for-the-badge">
<img src="https://img.shields.io/static/v1?label=Chartjs&message=3.9.1&color=FF6384&style=for-the-badge">
<img src="https://img.shields.io/static/v1?label=SweetAlert2&message=11.4.29&color=A020F0&style=for-the-badge">
<img src="https://img.shields.io/static/v1?label=jwt&message=8.5.1&color=000000&style=for-the-badge">
<img src="https://img.shields.io/static/v1?label=Node.Js&message=16.15.1&color=339933&style=for-the-badge">
<img src="https://img.shields.io/static/v1?label=Express&message=16.15.1&color=D3D3D3&style=for-the-badge">
<img src="https://img.shields.io/static/v1?label=Mysql&message=8.0.30&color=4479A1&style=for-the-badge">
<img src="https://img.shields.io/static/v1?label=Postman&message=9.29.0&color=FF6C37&style=for-the-badge">
</div>
