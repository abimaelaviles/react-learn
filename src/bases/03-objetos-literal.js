const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        cuidad: 'New York',
        zip: 5641542,
        lat: 14.1254,
        lng: 352.2515
    }
};

//console.table({persona});
console.log(persona);

const persona2 = {...persona};
persona2.nombre = 'peter';
console.log(persona2);