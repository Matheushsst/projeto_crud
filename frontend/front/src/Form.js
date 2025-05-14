function Form({ button, eventoTeclado, cadastrar, objProduto, cancelar, remover, alterar}) {
    return (
        <div className ='fundo-formulario'>
            <div className="overlay">
                <form className ='formulario'>
                    <h2>Sistema Gestor de Produtos</h2>
                
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Nome"
                        name="nome"
                        value={objProduto.nome}
                        onChange={eventoTeclado}
                    />
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Marca"
                        name="marca"
                        value={objProduto.marca}
                        onChange={eventoTeclado}
                    />
                    {
                        button
                            ?
                            <input
                                className="btn btn-success"
                                type="button"
                                value="Cadastrar"
                                onClick={cadastrar}
                            />
                            :
                            <div>
                                <input className="btn btn-warning" type="button" onClick={cancelar} value="Cancelar" />
                                <input className="btn btn-primary" type="button" onClick={alterar} value="Alterar" />
                                <input className="btn btn-danger" type="button" onClick={remover} value="Remover" />
                            </div>
                    }
                </form>
            </div>
        </div>
    );
}

export default Form;
