import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {api} from '../utils/axios';

const AddSite = ({ history }) => {


    const [urlSite, seturlSite] = useState('')
    const [primaryColor, setprimaryColor] = useState(0)
    const [secondColor, setsecondColor] = useState('')
    const [image, setImage] = useState('')
    const notify = () => {
        const id = toast.loading("Por favor aguarde...");
        toast.update(id, { render: "Site cadastrado com sucesso!", type: "success", isLoading: false });
    
    
    }

    const addSiteController = async(e) => {
        try {
            e.preventDefault();
            addSiteHandler();
        } catch (error) {
            
        }
    }


    const addSiteHandler = async (e) => {
        
        const formData = new FormData()
        formData.append('image', image)
        formData.append('urlSite', urlSite)
        formData.append('primaryColor', primaryColor)
        formData.append('secondColor', secondColor)
        const request = await api.post('/addSite', formData).then(r =>{
            if(r.status == 200){
                notify();
            }



        })
    
    }



    return (
        <Container>
            <ToastContainer/>
             <Form style={{marginTop: '5rem'}}>

                <h1 style={{marginBottom: '2rem'}}>Cadastro de novos clientes</h1>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Url Site</Form.Label>
                    <Form.Control type="text" name="urlSite" placeholder="Url do novo Site" value={urlSite} onChange={(e) => seturlSite(e.target.value)}
                             />
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Logo</Form.Label>
                    <Form.Control type="file" name="image" onChange={(e) => setImage(e.target.files[0])}
                        size="lg"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Cor Primária</Form.Label>
                    <Form.Control type="primaryColor"  placeholder="Cor Primária" value={primaryColor}onChange={(e) => setprimaryColor(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Cor Segundária</Form.Label>
                    <Form.Control type="secundaryColor" placeholder="Cor Secundária" value={secondColor}onChange={(e) => setsecondColor(e.target.value)} />
                </Form.Group>
            </Form>
                <Button variant="primary" type="button" onClick={addSiteController}>
                    Cadastrar
                </Button>


        </Container>
    )


}
export default AddSite