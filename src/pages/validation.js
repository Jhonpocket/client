/// validacion para que el usuario no envie datos vacios///
const validation = (data) => {
    const errors = {};
      
    if (!data.nombre.trim()) {
      errors.nombre = "El nombre es requerido!";
    }
  
    if (!data.apellido.trim()) {
      errors.apellido = "El apellido es requerido!";
    }
  
    if (!data.correo.trim()) {
      errors.correo = "El correo es requerido!";
    } 
    if (!data.contrasena.trim()) {
      errors.contrasena = "La contraseña es requerida!";
    }
    
    return errors;
  };
  
  export default validation;
  