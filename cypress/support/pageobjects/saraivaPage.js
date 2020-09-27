/// <reference types="Cypress" />
import faker from "faker-br";
import SaraivaElements from "../elements/saraivaElements";

const saraivaElements = new SaraivaElements();

class SaraivaPage {
  // // Acessa o site que será testado
  acessarSite() {
    cy.visit(Cypress.config("baseUrl"));
    Cypress.on(
        "uncaught:exception",
        (err, runnable) =>
          // returning false here prevents Cypress from failing the test
          false
    );
  }

  validarHomePage() {
    cy.get(saraivaElements.homePageHeader()).should('exist');      
  }

  validarPainelHome() {
    cy.get(saraivaElements.painelControler()).should('exist');
  }

  clicarBtnHomeMenu() {
    cy.get(saraivaElements.btnHomeMenu()).should('be.visible')
    .click(); 
  }

  clicarBtnCadastrese() { 
    cy.get(saraivaElements.btnCadastrase()).should('be.visible')
    .click();
  }

  acessarTelaCadastroLogin() {
    cy.visit('https://login.saraiva.com.br/');
  }

  clicarBtnCadastro() {
    cy.get(saraivaElements.btnCadastro()).should('be.visible')
    .click(); 
  }

  preencherDadosCadastrais() { 
    cy.get(saraivaElements.campoNome()).should('be.visible')
    .type(faker.name.firstName());

    cy.get(saraivaElements.campoSobreNome()).should('be.visible')
    .type(faker.name.lastName());

    cy.get(saraivaElements.campoEmail()).should('be.visible')
    .type(faker.internet.email());

    var inputSenha = faker.random.number();
    cy.get(saraivaElements.campoSenha()).should('be.visible')
    .type("test" + inputSenha);
    
    cy.get(saraivaElements.campoConfSenha()).should('be.visible')
    .type("test" + inputSenha);
    
    cy.get(saraivaElements.campoCpf()).should('be.visible')
    .type(faker.br.cpf());

    cy.get(saraivaElements.radioButtoMasc()).should('be.visible')
    .click();

    cy.get(saraivaElements.campoDatanasci()).should('be.visible')
    .type('20031995');

    cy.get(saraivaElements.campoCelular()).should('be.visible')
    .type('81996327586');

    cy.get(saraivaElements.campoCep()).should('be.visible')
    .type('55168970');

    cy.get(saraivaElements.selectPais()).should('be.visible')
    .click();

    cy.get(saraivaElements.campoNumero()).should('be.visible')
    .type('390');

    cy.get(saraivaElements.campoTell()).should('be.visible')
    .type('81996327586');

    cy.get(saraivaElements.checkBoxOfertas()).should('be.visible')
    .click();
    
    cy.get(saraivaElements.btnFinalizarCad()).should('be.visible')
    .click();

    cy.get(saraivaElements.msgCadastroSucess()).should('contain.text', 'Usuário Cadastrado com sucesso');
  }
}

export default SaraivaPage;