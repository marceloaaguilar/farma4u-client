import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import family from '../Assets/images/family.png';
import casalIdosos from '../Assets/images/casalIdosos.png';
import feedCSS from './Feed.css'

function Feed(){
    return (
        <div className='feed'>
            <Container>
                <Row className='Header'>
                    <Col xs={7}>
                        <h1 id="title">Clube Farma For You</h1>
                        <h1 id="subtitle">Medicamentos <br /> com preços mais <br /> acessíveis do Brasil</h1>
                    </Col>
                    <Col>
                        <img className="familyImage" src={family} alt="Imagem de uma Família" />    
                    </Col>

                </Row>
                <Row className='Header'>
                    <Col>
                        <img className="casalIdosos" src={casalIdosos} alt="Imagem de uma Família" />    
                    </Col>
                    <Col xs={6}>
                        <h1 id='mission'>
                            Nossa missão é dar aquela força e cuidar de todo mundo! Oferecemos remédios a preço justo, de um jeito fácil, seguro e que todo mundo pode pagar.
                        </h1>
                        <p id='missionDescription'>
                            A nossa missão é contribuir para a saúde e o bem-estar de todas as pessoas, proporcionando benefícios financeiros em seus cuidados médicos e simplificando suas rotinas diárias. O Clube Farma For You representa a solução que facilita o acesso a tratamentos de qualidade, promovendo uma comunidade mais saudável e feliz.
                        </p>
                    </Col>
                </Row>



            </Container>
        </div>




    );


    
}
export default Feed;