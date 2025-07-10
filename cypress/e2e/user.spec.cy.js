import userData from '../fixtures/user-Data.json'
import LoginPage from '../fixtures/Pages/loginPage.js'
import DashboardPage from '../fixtures/Pages/dashboardPage.js'
import MenuPage from '../fixtures/Pages/menuPage.js'
import MyInfoPage from '../fixtures/Pages/myInfoPage.js'



const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('text ORAGEM tests', () => {
    
  
   it('User Info Update - success', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

      dashboardPage.checkDashboardPage()
      
      menuPage.accessMyInfo()

      myInfoPage.fillPersonalDetails('First Name', 'Last Name', 'nickName')
      myInfoPage.fillEmployeeDetails('mployeeId','otherId','driversLicenseNumber','LicenseExpiryDate','dataBirth')
      myInfoPage.fillStatus()
      myInfoPage.fillCustomFields('testField')
      myInfoPage.saveForm()
      })

      
    })