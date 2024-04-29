import React from "react";
import { useState, useEffect } from 'react';
import swal from 'sweetalert';
import Container from "react-bootstrap/esm/Container";
import { api } from "../../../utils/axios";
import Cookies from "universal-cookie";
import Card from 'react-bootstrap/Card';

export default function PaginaInicial(){

  const [memberData, setMemberData] = useState({});
  const cookies = new Cookies();

  useEffect(()=> {
    if (localStorage.getItem('userData') == null || localStorage.getItem('userData') == undefined){
        swal({text:'Você precisa se autenticar primeiro..', timer: 3000, buttons: false});
        return false
    }
    processaDadosMember();
  },[]);

  async function processaDadosMember(){
    await api.get(process.env.REACT_APP_BASE_URL_API_0 + '/member/' + JSON.parse(localStorage.getItem('userData')).userId, {headers: {"Authorization" : `Bearer ${cookies.get("jwt_authorization")}` } }).then((response)=> {
      if (response.status == 200){
        setMemberData(response.data.member);
        return true;
      }})

  }

    return (
      Object.keys(memberData).length != 0 ? <Container style={{paddingTop: '5rem'}}> 
        <h1>Olá, {memberData.name}</h1>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Você já economizou:</Card.Title>
            <Card.Text style={{fontWeight: '700', fontSize: '2rem'}}>
              R$ {memberData.totalSavings}
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>: <p style={{paddingTop: '5rem'}}>Carregando...</p>
    );

}

