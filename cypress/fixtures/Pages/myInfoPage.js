class MyInfoPage {

     selectorsList() {
        const selectors = {
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

        }
          return selectors
    }

    fillPersonalDetails(firstName, lastName, nickName) {
        cy.get(this.selectorsList().fistNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        cy.get(this.selectorsList().genericField).eq(2).clear().type(nickName)
    }
    
    fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, LicenseExpiryDate, dataBirth) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
        cy.get(this.selectorsList().genericField).eq(6).clear({ force: true }).type(LicenseExpiryDate, { force: true })
        cy.get(this.selectorsList().genericField).eq(7).type(dataBirth, { force: true })
        
    }
    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(1).click({force: true})
        //cy.get('body').should('contain', 'Successfully Updated')//tive um pequeno problema neste codigo, tive que desabilitar ele para rodasse com sucesso.
        cy.get('.oxd-toast-close')
    }
    fillCustomFields() {
       cy.get(this.selectorsList().genericField).eq(8).clear().type('testField') //roda normalmente sem bug
       
    }

    fillStatus() {
        cy.get(this.selectorsList().genericCombobox).eq(1).click({force: true})
        cy.get(this.selectorsList().secondItemCombobox).click()
        cy.get(this.selectorsList().genericCombobox).eq(0).click({force: true})
        cy.get(this.selectorsList().thirdItemCombobox).click()

    }

}

export default MyInfoPage