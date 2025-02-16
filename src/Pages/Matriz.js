import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Matriz.css";

const Matriz = () => {
  const cardStyle = {
    maxWidth: "370px",
    borderRadius: "20px",
    height: "8rem",
    display: "flex",
    alignItems: "center",
    background: "linear-gradient(90deg, rgba(18,153,195,1) 35%, rgba(255,91,214,1) 100%);"
  };

  const iconStyle = {
    width: "3rem",
    height: "100%",
    objectFit: "contain",
  };

  const cardColumnStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const cardTitle = {
    color: "#FFFFFF",
    fontWeight: 600,
    textAlign: "left",
  };

  const cardDescription = {
    color: "#FFFFFF",
    textAlign: "left",
    lineHeight: "20px",
    marginTop: "0.2rem",
  };

  return (
    <div className="wrapper">
      <div className="cover">
        <header className="header">
          <Container>
            <Navbar expand="lg" variant="dark">
              <Navbar.Brand className="navbarBrand logo"></Navbar.Brand>
              <Navbar.Toggle
                className="navbar-toggler"
                aria-controls="basic-navbar-nav"
              />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto navMatriz">
                  <Nav.Link className="navLink" href="#Missao">
                    Missão
                  </Nav.Link>
                  <Nav.Link className="navLink" href="#Planos">
                    Plano
                  </Nav.Link>
                  <Nav.Link className="navLink" href="#funciona">
                    Como Funciona
                  </Nav.Link>
                  <Nav.Link className="navLink" href="/login">
                    <a style={{ textDecoration: "none" }}>Área do Associado</a>
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
                  <h1 className="title-one">
                    Medicamentos com preços mais acessíveis do Brasil. Economize
                    muito mais comprando no nosso clube
                  </h1>
                  <div className="space-md"></div>
                  <div className="space-md"></div>
                </div>
              </div>
              <div className="col-12 col-lg-7 px-0">
                <Image
                  src="hero-img.png"
                  className="img-fluid hero-img"
                  alt="Hero image"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="jumbotron jumbotron-fluid bg-transparent hero section m-0">
          <Container>
            <Row className="align-items-end align-items-xl-center">
              <Col xs={12} lg={7}>
                <img
                  src="splash-casal-3.png"
                  className="img-fluid hero-img"
                  alt="Casal Farma4u"
                />
              </Col>

              <Col xs={12} lg={5}>
                <div className="hero-content" id="Missao">
                  <h1 className="hero-title">
                    Nossa missão é dar aquela força e cuidar de todo mundo!
                    Oferecemos remédios a preço justo, de um jeito fácil, seguro
                    e que todo mundo pode pagar.
                  </h1>
                  <p className="lead">
                    Nosso compromisso é cuidar da saúde e bem-estar de todos,
                    oferecendo benefícios financeiros nos tratamentos médicos e
                    garantindo a comodidade na entrega de medicamentos. O Clube
                    Farma For You proporciona agilidade, conveniência e preços
                    acessíveis, tornando o acesso a cuidados de qualidade mais
                    simples e prático, promovendo uma vida mais saudável e
                    equilibrada.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div style={{ alignContent: "center", textAlign: "center" }}>
        <div
          className="button"
          style={{ alignContent: "center", alignItems: "center" }}
        >
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5521973975300&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais!"
          >
            <img
              src="btn-faleconosco.png"
              style={{ marginTop: "30px", marginBottom: "30px" }}
            />{" "}
          </a>
        </div>

        <div
          className="hero-content"
          style={{ textAlign: "center" }}
          id="Planos"
        >
          <h1 className="hero-title">
            <span style={{ color: "#ff5bd6" }}>
              Planos simples com valores acessíveis de verdade
            </span>
          </h1>
        </div>

        <a href="#">
          <img
            class="box-assinatura-juridica"
            src="box-assinatura-juridica-g.jpg"
            alt="img-responsiva"
          />
        </a>

        <div className="hero-content text-center text-lg-center" id="funciona">
          <h1 className="hero-title">
            <span style={{ color: "#ff5bd6" }}>Como funciona?</span>
          </h1>
        </div>

        <div className="max-w-full">
          <div className="row d-flex justify-content-center gap-lg-4">
            <div className="mt-3 h-60" style={cardStyle}>
              <div className="row">
                <div class="col-lg-4 col-2" style={cardColumnStyle}>
                  <img style={iconStyle} src="icons/assinatura.png" />
                </div>

                <div className="col-lg-8 col-10">
                  <div className="card-body">
                    <h5 className="card-title" style={cardTitle}>
                      Como Comprar?
                    </h5>
                    <p className="card-text" style={cardDescription}>
                      Faça o pedido pelo nosso número de Whatsapp
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3" style={cardStyle}>
              <div className="row">
                <div class="col-lg-4 col-2" style={{ borderRadius: "60px" }}>
                  <img style={iconStyle} src="icons/escrevendo.png" />
                </div>

                <div className="col-lg-8 col-10">
                  <div className="card-body">
                    <h5 className="card-title" style={cardTitle}>
                      Atendimento
                    </h5>
                    <p className="card-text" style={cardDescription}>
                      Um de nossos atendentes irá atendê-lo
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3" style={cardStyle}>
              <div className="row py-2">
                <div class="col-lg-4 col-2" style={{ borderRadius: "60px" }}>
                  <img style={iconStyle} src="icons/dinheiro.png" />
                </div>

                <div className="col-lg-8 col-10">
                  <div className="card-body">
                    <h5 className="card-title" style={cardTitle}>
                      Link de pagamento
                    </h5>
                    <p className="card-text" style={cardDescription}>
                      Faça o pagamento pelo link enviado pelo Whatsapp
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row d-flex justify-content-center gap-lg-4">
            <div className="mt-3" style={cardStyle}>
              <div className="row py-2">
                <div class="col-lg-4 col-2" style={cardColumnStyle}>
                  <img style={iconStyle} src="icons/ciclo.png" />
                </div>

                <div className="col-lg-8 col-10">
                  <div className="card-body">
                    <h5 className="card-title" style={cardTitle}>
                      Pedido de medicamento
                    </h5>
                    <p className="card-text" style={cardDescription}>
                      O medicamento será enviado ao endereço informado
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3" style={cardStyle}>
              <div className="row py-2">
                <div class="col-lg-4 col-2" style={{ borderRadius: "60px" }}>
                  <img style={iconStyle} src="icons/escrevendo.png" />
                </div>

                <div className="col-lg-8 col-10">
                  <div className="card-body">
                    <h5 className="card-title" style={cardTitle}>
                      Pedido Entregue
                    </h5>
                    <p className="card-text" style={cardDescription}>
                      Estaremos sempre a disposição para te auxiliar nas compras
                      de medicamento
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="footer-content">
            <img src="logo.png" alt="Farma For You" />
            <p>Medicamentos com preços mais acessível do Brasil!</p>
          </div>
          <div className="footer-bottom">
            <p>copyright &copy;2024 Farma For You.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Matriz;
