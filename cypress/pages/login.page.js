/// <reference types="cypress" />

// elements
const baseUrl = Cypress.config("baseUrl");
const inputUsername = '[data-test="username"]';
const inputPassword = '[data-test="password"]';
const buttonLogin = '[data-test="login-button"]';
const modalErro = '[data-test="error"]';


export default class Login {
  static preencherUsername(username) {
    cy.get(inputUsername).type(username);
  };

  static preencherPassword(password) {
    cy.get(inputPassword).type(password);
  };

  static clicarBotaoLogin() {
    cy.get(buttonLogin).click();
  };

  static validarLoginSuccesso() {
    cy.url().should('be.equal', `${baseUrl}/inventory.html`);
  };

  static validarLoginErro() {
    cy.url().should('be.equal', `${baseUrl}/`);

    cy.get(modalErro)
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Username and password do not match any user in this service');
  };
};