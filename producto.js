"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularTotalProductos = void 0;
function calcularTotalProductos(productos) {
    var total = 0;
    //recorremos el arreglo
    productos.forEach(function (producto) {
        total += producto.precio;
    });
    return total;
}
exports.calcularTotalProductos = calcularTotalProductos;
