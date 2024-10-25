import Login from "../pages/login.page";

Cypress.Commands.add('doLogin', () => {
  const username = Cypress.env('USERNAME');
  const password = Cypress.env('PASSWORD');

  Login.preencherUsername(username);
  Login.preencherPassword(password);
  Login.clicarBotaoLogin();
  Login.validarLoginSuccesso();
});
