import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Update = () => {
    const [daily, setdaily] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        contrasena: "",
    })

    const navigate = useNavigate()
    const location = useLocation()

    const dailyId = (location.pathname.split("/")[2])


    const handleChange = (e) => {
        setdaily((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    /* buttton conexion */

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.put("http://localhost:8800/daily/" + dailyId, daily)
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }

    console.log(daily)
    return (
        <div className='form'>
            <h1 className='title'>Actualizar</h1>
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

            <button className='formButton' onClick={handleClick}>Update</button>

        </div>
    )
}

export default Update