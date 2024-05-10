import SidebarComponent from "./SidebarComponent";
import { Home, CircleFadingPlus, Pill, LogOut} from "lucide-react";
import { SidebarItem } from "./SidebarComponent";
import '../../../index.css'

export default function Sidebar({activeDirectory}){
    return(
        <SidebarComponent>
            <SidebarItem icon={<Home size={20}/>} text={"Página Inicial"} directory={"/dashboard"}  active={activeDirectory == 'dashboard'? 'true' : 'false'}></SidebarItem>
            <SidebarItem icon={<CircleFadingPlus size={20}/>} text={"Solicitar Medicamentos"} directory={"https://api.whatsapp.com/send?phone=31998226095"} ></SidebarItem>
            <SidebarItem icon={<Pill size={20}/>} text={"Farmácias"} directory={"/farmacias"} active={activeDirectory == 'farmacias'? 'true' : 'false'} ></SidebarItem>
        </SidebarComponent>
    )



}