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
        <Container>
            <Row className="Header"> 
                <Col lg={6} sm={12}>
                    <Typography id="title">CLUBE FARMA FOR YOU</Typography>
                    <Typography id="subtitle">Medicamentos <br /> com preços mais <br /> acessíveis do Brasil!</Typography>
                </Col>
                <Col >
                    <Image className="familyImage" src={'family.png'} alt="Imagem de uma Família" />    
                </Col>

            </Row>
            <Row className="Header">
                <Col lg={6} sm={12} >
                    <Image className="casalIdosos" src={'casalIdosos.png'} alt="Imagem de uma Família" />    
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