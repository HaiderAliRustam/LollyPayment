/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // we can choose to ignore the error and continue the test
    return false
  })



describe("Lolly Payment" ,()=>{
    it("Lolly payment ",()=>{

        cy.visit("https://payments-dev.lollylaw.com/onelink/4b6770d7-a8f4-4213-a4fa-5107e71954b1")

        cy.get("input[placeholder='Enter Amount']").type("1")
        cy.get("input[placeholder='First Name']").type("Test");
        cy.get("input[placeholder='Last Name']").type("01")
        cy.get("input[placeholder='Email']").type("Test@gmail.com");

        window.addEventListener('message', (event) => {
            // Handle message received from child frame
            console.log('Received message:', event.data);
          });
          

        cy.get('span iframe[title="Secure text input frame"]').click().then(($iframe) => 
      {
        const $body = $iframe.contents().find('body');
  
        // Click the button inside the iframe
        $body.find('button').click();
  
        // Fill the input field inside the iframe
        $body.find('input').type('example text');
      })
    })
})