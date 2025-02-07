import SidebarComponent from "./SidebarComponent";
import { Home, Pill, LogOut} from "lucide-react";
import { SidebarItem } from "./SidebarComponent";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import Cookies from "universal-cookie";
import {useNavigate} from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


export default function Sidebar({activeDirectory}){

  const cookies = new Cookies();
  const navigate = useNavigate(); 

  const LogoutUser = () => {

    Swal.fire({
        title: "Deseja realmente sair?",
        icon: "warning",
        showDenyButton: true,
        confirmButtonText: "Sim",
        denyButtonText: `Não`,
      }).then((response)=>{
        if (response.isConfirmed){
            cookies.remove("jwt_authorization");
            const URLSite = localStorage.getItem('userData').urlSite !== undefined ?  + '/' + JSON.parse(localStorage.getItem('userData')).urlSite  : '' ;
            localStorage.removeItem("userData");
            navigate(URLSite  + '/login');
        }
      })
  }
   
  return(
    <SidebarComponent>

        <Link to={"/dashboard"} style={{textDecoration: 'none'}}> 
            <SidebarItem icon={<Home size={20}/>} text={"Página Inicial"}  active={activeDirectory === 'dashboard'? 'true' : 'false'}></SidebarItem>
        </Link>

        <Link to={"https://api.whatsapp.com/send?phone=5521973975300&text=Ol%C3%A1,%20gostaria%20de%20pedir%20um%20medicamento"} target="_blank" style={{textDecoration: 'none'}}>
            <SidebarItem  icon={<WhatsAppIcon size={20}/>} text={"Solicitar Medicamentos"} ></SidebarItem>
        </Link>

        <Link to={"/farmacias"} style={{textDecoration: 'none'}}>
          <SidebarItem icon={<Pill size={20}/>} text={"Farmácias"} active={activeDirectory === 'farmacias'? 'true' : 'false'} ></SidebarItem>
        </Link>

        <div onClick={LogoutUser} style={{textDecoration: 'none'}}>
          <SidebarItem icon={<LogOut size={20}/>} text={"Sair"} ></SidebarItem>
        </div>
  

    </SidebarComponent>
    )



}