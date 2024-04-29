import {Menu} from 'antd';
import {HomeOutlined,FileDoneOutlined,MedicineBoxOutlined,LogoutOutlined} from '@ant-design/icons';
import './index.css';
import {Link} from 'react-router-dom';


export default function MenuList(){
  const items =  [{
    label: <Link to={window.location.href}>Página Inicial</Link>,
    icon: <HomeOutlined/>,
    key: 'home'
  },
  {
    label: <Link to={window.location.href + "/solicitar"}>Solicitar Medicamento</Link>,
    icon: <FileDoneOutlined/>,
    key: 'solicitarMedicamento'
  },


]
  
  
  
  return (
    <Menu 
      className='menu-bar'
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  )
}