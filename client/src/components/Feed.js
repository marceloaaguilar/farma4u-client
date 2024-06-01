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


function Feed(){
    return (
      <div className='feed' style={{color: '#FFFFFF'}}>
        <div className="Header" style={{background: "url('newFamiliy.jpg')", objectFit: 'cover', backgroundRepeat: 'no-repeat', justifyContent: 'center', backgroundSize: '100vw', backgroundPosition: '40% 60%', alignItems: 'end', display: 'flex'}}> 
            <Col lg={6} sm={12} style={{color: '#FFFFFF', marginBottom: '2rem'}}>
                <Typography id="title">CONHEÇA NOSSO CLUBE</Typography>
                <Typography id="subtitle">Medicamentos com preços <br /> mais  acessíveis do Brasil!</Typography>
            </Col>
        </div>
        <Container>
            <Row className="Header">
                <Col lg={6} sm={12} >
                    <Image className="img-fluid" style={{borderRadius: '20px'}} src={'family.png'} alt="Imagem de uma Família" />    
                </Col>
                <Col >
                    <Typography id='mission'>
                        Nossa missão é dar aquela força e cuidar de todo mundo! Oferecemos remédios a preço justo, de um jeito fácil, seguro e que todo mundo pode pagar.
                    </Typography>
                    <Typography id='missionDescription'>
                        A nossa missão é contribuir para a saúde e o bem-estar de todas as pessoas, proporcionando benefícios financeiros em seus cuidados médicos e simplificando suas rotinas diárias. O Clube Farma For You representa a solução que facilita o acesso a tratamentos de qualidade, promovendo uma comunidade mais saudável e feliz.
                    </Typography>
                </Col>
            </Row>
        </Container>
      </div>




    );


    
}
export default Feed;