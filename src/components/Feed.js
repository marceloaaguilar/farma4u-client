import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import feedCSS from './Feed.css'
import Image from 'react-bootstrap/Image';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Typography } from '@mui/material';

import { 
  DollarSign, Brain, Puzzle, Briefcase, LineChart, Target 
} from "lucide-react";


function Feed({companyName, primaryColor}){

  const stylesText = {
    textAlign: 'left',
    margin: '2rem 0rem'
  }
  return (
    <div className='feed' style={{color: '#FFFFFF'}}>
      <div id="boxHeader">

        <div id='titles'>
          <Typography id="title">Clube {companyName}</Typography>
          <Typography id="subtitle">Medicamentos com economia e praticidade em um só lugar.</Typography>
        </div>

      </div>

      <Container>

        <Row style={{ alignItems: "center", paddingTop: "3rem" }}>
          <Col lg={6} sm={12} className="mb-4 mb-lg-0 text-center">
            <Image
              className="img-fluid"
              style={{ borderRadius: "20px" }}
              src={"family.png"}
              alt="Imagem de uma Família"
            />
          </Col>

          <Col className="text-md-start text-center">
            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "2rem" }}>
                Farma4U – Inteligência em Acesso a Medicamentos
              </h3>
              <p style={{ fontSize: "1.1rem" }}>
                Concierge farmacêutico B2B que conecta pessoas aos melhores preços de medicamentos,
                com economia, agilidade e suporte especializado. Ideal para empresas,
                sindicatos, associações e operadoras que desejam oferecer um benefício
                de saúde acessível e eficaz.
              </p>
            </div>

            <div style={{ marginBottom: "2.5rem" }}>
              <h3 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Por que escolher o Farma4U?</h3>
              <Row>
                <Col md={6} className="mb-5 d-flex flex-column align-items-center text-md-start text-center">
                  <DollarSign size={22} style={{ marginBottom: "6px", color: primaryColor }} />
                  <div>
                    <strong>Economia comprovada</strong>
                    <p style={{ margin: 0, fontSize: "0.95rem" }}>Preços realmente competitivos.</p>
                  </div>
                </Col>
                <Col md={6} className="mb-5 d-flex flex-column align-items-center text-md-start text-center">
                  <Brain size={22} style={{ marginBottom: "6px", color: primaryColor }} />
                  <div>
                    <strong>Solução inteligente</strong>
                    <p style={{ margin: 0, fontSize: "0.95rem" }}>Atendimento ágil e assertivo.</p>
                  </div>
                </Col>
                <Col md={6} className="mb-5 d-flex flex-column align-items-center text-md-start text-center">
                  <Puzzle size={22} style={{ marginBottom: "6px", color: primaryColor }} />
                  <div>
                    <strong>Integração personalizada</strong>
                    <p style={{ margin: 0, fontSize: "0.95rem" }}>Adaptável à identidade da empresa.</p>
                  </div>
                </Col>
                <Col md={6} className="mb-5 d-flex flex-column align-items-center text-md-start text-center">
                  <Briefcase size={22} style={{ marginBottom: "6px", color: primaryColor }} />
                  <div>
                    <strong>Valorização do benefício</strong>
                    <p style={{ margin: 0, fontSize: "0.95rem" }}>Percebido como cuidado real.</p>
                  </div>
                </Col>
                <Col md={6} className="d-flex flex-column align-items-center text-md-start text-center">
                  <LineChart size={22} style={{ marginBottom: "6px", color: primaryColor }} />
                  <div>
                    <strong>Transparência e controle</strong>
                    <p style={{ margin: 0, fontSize: "0.95rem" }}>Relatórios claros com indicadores.</p>
                  </div>
                </Col>
              </Row>
            </div>

            <div>
              <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3">
                <Target size={24} style={{ marginRight: "8px", color: primaryColor }} />
                <h3 style={{ fontSize: "2rem", margin: 0 }}>Ideal para</h3>
              </div>
              <ul style={{ fontSize: "1.05rem", paddingLeft: "1rem" }}>
                <li>Empresas que querem valorizar seus colaboradores.</li>
                <li>Associações, sindicatos e cooperativas que buscam acessibilidade em saúde.</li>
                <li>Operadoras e plataformas que desejam inovação e fidelização.</li>
              </ul>
            </div>
          </Col>
        </Row>

      </Container>
    </div>
  );
}
export default Feed;