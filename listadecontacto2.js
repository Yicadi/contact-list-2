const Contactos = [];

//funcion creae contacto
function crearContact( id:"23", nombre:"juan", apellido:"rosales", telefono:"3146756756", ciudad:"medellin", direccion:"cll15"); {
  
    //crear objeto para almacenar informacion
    const Contacto1 = {
        id: "23",
        nombres: "juan",
        apellidos: "rosales",
        telefono: "3146756756",
        ciudad: "ciudad medellin",
        direccion: "cll 15",
    };

    
        //agregar contacto a la lista
        Contactos.push(Contacto);
    }
     
//funcion eliminar contacto
function eliminarContacto(id) {

    //indice del contacto
    const indice = -1;
    for (const i = 0; i < Contactos.length; i++) {
        if (Contactos[i].id === id) {
            indice = i;
            break;
        }
    }

    //eliminar contacto
    if (indice !== -1) {
        Contactos.splice(indice, 1);
    }

}
//lista de contactos
console.log(Contactos);

//eliminar
console.log(Contactos);
