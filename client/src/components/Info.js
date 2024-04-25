import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Info.css';

const Info = function({dadosClient}) {
    const btnFaleConsco = {
        marginBottom: '2rem',
        padding: '10px 5rem 10px 5rem',
        color: dadosClient.secondColor,
        border: `1px solid ${dadosClient.secondColor}`,
        borderRadius: '40px',
        fontSize: '22px',
        cursor: 'pointer',
        backgroundColor: dadosClient.primaryColor,
        fontWeight: 900,
    };

    const cardExplanation = {
        width: '100%' , 
        height: '100%',
        background: 'linear-gradient(to top,#ff5bd6 0% ,#1998C1 100%)',
        borderRadius: '50px',
        alignItens: 'center',
        display: 'flex'
        
    }

    const cardTitle = {
        backgroundColor: '#FE5BD4', 
        padding: '0.5rem', 
        borderRadius: '1rem', 
        color: '#ffffff', 
        fontWeight: '700',
        boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.5)',
        marginBottom: '1rem'
        
    }

    const cardText = {
        color: '#ffffff', 
        fontWeight: '700',
        lineHeight: '20px',
        fontSize: '1.1rem'
    }
    
    const rowStyle = {
        
    }

    return (
        <div>
        <Container style={{marginTop: '2rem'}}>
                <Button style={btnFaleConsco}> Fale Conosco</Button>
                <h1 style={{color: '#ff5bd6'}}>Como Funciona?</h1>
        </Container>
        <div className="cards">
                <Row className="rowCards">
                    <Col> 
                        <Card style={cardExplanation }>
                            <Card.Img className={'mx-auto'} style={{width: '4rem', marginTop: '1rem'}} src="icons/assinatura.png" />
                             <Card.Body>
                                <Card.Title style={cardTitle}>Como Assinar</Card.Title>
                                <Card.Text style={cardText}>Faça o pedido pelo <br/>nosso número de <br/> Whatsapp
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={cardExplanation }>
                            <Card.Img className={'mx-auto'} style={{width: '4rem', marginTop: '1rem'}} src="icons/escrevendo.png" />
                             <Card.Body>
                                <Card.Title style={cardTitle}>Cadastrar</Card.Title>
                                <Card.Text style={cardText}>Um dos nossos <br/>atendentes irá  <br/> solicitar as <br/>informações <br/>necessárias.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={cardExplanation }>
                            <Card.Img className={'mx-auto'} style={{width: '4rem', marginTop: '1rem'}} src="icons/dinheiro.png" />
                             <Card.Body>
                                <Card.Title style={cardTitle}>Link de pagamento</Card.Title>
                                <Card.Text style={cardText}>Faça o pedido pelo <br/>nosso número de <br/> Whatsapp
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={cardExplanation }>
                            <Card.Img className={'mx-auto'} style={{width: '4rem', marginTop: '1rem'}} src="icons/ciclo.png" />
                             <Card.Body>
                                <Card.Title style={cardTitle}>Pedido de medicamento</Card.Title>
                                <Card.Text style={cardText}>Após a aprovação do pagamento, o medicamento será solicitado, separado e enviado ao endereço informado.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={cardExplanation }>
                            <Card.Img className={'mx-auto'} style={{width: '4rem', marginTop: '1rem'}} src="icons/aperto-de-mao.png" />
                             <Card.Body>
                                <Card.Title style={cardTitle}>Bem vindo ao Clube F4U</Card.Title>
                                <Card.Text style={cardText}>Simples assim! Experimente agora mesmo e aproveite os benefícios de ser parte do Clube Farma For You!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            <Container>
                <div className='footer' style={{margin: '2rem'}}>
                <p>Medicamentos com preços mais acessível do Brasil! <br/> copyright ©2024 Farma For You.</p>

                </div>


            </Container>
            </div>





    )

}

export default Info;