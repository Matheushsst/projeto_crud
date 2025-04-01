package br.com.projetocrud.produtos.controller;

import org.springframework.web.bind.annotation.RestController;

import br.com.projetocrud.modelo.ProdutoModelo;
import br.com.projetocrud.modelo.ResponseModel;
import br.com.projetocrud.produtos.service.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
 public class ProductController {

   @Autowired
    private ProductService ps;

    @GetMapping("/listar")
    public Iterable<ProdutoModelo> listar() {
        return ps.listar();
    }
    
    @PostMapping("/add")
    public ResponseEntity<?> add(@RequestBody ProdutoModelo pm){
        return ps.addUpdate(pm, "add");
    }

    @PutMapping("/update")
    public ResponseEntity<?> update(@RequestBody ProdutoModelo pm){
        return ps.addUpdate(pm, "update");
    }

    @DeleteMapping("/delete/{codigo}")
    public ResponseEntity<ResponseModel>
        delete(@PathVariable Long code){
            return ps.delete(code);
        }

    @GetMapping("/")
    public String rota(){
        return "API está funcionando!";
    }
}
