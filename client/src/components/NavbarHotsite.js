import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  './Navbar.css';
import Button from 'react-bootstrap/Button';
import App from '../App';

function NavbarHotsite() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand className="navbarBrand">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='navLink' href="#home">Missão</Nav.Link>
            <Nav.Link className='navLink' href="#link">Plano</Nav.Link>
            <Nav.Link className='navLink' href="#link">Como Funciona</Nav.Link>
            <Nav.Link className='navLink' href="#join-us">
                    <a style={{textDecoration: 'none'}}>Área do Associado</a>
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHotsite;