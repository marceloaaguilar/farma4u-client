import React from "react";
import { useState, useEffect } from 'react';
import swal from 'sweetalert';
import { api } from "../../../utils/axios";
import Cookies from "universal-cookie";
import {useNavigate} from 'react-router-dom';
import './Dashbboard.css';
import Col from 'react-bootstrap/Col';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Sidebar from "../Sidebar/Sidebar";
import '../../../index.css'

export default function PaginaInicial(){

  const [memberData, setMemberData] = useState({});
  const [orders, setMemberOrders] = useState([]);
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
      await api.get(process.env.REACT_APP_BASE_URL_API + '/member/' + JSON.parse(localStorage.getItem('userData')).userId, {headers: {"Authorization" : `Bearer ${cookies.get("jwt_authorization")}` } }).then((response)=> {
        
        if (response.status == 200){
          setMemberData(response.data.member);

          const newOrders = response.data.member.orders.map(el => ({
            data: new Date(el.createdAt).toLocaleDateString(),
            valorEconomizado: el.totalSavings,
            valorTotal: el.totalValue
          }));
    
          setMemberOrders(prevOrders => [...prevOrders, ...newOrders]);

          return true;
        }})

    }catch(error){
      swal({text:'Você precisa se autenticar novamente. Redirecionando...', timer: 2000, buttons: false});
      navigate( JSON.parse(localStorage.getItem('userData')).urlSite != undefined  ?  + '/' + JSON.parse(localStorage.getItem('userData')).urlSite : '' + '/login');
      return false
    }
  }

    return (
      <div style={{display: 'flex', position: 'relative'}}>
        <div style={{position: 'absolute', top: '0', zindex: 1000}}>
          <Sidebar activeDirectory={"dashboard"} />
        </div>
        <div style={{margin: '2rem 2rem 2rem 7rem', width: '100%'}}>
          <Col>
            {Object.keys(memberData).length != 0 ? <div style={{display:'flex', flexDirection: 'column', justifyContent: 'center'}}> 
              <Card variant="outlined">
                <CardContent>
                  <Typography sx={{ fontSize: 40 }} color="text.secondary" gutterBottom>
                    Olá, {memberData.name}
                  </Typography>
                  <Typography variant="h5" component="div">
                  
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Você já economizou
                  </Typography>
                  <Typography variant="h2">
                    R$ {memberData.totalSavings}
                  </Typography>
                </CardContent>
              </Card>
            </div>: <p style={{paddingTop: '5rem'}}>Carregando...</p>}
          </Col>
          <Col className="mt-5">
            <p>Seu histórico de pedidos</p>
            <TableContainer component={Paper} className="mt-3">
              <Table sx={{ minWidth: 100 }} aria-label="simple table">

                <TableHead>
                  <TableRow>
                    <TableCell>Data do Pedido</TableCell>
                    <TableCell align="center">Economia Total</TableCell>
                    <TableCell align="center">Valor Total</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {orders.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.data}
                      </TableCell>
                      <TableCell align="center">R$ {row.valorEconomizado}</TableCell>
                      <TableCell align="center">R$ {row.valorTotal}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>

              </Table>
            </TableContainer>
          </Col>
         </div>
      </div>
    );

}

