

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

    it('Getting attribute and verifying attribute',()=>{
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2').should('have.attr','class')
        cy.get('h2').should('have.attr','name')
        cy.get('h2').should('have.attr','class','section_header')
        cy.get('h2').should('have.attr','name','contactme')
        cy.get('h2').invoke('attr','class').then((text)=>{
            cy.log(text)
        })

        cy.get('h2').invoke('attr','name').then((text)=>{
            cy.log(text)
        })
    })

    it('getting the text and verifying the text',()=>{
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2').should('have.text','CONTACT US')
        cy.get('h2').invoke('text').then((text)=>{
            cy.log(text)   
        })
        cy.get('h2').should('be.visible')
    })

    it.only('getting the text and verifying the text',()=>{
       cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
       cy.get('[value="pumpkin"]').should('be.checked')
       cy.get('[value="cabbage"]').should('be.disabled')
    })
})