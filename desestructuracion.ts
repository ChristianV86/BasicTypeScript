/* La desestructuracion de un objeto, permite extrar solo los datos que necesitamos, es decir, se pueden omitir algunos datos que son irrelebantes para lo que necesitamos  */


interface IPelicula {
    id:number;
    titulo:string;
    genero:string;
    anio:number;
    director: IDirector;  
}

interface IDirector {
    nombres:string;
    apellidos:string;
}
// Inicializamos el objeto
const pelicula: IPelicula = {
    id:1,
    titulo:'Juegos Macabros',
    genero: 'Terror',
    anio: 2010,
    director: {
        nombres: 'Pepito',
        apellidos: 'Perez'
    }
}

//desestructuracion de un objeto
const {titulo,anio,director} = pelicula;
const {nombres,apellidos} = director;

// imprimimos el objeto, sin desestructuracion
//console.log('Película:', pelicula.titulo);

// con desestructuracion
console.log('Nombre película: ', titulo);
console.log('Año película: ', anio);
console.log('Director: ', nombres, ' ',apellidos);

