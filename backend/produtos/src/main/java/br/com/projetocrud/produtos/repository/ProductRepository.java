package br.com.projetocrud.produtos.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.projetocrud.modelo.ProdutoModelo;

public interface ProductRepository extends CrudRepository<ProdutoModelo, Long>{
    
}
