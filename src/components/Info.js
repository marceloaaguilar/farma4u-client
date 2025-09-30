import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './Info.css';
import { Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faTruckFast, faFileSignature, faHandHoldingDollar, faArrowsSpin } from '@fortawesome/free-solid-svg-icons';

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
      color: primaryColor,
      fontWeight: 600,
      textAlign: 'left'
    }

    const cardDescription = {
      color: primaryColor,
      textAlign: 'left',
      lineHeight: '20px',
      marginTop: '0.2rem'
    }
  
    const iconStyle = {
      width: '3.2rem',
      height: '100%',
      objectFit: 'contain',
      color: primaryColor
    }

    const cardStyle = {
      maxWidth: '370px',
      backgroundColor: secondColor,
      borderRadius: '20px',
      height: '8rem',
      display: 'flex',
      alignItems: 'center',
      boxShadow: "1px 3px 8px rgba(0, 0, 0, 0.4)",
      marginBottom: "2rem"
    }

    const cardColumnStyle = {
      display: 'flex',
      justifyContent: 'center',
    }
    

    return (
      <div id="comoFunciona">
        
        <Container style={{marginTop: '4rem'}}>
          <Typography style={{color: secondColor, fontWeight: 700, fontSize: '2rem', marginTop:'2rem'}}>Veja como é simples:</Typography>
        </Container>
        
        <div className='max-w-full'>
          <div className='row d-flex justify-content-center gap-lg-4'>

            <div className="mt-3 h-60" style={cardStyle}>
              <div className="row">
                <div className="col-lg-4 col-2" style={cardColumnStyle}>
                  <FontAwesomeIcon style={iconStyle} icon={faCartShopping} />
                </div>
                <div className='col-lg-8 col-10'>
                  <div className='card-body'>
                    <h5 className='card-title' style={cardTitle}>1. Pedido</h5>
                    <p className='card-text' style={cardDescription}>
                      Solicite seus medicamentos pelo WhatsApp.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3" style={cardStyle}>
              <div className="row">
                <div className="col-lg-4 col-2" style={cardColumnStyle}>
                  <FontAwesomeIcon style={iconStyle} icon={faFileSignature} />
                </div>
                <div className='col-lg-8 col-10'>
                  <div className='card-body'>
                    <h5 className='card-title' style={cardTitle}>2. Atendimento</h5>
                    <p className='card-text' style={cardDescription}>
                      Um atendente confirma seus dados e pedido.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3" style={cardStyle}>
              <div className="row py-2">
                <div className="col-lg-4 col-2" style={cardColumnStyle}>
                  <FontAwesomeIcon style={iconStyle} icon={faHandHoldingDollar} />
                </div>
                <div className='col-lg-8 col-10'>
                  <div className='card-body'>
                    <h5 className='card-title' style={cardTitle}>3. Pagamento</h5>
                    <p className='card-text' style={cardDescription}>
                      Pague pelo link seguro enviado no WhatsApp.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className='row d-flex justify-content-center gap-lg-4'>

            <div className="mt-3" style={cardStyle}>
              <div className="row py-2">
                <div className="col-lg-4 col-2" style={cardColumnStyle}>
                  <FontAwesomeIcon style={iconStyle} icon={faArrowsSpin} />
                </div>
                <div className='col-lg-8 col-10'>
                  <div className='card-body'>
                    <h5 className='card-title' style={cardTitle}>4. Processamento</h5>
                    <p className='card-text' style={cardDescription}>
                      Seu pedido é separado e preparado para envio.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3" style={cardStyle}>
              <div className="row py-2">
                <div className="col-lg-4 col-2" style={cardColumnStyle}>
                  <FontAwesomeIcon style={iconStyle} icon={faTruckFast} />
                </div>
                <div className='col-lg-8 col-10'>
                  <div className='card-body'>
                    <h5 className='card-title' style={cardTitle}>5. Entrega</h5>
                    <p className='card-text' style={cardDescription}>
                      Receba seus medicamentos com rapidez e segurança.
                    </p>
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