class SaraivaElements {
   homePageHeader    = () => {return '[id="header-logotipo-01"]'}
   painelControler   = () => {return '[ng-controller="MainController"]'}
   btnHomeMenu       = () => {return '.btn__icon'}
   btnCadastrase     = () => {return '#custommenu-cadastre-se-01'}
   btnCadastro       = () => {return ':nth-child(2) > .btn'}
   campoNome         = () => {return '#InputNome1'} 
   campoSobreNome    = () => {return '#InputSobrenome1'}   
   campoEmail        = () => {return '#InputEmail1'}
   campoSenha        = () => {return '#InputSenha1'}
   campoConfSenha    = () => {return '#InputConfirmeSenha1'}
   campoCpf          = () => {return '#InputCpf1'}
   radioButtoMasc    = () => {return '[for="RadioMasculino1"]'}
   campoDatanasci    = () => {return '#InputDataNascimento1'}
   campoCelular      = () => {return '#InputCelular1'}
   campoCep          = () => {return '#InputCep1'}
   selectPais        = () => {return '.text-left'}
   campoNumero       = () => {return '#InputNumero1'}
   campoConfSenha    = () => {return '#InputConfirmeSenha1'}
   campoTell         = () => {return '#InputTelefone1'}
   checkBoxOfertas   = () => {return '[for="InputOfertasPromocionais1"]'}
   btnFinalizarCad   = () => {return '#FinalizarCadastro1'}
   campoTell         = () => {return '#InputTelefone1'}
   msgCadastroSucess = () => {return '.modal-body > :nth-child(1)'}
}
 
export default SaraivaElements;