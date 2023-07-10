import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../style.css'

const Add = () => {


    const [daily, setData] = useState({
        correo: "",
        contrasena: "",
    })

    const navigate = useNavigate()

    /* buttton conexion */

    const handleClick = async e => {
        e.preventDefault()
        axios.post("http://localhost:8800/daily", {
                action: 'login',
                correo: daily.correo,
                contrasena: daily.contrasena
            })
        .then(res => {
            if(res.data === "Login Successfully") {
                navigate("/home");
            } else {
                alert("Informacion incorrecta, por favor valide sus datos.");
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='form' onSubmit={handleClick}>
            <h1 className='title'>Login <span className='subtitle'>DailyApp</span></h1>
            <input 
            type="email" 
            placeholder='correo'
            name="correo"
            onChange={(e)=>setData({...daily,correo:e.target.value})}
            />
            <input 
            type="password" 
            placeholder='contraseña' 
            name="contrasena"
            onChange={(e)=>setData({...daily,contrasena:e.target.value})}
            />

            <button className='formButton' onClick={handleClick}>Ingresar</button>

            <p>
                Necesitas una cuenta?<br />
                <span className='line'>
                    <a href='/add'>Registrarse</a>
                </span>
            </p>

        </div>
    )
}


export default Add