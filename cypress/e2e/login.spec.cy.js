describe('text ORAGEM test', () => {
    
  const selectorslist = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: "[role='alert']"
}
  
   it('login - success', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(selectorslist.usernameField).type('Admin')
      cy.get(selectorslist.passwordField).type('admin123')
      cy.get(selectorslist.loginButton).click()
      cy.location('pathname').should('equal','/web/index.php/dashboard/index')
      cy.get(selectorslist.sectionTitleTopBar).contains('Dashboard')
    })
    it('login - Fail', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(selectorslist.usernameField).type('Test')
      cy.get(selectorslist.passwordField).type('Test')
      cy.get(selectorslist.loginButton).click()
      cy.get(selectorslist.wrongCredentialAlert)
    })
  })