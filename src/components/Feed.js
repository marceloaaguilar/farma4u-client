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


function Feed({companyName}){

  const stylesText = {
    textAlign: 'left',
    margin: '2rem 0rem'
  }
  return (
    <div className='feed' style={{color: '#FFFFFF'}}>
      <div id="boxHeader">
        <div id='titles'>
            <Typography id="title">Clube {companyName}</Typography>
            <Typography id="subtitle">O seu medicamento de forma ágil e prática em um só lugar.</Typography>
        </div>
      </div>

      <Container>
        <Row  style={{alignItems: 'center'}}>
          <Col lg={6} sm={12} >
              <Image className="img-fluid" style={{borderRadius: '20px'}} src={'family.png'} alt="Imagem de uma Família" />    
          </Col>
          <Col >
            <div style={stylesText}>
              <h3 style={{fontSize: '2rem'}}>Qual é a nossa missão?</h3>
              <p style={{fontSize: '1.2rem'}}> A nossa missão é contribuir para a saúde e o bem-estar de todas as pessoas, proporcionando economia na compra de medicamentos simplificando suas rotinas diárias.</p>
            </div>

            <div style={stylesText}>
              <h3 style={{fontSize: '2rem'}}>O que o clube representa?</h3>
              <p style={{fontSize: '1.2rem'}}>O Clube representa a solução que facilita a compra, entrega e o acesso a tratamentos de qualidade, promovendo uma comunidade mais saudável e feliz.</p>
            </div>

          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Feed;