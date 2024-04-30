import swal from 'sweetalert';
import Cookies from "universal-cookie";
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';


export default function Logout(){
    
    const cookies = new Cookies();
    const navigate = useNavigate(); 

    const LogoutUser = () => 
        swal({
            title: "Deseja realmente sair?",
            icon: "warning",
            buttons: [
              'Não',
              'Sim'
            ],
            dangerMode: true,
          }).then((response)=>{
            if (response){
                cookies.remove("jwt_authorization");
                const URLSite = JSON.parse(localStorage.getItem('userData')).urlSite;
                navigate('/' + URLSite + '/login');
                localStorage.removeItem('userData');
            }
          })
          
          return(
              {LogoutUser}
            )
    }


        
