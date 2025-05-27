function Card({vetor, selecionar}){
    return(
        <div className='row row-cols-2'>
            {
                vetor.map((obj,indice) => (
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4 d-grid gap-0" key = {obj.id}>
                        <div className= "card h-100">
                            <img src ={obj.imagem || 'https://placehold.co/600x400'}
                            className="card-img-top"
                            alt={obj.nome}/>
                            <div className="card-body">
                                <h5 className="card-title">{obj.nome}</h5>
                                <p class="card-text">{obj.marca}</p>
                                <p class="card-text">Quantidade: {obj.quantidade}</p>
                                <p class="card-text"><strong>R$ {obj.preco}</strong></p>
                                <button onClick={() => {selecionar(indice)}} className="btn btn-success">Selecionar</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Card;