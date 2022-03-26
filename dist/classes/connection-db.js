"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConnectionDb {
    constructor(host, database, user, password) {
        this.host = host;
        this.database = database;
        this.user = user;
        this.password = password;
    }
    static obtenerInstancia() {
        if (!ConnectionDb.instancia) {
            ConnectionDb.instancia = new ConnectionDb('127.0.0.1', 'productosDb', 'pruebasingleton', '4b5er45g23d5e');
        }
        return ConnectionDb.instancia;
    }
    connect() {
        console.log('Base de datos conectada');
    }
}
exports.default = ConnectionDb;
