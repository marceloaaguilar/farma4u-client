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
        <Navbar.Brand className="navbarBrand" href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='navLink' href="#home">Missão</Nav.Link>
            <Nav.Link className='navLink' href="#link">Plano</Nav.Link>
            <Nav.Link className='navLink' href="#link">Como Funciona</Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Button className='btnAssociado'>Área do Associado</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHotsite;