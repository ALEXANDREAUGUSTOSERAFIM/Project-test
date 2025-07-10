import userData from '../fixtures/user-Data.json'
import LoginPage from '../fixtures/Pages/loginPage.js'
import DashboardPage from '../fixtures/Pages/dashboardPage.js'
import MenuPage from '../fixtures/Pages/menuPage.js'
import MyInfoPage from '../fixtures/Pages/myInfoPage.js'

const Chance = require('chance')

const chance = new Chance()
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

      myInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.string())
      myInfoPage.fillEmployeeDetails(chance.natural({min: 1, max: 10}), chance.cf(), chance.prime(), chance.date({string: true}), chance.date({string: true}))
      myInfoPage.fillStatus()
      myInfoPage.fillCustomFields(chance.date({string: true}))
      myInfoPage.saveForm()
      })


    })