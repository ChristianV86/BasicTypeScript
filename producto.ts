//Interface exportable: añadimos la palabra reservada export antes de la palabra reservada interface
export interface IProducto {
    id:number;
    descripcion:string;
    precio:number;
}

export function calcularTotalProductos(productos:IProducto[]): number {
    let total = 0;
    //recorremos el arreglo
    productos.forEach( (producto) => {
        total += producto.precio;
    } )
    return total;
}