import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Info.css';
import { Typography } from '@mui/material';

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
        background: dadosClient.primaryColor,
        borderRadius: '50px',
        alignItens: 'center',
        display: 'flex',
        color: dadosClient.secondColor
        
    }

    const cardTitle = {
        backgroundColor: dadosClient.secondColor, 
        padding: '0.5rem', 
        borderRadius: '1rem', 
        color: dadosClient.primaryColor,
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
    

    return (
        <div id="comoFunciona"> 
          <Container style={{marginTop: '4rem'}}>
            <Button target="_blank" href="https://api.whatsapp.com/send?phone=5521973975300&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais!" style={btnFaleConsco}> Fale Conosco</Button>
            <Typography style={{color: dadosClient.primaryColor, fontWeight: 700, fontSize: '2rem', marginTop:'2rem'}}>Como Funciona?</Typography>
          </Container>
        <div className="cards mt-3">
          <Row className="rowCards mb-5">
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
                          <Card.Title style={cardTitle}>Bem vindo ao Clube</Card.Title>
                          <Card.Text style={cardText}>Simples assim! Experimente agora mesmo e aproveite os benefícios de ser parte do Clube!
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