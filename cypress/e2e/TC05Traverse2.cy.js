//prev(),nextall(),sibling(),children(),next(),prevall(),prev()
describe('Traverse methods in cypress',()=>{
    it('revise',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        //chidren()
        cy.get('.traversal-food-list').children().should('have.length',11)
        //next()
        cy.get('#milk').next().should('have.text','Espresso')
        //prev()
        cy.get('#espresso').prev().should('have.attr','id','milk')
        //prevall()
        cy.get('#milk').prevAll().should('have.length',2)
        //nextall()
        cy.get('#milk').nextAll().should('have.length',2)
        //siblings
        cy.get('#milk').siblings().should('have.length',4)
    })

    it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prevUntil('#fruits').should('have.length',5)
    })

    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#coffee').nextUntil('#sugar').should('have.length',3)
    })

    it('To get the first DOM element within elements, use the .first() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().first().should('have.text','Coffee')
    })
  
    it('To get the last DOM element within elements, use the .last() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().last().should('have.text','Sugar')
    })

    it('To get a DOM element at a specific index, use the .eq() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().eq(1).should('have.text','Tea')
        cy.get('.traversal-drinks-list').children().eq(3).should('have.text','Espresso')
    })

    it.only('To get parent DOM element of elements, use the .parent() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').parent().should('have.attr','class','traversal-drinks-list')
    })



})