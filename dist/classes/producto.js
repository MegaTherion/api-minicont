"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gaseosa = exports.Agua = void 0;
class Producto {
    constructor(precio, calidad, marca, nombre) {
        this.precio = precio;
        this.calidad = calidad;
        this.marca = marca;
        this.nombre = nombre;
    }
    mostrar() {
        console.log(`Producto: ${this.nombre}. Precio: ${this.precio}. Marca: ${this.marca}. Calidad: ${this.calidad}`);
    }
}
exports.default = Producto;
class Agua {
    constructor(ph) {
        this.ph = ph;
        this.tamanio = 'Grande';
    }
}
exports.Agua = Agua;
class Gaseosa {
    constructor(sabor) {
        this.sabor = sabor;
        this.tamanio = 'Pequeña';
    }
}
exports.Gaseosa = Gaseosa;
/*
Tipos en Typescript:

string
number
bool
Array

*/
