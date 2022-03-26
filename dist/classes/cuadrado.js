"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cuadrado {
    constructor(longitudLado) {
        this.lados = 4;
        this.longitudLado = longitudLado;
    }
    obtenerArea() {
        const area = this.longitudLado * this.longitudLado;
        return area;
    }
    obtenerPerimetro() {
        const perimetro = this.longitudLado * this.lados;
        return perimetro;
    }
}
exports.default = Cuadrado;
