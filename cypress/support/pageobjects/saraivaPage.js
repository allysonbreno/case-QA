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
    cy.get('[id="header-logotipo-01"]').should('exist');      
  }

  validarPainelHome() {
    cy.get('[ng-controller="MainController"]').should('exist');
  }

  clicarBtnHomeMenu() {
    cy.get('.btn__icon').should('be.visible')
    .click(); 
  }

  clicarBtnCadastrese() { 
    cy.get('#custommenu-cadastre-se-01').should('be.visible')
    .click();
  }

  acessarTelaCadastroLogin() {
    cy.visit('https://login.saraiva.com.br/');
  }

  clicarBtnCadastro() {
    cy.get(':nth-child(2) > .btn').should('be.visible')
    .click(); 
  }

  preencherDadosCadastrais() { 
    cy.get('#InputNome1').should('be.visible')
    .type(faker.name.firstName());

    cy.get('#InputSobrenome1').should('be.visible')
    .type(faker.name.lastName());

    cy.get('#InputEmail1').should('be.visible')
    .type(faker.internet.email());

    var inputSenha = faker.random.number();
    cy.get('#InputSenha1').should('be.visible')
    .type("test" + inputSenha);
    
    cy.get('#InputConfirmeSenha1').should('be.visible')
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