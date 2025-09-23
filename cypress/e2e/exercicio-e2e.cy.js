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

    ///it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta'), () => {}

    it. only('Adição do primeiro produto no carrinho', () => {
        cy.fixture('produtos').then(dados => {
            const produto = dados[0];
            produtosPage.buscarProdutoLista(produto.nomeProduto);
            produtosPage.addProdutoCarrinho(produto.tamanho, produto.cor, produto.quantidade);
            cy.get('.woocommerce-message', { timeout: 10000 })
                .should('contain', produto.nomeProduto);
        });
    });
    it('Adição do segundo produto no carrinho', () => {
        cy.fixture('produtos').then(dados => {
            const produto = dados[1];
            produtosPage.buscarProdutoLista(produto.nomeProduto);
            produtosPage.addProdutoCarrinho(produto.tamanho, produto.cor, produto.quantidade);
            cy.get('.woocommerce-message', { timeout: 10000 })
                .should('contain', produto.nomeProduto);
        });
    });
    it('Adição do terceiro produto no carrinho', () => {
        cy.fixture('produtos').then(dados => {
            const produto = dados[2];
            produtosPage.buscarProdutoLista(produto.nomeProduto);
            produtosPage.addProdutoCarrinho(produto.tamanho, produto.cor, produto.quantidade);
            cy.get('.woocommerce-message', { timeout: 10000 })
                .should('contain', produto.nomeProduto);
        });
    });


})

