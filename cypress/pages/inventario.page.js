/// <reference types="cypress" />

// elements
const containerSelect = '.select_container';
const activeSelect = '.select_container [data-test="active-option"]';
const selectOrdenacao = '[data-test="product-sort-container"]';
const optionNameAZ = 'Name (A to Z)';
const optionNameZA = 'Name (Z to A)';
const optionPriceLowHigh = 'Price (low to high)';
const optionPriceHighLow = 'Price (high to low)';
const cardProduto = '[data-test="inventory-item"]';
const nameProduto = '[data-test="inventory-item-name"]';
const priceProduto = '[data-test="inventory-item-price"]';

export default class Inventario {
  static validarExibicaoSelect() {
    cy.get(containerSelect).should('be.visible');
    cy.get(activeSelect).should('have.text', 'Name (A to Z)');
  };

  static #selecionarOpcao(opcao) {
    cy.get(selectOrdenacao).select(opcao);
  };

  static selecionarNomeAZ() {
    this.#selecionarOpcao(optionNameAZ);
  };

  static selecionarNomeZA() {
    this.#selecionarOpcao(optionNameZA);
  };

  static selecionarPrecoBaixoAlto() {
    this.#selecionarOpcao(optionPriceLowHigh);
  };

  static selecionarPrecoAltoBaixo() {
    this.#selecionarOpcao(optionPriceHighLow);
  };

  static validarNomeAZ() {
    const nomes = [];
    cy.get(cardProduto).each(($el) => {
      cy.wrap($el).find(nameProduto).invoke('text').then((text) => {
        nomes.push(text.trim());
      });
    }).then(() => {
      expect(nomes).to.deep.equal([...nomes].sort());
    });
  };

  static validarNomeZA() {
    const nomes = [];
    cy.get(cardProduto).each(($el) => {
      cy.wrap($el).find(nameProduto).invoke('text').then((text) => {
        nomes.push(text.trim());
      });
    }).then(() => {
      expect(nomes).to.deep.equal([...nomes].sort().reverse());
    });
  };

  static validarPrecoBaixoAlto() {
    const precos = [];
    cy.get(cardProduto).each(($el) => {
      cy.wrap($el).find(priceProduto).invoke('text').then((text) => {
        const preco = parseFloat(text.replace('$', '').trim());
        precos.push(preco);
      });
    }).then(() => {
      expect(precos).to.deep.equal([...precos].sort((a, b) => a - b));
    });
  };

  static validarPrecoAltoBaixo() {
    const precos = [];
    cy.get(cardProduto).each(($el) => {
      cy.wrap($el).find(priceProduto).invoke('text').then((text) => {
        const preco = parseFloat(text.replace('$', '').trim());
        precos.push(preco);
      });
    }).then(() => {
      expect(precos).to.deep.equal([...precos].sort((a, b) => b - a));
    });
  };

};