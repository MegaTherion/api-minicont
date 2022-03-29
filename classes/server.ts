import express from "express";
import http from 'http';

export default class Server {
    public app: express.Application;
    public port: number;
    private static _instancia: Server;
    private httpServer: http.Server;

    private constructor() {
        this.app = express();
        this.port = 80;
        this.httpServer = new http.Server(this.app);
        this.app.use(express.json());
    }

    public static get instancia() {
        if (!this._instancia) {
            this._instancia = new this();
        }
        return this._instancia;
    }

    start(callback: () => void) {
        this.httpServer.listen(this.port, callback);        
    }
}
