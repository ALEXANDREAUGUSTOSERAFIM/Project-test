import userData from '../fixtures/userData.json'

describe('text ORAGEM tests', () => {
    
  const selectorslist = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    fistNameField: "[name='firstName']",
    lastNameField: "[name='middleName']",
    genericField: ".oxd-input--active",
    datacloseButton: "[placeholder='yyyy-dd-mm']",
    dataCloserButton: "('.--close')",
    submitButton: "[type='submit']"

}
   it.only('User Info Update - success', () => {
      cy.visit('auth/login')
      cy.get(selectorslist.usernameField).type(userData.userSuccess.username)      
      cy.get(selectorslist.passwordField).type(userData.userSuccess.password)
      cy.get(selectorslist.loginButton).click()
      cy.location('pathname').should('equal','/web/index.php/dashboard/index')
      cy.get(selectorslist.dashboardGrid)
      cy.get(selectorslist.myInfoButton).click()
      cy.get(selectorslist.fistNameField).clear().type('FirstNameTest')
      cy.get(selectorslist.lastNameField).clear().type('MiddleName')
      cy.get(selectorslist.genericField).eq(2).clear().type('UserName')
      cy.get(selectorslist.genericField).eq(3).clear().type('EmployeeId')
      cy.get(selectorslist.genericField).eq(4).clear().type('TestOther')
      cy.get(selectorslist.genericField).eq(5).clear().type('DriveNumber')
      cy.get(selectorslist.genericField).eq(7).clear().type('2024-20-08') 
      cy.get(selectorslist.genericField).eq(6).clear().type('1986-09-07')
      cy.get(selectorslist.genericField).eq(8).clear().type('TesteFilder')
      cy.get(selectorslist.submitButton).eq(0).click()
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

  //Please note that the field order in the test might seem inconsistent (e.g., using eq(7) before eq(6)) because the input elements inside the OrangeHRM Live 
  // website are not structured in a strictly sequential or logical order in the DOM. I followed the actual DOM structure as presented on the page, 
  // and adjusted the test accordingly to ensure that the correct values are input into the correct fields. 
  // I did my best to make the flow understandable and functional despite this irregular ordering.