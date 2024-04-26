import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { api } from '../utils/axios';
import { useState, useEffect } from 'react';
import {useParams } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';

export default function Login(){

	const [data, setData] 			= useState('');
	const {hotsite} 				= useParams();
	const [email, setEmail] 		= useState('');
	const [password, setPassword] 	= useState('');
	const [modalFirstAccess, ShowModalFirstAccess] = useState(false);
	const [cpfPrimeiroAcesso, setcpfPrimeiroAcesso] = useState('');
	
	useEffect(() => {      
		api.get(`/${hotsite}`).then((res)=>{
			setData(res.data);
			} ).catch((err) => {
        console.log(err)
			  });
		},[]);

	const handleClick = (e) => {
		e.preventDefault();

	}

	const handleShow = (e) => {
		ShowModalFirstAccess(true);
	}

	const handleClose = () => {
		ShowModalFirstAccess(false);
	}

	const enviaCodigo = (e) => {
    e.preventDefault();

    if (cpfPrimeiroAcesso.length != 11){
		const objFirstAccess = {
			"cpf": cpfPrimeiroAcesso
		}

    try{
      api.post(process.env.REACT_APP_BASE_URL_API_0 + '/auth/member-first-access', objFirstAccess).then((response)=> {
        console.log(response);
      })
    }
    catch(error){
      console.log(error)
    }

		
	  }

  }



	if (data != null && data != undefined){
		return(
			<>
        <ToastContainer/>
				<Navbar expand="lg" className="navbar" style={{margin: "2rem 2rem", color: data.secondColor, backgroundColor: data.primaryColor}}>
					<Container style={{justifyContent: 'center'}}>
						<Navbar.Brand className="navbarBrand">
							<Image src={'../Images/' + data.image} className='logoHotsite'/>
						</Navbar.Brand>
					</Container>
				</Navbar>
				<div>
					<Container style={{marginTop: '2rem', justifyContent: 'center', display: 'flex'}}>
						<div style={{justifyContent: 'center', border: '1px solid', padding: '4rem', borderRadius: '20px', borderColor: '#CCD0D5'}}>
							<h3 style={{marginBottom: '2rem'}}>Acesso à area do Associado</h3>
							<Form style={{width: '40vw'}}>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Digite seu e-mail</Form.Label>
									<Form.Control type="email" name="email"  onChange={e => setEmail(e.target.value)} value={email} placeholder="Digite seu e-mail" />
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Senha</Form.Label>
									<Form.Control type="password" name="password"  onChange={e => setPassword(e.target.value)} value={password} placeholder="Senha" />
								</Form.Group>
								<Button type="submit" onClick={handleClick} style={{backgroundColor: data.primaryColor, color: data.secondColor, marginTop: '1rem', border: 'none'}}>
									Enviar
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
      </Modal>
			</>
		)
	}
	return(
		<h1> Cliente não encontrado!</h1>
	)
			
		
      

}
