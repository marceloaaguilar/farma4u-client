import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useEffect, useState } from 'react';
import './Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useLocation } from "react-router-dom";
import Logout from "../Pages/Logout";

export default function SidebarComponent(){
  const {LogoutUser} = Logout();
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (  
    <div style={{ display: 'flex', height: '100vh'}}>
      <Sidebar collapsed={collapsed} collapsedWidth="60px">
        <Menu>
          <MenuItem>
              <MenuOutlinedIcon className="sb-button" onClick={() => setCollapsed(!collapsed)}/>
          </MenuItem>

          <Link Link to={'/' + JSON.parse(localStorage.getItem('userData')).urlSite + '/dashboard'}> 
            <MenuItem> 
              <HomeIcon/> Página Inicial
            </MenuItem>
          </Link>

          <Link to={'/' + JSON.parse(localStorage.getItem('userData')).urlSite + '/solicitar'}>
            <MenuItem> 
              <AddCircleIcon/> Solicitar Medicamentos
            </MenuItem>
          </Link>

          <Link to={'/' + JSON.parse(localStorage.getItem('userData')).urlSite + '/farmacias'}>
            <MenuItem> 
              <MedicalServicesIcon/>Farmácias
            </MenuItem>
          </Link>

          <MenuItem onClick={function() {LogoutUser()}}> 
              <LogoutIcon/> Sair
          </MenuItem>
        </Menu>
      </Sidebar>
  </div>
  );
}