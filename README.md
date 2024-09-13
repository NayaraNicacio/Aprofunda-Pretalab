# Semana 1 - Aqui Aprendemos!

1-  Explorando Bibliotecas Node.js que permite criar todo tipo de aplicativos e ferramentas do lado servidor (backend) em JavaScript.
    
2-  Construimos uma API simples (Requisição Get e Post)


![Requisição Get][def]

![Requisição Post][def2]


3 - Utilizamos o Framework Express

### Bibliotecas Extras que utilizei:

- express-list-endpoints

# Semana 2 - Aqui Aprendemos!

1 - Continuamos a explorar as Bibliotecas Node.js

2- Evoluimos as Requisições HTTP (Requisições Get | Post | Delete | Put)

3- Utilizamos as Bibliotecas:
- UUID (Para gerar Identificador Único Universal)

- nodemon (Para reiniciar automaticamente o aplicativo node quando alterações de arquivo no diretório são detectadas.) 

- Cors  (Que permite que o navegador do cliente verifique com os servidores de terceiros se a solicitação foi autorizada antes de qualquer transferência de dados ou seja que o frontend acesse nossa API.)

* Bibliotecas Extras que utilizei:
- express-list-endpoints


# Semana 3 - Aqui Aprendemos!

### Refatorando Codigo da Semana-2 
- Aplicando conceitos de Clean Architecture, organizando o código em módulos e facilitando o entendimento e manutenção dessa aplicação.

![Organizando o código em módulos](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4ff5555b-1fae-481e-8816-22fd69acc867_285x296.png)

- Clean Architecture: O que é Arquitetura Limpa?
A Clean Architecture representa uma abordagem estratégica no desenvolvimento de software que põe ênfase na manutenção da organização e estrutura do código de forma que permaneça resiliente a mudanças, seja em tecnologia, frameworks, ou requisitos de negócios. 

A ideia é que, ao manter o núcleo da aplicação isolado desses elementos, o software se torna mais fácil de modificar, testar e entender.
![Clean Architecture](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)


# Semana 4 - Aqui Aprendemos!

### Revisão de conteúdo | Introdução a Clean Architecture


# Semana 5 - Aqui Aprendemos! 

- Clean Architecture

### Instalação de Dependências TypeScript

- Express : Uma estrutura de aplicativo web mínima e flexível para Node.js.

- TypeScript : Um superconjunto de JavaScript que adiciona tipagem estática e recursos avançados de linguagem.

- ts-node : Um ambiente de execução TypeScript para Node.js.

- @types/express : Arquivos de declaração TypeScript para Express.

- O --save-devsinalizador garante que essas dependências sejam salvas como devDependencies, pois são necessárias apenas durante o processo de desenvolvimento.
## Deploy

Para fazer o deploy desse projeto rode

```bash
  npm start
  npm test
```


## Documentação

[Roteamento básico com exemplos de requisição get | post etc...](https://expressjs.com/en/guide/routing.html)


## Instalação Semana-1

Instale my-project com npm

```bash
  npm install Express nodemon
  npm i express-list-endpoints
```

## Instalação Semana-2

```bash
  npm install Express nodemon uuid cors
  npm i express-list-endpoints
  npm i slug
```

## Instalação Semana-3

```bash
  npm install Express nodemon uuid cors
  npm i express-list-endpoints
```

## Instalação Semana-4

```bash
  npm install Express nodemon uuid cors
  npm install --save-dev @types/slug
  npm i express-list-endpoints
```

## Instalação Semana-5

```bash
  npm install express typescript ts-node @types/node @types/express --save-dev
  npm i @types/express-list-endpoints
```

## Instalações Extras para Validação de ERRO
```bash 
npm install express-validator @types/express-validator
```

## Referência

 - [O que significa API?](https://aws.amazon.com/pt/what-is/api/#:~:text=API%20significa%20Application%20Programming%20Interface,de%20servi%C3%A7o%20entre%20duas%20aplica%C3%A7%C3%B5es.)

- [Introdução Express/Node](https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/Introduction)

 - [Gabriel Fernandes Lemos](https://medium.com/@gabrielfernandeslemos/clean-architecture-uma-abordagem-baseada-em-princ%C3%ADpios-bf9866da1f9c)

### Semana 4

- [Clean architecture](https://www.impacta.com.br/blog/clean-architecture-o-que-e/)

### Semana 5

- [Iniciando Projeto Typescript com Node.js](https://dev.to/wizdomtek/typescript-express-building-robust-apis-with-nodejs-1fln)




[def]: /workspaces/Aprofunda-Pretalab/Entrega-Exe-1/img/get.png
[def2]: /workspaces/Aprofunda-Pretalab/Entrega-Exe-1/img/post.png