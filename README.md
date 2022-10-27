
  

  

# Teste Jotacom - Foodish - André Facchini

  

Olá, nessa parte do *readme* eu vou explicar um pouco melhor meu processo de pensamento enquanto desenvolvia esse teste.

  

  

Adiante estão, separadas por categorias, as ferramentas utilizadas e os motivos das escolhas.

  

  

## Estrutura de Pastas / Componentes

  

  

Sou sempre a favor de uma estrutura robusta para a escalabilidade futura do projeto, então me baseei em vários tutoriais sobre criação de novos projetos do zero e em experiência prévia, apesar de no fim não ter decidido por uma organização extremamente complexa devido ao escopo do teste, tentei separar de forma intuitiva as partes que fazem esse produto funcionar.

  

  

## Front-end

  

  

### [next.js](https://nextjs.org/)

  

Depois de alguns anos de trabalho com [react](https://reactjs.org/), principalmente utilizando o [create-react-app](https://create-react-app.dev/), decidi pelo [next.js](https://nextjs.org/) porque sabia que SSR poderia ser uma necessidade e também pela estrutura de API que o próprio já provém. Acabei não utilizando [Typescript](https://www.typescriptlang.org/) junto porque apesar de já ter experiência com a ferramenta, ainda não me acostumei completamente ao uso diário e consigo desenvolver os produtos de forma mais rápida sem ele.

  

  

**Exemplos de coisas interessantes no next.js/react.js:**

  

  

- Decidi utilizar apenas componentes funcionais para ter mais treino com react-hooks, apesar de acabar não tendo usado muitos deles.

  

- Utilizei o sistema nativo de roteamento baseado em pastas que ele provém.

  

- Fiz o mesmo com o sistema nativo para APIs

  

- Gostei muito dos resultados dos componentes `Field.js` e `Form.js` (acabaram sendo os componentes mais complicados) apesar de acreditar que com mais tempo algumas coisas poderiam ser um pouco melhores.

  

  

### [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

  

Optei aqui por uma mistura de [sass/scss](https://sass-lang.com/) e [css-modules](https://github.com/css-modules/css-modules).

  

  

Em um primeiro momento eu pensei em fazer o uso de [styled-components](https://styled-components.com/), mas como tínhamos apenas uma página, acreditei que a parte de reusabilidade que ele proporciona seria desperdiçada para uma aplicação tão pequena.

  

  

Como eu ainda queria utilizar "css escopado" (tanto como prova de conceito quanto por praticidade) introduzi [css-modules](https://github.com/css-modules/css-modules) na equação. Como eu não tinha ainda uma experiência muito grande com a ferramenta, no interesse de velocidade, adicionei também um uso geral de [sass/scss](https://sass-lang.com/) quando necessário para reutilizar estilos.

  

  

**Exemplos de coisas interessantes no CSS:**

  

  

- Em várias ocasiões mudei o meu container principal `center-content` de maneira escopada através de template strings que misturavam css modules e classes normais, para herdar as características necessárias e também adicionar novas de acordo com a necessidade.

  

- Criei um "sistema de grid" rapidinho no arquivo `grid.scss` com variações e larguras aproximadas para vários possíveis casos de uso, essa "grid" é baseada também no uso das regras de flexbox presentes no arquivo `flex.scss`. Fiz isso porque pra ser completamente honesto não sou muito fã de [bootstrap](https://getbootstrap.com/) apesar de já ter utilizado várias vezes, e também porque não queria ficar travado na curva de aprendizado utilizando algo como o [tailwind.css](https://tailwindcss.com/)

  

- Automatizei a geração de tamanhos de fonte / line-height além de margins e paddings com algumas funções in-built do [sass](https://sass-lang.com/). Exemplos nos arquivos `spacing.scss` e `typography.scss`.

  

  

## Back-end

  

### [node.js](https://nodejs.org/en/)

  

Num ambiente já com tanto Javascript, decidi pelo [node.js](https://nodejs.org/en/) para manter uniformidade, além de poder testar novas features da linguagem num ambiente como o dessa aplicação.

  

  

**Exemplos de coisas interessantes que fiz com node.js:**

  

  

- Na pasta `lib` temos a conexão com o banco e a função de checagem de e-mails. Acredito que ficaram bem sucintas e reutilizáveis ([DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself))

  

- Em `pages/api` temos no arquivo `getAllEmails.js` uma função que eu fiz para testar a conexão com o banco e parâmetros iniciais dessa API, nessa mesma pasta tenho também a função responsável por registrar as informações do formulário no banco de dados.

  

  

### [MySQL](https://www.mysql.com/)

  

Essa parte não teve muita complexidade, fiz apenas três queries (uma de insert, uma pra checar os e-mails e a para retornar todos os e-mails na api).

  

A parte mais interessante acredito que seja a package [mysql2](https://www.npmjs.com/package/mysql2) e o wrapper de promises que utilizei para fazer as operaçoes.

  

  

## Informações adicionais:

  

- Para o servidor do banco, usei uma instância de [xampp](https://www.apachefriends.org/) mesmo, e conectei utilizando variáveis de ambiente presentes no arquivo `next.config.js`

  

- Utilizei a versão 14.15.1 do [node.js](https://nodejs.org/en/) na máquina

  

- Utilizei os ícones em formato `.svg` mas preferi usar o `next/image` para exibir eles na tela, já que não tinhamos nenhuma animação ou mudança envolvida.

  

- Pensei em fazer um favicon para dar entrada já num possível [PWA](https://web.dev/progressive-web-apps/) mas não encontrei nada na identidade visual que funcionaria bem num tamanho pequeno e acabei optando por não fazer.

  

- Tem um backup do banco dentro do [repositório](https://github.com/drunksheep/testejotacom) e no arquivo .rar que enviarei também por E-mail

Informações básicas de como rodar o projeto já estão documentadas abaixo, mas qualquer dúvida que eu não tenha coberto aqui ou necessidade de informação adicional, entrar em contato pelo meu [github](https://github.com/drunksheep) ou pelo E-mail andre3facchini@gmail.com

  

  

Acho que é só isso :)

  

  

Muito obrigado pela oportunidade!

  

  

## Getting Started

  

  

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

  

  

First, run the development server:

  

  

  

```bash

  

  

npm run dev

  

  

# or

  

  

yarn dev

  

  

```

  

  

  

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

  

  

  

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

  

  

  

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

  

  

  

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

  

  

  

## Learn More

  

  

  

To learn more about Next.js, take a look at the following resources:

  

  

  

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

  

  

- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

  

  

  

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

  

  

  

## Deploy on Vercel

  

  

  

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

  

  

  

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.