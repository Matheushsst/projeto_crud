import {useEffect, useState} from 'react';
import './App.css';
import Form from './Form';
import Table from './Table';

function App() {

  const produto = {
    codigo: null,
    nome: '',
    marca: ''
  }

const[RegisterBt, setRegisterBt] =useState(true);
const[produtos, setProdutos] =useState([]);
const[objProduto, setObjProduto] = useState(produto);

useEffect(() => {
  fetch("http://localhost:8080/listar")
      .then(retorno => retorno.json())
      .then(retorno_convertido => setProdutos(retorno_convertido));
  }, []);

  const aoDigitar = (e) => {
    setObjProduto({...objProduto, [e.target.name]:e.target.value});
  }

  const cadastrar = () => {
    fetch('http://localhost:8080/add', {
      method: 'post',
      body:JSON.stringify(objProduto),
      headers:{
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido =>{
      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem);
      }else{
        setProdutos([...produtos, retorno_convertido]);
        alert('Produto cadastrado com sucesso!')
        limparFormulario();
      }
    })
  }

  const alterar = () =>{
    fetch('http://localhost:8080/update', {
      method: 'put',
      body: JSON.stringify(objProduto),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      if(retorno_convertido.mensagem !== undefined) {
        alert(retorno_convertido.mensagem);
      }else{
        alert('Produto alterado com sucesso!');
      }

      let vetorTemp = [...produtos];

      let indice = vetorTemp.findIndex((p) => {
        return p.codigo === objProduto.codigo;
      });

      vetorTemp[indice] = objProduto;

      setProdutos(vetorTemp);

      limparFormulario();
    })
  }

  const remover = () => {
    fetch('http://localhost:8080/delete/' + objProduto.codigo, {
      method: 'delete',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })

    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      alert(retorno_convertido.mensagem);

      let vetorTemp = [...produtos];

      let indice = vetorTemp.findIndex((p) => {
        return p.codigo === objProduto.codigo;
      });

      vetorTemp.splice(indice, 1);

      setProdutos(vetorTemp);

      limparFormulario();
    })
  }

  const limparFormulario = () => {
    setObjProduto(produto);
    setRegisterBt(true);
  }

  const selecionarProduto= (indice) => {
    setObjProduto(produtos[indice]);
    setRegisterBt(false)
  }

return (    
      <div>
        <Form button={RegisterBt} eventoTeclado={aoDigitar} cadastrar={cadastrar} objProduto={objProduto} cancelar={limparFormulario} remover={remover} alterar={alterar}/>
        <Table vetor={produtos} selecionar={selecionarProduto}/>
      </div>
  )
 
}

export default App;