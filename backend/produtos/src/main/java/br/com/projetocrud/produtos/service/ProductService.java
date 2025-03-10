package br.com.projetocrud.produtos.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.projetocrud.modelo.ProdutoModelo;
import br.com.projetocrud.produtos.repository.ProductRepository;

@Service
public class ProductService {
    
    @Autowired
    ProductRepository pr;

    public Iterable<ProdutoModelo> listar(){
        return pr.findAll();
    }
}