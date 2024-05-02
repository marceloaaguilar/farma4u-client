import React from "react";
import { useState, useEffect } from 'react';
import swal from 'sweetalert';
import Container from "react-bootstrap/esm/Container";
import { api } from "../../../utils/axios";
import Cookies from "universal-cookie";
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom';
import './Dashbboard.css';


export default function PaginaInicial(){

  const [memberData, setMemberData] = useState({});
  const cookies = new Cookies();
  const navigate = useNavigate(); 

  useEffect(()=> {
    if (localStorage.getItem('userData') == null || localStorage.getItem('userData') == undefined){
        swal({text:'Você precisa se autenticar primeiro..', timer: 3000, buttons: false});
        return false
    }
    processaDadosMember();
  },[]);

  async function processaDadosMember(){
    try{
      await api.get(process.env.REACT_APP_BASE_URL_API_0 + '/member/' + JSON.parse(localStorage.getItem('userData')).userId, {headers: {"Authorization" : `Bearer ${cookies.get("jwt_authorization")}` } }).then((response)=> {
        if (response.status == 200){
          setMemberData(response.data.member);
          return true;
        }})
    }catch(error){
      swal({text:'Você precisa se autenticar novamente. Redirecionando...', timer: 2000, buttons: false});
      navigate('/' + JSON.parse(localStorage.getItem('userData')).urlSite + '/login');
      return false
    }
  }

    return (
      <div className="init" style={{width: '80vw'}}> 
        {Object.keys(memberData).length != 0 ? <Container style={{paddingTop: '5rem', display:'flex', flexDirection: 'column', justifyContent: 'center'}}> 
          <p style={{fontSize: '2.5rem', fontWeight: '300', marginBottom: '2rem'}}>Olá, {memberData.name}</p>
          <Card style={{ width: '25rem' }}>
            <Card.Body>
              <Card.Title style={{fontSize: '2rem'}}>Você já economizou:</Card.Title>
              <Card.Text style={{fontWeight: '700', fontSize: '3rem'}}>
                R$ {memberData.totalSavings}
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>: <p style={{paddingTop: '5rem'}}>Carregando...</p>}
      </div>
    );

}

