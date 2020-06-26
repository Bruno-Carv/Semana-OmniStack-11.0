<!--
*** Obrigado por estar vendo o meu README. Agora vamos rodar esse projeto incrível :D
-->

<p align="center"><img src="https://raw.githubusercontent.com/Bruno-Carv/Semana-OmniStack-11.0/4bc6cccf47cc86651b24e30ef61d579d6d192f1b/frontend/src/assets/logo.svg" width="400"></p>

<!-- TABLE OF CONTENTS -->

## Tabela de Conteúdo

- [Tabela de Conteúdo](#tabela-de-conte%C3%BAdo)
- [Sobre o Projeto](#sobre-o-Projeto)
  - [Tecnologias aplicadas](#Tecnologias-aplicadas)
- [Interface da aplicação](#Interface-da-aplicação)
- [Começando](#Começando)
  - [Pré-requisitos](#Pré-requisitos)
  - [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Licença](#licen%C3%A7a)
- [Contato](#contato)

## Sobre o Projeto



### Tecnologias aplicadas

- [Expo](https://expo.io/) - O Expo é uma ferramenta utilizada no desenvolvimento mobile com React Native que permite o fácil acesso às API’s nativas do dispositivo sem precisar instalar qualquer dependência ou alterar código nativo.

- [React Native](https://pt-br.reactjs.org/) - O React Native é um projeto desenvolvido pelos engenheiros do Facebook e que consiste em uma série de ferramentas que viabilizam a criação de aplicações móveis nativas para a plataforma iOS e Android, utilizando o que há de mais moderno no desenvolvimento Front-end – mirando no futuro. É o estado da arte no que se refere ao desenvolvimento mobile baseado em JavaScript.

- [React](https://reactnative.dev/) - O React é a biblioteca mais popular do JavaScript e é usada para construir uma interface de usuário (IU). Ela oferece uma resposta excelente para o usuário adicionar comandos usando um novo método de renderizar sites. Os componentes dessa ferramenta foram desenvolvidos pelo Facebook.

<!-- - [MySQL](https://www.mongodb.com/) -  -->

- [NodeJS](https://nodejs.org/pt-br/) - Node.js é um interpretador de JavaScript assíncrono com código aberto orientado a eventos, criado por Ryan Dahl em 2009, focado em migrar a programação do Javascript do cliente para os servidores, criando aplicações de alta escalabilidade, manipulando milhares de conexões/eventos simultâneas em tempo real numa única máquina física.

## Interface da aplicação

### Aplicação Web

<p align="center"><img src="" width="400"></p>

### Aplicação Mobile

<p align="center"><img src="" width="400"></p>

## Começando

### Pré-requisitos

- [NodeJS](https://nodejs.org/pt-br/) - versão 12.18 LTS;
- [Yarn](https://yarnpkg.com/) - versão 1.22.0;
- [MySQL](https://www.mysql.com/) - versão 4.2.8;

### Estrutura de Arquivos

<!-- ```bash
MaratoraESAMC2020
├── server/
│   ├── src/
│   │   ├── app/
│   │   │   ├── controllers/
│   │   │   │   ├── ArtistController.js
│   │   │   │   ├── CommunityController.js
│   │   │   │   ├── EventController.js
│   │   │   │   └── FeedControllers.js
│   │   │   ├── models/
│   │   │   │   ├── Artist.js
│   │   │   │   ├── Community.js
│   │   │   │   ├── Event.js
│   │   │   │   └── Feed.js
│   │   │   └── secure/
│   │   │       └── token.js
│   │   ├── database/
│   │   │   └── index.js
│   │   ├── routes/
│   │   │   ├── artistRouter.js
│   │   │   ├── communityRouter.js
│   │   │   ├── eventsRouter.js
│   │   │   ├── feedRouter.js
│   │   │   └── router.js
│   │   ├── services/
│   │   │   ├── aws/
│   │   │   │   ├── index.js
│   │   │   │   └── s3.js
│   │   │   ├── cloud/
│   │   │   │   ├── index.js
│   │   │   │   ├── key.json
│   │   │   │   └── storage.js
│   │   ├── validator/
│   │   │   └── artistValidation.js
│   │   ├── app.js
│   │   └── server.js
│   ├── .env.example
│   ├── .gitignore
│   ├── yarn.lock
│   ├── package.json
│   └── README.md
├── Mobile/
│   ├── .expo-shared/
│   │   └── assets.json
│   ├── assets/
│   │   ├── icon.png
│   │   └── splash.png
│   ├── src/
│   │   ├── assets/
│   │   │   ├── Pintor.jpg
│   │   │   ├── logo-agitasantos-hori.png
│   │   │   ├── logo-agitasantos.png
│   │   │   └── logoPrefeitura.png
│   │   ├── components/
│   │   │   ├── AlbumCamera.js
│   │   │   ├── CameraButton.js
│   │   │   ├── button.js
│   │   │   ├── facebookSignIn.js
│   │   │   ├── feed.js
│   │   │   ├── filter.js
│   │   │   ├── googleSignIn.js
│   │   │   ├── input.js
│   │   │   ├── linha.js
│   │   │   └── loading.js
│   │   ├── pages/
│   │   │   ├── Cam
│   │   │   │   ├── index.js
│   │   │   │   └── styles.js
│   │   │   ├── Freelancer
│   │   │   │   ├── index.js
│   │   │   │   └── styles.js
│   │   │   ├── Photo
│   │   │   │   ├── index.js
│   │   │   │   └── styles.js
│   │   │   ├── home
│   │   │   │   ├── index.js
│   │   │   │   └── styles.js
│   │   │   ├── loading
│   │   │   │   ├── index.js
│   │   │   │   └── styles.js
│   │   │   ├── maps
│   │   │   │   ├── index.js
│   │   │   │   └── styles.js
│   │   │   ├── profile
│   │   │   │   ├── index.js
│   │   │   │   └── styles.js
│   │   │   ├── signin
│   │   │   │   ├── index.js
│   │   │   │   └── styles.js
│   │   │   └── signup
│   │   │       ├── index.js
│   │   │       └── styles.js
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   └── auth.js
│   │   └── routes.js
│   ├── .gitignore
│   ├── App.js
│   ├── README.md
│   ├── app.json
│   ├── babel.config.js
│   ├── package-lock.json
│   ├── package.json
│   ├── yarn-error.log
│   └── yarn.lock
├── Doc/
│   ├── .env.example
│   ├── .gitignore
│   ├── yarn.lock
│   ├── package.json
│   └── README.md
└── web/
    ├── public/
    │   ├── favicon.png
    │   └── index.html
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   ├── layout/
    │   ├── pages/
    │   ├── services/
    │   ├── styles/
    │   │   ├── css/
    │   │   │   ├── global.min.css
    │   │   │   └── global.min.css.map
    │   │   └── scss/
    │   │       └── global.scss
    │   ├── App.js
    │   ├── index.js
    │   └── routes.js
    ├── .env.example
    ├── .gitignore
    ├── package.json
    ├── server.js
    ├── yarn.lock
    └── README.md
``` -->

<!-- ## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações. -->

<!-- CONTACT -->

## Contato

Bruno Silva Carvalho - [Github](https://github.com/bruno-carv)