# Ao Mosso UFC

## :bookmark: **Sumário**
- [Sobre o Projeto](#film_strip-sobre-o-projeto)
- [Rotas do Projeto](#art-visual-do-projeto)
- [Tecnologias](#wrench-tecnologias)
   - [Construção da API](#construção-da-api)
   - [Testes](#testes)
   - [IDE, Versionamento e Deploy](#ide-versionamento-e-deploy)
- [Configurações e Instalação](#rocket-configurações-e-instalação)
     - [Requisitos](#requisitos)
- [Licença](#balance_scale-licença)

## :film_strip: **Sobre o Projeto**

A Movieshelf (trocadilho com *movie*: filme, e *shelf*: estante) é uma aplicação que mostra filmes das mais variadas categorias e suas informações, contando com o catálogo do [TMDB](https://www.themoviedb.org/?language=pt-BR).

<p align="center">
   <a href="https://themovieshelf.vercel.app">Veja o projeto completo aqui.</a>
</p>

## :art: **Visual do Projeto**


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



```sh
# Caso não tenha o pnpm execute:
npm install -g pnpm
```

Recomendo que veja a [documentação de configuração do Fastify](https://fastify.dev/docs/latest/Reference/).

```sh
# Clonando o projeto
git clone https://github.com/davsilvam/movieshelf.git

# Instalando as dependências
pnpm install

# Criar arquivo .env.local com base no .env.example e preencher o campo com seu Token de Acesso
NEXT_PUBLIC_TMDB_ACCESS_TOKEN="<seu-token>"

# Compilar e abrir o programa para desenvolvimento
pnpm run dev

# Compilar e minificar para produção
pnpm run build
```

## :balance_scale: **Licença**

Esse projeto está sob a [licença MIT](https://github.com/davsilvam/movieshelf/blob/main/LICENSE.md).

---

Feito com 💛 e ☕ por <a href="https://www.linkedin.com/in/davsilvam/">David Silva</a>.

> [Portfólio](https://davidsilvam.vercel.app) &nbsp;&middot;&nbsp;
> GitHub [@davsilvam](https://github.com/davsilvam) &nbsp;&middot;&nbsp;
> Instagram [@davsilvam_](https://www.instagram.com/davsilvam_/)
