import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
    const [daily, setData] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        contrasena: "",
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    /* buttton conexion */

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:8800/daily", daily)
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }

    console.log(daily)
    return (
        <div className='form'>
            <h1 className='title'>Registro</h1>
            <input 
            type="text" 
            placeholder='nombre' 
            onChange={handleChange} 
            name="nombre" 
            />
            <input 
            type="text" 
            placeholder='apellido' 
            onChange={handleChange} 
            name="apellido" 
            />
            <input 
            type="email" 
            placeholder='correo' 
            onChange={handleChange} 
            name="correo" 
            />
            <input 
            type="password" 
            placeholder='contraseña' 
            onChange={handleChange} 
            name="contrasena" 
            />

            <button className='formButton' onClick={handleClick}>Registrarse</button>

        </div>
    )
}


export default Add