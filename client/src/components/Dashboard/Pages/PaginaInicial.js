import React from "react";
import { useState, useEffect } from 'react';
import swal from 'sweetalert';
import Container from "react-bootstrap/esm/Container";



export default function PaginaInicial(){

  const [userId, setUserId] = useState('');

  useEffect(()=> {
    if (localStorage.getItem('userId') == null || localStorage.getItem('userId') == undefined){
        swal({text:'Você precisa se autenticar primeiro..', timer: 3000, buttons: false});
        return false
    }
    setUserId(localStorage.getItem('userId'));
})
    return (
      <Container>
        <h1> Novo Teste</h1>


      </Container>
      
    );

}

