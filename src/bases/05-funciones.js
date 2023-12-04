//Funciones en JS
const saludar = function(nombre){
return `Hola, ${nombre}`;
}
const saludar2 = (nombre) =>{
    return `Hola, ${nombre}`;
 }
 const saludar3 = (nombre) => `Hola, ${nombre}`;
 const saludar4 = () => `Hola Mundo`;

// console.log(saludar('Gerson'));

console.log(saludar2('Gerson'));
console.log(saludar3('Abimael'));
console.log(saludar4());

const getUser = ()=>
    ({
        uid: 'ABC123',
        username: 'El_Papi123'
    });

console.log(getUser());

const getUsuarioActivo = (nombre) =>
    ({
        uid: 'ABC123',
        username: nombre
    });


const usuarioActivo = getUsuarioActivo('Gerson');
console.log(usuarioActivo);