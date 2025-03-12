package br.com.projetocrud.produtos.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.projetocrud.modelo.ProdutoModelo;
import br.com.projetocrud.produtos.service.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/rota")
public class ProductController {

    @Autowired
    private ProductService ps;

    @GetMapping
    public Iterable<ProdutoModelo> listar() {
        return ps.listar();
    }
    

    @GetMapping
    public String rota(){
        return "API está funcionando!";
    }
}
