"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FabricaGaseosa = exports.FabricaAgua = exports.FabricaProducto = void 0;
const producto_1 = require("./producto");
class FabricaProducto {
}
exports.FabricaProducto = FabricaProducto;
class FabricaAgua extends FabricaProducto {
    crearProducto() {
        const p = new producto_1.Agua(7);
        return p;
    }
}
exports.FabricaAgua = FabricaAgua;
class FabricaGaseosa extends FabricaProducto {
    crearProducto() {
        const p = new producto_1.Gaseosa('Papaya');
        return p;
    }
}
exports.FabricaGaseosa = FabricaGaseosa;
