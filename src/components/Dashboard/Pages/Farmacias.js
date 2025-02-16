import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Dashbboard.css'
import { useEffect } from 'react';
import swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

export default function Farmacias(){
  
  const navigate = useNavigate(); 
  var urlSite = '';

  useEffect(()=> {
    if (localStorage.getItem('userData') == null || localStorage.getItem('userData') == undefined){
      swal.fire({text:'Você precisa se autenticar novamente. Redirecionando...', timer: 2000, buttons: false});

      if(localStorage.getItem('userData') != null ){
        urlSite = JSON.parse(localStorage.getItem('userData')).urlSite;
      }

      navigate(urlSite +  '/login');
    }
  },[]);

    return (
      <div style={{display: 'flex', position: 'relative'}}>
        <div style={{position: 'absolute', zIndex: 1000}}>
          <Sidebar activeDirectory={"farmacias"}/>
        </div>
        {/* <div style={{margin: '2rem 2rem 2rem 7rem', width: '100%'}}> */}
          {/* <Row style={{gap: '2rem', display: 'flex'}}>
            <Col>
            <Link className='farmacias-link'>
            <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" style={{width: '100%', padding: '2rem 2rem 0.5rem 2rem', height: '10rem', objectFit: 'contain'}} src="/drogasmil.png" />
                  <Card.Body>
                    <Card.Title>Drogasmil</Card.Title>
                    <p>Descontos Exclusivos</p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col>
              <Link className='farmacias-link'>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" style={{width: '100%', padding: '2rem 2rem 0.5rem 2rem', height: '10rem', objectFit: 'contain'}} src="/droga-raia-logo.png" />
                  <Card.Body>
                    <Card.Title>Droga Raia</Card.Title>
                    <p style={{fontStyle : 'italic'}}>Em breve</p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col>
              <Link className='farmacias-link'>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" style={{width: '100%', padding: '2rem 2rem 0.5rem 2rem', height: '10rem', objectFit: 'contain'}} src="/drogasil-logo.png" />
                  <Card.Body>
                    <Card.Title>Drogasil</Card.Title>
                    <p style={{fontStyle : 'italic'}}>Aproveite os Descontos</p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row> */}

          <div style={{ margin: '2rem 2rem 2rem 7rem', width: '100%' }}>
            <p style={{fontSize: '2.5rem', fontWeight: '300', marginBottom: '2rem'}}>Aproveite a nossa parceria com diversas farmácias</p>
            
            <Row style={{ justifyContent: 'center', gap: '2rem' }}>

              <Col xs={12} sm={6} md={6} lg={3}>
                <Card style={{ width: '100%', height: '100%' }}>
                  <Card.Img
                    variant="top"
                    style={{
                      padding: '2rem',
                      height: '10rem',
                      objectFit: 'contain',
                    }}
                    src="/pacheco.png"
                  />
                  <Card.Body style={{ flex: 1 }}>
                    <Card.Title>Pacheco</Card.Title>
                    <p>
                      Medicamentos Tarjados de Marca: No mínimo 15% de desconto*
                      <br />
                      Medicamentos Tarjados Genéricos: No mínimo 25% de desconto*
                      <br />
                      5% de desconto para OTC (Medicamentos Isentos de Prescrição)
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} sm={6} md={6} lg={3}>
                <Card style={{ width: '100%', height: '100%' }}>
                  <Card.Img
                    variant="top"
                    style={{
                      padding: '2rem',
                      height: '10rem',
                      objectFit: 'contain',
                    }}
                    src="/drogariaSaoPaulo.png"
                  />
                  <Card.Body style={{ flex: 1 }}>
                    <Card.Title>Drogaria São Paulo</Card.Title>
                    <p>
                      Medicamentos Tarjados de Marca: No mínimo 15% de desconto*
                      <br />
                      Medicamentos Tarjados Genéricos: No mínimo 25% de desconto*
                      <br />
                      5% de desconto para OTC (Medicamentos Isentos de Prescrição)
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} sm={6} md={6} lg={3}>
                <Card style={{ width: '100%', height: '100%' }}>
                  <Card.Img
                    variant="top"
                    style={{
                      padding: '2rem',
                      height: '10rem',
                      objectFit: 'contain',
                    }}
                    src="/drogariasTamoio.png"
                  />
                  <Card.Body style={{ flex: 1 }}>
                    <Card.Title>Tamoio</Card.Title>
                    <p>
                      Medicamentos Tarjados de Marca: No mínimo 10% de desconto*
                      <br />
                      Medicamentos Tarjados Genéricos: No mínimo 10% de desconto*
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} sm={6} md={6} lg={3}>
                <Card style={{ width: '100%', height: '100%' }}>
                  <Card.Img
                    variant="top"
                    style={{
                      padding: '2rem',
                      height: '10rem',
                      objectFit: 'contain',
                    }}
                    src="/drogasmil.png"
                  />
                  <Card.Body style={{ flex: 1 }}>
                    <Card.Title>Drogasmil</Card.Title>
                    <p>
                      Medicamentos Tarjados de Marca: No mínimo 10% de desconto*
                      <br />
                      Medicamentos Tarjados Genéricos: No mínimo 10% de desconto*
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} sm={6} md={6} lg={3}>
                <Card style={{ width: '100%', height: '100%' }}>
                  <Card.Img
                    variant="top"
                    style={{
                      padding: '2rem',
                      height: '10rem',
                      objectFit: 'contain',
                    }}
                    src="/farmalife.jpg"
                  />
                  <Card.Body style={{ flex: 1 }}>
                    <Card.Title>FarmaLife</Card.Title>
                    <p>
                      Medicamentos Tarjados de Marca: No mínimo 10% de desconto*
                      <br />
                      Medicamentos Tarjados Genéricos: No mínimo 10% de desconto*
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} sm={6} md={6} lg={3}>
                <Card style={{ width: '100%', height: '100%' }}>
                  <Card.Img
                    variant="top"
                    style={{
                      padding: '2rem',
                      height: '10rem',
                      objectFit: 'contain',
                    }}
                    src="/drogariaRosario.png"
                  />
                  <Card.Body style={{ flex: 1 }}>
                    <Card.Title>Rosário</Card.Title>
                    <p>
                      Medicamentos Tarjados de Marca: No mínimo 10% de desconto*
                      <br />
                      Medicamentos Tarjados Genéricos: No mínimo 10% de desconto*
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} sm={6} md={6} lg={3}>
                <Card style={{ width: '100%', height: '100%' }}>
                  <Card.Img
                    variant="top"
                    style={{
                      padding: '2rem',
                      height: '10rem',
                      objectFit: 'contain',
                    }}
                    src="/pagueMenos.png"
                  />
                  <Card.Body style={{ flex: 1 }}>
                    <Card.Title>Pague Menos</Card.Title>
                    <p>
                      Medicamentos Tarjados de Marca: No mínimo 15% de desconto*
                      <br />
                      Medicamentos Tarjados Genéricos: No mínimo 25% de desconto*
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} sm={6} md={6} lg={3}>
                <Card style={{ width: '100%', height: '100%' }}>
                  <Card.Img
                    variant="top"
                    style={{
                      padding: '2rem',
                      height: '10rem',
                      objectFit: 'contain',
                    }}
                    src="/extrafarma.png"
                  />
                  <Card.Body style={{ flex: 1 }}>
                    <Card.Title>Extrafarma</Card.Title>
                    <p>
                      Medicamentos Tarjados de Marca: No mínimo 15% de desconto*
                      <br />
                      Medicamentos Tarjados Genéricos: No mínimo 25% de desconto*
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>




        {/* </div> */}
      </div>
    )
}