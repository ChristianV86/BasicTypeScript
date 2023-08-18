import { IProducto, calcularTotalProductos } from "./producto"; // importacion interfaz IProducto. esta linea se creo automaticamente cuando especificamos que la lista iba a ser de tipo IProducto

/*Con los corchetes [] indicamos que es una lista. Como es un arreglo de objetos de tipo producto, sus propiedades deben ir dentro de las llaves. Para ingresar mas propiedades, ponemos coma (,) al final de la llave de cierre de las propiedades de un objeto y agregamos de la misma manera las propiedades del objeto */
const listaProductos: IProducto[] = [
    {
        id:1,
        descripcion: 'Laptop',
        precio: 2000000
    },
    {
        id:2,
        descripcion: 'PC de escritorio',
        precio: 1800000
    },
    {
        id:3,
        descripcion: 'Torre',
        precio: 2500000
    }
];

const totalLista = calcularTotalProductos(listaProductos);

console.log(totalLista);

