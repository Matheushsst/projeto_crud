function Table(vetor){
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Marca</th>
                    <th>Selecionar</th>
                </tr>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    {
                        vetor.map((obj,indice) => (
                            <tr key={indice}>
                                <td>{indice + 1}</td>
                                <td>{obj.nome}</td>
                                <td>{obj.marca}</td>
                                <td><button className="btn btn-success"></button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </thead>
        </table>
    )
}

export default Table;