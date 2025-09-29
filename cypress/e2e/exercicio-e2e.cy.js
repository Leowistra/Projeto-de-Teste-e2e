/// <reference types="cypress" />
import produtosPage from "../support/page_objects/produtos.page";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */


    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        ///Login no site
        cy.visit('minha-conta')
        cy.login('leow.teste@teste.com.br', 'teste@123')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'leow.qa')
        cy.get('#primary-menu > .menu-item-629 > a').click()
        ///Adição do primeiro produto
        produtosPage.buscarProdutoLista('Ajax Full-Zip Sweatshirt');
        produtosPage.addProdutoCarrinho('L', 'Red', 1);
        cy.get('.woocommerce-message').should('contain', '“Ajax Full-Zip Sweatshirt” foi adicionado no seu carrinho.')
        cy.get('#primary-menu > .menu-item-629 > a').click()
        ///Adição do segundo produto
        cy.fixture('produtos').then(dados => {
            const produto = dados[0];
            produtosPage.buscarProdutoLista(produto.nomeProduto);
            produtosPage.addProdutoCarrinho(produto.tamanho, produto.cor, produto.quantidade);
            cy.get('.woocommerce-message').should('contain', produto.nomeProduto);
        });
        cy.get('#primary-menu > .menu-item-629 > a').click()
        ///Adição do terceiro produto
        cy.fixture('produtos').then(dados => {
            const produto = dados[1];
            produtosPage.buscarProdutoLista(produto.nomeProduto);
            produtosPage.addProdutoCarrinho(produto.tamanho, produto.cor, produto.quantidade);
            cy.get('.woocommerce-message').should('contain', produto.nomeProduto);
        });
        cy.get('#primary-menu > .menu-item-629 > a').click()
        ///Adição do quarto produto
        cy.fixture('produtos').then(dados => {
            const produto = dados[2];
            produtosPage.buscarProdutoLista(produto.nomeProduto);
            produtosPage.addProdutoCarrinho(produto.tamanho, produto.cor, produto.quantidade);
            cy.get('.woocommerce-message').should('contain', produto.nomeProduto);
        });
        cy.get('.woocommerce-message > .button').click()
        ///Finalização do pedido e preenchimento do formulário de Checkout
        cy.get('.checkout-button').click()
        cy.formularioCheckout('Leonardo', 'Wistra', 'Brasil', 'Rua. Joao Jose', '33', 'São Paulo', 'São Paulo', '00000-010', '11 99999-9999', 'leow.teste@teste.com.br')
        cy.get('.woocommerce-notice', { timeout: 10000 }).should('contain', 'Obrigado. Seu pedido foi recebido.')
    });
})

