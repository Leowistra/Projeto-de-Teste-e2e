Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('formularioCheckout', (nome, sobrenome, pais, endereço, numeroCasa, cidade, estado, CEP, telefone, email) => {
    cy.get('#billing_first_name').clear().type(nome)
    cy.get('#billing_last_name').clear().type(sobrenome)
    cy.get('#select2-billing_country-container').type(pais)
    cy.get('#billing_address_2').clear().type(numeroCasa)
    cy.get('#billing_address_1').type(endereço)
    cy.get('#billing_city').clear().type(cidade)
    cy.get('#select2-billing_state-container').type(estado)
    cy.get('#billing_phone').clear().type(telefone)
    cy.get('#billing_postcode').clear().type(CEP)
    cy.get('#billing_email').clear().type(email)
    cy.get('#terms').click()
    cy.get('#place_order').click()
})
