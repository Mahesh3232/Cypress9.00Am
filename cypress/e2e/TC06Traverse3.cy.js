

describe('Traverse Day three',()=>{
    it('To get DOM elements that match a specific selector, use the .filter() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('button').filter('.btn-outline-info').should('have.length',2)
    })

    it('To remove DOM element(s) from the set of elements, use the .not() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().not('.disabled').should('have.length',3)
    })

    it('To get descendant DOM elements of the selector, use the .find() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.thumbnail').last().find('#sugar').should('have.text','Sugar')
    })

    it('To get the closest ancestor DOM element, use the .closest() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').closest('div').should('have.class','thumbnail')
        cy.get('#coffee').closest('div').should('have.class','thumbnail')
    })

    it.only('To get parents DOM element of elements until other element, use the .parentsUntil() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#coffee').parentsUntil('.thumbnail').should('have.length',1)
        cy.get('#sugar').parentsUntil('.thumbnail').should('have.length',1)
    })
})