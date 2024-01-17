describe('Hooks methods in Cypress',()=>{

    beforeEach(()=>{ //Run every time before each test case
        cy.log('I will run beforeeach test case')
    })

    afterEach(()=>{ //Run every time after each test case
        cy.log('I will run after each test case')
    })

    before(()=>{ //Runs only one time at start of the execution
        cy.log('I will run at first')
    })

    after(()=>{ //Runs only one time at end of the execution
        cy.log('I will run at last')
    })

    it('Test case one',()=>{
        //7 lines
        //cy.visit('XYZ')
        cy.log('I am from test case one')
        //logout 5 lines
    })

    it('Test case Two',()=>{
         //7 lines
        //cy.visit('XYZ')
        cy.log('I am from test case Two')
         //logout 5 lines
    })
})