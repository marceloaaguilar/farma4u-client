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
import {Helmet} from "react-helmet";



const Hotsite = () => {
  const [data, setData] = useState('');
  const {hotsite} = useParams();
  let navigate = useNavigate(); 

  const getHotsiteData = async () => {
     api.get(`/${hotsite}`).then((res)=>{
       setData(res.data);
      }).catch((err) => {
        console.log(err)
        navigate('/404');
      });
  }

  useEffect(()=> {
    getHotsiteData();
  },[]);


  const routeChange = () =>{ 
    let path = window.location.pathname += '/login'; 
    navigate(path);
  }

  return data ? (
  <div className='App'>
    <div style={{ color: data.secondColor, backgroundColor: data.primaryColor}}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.urlSite.charAt(0).toUpperCase() + data.urlSite.slice(1)} - FARMA4U</title>
        <meta property="og:title" content="Clube FARMA4U" />
        <meta property="og:description" content="Medicamentos com preços mais acessíveis do Brasil." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={"%PUBLIC_URL%/" + data.image} />
      </Helmet>
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
                <Button
                  className='btnAssociado' 
                  onClick={routeChange}
                  href=""
                  style={{
                    border: `1px solid ${data.secondColor}`,
                    backgroundColor: 'transparent',
                    color: `${data.secondColor}`,
                    padding: '0.5rem 2rem 0.5rem 2rem',
                    fontSize: '1rem',
                    marginLeft: '1rem'
                  }}
                >
                  Área do Associado
                </Button>
            </Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
    <Feed/>
    <Info dadosClient={{primaryColor: data.primaryColor, secondColor: data.secondColor}}/>
  </div>
  ): <p>Carregando...</p>

}

export default Hotsite;