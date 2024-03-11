// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', () => {
    cy.clearCookies()
    cy.getCookies().should('be.empty')
    cy.visit('/');
    cy.fixture('users.json').then((_data) => {
        cy.get('input[placeholder="Username"]').type(_data.user.username);
        cy.get('input[placeholder="Password"]').type(_data.user.password);
        cy.get('.t-Button-label').click();

        cy.intercept('**/pls/apex/wwv_flow.ajax?p_context=qa-application/home/*').as('home')
        cy.wait('@home', { timeout: 5000 })
    });
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })