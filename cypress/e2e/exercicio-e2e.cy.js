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

    beforeEach(() => {
        cy.visit('/')
        cy.get('#primary-menu > .menu-item-629 > a').click()
    });

    afterEach(() => {
        cy.get('#primary-menu > .menu-item-629 > a').click()
    });
    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta'), () => {

    };
    it('Adição do primeiro produto no carrinho', () => {
        produtosPage.buscarProdutoLista('Ajax Full-Zip Sweatshirt');
        produtosPage.addProdutoCarrinho('L', 'Red', 1);
        cy.get('.woocommerce-message').should('contain', 'Ajax Full-Zip Sweatshirt');
    });
    it('Adição do segundo produto no carrinho', () => {
        cy.fixture('produtos').then(dados => {
            const produto = dados[0];
            produtosPage.buscarProdutoLista(produto.nomeProduto);
            produtosPage.addProdutoCarrinho(produto.tamanho, produto.cor, produto.quantidade);
            cy.get('.woocommerce-message').should('contain', produto.nomeProduto);
        });
    });
    it('Adição do terceiro produto no carrinho', () => {
        cy.fixture('produtos').then(dados => {
            const produto = dados[1];
            produtosPage.buscarProdutoLista(produto.nomeProduto);
            produtosPage.addProdutoCarrinho(produto.tamanho, produto.cor, produto.quantidade);
            cy.get('.woocommerce-message').should('contain', produto.nomeProduto);
        });
    });
    it('Adição do quarto produto no carrinho', () => {
        cy.fixture('produtos').then(dados => {
            const produto = dados[2];
            produtosPage.buscarProdutoLista(produto.nomeProduto);
            produtosPage.addProdutoCarrinho(produto.tamanho, produto.cor, produto.quantidade);
            cy.get('.woocommerce-message').should('contain', produto.nomeProduto);
        });
    });
})

