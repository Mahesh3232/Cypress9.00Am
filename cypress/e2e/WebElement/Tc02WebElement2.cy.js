

describe('Verify contact us functionality',()=>{
    it('Click()- click on a function',()=>{
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Mahesh')
        cy.get('[name="last_name"]').type('Aher')
        cy.get('[name="email"]').type('mahesh@gmail.com')
        cy.get('[name="message"]').type('I am learning cypress')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
        cy.get('h1').should('exist')
        cy.contains('Thank You for your Message!').should('be.visible')
    })

    it('Clear()- clearing the input field',()=>{
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Mahesh')
        cy.get('[name="last_name"]').type('Aher')
        cy.get('[name="email"]').type('mahesh@gmail.com')
        cy.get('[name="first_name"]').clear()
        //cy.get('[name="first_name"]').should('have.text','')
    })
})