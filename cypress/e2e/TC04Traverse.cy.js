
///reference types ="cypress" />
describe('Verify the traverse methods in Cypress',()=>{

    it('To get children of DOM elements, use the .children() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-buttons').children().should('have.length',5)
    })

    it('To get the previous sibling DOM element within elements, use the .prev() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prev().should('have.text','Figs')
    })

    it('To get the next sibling DOM element within elements, use the .next() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').next().should('have.text','Asparagus')
    })

    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').nextAll().should('have.length',4)
        cy.get('#veggie').nextAll().should('have.length.greaterThan',3)
    })

    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prevAll().should('have.length',6)
        cy.get('#veggie').prevAll().should('have.length.greaterThan',5)
    })

    it.only('To get all sibling DOM elements of elements, use the .siblings() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').siblings().should('have.length',10)
    })
    
})