import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { api } from '../utils/axios';
import { useState, useEffect } from 'react';
import {useNavigate, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import swal from 'sweetalert';
import Cookies from "universal-cookie";

export default function Login(){

	const [data, setData] 			= useState('');
	const {hotsite} 				    = useParams();
	const [cpf, setCPF] 		    = useState('');
	const [password, setPassword] 	= useState('');
	const [modalFirstAccess, ShowModalFirstAccess] = useState(false);
	const [cpfPrimeiroAcesso, setcpfPrimeiroAcesso] = useState('');
  const [formCPF, showFormCPF] = useState(true);
  const [formCode, showFormCode] = useState(false);
  const [codigoConfirmacao, setCodeConfirmacao] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate(); 
  const cookies = new Cookies();
	
	useEffect(() => {
		api.get(`/${hotsite}`).then((res)=>{
			setData(res.data);
			}).catch((err) => {
        console.log(err)
        navigate('/404');
			  });
		},[]);
    

	const handleShow = (e) => {
		ShowModalFirstAccess(true);
	}

	const handleClose = () => {
		ShowModalFirstAccess(false);
	}

	const enviaCodigo = (e) => {
    e.preventDefault();

    if (cpfPrimeiroAcesso.length != 11){
      swal("Atenção!", "O CPF deve possuir 11 caracteres!", "error");
      return false;
    }
		const objFirstAccess = {
			"cpf": cpfPrimeiroAcesso
		}

      api.post(process.env.REACT_APP_BASE_URL_API_0 + '/auth/member-first-access', objFirstAccess).then((response)=> {
        if(response.status == 200){
          showFormCPF(false);
          showFormCode(true);
        }
      })
      .catch((error) =>{
        swal("Erro", error.response.data.message, "error");
        return false
    });
  }

  const confirmaCodigo = async (e) => {
    e.preventDefault();

    if(codigoConfirmacao.length != 6){
      swal("Atenção!", "O código possui 6 caracteres!", "error");
      return false;
    }

    const objPassword = {
      "cpf": cpfPrimeiroAcesso,
      "firstAccessCode" : codigoConfirmacao,
      "newPassword": newPassword
    }

    try {

      await api.post(process.env.REACT_APP_BASE_URL_API_0 + '/auth/member-first-password', objPassword).then((response)=> {
        if (response.status == 201){
          swal("Cadastro realizado!", "Seu cadastro foi feito com sucesso.", "success");
          ShowModalFirstAccess(false);
          showFormCPF(true);
          showFormCode(false);
        }

      })
    }
    catch(error){
      console.log(error);
    }
  }
  
  const handleLogin = (e) => {

    e.preventDefault();

    if (cpf.length != 11){
      swal("Atenção!", "O CPF deve possuir 11 caracteres!", "error");
      return false;
    }

    const objLogin = {
      "cpf" : cpf,
      "password" : password,
    }

    api.post(process.env.REACT_APP_BASE_URL_API_0 + '/auth/login-member', objLogin).then((response)=> {
      if (response.status == 200){
        const tokenLogin = response.headers["access-token"]
        var date = new Date();
        date.setHours(date.getHours() + 2);
        cookies.remove("jwt_authorization");
        swal({text:'Login realizado. Redirecionando...', timer: 3000, buttons: false});
        cookies.set("jwt_authorization", tokenLogin, {
          expires:  date
        });
        localStorage.setItem('userData', JSON.stringify({userId : response.data.user.id, urlSite: data.urlSite }));
        navigate('/' + data.urlSite + '/Dashboard');
      }
    })
    .catch((error) =>{
      swal("Erro", error.response.data.message, "error");
      return false
    });

  }

	if (data != null && data != ''){
		return(
			<>
				<Navbar expand="lg" className="navbar" style={{margin: "2rem 2rem", color: data.secondColor, backgroundColor: data.primaryColor}}>
					<Container style={{justifyContent: 'center'}}>
						<Navbar.Brand className="navbarBrand">
							<Image src={process.env.PUBLIC_URL + '/Images/' + data.image} className='logoHotsite'/>
						</Navbar.Brand>
					</Container>
				</Navbar>
				<div>
					<Container style={{marginTop: '4rem', justifyContent: 'center', display: 'flex'}}>
						<div style={{justifyContent: 'center', border: '1px solid', padding: '4rem', borderRadius: '20px', borderColor: '#CCD0D5'}}>
							<h3 style={{marginBottom: '2rem'}}>Acesso à área do Associado</h3>
							<Form style={{width: '40vw'}}>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Digite seu CPF</Form.Label>
									<Form.Control type="text" name="CPF"  onChange={e => setCPF(e.target.value)} value={cpf} placeholder="Digite seu CPF" maxLength={11} />
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Senha</Form.Label>
									<Form.Control type="password" name="password"  onChange={e => setPassword(e.target.value)} value={password} placeholder="Senha" />
								</Form.Group>
								<Button type="submit" onClick={handleLogin} style={{backgroundColor: data.primaryColor, color: data.secondColor, marginTop: '1rem', border: 'none'}}>
									Realizar Login
								</Button>
								<Button onClick={handleShow} style={{background: 'none', borderColor: data.primaryColor, color: data.primaryColor, marginLeft: '1rem', marginTop: '1rem'}}>
									Primeiro Acesso
								</Button>
							</Form>
						</div>
					</Container>
				</div>

				<Modal show={modalFirstAccess} onHide={handleClose}>
        	<Modal.Header closeButton>
          	<Modal.Title>Primeiro Acesso</Modal.Title>
       	 	</Modal.Header>
          {formCPF ? <>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Digite seu CPF para o primeiro acesso</Form.Label>
                  <Form.Control type="email" name="cpfPrimeiroAcesso"  onChange={e => setcpfPrimeiroAcesso(e.target.value)} value={cpfPrimeiroAcesso} placeholder="Digite seu CPF" />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose} style={{backgroundColor: 'red', border: 'none'}}>
                Fechar
              </Button>
              <Button variant="primary" onClick={enviaCodigo} style={{backgroundColor: data.primaryColor, color: data.secondColor,border: 'none'}}>
                Enviar Código
              </Button>
            </Modal.Footer>
          </>: null}

          {formCode ?
            <>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Digite o código de 6 dígitos enviado por e-mail</Form.Label>
                    <Form.Control type="text" name="code"  onChange={e => setCodeConfirmacao(e.target.value)} value={codigoConfirmacao} placeholder="Digite o código de 6 dígitos" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Nova Senha</Form.Label>
									<Form.Control type="password" name="password"  onChange={e => setNewPassword(e.target.value)} value={newPassword} placeholder="Sua nova senha" />
								</Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={confirmaCodigo} style={{backgroundColor: data.primaryColor, color: data.secondColor,border: 'none'}} >
                    Confirmar Código
                  </Button>
              </Modal.Footer>
            </>: null}
        </Modal>
			</>


		)
	}

	return(
    <p>Carregando...</p>
	)
			
		
      

}
