/// <reference types="cypress" />

import Login from "../../pages/login.page";

describe('Login', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('Login com sucesso', () => {
    const username = Cypress.env('USERNAME');
    const password = Cypress.env('PASSWORD');

    Login.preencherUsername(username);
    Login.preencherPassword(password);
    Login.clicarBotaoLogin();
    Login.validarLoginSuccesso();
  });

  it('Erro no Login', () => {
    const username = Cypress.env('USERNAME');
    const password = 'invalid_pass';

    Login.preencherUsername(username);
    Login.preencherPassword(password);
    Login.clicarBotaoLogin();
    Login.validarLoginErro();
  });
  
});