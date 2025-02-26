package br.com.projetocrud.produtos.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/rota")
public class ProductController {

    @GetMapping
    public String rota(){
        return "API está funcionando!";
    }
}
