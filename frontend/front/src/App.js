import {useEffect, useState} from 'react';
import './App.css';
import Form from './Form';
import Table from './Table';

function App() {

const[RegisterBt] =useState(true);
const[produtos, setProdutos] =useState([]);

useEffect(() => {
  fetch("http://localhost:8080/listar")
      .then(retorno => retorno.json())
      .then(retorno_convertido => setProdutos(retorno_convertido));
  }, []);

return (    
      <div>
        <p>{JSON.stringify(produtos)}</p>
        <Form button={RegisterBt}/>
        <Table/>
      </div>
  )
 
}

export default App;