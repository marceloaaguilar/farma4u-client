import {React,useState, useEffect} from 'react';
import {useLocation } from 'react-router-dom';
import {api} from '../utils/axios';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Login = () => {
    const location = useLocation();
    const values = location.pathname.split('/');
    const companyName = values[1];
    const [data, setData] = useState('');
    let returnStm;
    
    useEffect(() => {  
            if(values[2] == 'login'){    
                api.get(`/hotsite/${companyName}`).then((res)=>{
                    setData(res.data[0])
                })
        }
    
    },[]);

    if (data){
        const primaryColor = data.primaryColor;
        const secondColor  = data.secondColor;
        const image        = data.image;

        returnStm = 
        <div>
            <Navbar expand="lg" className="navbar" style={{margin: "2rem 2rem", backgroundColor: primaryColor}}>
                <Container className='w-100 justify-content-center'>
                    <Navbar.Brand className="navbarBrand">
                        <Image src={'/Images/' +  image} className='logoHotsite'/>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Container className='col-4 mt-3'>
                <h2 style={{fontSize: '1.5rem'}}className='mb-3'>Área do Associado</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Digite seu CPF</Form.Label>
                        <Form.Control className="customizedInput form-control " placeholder="Digite um CPF ou CNPJ" type="tel"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Enviar</Button>
                </Form>
            </Container>
        </div>

                    



    }






return (
    returnStm
    
)
}

export default Login;