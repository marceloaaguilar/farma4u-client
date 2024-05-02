import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Dashbboard.css'

export default function Farmacias(){

    return (
      <Container style={{paddingTop: '5rem'}} className='farmacias'>
        <p style={{fontSize: '2.5rem', fontWeight: '300', marginBottom: '2rem'}}>Aproveite a nossa parceria com diversas farmácias</p>
        <Row >
          <Col className='d-flex'>
            <Link className='farmacias-link'>
              <Card style={{ width: '20rem'}}>
                  <Card.Img variant="top" style={{width: '100%', padding: '2rem 2rem 0.5rem 2rem', height: '10rem', objectFit: 'contain'}} src="/droga-raia-logo.png" />
                <Card.Body>
                  <Card.Title>Droga Raia</Card.Title>
                  <p>Descontos Exclusivos</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col className='d-flex'>
            <Link className='farmacias-link'>
              <Card style={{ width: '20rem'}}>
                  <Card.Img variant="top" style={{width: '100%', padding: '2rem 2rem 0.5rem 2rem', height: '10rem', objectFit: 'contain'}} src="/drogasil-logo.png" />
                <Card.Body>
                  <Card.Title>Drogasil</Card.Title>
                  <p>Descontos Exclusivos</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link className='farmacias-link'>
              <Card style={{ width: '20rem'}}>
                  <Card.Img variant="top" style={{width: '100%', padding: '2rem 2rem 0.5rem 2rem', height: '10rem', objectFit: 'contain'}} src="/drogasmil.png" />
                <Card.Body>
                  <Card.Title>Drogasmil</Card.Title>
                  <p>Descontos Exclusivos</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    )



}