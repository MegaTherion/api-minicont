"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = 80;
        this.httpServer = new http_1.default.Server(this.app);
        this.app.use(express_1.default.json());
    }
    static get instancia() {
        if (!this._instancia) {
            this._instancia = new this();
        }
        return this._instancia;
    }
    start(callback) {
        this.httpServer.listen(this.port, callback);
    }
}
exports.default = Server;
