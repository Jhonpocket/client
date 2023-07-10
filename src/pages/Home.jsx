import { Link } from 'react-router-dom'
import '../style.css'


const home = () => {
return (
    <div className= 'datos'>
      {/* Contenido del componente */}
      
      <h1 className='title'>Bienvenido a DailyApp</h1>
      <h2>Proximamente mas servicios</h2>
      <button className='formButton'><Link to ="/">Cerrar Sesion</Link></button>
      
    </div>
  );
    }

export default home