"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
class Singleton {
    constructor() {
        this.contador = 0;
    }
    static getInstancia() {
        if (!Singleton.instancia) {
            Singleton.instancia = new Singleton();
        }
        return Singleton.instancia;
    }
    incrementarContador() {
        this.contador++;
        console.log(`El contador ahora es ${this.contador}`);
    }
}
exports.Singleton = Singleton;
