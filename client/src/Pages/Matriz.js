import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Matriz.css';

const Matriz = () => {

    return (
    <div className="wrapper">
        <div className="cover">
            <header className="header">
                <Container>
                    <Navbar expand="lg"  variant="dark">
                    <Navbar.Brand className="navbarBrand logo"></Navbar.Brand>
                    <Navbar.Toggle className="navbar-toggler" aria-controls="basic-navbar-nav"  />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto navMatriz">
                            <Nav.Link className='navLink' href="#Missao">Missão</Nav.Link>
                            <Nav.Link className='navLink' href="#Planos">Plano</Nav.Link>
                            <Nav.Link className='navLink' href="#funciona">Como Funciona</Nav.Link>
                            <Nav.Link className='navLink' href='/login'>
                                <a style={{textDecoration: 'none'}}>Área do Associado</a>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                </Container>
            </header>
            <div className="jumbotron jumbotron-fluid bg-transparent hero section m-0">
              <div className="container">
                <div className="row align-items-end align-items-xl-center">
                    <div className="col-12 col-lg-5">
                        <div className="hero-content">
                            <p className="lead">Clube Farma For You</p>
                            <h1 className="title-one">Medicamentos com preços mais acessíveis do Brasil. Economize muito mais comprando no nosso clube</h1>
                            <div className="space-md"></div>
                            <div className="space-md"></div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7 px-0">
                        <Image src="hero-img.png" className="img-fluid hero-img" alt="Hero image"/>
                    </div>
                </div>
              </div>
            </div>
			
			 <div className="jumbotron jumbotron-fluid bg-transparent hero section m-0">
              <Container>
                <Row className="align-items-end align-items-xl-center">
                    <Col xs={12} lg={7} >
                        <img src="splash-casal-3.png" className="img-fluid hero-img" alt="Casal Farma4u"/>
                    </Col>
                    <Col xs={12} lg={5}>
                        <div className="hero-content" id="Missao">
						    <h1 className="hero-title">Nossa missão é dar aquela força e cuidar de todo mundo! Oferecemos remédios a preço justo, de um jeito fácil, seguro e que todo mundo pode pagar.</h1>
                            <p className="lead">A nossa missão é contribuir para a saúde e o bem-estar de todas as pessoas, proporcionando benefícios financeiros em seus cuidados médicos e simplificando suas rotinas diárias. O Clube Farma For You representa a solução que facilita o acesso a tratamentos de qualidade, promovendo uma comunidade mais saudável e feliz.</p>
                        </div>
                    </Col>
                </Row>
              </Container>
            </div>
		
        </div>
        <div style={{alignContent:'center', textAlign:'center'}}>

            <div className="button" style={{alignContent: 'center', alignItems: 'center'}}>
                <a href="#"><img src="btn-faleconosco.png" style={{marginTop:'30px', marginBottom: '30px'}}/> </a>
            </div>

            <div className="hero-content" style={{textAlign: 'center'}} id="Planos">
                <h1 className="hero-title"><span style={{color:"#ff5bd6"}}>Planos simples com valores acessíveis de verdade</span></h1>
            </div>

            <a href="#"><img  class="box-assinatura-juridica" src="box-assinatura-juridica-g.jpg" alt="img-responsiva" /></a>              

            <div className="hero-content text-center text-lg-center" id="funciona">
                <h1 className="hero-title"><span style={{color:"#ff5bd6"}}>Como funciona?</span></h1>
            </div>
		

            <div className="galeria">
                <img style={{margin: '2px'}}src="box-assinar.png" alt="Imagem 1"/>
                <img style={{margin: '2px'}}src="box-cadastrar.png" alt="Imagem 2"/>
                <img style={{margin: '2px'}}src="box-link-pagamento.png" alt="Imagem 3"/>
                <img style={{margin: '2px'}}src="box-pedido.png" alt="Imagem 4"/>
                <img style={{margin: '2px'}}src="box-bemvindo.png" alt="Imagem 5"/>
            </div>		 
  
            <footer>
                <div className="footer-content">
                    <img src="logo.png" alt="Farma For You"/>
                    <p>Medicamentos com preços mais acessível do Brasil!</p>
                </div>
                <div className="footer-bottom">
                    <p>copyright &copy;2024 Farma For You.</p>
                </div>
            </footer>
        </div>
    </div>
    )




}

export default Matriz