import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Dailyuser = () => {
    const [Dailyuser, setDailyuser] = useState()

    useEffect(()=>{
        const FetchAllDailyuser = async ()=>{
            try {
                const res = await axios.get("http://localhost:8800/daily")
                setDailyuser(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        FetchAllDailyuser()
    },[])

    const handleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:8800/daily/"+id)
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h1 className='title'>Daily App</h1>
            <h2>Informacion del usuario</h2>
            <div className="Dailyuser">
                {Dailyuser && Dailyuser.map((daily) => (
                    <div className="daily" key={daily.id}>
                        {daily.cover && <img src={daily.cover} alt="" />}
                        <h3 className='title'>Nombre: </h3><p>{daily.nombre}</p>
                        <h3 className='title'>Apellido: </h3><p>{daily.apellido}</p>
                        <h3 className='title'>Correo:</h3><span>{daily.correo}</span>
                        <button className='delete' onClick={()=>handleDelete(daily.id)}>Delete</button>
                        <button className='update'><Link to ={`/update/${daily.id}`}>Update</Link></button>
                    </div>
                ))}
            </div>
            <p></p>
            <button className='formButton'><Link to ="/add">Add new daily</Link></button>
        </div>
    )
}

export default Dailyuser