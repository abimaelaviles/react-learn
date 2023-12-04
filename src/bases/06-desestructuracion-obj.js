//Desesctructuracion
//Asignacion Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'IronMan',
    rango: 'Soldado'
}
const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const userContext = ({nombre, edad, rango = 'Capitan'}) =>{


    // console.log(edad, rango, nombre);
    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.256,
            lng: -452.545
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = userContext(persona);

console.log(nombreClave, anios, lat, lng);