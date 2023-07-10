import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import validation from './validation'


const Add = () => {
    const [daily, setData] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        contrasena: "",
    })
    
    const [errors, setErrors] =useState({})
    const [showErrors, setShowErrors] = useState(false);
    const navigate = useNavigate()

    const handleChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        setErrors(validation({ ...daily, [e.target.name]: e.target.value }));
    }

    /* buttton conexion */

    const handleClick = async e => {
        e.preventDefault()
        setShowErrors(true); // Mostrar los errores al hacer clic en el botón
        if (Object.keys(errors).length === 0)
        try {
            await axios.post("http://localhost:8800/daily", {action: 'registro', ...daily});
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }

    console.log(daily)
    return (
        <div className='form'>
            <h1 className='title'>Registro <span className='subtitle'>DailyApp</span></h1>
            <input 
            type="text" 
            placeholder='nombre' 
            onChange={handleChange} 
            name="nombre"
            />
            {showErrors && errors.nombre && <span className="text-danger">{errors.nombre}</span>}
            <input 
            type="text" 
            placeholder='apellido' 
            onChange={handleChange} 
            name="apellido"
            />
            {showErrors && errors.apellido && <span className="text-danger">{errors.apellido}</span>}
            <input 
            type="email" 
            placeholder='correo' 
            onChange={handleChange} 
            name="correo"
            />
            {showErrors && errors.correo && <span className="text-danger">{errors.correo}</span>}
            <input 
            type="password" 
            placeholder='contraseña' 
            onChange={handleChange} 
            name="contrasena"
            />
            {showErrors && errors.contrasena && <span className="text-danger">{errors.contrasena}</span>}

            <button className='formButton' onClick={handleClick}>Registrarse</button>
            <p>
                Ya tienes una cuenta?<br />
                <span className='line'>
                    <a href='/'>Inicia Sesion</a>
                </span>
            </p>
        
        
        </div>
    )
}


export default Add