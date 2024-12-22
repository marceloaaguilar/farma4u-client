
import { BrowserRouter, Routes, Route } from "react-router-dom";  
import Hotsite from "./Pages/HotSite";
import ErrorPage from "./Pages/ErrorPage";
import Admin from "./Pages/Admin";
import Matriz from "./Pages/Matriz";
import Login from "./Pages/Login";
import PaginaInicial from "./components/Dashboard/Pages/PaginaInicial";
import Farmacias from "./components/Dashboard/Pages/Farmacias";
import LoginFarma from "./Pages/LoginFarma";


function App(){
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Matriz/>}> </Route>
            <Route path="/admin" element={<Admin/>}></Route>
            <Route path="/:hotsite" element={<Hotsite/>}></Route>
            <Route path="/:hotsite/login" element={<Login/>}></Route>
            <Route path="/login" element={<LoginFarma/>}></Route>
            <Route path="*" element={<ErrorPage/>}></Route>
            <Route path="/404" element={<ErrorPage/>}></Route>

            <Route path="/dashboard" element={
                <PaginaInicial/>}>
            </Route>

            <Route path="/farmacias" element={
                <Farmacias/>}>
            </Route>
            
            <Route path="/:hotsite/dashboard" element={
                <PaginaInicial/> }>
            </Route>

            <Route path="/:hotsite/farmacias" element={
                <Farmacias/>}>
            </Route>

        </Routes>
    </BrowserRouter>
    )
}


export default App;
