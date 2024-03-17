
import { BrowserRouter, Routes, Route } from "react-router-dom";  
import Hotsite from "./Pages/HotSite";
import ErrorPage from "./Pages/ErrorPage";
import Admin from "./Pages/Admin";
import Matriz from "./Pages/Matriz";

function App(){
  

  return (
         <BrowserRouter>
          <Routes>
            <Route path="/" element={<Matriz/>}> </Route>
              <Route path="/:hotsite" element={<Hotsite/>}></Route>
              <Route path="/admin" element={<Admin/>}></Route>
              <Route path="*" element={<ErrorPage/>}></Route>
          </Routes>
         </BrowserRouter>
   
    )
}


export default App;
