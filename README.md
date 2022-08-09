<div align="center">
  <h1>Desafio Fullstack com Angular, Node.Js (Express) e MySQL</h1>
  <p>Este repositório contém o desafio final da trilha Fullstack, realizado durante o <a href="https://portal.formacaoti.senaicimatec.com.br/">programa de formação em TI do SENAI CIMATEC.</a></P>
  <br>
  <img src="https://app.travis-ci.com/CamilaTT/desafio-fullstack-cimatec.svg?branch=main">
</div>

<h2>Visão geral</h2>
<p align="justify">O objetivo deste desafio foi desenvolver uma aplicação web desde front-end ao back-end. O front-end consiste de um sistema com três interfaces construído com o framework Angular. A página principal do sistema é um dashboard que exibe informações, disponibilizadas por uma API Rest construída com Node.Js + Express, acerca de veículos da empresa Ford. A persistência dos dados disponibilizados pela API é feita no MySQL.</p>
<br>
<h2>Pré-requisitos</h2>
<p>Para executar essa aplicação em ambiente de desenvolvimento, você precisa ter instalado na sua máquina as seguintes ferramentas:</p>
<ul>
<li>GIT</li>
<li>Node.js</li>
</ul>

## Como rodar o back-end (api)
```bash
# Clone este repositório
$ git clone <https://github.com/CamilaTT/desafio-angular>

# Acesse a pasta do projeto no terminal/cmd
$ cd desafio-angular

# Siga para a pasta api
$ cd api

# Instale as dependências
$ npm install

# Execute a aplicação 
$ npm start 

# O servidor iniciará na porta:3000 - acesse <http://localhost:3000>
```

## Como rodar o front-end (servidor angular)
```bash
# Com este repositório já clonado, acesse a pasta do projeto em outro terminal/cmd
$ cd desafio-angular

# Siga para a pasta sistema
$ cd sistema

# Instale as dependências
$ npm install

# Execute a aplicação
$ ng serve --o

# O servidor iniciará na porta:4200 (a opção --o inicia a aplicação em seu navegador)
```

## Build
Execute `ng build` para realizar o build do projeto. Os artefatos de compilação serão armazenados no diretório `dist/.`

## Executando testes unitários
Execute `ng test` para realizar os testes unitários via <a href="https://karma-runner.github.io">Karma.</a>

## Executando testes "end-to-end"
Execute `ng e2e` para realizar os testes "end-to-end" através de uma plataforma de sua escolha. Para usar este comando, você precisa primeiro adicionar um pacote que implemente recursos deste tipo de teste. 

<br>
<h2>Tecnologias</h2>
<div align="center">
<img src="https://img.shields.io/static/v1?label=Angular&message=14.0.2&color=B22222&style=for-the-badge">
<img src="https://img.shields.io/static/v1?label=RxJS&message=7.5.0&color=FF1493&style=for-the-badge">
<img src="https://img.shields.io/static/v1?label=Bootstrap&message=5.2.0&color=8A2BE2&style=for-the-badge">
<img src="https://img.shields.io/static/v1?label=jwt-decode&message=3.1.2&color=000000&style=for-the-badge">
<img src="https://img.shields.io/static/v1?label=Node.Js&message=16.15.1&color=32CD32&style=for-the-badge">
</div>
