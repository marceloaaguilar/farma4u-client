import { useEffect, useState } from "react"
import swal from 'sweetalert';

export default function Dashboard(){
    const [userId, setUserId] = useState('');

    useEffect(()=> {
        if (localStorage.getItem('userId') == null || localStorage.getItem('userId') == undefined){
            swal({text:'Você precisa se autenticar primeiro..', timer: 3000, buttons: false});
            return false
        }

        setUserId(localStorage.getItem('userId'));


    })





    return(


        <h1>Teste</h1>


    )



}