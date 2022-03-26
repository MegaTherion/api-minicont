"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_connection_1 = __importDefault(require("../classes/db-connection"));
const connection = db_connection_1.default.instancia;
class Cuenta extends sequelize_1.Model {
}
exports.default = Cuenta;
Cuenta.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: sequelize_1.DataTypes.STRING,
    tipo: sequelize_1.DataTypes.STRING,
    debe: sequelize_1.DataTypes.DECIMAL,
    haber: sequelize_1.DataTypes.DECIMAL,
}, { sequelize: connection.sequelize, modelName: 'cuenta' });
