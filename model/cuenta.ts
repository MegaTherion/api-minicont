import { DataTypes, Model, Sequelize } from "sequelize";
import DbConnection from "../classes/db-connection";


const connection = DbConnection.instancia;

export default class Cuenta extends Model {

}

 
Cuenta.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: DataTypes.STRING,
  tipo: DataTypes.STRING,
  debe: DataTypes.DECIMAL,
  haber: DataTypes.DECIMAL,
  
}, { sequelize: connection.sequelize, modelName: 'cuenta' });

