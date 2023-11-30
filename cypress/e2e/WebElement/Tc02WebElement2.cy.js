

describe('Verify contact us functionality',()=>{
    it('Verify contactus functionality with valid credentials',()=>{
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('Mahesh')
        cy.get('input[name="last_name"]').type('Aher')
        cy.get('input[name="email"]').type('Mahesh@gmail.com')
        cy.get('textarea[name="message"]').type('I am learning js')
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
    })
})