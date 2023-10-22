# Ao Mosso UFC

## :bookmark: **Sumário**
- [Sobre o Projeto](#plate_with_cutlery-sobre-o-projeto)
- [Rotas do Projeto](#file_folder-rotas-do-projeto)
- [Tecnologias](#wrench-tecnologias)
   - [Construção da API](#construção-da-api)
   - [Testes](#testes)
   - [IDE, Versionamento e Deploy](#ide-versionamento-e-deploy)
- [Configurações e Instalação](#rocket-configurações-e-instalação)
     - [Requisitos](#requisitos)
- [Licença](#balance_scale-licença)

## :plate_with_cutlery: **Sobre o Projeto**

Essa é uma API que fornece as refeições ofertadas pelos Restaurantes Universitários da Universidade Federal do Ceará. 

## :file_folder: Rotas do Projeto

> - **`GET` /{:restaurant}** _Obtém o cardápio do dia do restaurante pesquisado._
> - **`GET` /{:restaurant}/{:date}** _Obtém o cardápio da data especificada do restaurante pesquisado._

## :wrench: **Tecnologias**

Tecnologias utilizadas no projeto.

### **Construção da API**

- [TypeScript](https://www.typescriptlang.org)
- [Fastify](https://fastify.dev)
- [Node.js](https://nodejs.org/en)
- [Axios](https://axios-http.com/docs/intro)
- [Cheerio](https://github.com/cheeriojs/cheerio)
- [Zod](https://zod.dev)

### **Testes**

- [Vitest](https://vitest.dev)

### **IDE, Versionamento e Deploy**

- [Visual Studio Code](https://code.visualstudio.com)
- [Git](https://git-scm.com)
- [GitHub](https://github.com)
- [Render](https://render.com)

## :rocket: **Configurações e Instalação**

### Requisitos

- [Node](https://nodejs.org/) e [pnpm](https://pnpm.io/pt/).
- Teste das chamadas realizados com [HTTPie](https://httpie.io/desktop).

```sh
# Caso não tenha o pnpm, execute:
npm install -g pnpm
```

Recomendo que veja a [documentação de configuração do Fastify](https://fastify.dev/docs/latest/Reference/).

```sh
# Clonando o projeto
git clone https://github.com/davsilvam/ao-mosso-ufc-api.git

# Instalando as dependências
pnpm install

# Rodar o servidor em desenvolvimento
pnpm start:dev

# Iniciar testes
pnpm test

# Compilar e minificar para produção
pnpm build

# Rodar o servidor em produção
pnpm start
```

## :balance_scale: **Licença**

Esse projeto está sob a [licença MIT](https://github.com/davsilvam/ao-mosso-ufc-api/blob/main/LICENSE.md).

---

Feito com 🤍 e ☕ por <a href="https://www.linkedin.com/in/davsilvam/">David Silva</a>.

> [Portfólio](https://davidsilvam.vercel.app) &nbsp;&middot;&nbsp;
> GitHub [@davsilvam](https://github.com/davsilvam) &nbsp;&middot;&nbsp;
> Instagram [@davsilvam_](https://www.instagram.com/davsilvam_/)
