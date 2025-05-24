package br.com.projetocrud.produtos.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.projetocrud.modelo.ProdutoModelo;
import br.com.projetocrud.modelo.ResponseModel;
import br.com.projetocrud.produtos.repository.ProductRepository;

@Service
public class ProductService {
    
    @Autowired
    private ProductRepository pr;

    private ResponseModel rm = new ResponseModel();

    //Show products
    public Iterable<ProdutoModelo> listar(){
        return pr.findAll();
    }

    //Add products
    public ResponseEntity<?> addUpdate(ProdutoModelo pm, String acao) {
        if(pm.getNome().equals("")){
            rm.setResponse("O nome do produto é obrigatório!");
            return new ResponseEntity<ResponseModel>(rm,HttpStatus.BAD_REQUEST);
        } else if(pm.getMarca().equals("")){
            rm.setResponse("O produto deve ter sua marca especificada");
            return new ResponseEntity<ResponseModel>(rm,HttpStatus.BAD_REQUEST);
        } else {
            if(acao.equals("add")){
                return new ResponseEntity<ProdutoModelo>(pr.save(pm), HttpStatus.CREATED);
            }else{
            return new ResponseEntity<ProdutoModelo>(pr.save(pm), HttpStatus.OK);
            }
        }
    }

    //Delete products
    public ResponseEntity<ResponseModel> delete(Long codigo){
        pr.deleteById(codigo);
        try {
            pr.deleteById(codigo);
            rm.setResponse("O produto foi removido com sucesso");
            return new ResponseEntity<>(rm, HttpStatus.OK);
        } catch (Exception e) {
            rm.setResponse("Erro ao remover: " + e.getMessage());
            return new ResponseEntity<>(rm, HttpStatus.BAD_REQUEST);
        }
    }
}