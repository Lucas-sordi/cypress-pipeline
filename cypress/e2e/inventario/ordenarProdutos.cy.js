/// <reference types="cypress" />

import Inventario from "../../pages/inventario.page";

describe('Ordenação de produtos', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.doLogin();
  });

  it('Exibição correta do select ao acessar página', () => {
    Inventario.validarExibicaoSelect();
    Inventario.validarNomeAZ();
  });

  it('Produtos ordenados por nome de A-Z', () => {
    Inventario.selecionarNomeAZ();
    Inventario.validarNomeAZ();
  });

  it('Produtos ordenados por nome de Z-A', () => {
    Inventario.selecionarNomeZA();
    Inventario.validarNomeZA();
  });

  it('Produtos ordenados por preço crescente', () => {
    Inventario.selecionarPrecoBaixoAlto();
    Inventario.validarPrecoBaixoAlto();
  });

  it('Produtos ordenados por preço decrescente', () => {
    Inventario.selecionarPrecoAltoBaixo();
    Inventario.validarPrecoAltoBaixo();
  });

  it('Reordenação de produtos', () => {
    Inventario.validarExibicaoSelect();
    Inventario.validarNomeAZ();
    Inventario.selecionarPrecoAltoBaixo();
    Inventario.validarPrecoAltoBaixo();
    Inventario.selecionarNomeAZ();
    Inventario.validarNomeAZ();
  });
  
});