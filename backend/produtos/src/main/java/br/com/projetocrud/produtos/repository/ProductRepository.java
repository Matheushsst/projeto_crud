package br.com.projetocrud.produtos.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.projetocrud.modelo.ProdutoModelo;

@Repository
public interface ProductRepository extends CrudRepository<ProdutoModelo, Long>{
    
}
