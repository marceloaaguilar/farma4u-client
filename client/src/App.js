import './App.css';
import axios from 'axios';
import Feed from './components/Feed';
import NavbarHotsite from './components/NavbarHotsite';
import 'bootstrap/dist/css/bootstrap.min.css';
import {React,useState, useEffect} from 'react';

function App(){
  const [data, setData] = useState('');
  let primaryColor  = '#00CCFF';
  let secondColor   = '#FFFFFF';
  const queryParameters = new URLSearchParams(window.location.search)
  const params = queryParameters.get("hotsite");
  useEffect(() => {      
  axios.get('http://localhost:3001/hotsite/' + params).then((res)=>{
    setData(res.data[0]);
    })
  },[])

  if(data != null){
    primaryColor = data.primaryColor;
    secondColor  = data.secondColor;
  }
  const divStyle = {
    color: secondColor,
    backgroundColor: primaryColor,
  };


  return (
    <div className='App'>
      <div style={divStyle}>
        <NavbarHotsite />
      </div>
      <div>
        <Feed/>
      </div>
    </div>
    )
}


export default App;
