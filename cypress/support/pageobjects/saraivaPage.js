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
    
    cy.get('#InputCpf1').should('be.visible')
    .type(faker.br.cpf());

    cy.get('[for="RadioMasculino1"]').should('be.visible')
    .click();

    cy.get('#InputDataNascimento1').should('be.visible')
    .type('20031995');

    var numeroCell = faker.phone.phoneNumber();
    cy.get('#InputCelular1').should('be.visible')
    .type(numeroCell);

    cy.get('#InputCep1').should('be.visible')
    .type('55168970');

    cy.get('.text-left').should('be.visible')
    .click();

    cy.get('#InputNumero1').should('be.visible')
    .type('390');

    cy.get('#InputTelefone1').should('be.visible')
    .type(numeroCell);

    cy.get('[for="InputOfertasPromocionais1"]').should('be.visible')
    .click();
    
    cy.get('#FinalizarCadastro1').should('be.visible')
    .click();

    cy.get('.modal-body > :nth-child(1)').should('exist', 'Usuário Cadastrado com sucesso');
  }
}

export default SaraivaPage;