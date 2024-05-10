import './Dashbboard.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useEffect } from 'react';
import swal from 'sweetalert';
import {useNavigate} from 'react-router-dom';

export default function SolicitarMedicamento(){
  
  const urlSite = '';
  var navigate = useNavigate(); 

  useEffect(()=> {
    if (localStorage.getItem('userData') == null || localStorage.getItem('userData') == undefined){
      swal({text:'Você precisa se autenticar novamente. Redirecionando...', timer: 2000, buttons: false});

      if(localStorage.getItem('userData') != null ){
        urlSite = JSON.parse(localStorage.getItem('userData')).urlSite;
      }

      navigate(urlSite +  '/login');
    }
  },[]);


    return(
      <Container maxWidth="md">
        <Card sx={{ maxWidth: 700 }} className='mt-5'>
          <CardMedia
            sx={{ height: 250 }}
            image="/whatsappLogo2.png"
            title="Entrar em contato pelo Whatsapp"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Entre em contato pelo Whatsapp e faça seu pedido
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Nossa equipe de atendimento está pronta para receber o seu pedido!
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Entrar em contato</Button>
          </CardActions>
      </Card>
    </Container>
    )



}