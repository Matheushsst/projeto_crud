function Card({vetor, selecionar}){
    return(
        <div className='row'>
            {
                vetor.map((obj,indice) => (
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className= "card" key = {obj.id}>
                            <img src ={obj.imagem || 'https://placehold.co/600x400'}
                            className="card-img"
                            alt={obj.nome}/>
                            <div className="card-body">
                                <h5 className="card-title">{obj.nome}</h5>
                                <p class="card-text">{obj.marca}</p>
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