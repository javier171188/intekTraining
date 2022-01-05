describe('My First Test', function () {
    it('Finds an element', function () {
        cy.visit('http://localhost:1234/');

        //cy.wait(1000)
        //cy.pause();

        cy.contains('Loading the photos...')
        cy.wait(1000)
        cy.get('#photos').scrollTo('0%', '110%')

        cy.wait(1000)
        cy.contains('Next').click()

        cy.contains('Loading the photos...', { timeout: 100 }).should('not.exist');
        cy.get('img')

        /* cy.url()
             .should('include', '/commands/actions')
 
         cy.get('.action-email')
             .type('fake@email.com')
             .should('have.value', 'fake@email.com')*/
    })
})