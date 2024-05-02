import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Dashbboard.css'

export default function SolicitarMedicamento(){
    return(
        <Container style={{paddingTop: '5rem', width: '80vw'}} className='farmacias'>
          <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <p style={{fontSize: '2.5rem', fontWeight: '300', marginBottom: '2rem'}}>Faça seu pedido de medicamentos pelo Whatsapp</p>
            <Row>
              <Col>
                  <Link className='farmacias-link'>
                  <Card style={{ width: '30rem'}}>
                      <Card.Img variant="top" style={{width: '100%', height: '10rem', objectFit: 'contain'}} src="/whatsappLogo2.png" />
                      <Card.Body>
                      <Card.Title>Faça seu pedido via Whatsapp</Card.Title>
                      </Card.Body>
                  </Card>
                  </Link>
              </Col>
            </Row>
          </div>
      </Container>
    )



}