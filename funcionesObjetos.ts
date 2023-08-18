interface ICliente {
    nombres: string;
    apellidos: string;
    credito: number;
    mostrarCliente: () => void; // Este es un metodo
    /*Crear objeto dentro de interfaz, esta es una manera, pero no es la optima, lo mejor es crear una interfaz con esos datos y luego llamarla en la propiedad del objeto */
    direccion: IDireccion; 
    /*{
        nomenclatura: string;
        barrio: string;        
        ciudad: string;
    }*/
}

interface IDireccion {
    nomenclatura: string;
    barrio: string;        
    ciudad: string;
}

/* Con la palabra reservada :void, le indicamos que la funcion no va a retornar nada */
const deuda1 = (cliente:ICliente, monto:number):void => {
    cliente.credito += monto;
}

// Creamos el objeto con base a la interfaz
const nuevoCliente1: ICliente = {
    nombres: 'Cristian David',
    apellidos: 'Vanegas Morales',
    credito: 500000,
    mostrarCliente(){
        console.log(`Crédito del cliente:${this.nombres} ${this.apellidos} es: ${this.credito}`);
    },
    // asignamos valores al objeto direccion creado dentro de la interfaz ICliente
    direccion: {
        nomenclatura: 'Calle 52 #3G - 28',
        barrio: 'Samaria',
        ciudad: 'Manizales' 
    }

}

// llamamos al metodo deuda
deuda1(nuevoCliente1, 50000);
// imprimimos el metodo mostrarCliente
nuevoCliente.mostrarCliente();