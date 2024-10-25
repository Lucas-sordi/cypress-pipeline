## Automação com Cypress + pipeline no Github Actions

#### Descrição

Projeto de automação de testes com pipeline no github Actions. O projeto utiliza o [Saucedemo][https://saucedemo.com] - plataforma que simula um e-commerce.

O pipeline foi configurado para rodar toda vez que é feito um push ou pull request nas branchs `main` e `pipeline`.

##

#### Requisitos
[NodeJS](https://nodejs.org)

[Cypress](https://cypress.io)

Para executar localmente, é necessário criar um arquivo chamado `cypress.test.env.json` no diretório raiz. O conteúdo deve estar conforme o arquivo `example.cypress.test.env.json` disponibilizado no repositório. Os dados de username e password são encontrados na própria página de login do SauceDemo.

##

#### Instalação de dependências
`npm install`

##

#### Execução
##### Executando em modo Gráfico
`npm run cy:open` (irá rodar sobre a baseUrl definida em cypress.config.js)
##### Executando em modo Headless
`npm run cy:run` (irá rodar sobre a baseUrl definida em cypress.config.js)
##### Executando em modo Headless em diferentes ambientes
É possível rodar o projeto em diferentes ambientes, seguindo o padrão do script `cy:run:local`, disponível no `package.json`.

##

#### Report
O reporter utilizado é o [mochawesome](https://www.npmjs.com/package/mochawesome).

O report é gerado quando os testes são executados em modo headless. 
Para gerar o report em HTML, executar o comando `npm run report:generate`.