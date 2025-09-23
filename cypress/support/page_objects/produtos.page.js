class produtosPage {



    buscarProdutoLista(nomeProduto) {
        cy.get('.products > .row').contains(nomeProduto).click()
    }

    addProdutoCarrinho(tamanho, cor, quantidade) {
        cy.get(`.button-variable-item-${tamanho}`).click();
        cy.get(`.button-variable-item-${cor}`).click();
        cy.get('.input-text').clear().type(quantidade);
        cy.get('.single_add_to_cart_button').click()
        cy.get('.variations > tbody > :nth-child(1)' + tamanho).click()


    }

}

export default new produtosPage()