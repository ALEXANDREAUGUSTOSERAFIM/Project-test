import userData from '../fixtures/user-Data.json'
import LoginPage from '../fixtures/Pages/loginPage.js'
import DashboardPage from '../fixtures/Pages/dashboardPage.js'
import MenuPage from '../fixtures/Pages/menuPage.js'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('text ORAGEM tests', () => {
    
  const selectorslist = {
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    fistNameField: "[name='firstName']",
    lastNameField: "[name='middleName']",
    genericField: ".oxd-input--active",
    dataField: "[placeholder='yyyy-dd-mm']",
    dataCloserButton: ".--close",
    submitButton: ".orangehrm-left-space",
    genericCombobox: ".oxd-select-text--arrow",
    secondItemCombobox: ".oxd-select-dropdown > :nth-child(2)",
    thirdItemCombobox: ".oxd-select-dropdown > :nth-child(3)",

}   //part 1
   it.only('User Info Update - success', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

      dashboardPage.checkDashboardPage()
      
      menuPage.accessMyInfo()
     
      cy.get(selectorslist.fistNameField).clear().type('FirstNameTest')
      cy.get(selectorslist.lastNameField).clear().type('MiddleName')
      cy.get(selectorslist.genericField).eq(2).clear().type('LastTest')
      cy.get(selectorslist.genericField).eq(3).clear().type('TesteEmplo')
      cy.get(selectorslist.genericField).eq(4).clear().type('Othertest')
      cy.get(selectorslist.genericField).eq(5).clear().type('123test')
      cy.get(selectorslist.genericField).eq(6).clear({ force: true }).type('2025-08-08', { force: true }) //part 2
      cy.get(selectorslist.genericField).eq(7).clear({ force: true }).type('1986-10-10', { force: true })
      cy.get(selectorslist.genericField).eq(8).clear().type('test-test')
      cy.get(selectorslist.submitButton).eq(0).click({ force: true })
      

      cy.get(selectorslist.genericCombobox).eq(1).click({force: true})
      cy.get(selectorslist.secondItemCombobox).click()
      cy.get(selectorslist.genericCombobox).eq(0).click({force: true})
      cy.get(selectorslist.thirdItemCombobox).click()

      cy.get('body').should('contain', 'Successfully Updated')
      cy.get('.oxd-toast-close')
      
       
    })
    it('login - Fail', () => {
      cy.visit('auth/login')
      cy.get(selectorslist.usernameField).type(userData.userFail.username)
      cy.get(selectorslist.passwordField).type(userData.userFail.password)
      cy.get(selectorslist.loginButton).click()
      cy.get(selectorslist.wrongCredentialAlert)
    })
  })

  //PARTE 1
  //Observe que a ordem dos campos no teste pode parecer inconsistente (por exemplo, usar eq(7) antes de eq(6)) porque os elementos de entrada dentro do site OrangeHRM Live 
  // não estão estruturados em uma ordem estritamente sequencial ou lógica no DOM. Segui a estrutura DOM real apresentada na página 
  // e ajustei o teste de acordo para garantir que os valores corretos fossem inseridos nos campos corretos. 
  //Fiz o meu melhor para tornar o fluxo compreensível e funcional, apesar desta ordem irregular.

  //Please note that the field order in the test might seem inconsistent (e.g., using eq(7) before eq(6)) because the input elements inside the OrangeHRM Live 
  // website are not structured in a strictly sequential or logical order in the DOM. I followed the actual DOM structure as presented on the page, 
  // and adjusted the test accordingly to ensure that the correct values are input into the correct fields. 
  // I did my best to make the flow understandable and functional despite this irregular ordering.

  //--------

  //PARTE 2
  //Dentro do site (orangehrmlive) tive ulgumas compleicações com as posicoes dos elementos, usei o CCS selector para me
  //localizar, mas ainda esta fora dos padrões. Com muito esforço fiz o melhor possivel para poder ter um resultado esperado. 
  //Acacei usando o { force: true } para pode passar por cima de algums elementos estavam sobresaindo, mas fiz de forma pensada, 
  //para que a execução tivesse uma boa performance. Tive que reorganizar todo os codigos pois errei na primeira parte, por falta de atenção,
  // mas já na segunda parte tive um trabalho para achar os elementos do que selecionava os paises e o qual o seu status.

  //PART 2
  //Within the website (orangehrmlive), I had some complications with the positions of the elements. I used the CCS selector to locate myself,
  //but it is still outside the standards. With a lot of effort, I did my best to achieve the expected result. 
  //I used { force: true } to override some elements that were sticking out, but I did it carefully 
  //so that the execution would perform well. I had to reorganize all the code because I made a mistake in the first part due to lack of attention,
  // but in the second part, I had to work hard to find the elements that selected the countries and their status.


