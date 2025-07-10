import userData from '../fixtures/user-Data.json'
import LoginPage from '../fixtures/Pages/loginPage.js'
import DashboardPage from '../fixtures/Pages/dashboardPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('login ORAGEM tests', () => {
    
    
    it('login - Fail', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
      loginPage.checkAccessInvalid()
    })

     it('login - Success', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
      dashboardPage.checkDashboardPage()
    })

  })


