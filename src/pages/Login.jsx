import axios from 'axios'
import React, { useState } from 'react'
//import { useNavigate } from 'react-router-dom'

const Add = () => {
    const [daily, setData] = useState({
        correo: "",
        contrasena: "",
    })

    //const navigate = useNavigate()

    /*const handleChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }*/



    /* buttton conexion */

    const handleClick = async e => {
        e.preventDefault()
        axios
            .post("http://localhost:8800/daily", {
                correo: daily.correo,
                contrasena: daily.contrasena

            })
            .then(res => localStorage.setItem("token", res.data.token))
            .catch(err => console.error(err))

        /*try {
            await axios.post("http://localhost:8800/daily", daily)
            n
        } catch (err) {
            console.log(err)
        }*/
    }

    //console.log(daily)
    return (
        <div className='form' onSubmit={handleClick}>
            <h1 className='title'>Login</h1>
            <input 
            type="email" 
            placeholder='correo' 
            //onChange={handleChange}
            name="correo"
            onChange={(e)=>setData({...daily,correo:e.target.value})}
            />
            <input 
            type="password" 
            placeholder='contraseña' 
            //onChange={handleChange}
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