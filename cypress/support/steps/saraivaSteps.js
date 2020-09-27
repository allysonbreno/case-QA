/* global then, when */

import SaraivaPage from "../pageobjects/saraivaPage";

const saraivaPage = new SaraivaPage();

Given("que estou na home page da saraiva", () => {
  saraivaPage.acessarSite();
  saraivaPage.validarHomePage();
});

And("clico no botao menu", () => {
  saraivaPage.clicarBtnHomeMenu();
});

And("clico no botao cadastre-se", () => {
  saraivaPage.clicarBtnCadastrese();
});

And("clico no botão cadastro", () => {
  saraivaPage.clicarBtnCadastro();
});

And("sou direcionado para a tela de login", () => {
  saraivaPage.acessarTelaCadastroLogin();
});

When("visualizo um painel de direcionamento", () => {
  saraivaPage.validarPainelHome();
});

When("preencho os dados cadastrais e finalizo o cadastro", () => {
  saraivaPage.preencherDadosCadastrais();
  saraivaPage.validarHomePage();
}); 