import { Sequelize } from "sequelize";

export default class DbConnection {
    public sequelize: Sequelize;

    private static _instancia: DbConnection;

    private constructor() {
        this.sequelize = new Sequelize('mysql://root@127.0.0.1:3306/minicont');
    }

    public static get instancia() {
        if (!DbConnection._instancia) {
            DbConnection._instancia = new this();
        }
        return this._instancia;
    }
}