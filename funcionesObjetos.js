/* Con la palabra reservada :void, le indicamos que la funcion no va a retornar nada */
var deuda = function (cliente, monto) {
    cliente.credito += monto;
};
// Creamos el objeto con base a la interfaz
var nuevoCliente = {
    nombres: 'Cristian David',
    apellidos: 'Vanegas Morales',
    credito: 500000,
    mostrarCliente: function () {
        console.log("Cr\u00E9dito del cliente:".concat(this.nombres, " ").concat(this.apellidos, " es: ").concat(this.credito));
    }
};
// llamamos al metodo deuda
deuda(nuevoCliente, 50000);
// imprimimos el metodo mostrarCliente
nuevoCliente.mostrarCliente();
