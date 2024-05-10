import swal from 'sweetalert';
import Cookies from "universal-cookie";
import {useNavigate} from 'react-router-dom';


export default function Logout(){
    
    const cookies = new Cookies();
    const navigate = useNavigate(); 

    const LogoutUser = () => 
        swal({
            title: "Deseja realmente sair?",
            icon: "warning",
            buttons: [
              'Sim',
              'Não'
            ],
            dangerMode: true,
          }).then((response)=>{
            if (response){
                cookies.remove("jwt_authorization");
                const URLSite = localStorage.getItem('userData').urlSite != undefined ?  + '/' + JSON.parse(localStorage.getItem('userData')).urlSite  : '' ;
                navigate(URLSite  + '/login');
            }
          })
          
          return(
              {LogoutUser}
            )
    }


        
