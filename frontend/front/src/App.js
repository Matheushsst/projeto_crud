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
      if(retorno_convertido.mensage !== undefined){
        alert(retorno_convertido.mensage);
      }else{
        setProdutos([...produtos, retorno_convertido]);
        alert('Produto cadastrado com sucesso!')
        setObjProduto(produto);
      }
    })
  }

  const selecionarProduto= (indice) => {
    setObjProduto(produtos[indice]);
    setRegisterBt(false)
  }

return (    
      <div>
        <Form button={RegisterBt} eventoTeclado={aoDigitar} cadastrar={cadastrar} objProduto={objProduto}/>
        <Table vetor={produtos} selecionar={selecionarProduto}/>
      </div>
  )
 
}

export default App;