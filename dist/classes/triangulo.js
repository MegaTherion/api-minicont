"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Triangulo {
    constructor(longitudLado) {
        this.lados = 3;
        this.longitudLado = longitudLado;
    }
    obtenerArea() {
        const area = this.longitudLado * this.longitudLado * Math.sqrt(3) / 4;
        return area;
    }
    obtenerPerimetro() {
        const perimetro = this.longitudLado * this.lados;
        return perimetro;
    }
}
exports.default = Triangulo;
