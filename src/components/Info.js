import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './Info.css';
import { Typography } from '@mui/material';

const Info = function({dadosClient: {primaryColor, secondColor}}) {

    const btnFaleConosco  = {
        marginBottom: '2rem',
        padding: '10px 5rem 10px 5rem',
        color: secondColor,
        border: `1px solid ${secondColor}`,
        borderRadius: '40px',
        fontSize: '22px',
        cursor: 'pointer',
        backgroundColor: primaryColor,
        fontWeight: 900,
    };


    const cardTitle = {
      color: '#FFFFFF',
      fontWeight: 600,
      textAlign: 'left'
    }

    const cardDescription = {
      color: '#FFFFFF',
      textAlign: 'left',
      lineHeight: '20px',
      marginTop: '0.2rem'
    }


  
    const iconStyle = {
        width: '3rem',
        height: '100%',
        objectFit: 'contain',
    }

    const cardStyle = {
      maxWidth: '370px',
      backgroundColor: primaryColor,
      borderRadius: '20px',
      height: '8rem',
      display: 'flex',
      alignItems: 'center'
    }

    const cardColumnStyle = {
      display: 'flex',
      justifyContent: 'center',
    }
    

    return (
      <div id="comoFunciona">
        
        <Container style={{marginTop: '4rem'}}>
          <Typography style={{color: primaryColor, fontWeight: 700, fontSize: '2rem', marginTop:'2rem'}}>Veja como é simples:</Typography>
        </Container>
        
        <div className='max-w-full'>
          <div className='row d-flex justify-content-center gap-lg-4'>

            <div className="mt-3 h-60" style={cardStyle}>
              <div className="row">
                <div class="col-lg-4 col-2" style={cardColumnStyle} >
                  <img style={iconStyle} src='icons/assinatura.png'/>
                </div>
                  
                <div className='col-lg-8 col-10'>
                  <div className='card-body'>
                    <h5 className='card-title' style={cardTitle}>Como Comprar?</h5>
                    <p className='card-text' style={cardDescription}>Faça o pedido pelo nosso número de Whatsapp</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3" style={cardStyle}>
              <div className="row">
                <div class="col-lg-4 col-2" style={{borderRadius: '60px'}} >
                  <img style={iconStyle} src='icons/escrevendo.png'/>
                </div>
                  
                <div className='col-lg-8 col-10'>
                  <div className='card-body'>
                    <h5 className='card-title' style={cardTitle}>Atendimento</h5>
                    <p className='card-text' style={cardDescription}>Um de nossos atendentes irá atendê-lo</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-3" style={cardStyle}>
              <div className="row py-2">
                <div class="col-lg-4 col-2" style={{borderRadius: '60px'}} >
                  <img style={iconStyle} src='icons/dinheiro.png'/>
                </div>
                  
                <div className='col-lg-8 col-10'>
                  <div className='card-body'>
                    <h5 className='card-title' style={cardTitle}>Link de pagamento</h5>
                    <p className='card-text' style={cardDescription}>Faça o pagamento pelo link enviado pelo Whatsapp</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          <div className='row d-flex justify-content-center gap-lg-4'>

            <div className="mt-3" style={cardStyle}>
              <div className="row py-2">
                <div class="col-lg-4 col-2" style={cardColumnStyle} >
                  <img style={iconStyle} src='icons/ciclo.png'/>
                </div>
                  
                <div className='col-lg-8 col-10'>
                  <div className='card-body'>
                    <h5 className='card-title' style={cardTitle}>Pedido de medicamento</h5>
                    <p className='card-text' style={cardDescription}>O medicamento será enviado ao endereço informado</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-3" style={cardStyle}>
              <div className="row py-2">
                <div class="col-lg-4 col-2" style={{borderRadius: '60px'}} >
                  <img style={iconStyle} src='icons/escrevendo.png'/>
                </div>
                  
                <div className='col-lg-8 col-10'>
                  <div className='card-body'>
                    <h5 className='card-title' style={cardTitle}>Pedido Entregue</h5>
                    <p className='card-text' style={cardDescription}>Estaremos sempre a disposição para te auxiliar nas compras de medicamento</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
     
        <Container style={{ marginTop: '4rem', padding: '2rem', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
          <Typography variant="h4" gutterBottom>
            Entre em Contato
          </Typography>
      
          <Typography variant="body1" style={{ marginBottom: '1.5rem' }}>
            Precisando comprar medicamentos?
          </Typography>

          <Button 
            target="_blank" 
            href="https://api.whatsapp.com/send?phone=5521973975300&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais!" 
            style={btnFaleConosco}
          >
            Fale Conosco pelo WhatsApp
          </Button>
        </Container>

        <Container>
          <div className='footer' style={{margin: '2rem'}}>
            <p>Medicamentos com preços mais acessível do Brasil! <br/> copyright ©2024 Farma For You.</p>
          </div>
        </Container>
      </div>
    )

}

export default Info;