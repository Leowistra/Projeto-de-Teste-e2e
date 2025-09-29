class produtosPage {

    visitarUrl() {
        cy.visit('/produtos')
    }

    buscarProdutoLista(nomeProduto) {
        cy.get('.products > .row').contains(nomeProduto).click()
    }

    addProdutoCarrinho(tamanho, cor, quantidade) {
        cy.get(`.button-variable-item-${tamanho}`, { timeout: 10000 }).should('be.visible').click({ force: true });
        cy.get(`.button-variable-item-${cor}`).click();
        cy.get('.input-text').clear().type(quantidade);
        cy.get('.single_add_to_cart_button').click()
    }

}

export default new produtosPage()