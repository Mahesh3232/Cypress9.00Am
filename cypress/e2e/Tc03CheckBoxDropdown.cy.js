///reference types ="cypress" />

describe('Dropdown, Checkboxes and radio buttons',()=>{
    it('Select a option from dropdown',()=>{
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-1').select('Python')
        cy.get('#dropdowm-menu-1').should('have.value','python')
        cy.get('#dropdowm-menu-2').select('maven')
        cy.get('#dropdowm-menu-2').should('have.value','maven')
        cy.get('#dropdowm-menu-3').select('javascript')
        cy.get('#dropdowm-menu-3').should('have.value','javascript')
    })

    it('Select Radio buttons',()=>{
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="option-3"]').should('be.checked')
        cy.get('input[value="option-2"]').check()
        cy.get('input[value="option-2"]').should('be.checked')
        cy.get('input[value="option-4"]').check()
        cy.get('input[value="option-4"]').should('be.checked')
        cy.get('input[value="option-3"]').click()
        cy.get('input[value="option-3"]').should('not.be.checked')
        cy.get('input[value="option-2"]').uncheck()
    })

    it.only('Select radio buttons',()=>{
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="green"]').check().should('be.checked')
        cy.get('input[value="blue"]').should('not.be.checked')
    })
})