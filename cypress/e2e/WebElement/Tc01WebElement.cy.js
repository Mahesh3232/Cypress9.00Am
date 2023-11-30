describe('Verify the webelements',()=>{ //test scenario

    it('Verify contactus form',()=>{ //test case 
        //Visiting the Url 
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')

        //Type into input fields
        //tagname[attr= "Value"]
        cy.get('input[name="first_name"]').type('Mahesh')
        cy.get('input[name="last_name"]').type('Aher')
        cy.get('input[name="email"]').type('Mahesh@gmail.com')
        cy.get('textarea[name="message"]').type('I am learning JS')

        //Clicking on submit button
        //cy.get('input[value="SUBMIT"]').click()

        //clear command
        cy.get('input[name="first_name"]').clear()

        //getattribute 
        cy.get('input[name="first_name"]').should('have.attr','name','first_name')
        cy.get('input[name="first_name"]').then((el)=>{
            cy.log(el.prop('name'))
            cy.log(el.prop('type'))
            cy.log(el.prop('class'))
            cy.log(el.prop('placeholder'))
        })

        cy.get('input[name="first_name"]').invoke('attr','name').then((str)=>{
            cy.log(str)
        })

        cy.get('input[name="first_name"]').invoke('prop','name').then((str)=>{
            cy.log(str)
        })


    })
})