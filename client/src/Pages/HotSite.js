import Feed from '../components/Feed';
import Info from '../components/Info';
import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {React,useState, useEffect} from 'react';
import {useNavigate, useParams } from 'react-router-dom';
import {api} from '../utils/axios';
import Image from 'react-bootstrap/Image';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  '../components/Navbar.css';
import Button from 'react-bootstrap/Button';
import App from '../App';



const Hotsite = () => {
  const [data, setData] = useState('');
  let primaryColor  = '#00CCFF';
  let secondColor   = '#FFFFFF';
  const {hotsite} = useParams();
  
  useEffect(() => {      
  api.get(`/hotsite/${hotsite}`).then((res)=>{
    setData(res.data[0]);
    } )
  },[]);

  if(data != null){
    primaryColor = data.primaryColor;
    secondColor  = data.secondColor;
  }
  const divStyle = {
    color: secondColor,
    backgroundColor: primaryColor,
  };

 const BtnStyle = {
  border: `1px solid ${secondColor}`,
  backgroundColor: 'transparent',
  color: `${secondColor}`,
  padding: '0.5rem 2rem 0.5rem 2rem',
  fontSize: '1rem',
  marginLeft: '1rem',
 }

  return (
    <div className='App'>
      <div style={divStyle}>
      <Navbar expand="lg" className="navbar" style={{margin: "2rem 2rem"}}>
      <Container>
        <Navbar.Brand className="navbarBrand">
          <Image src={'Images/' + data.image} className='logoHotsite'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{alignItems: 'center'}}>
            <Nav.Link className='navLink' href="#home">Missão</Nav.Link>
            <Nav.Link className='navLink' href="#link">Plano</Nav.Link>
            <Nav.Link className='navLink' href="#link">Como Funciona</Nav.Link>
            <Nav.Link className='navLink' href="#link">
              <Button className='btnAssociado' style={BtnStyle}>Área do Associado</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    <div>
      <Feed/>
    </div>
    <Info/>
  </div>
  )
}

export default Hotsite;