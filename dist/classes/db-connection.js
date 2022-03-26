"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class DbConnection {
    constructor() {
        this.sequelize = new sequelize_1.Sequelize('mysql://root@127.0.0.1:3306/minicont');
    }
    static get instancia() {
        if (!DbConnection._instancia) {
            DbConnection._instancia = new this();
        }
        return this._instancia;
    }
}
exports.default = DbConnection;
