"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_connection_1 = __importDefault(require("./classes/db-connection"));
const server_1 = __importDefault(require("./classes/server"));
const cuenta_1 = __importDefault(require("./model/cuenta"));
// const app = express();
// app.get('/', 
//     (req: any, res: any) => {
//         res.send('Hello USFA!')
//     }
//   );
// app.listen(80, () => {
//     console.log('Servidor escuchando en el puerto 80');
// });
function probarconexion(connection) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield connection.sequelize.authenticate();
            console.log('Connection has been established successfully.');
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
        // await connection.sequelize.sync();
        // const cuentaCaja = await Cuenta.create({
        //     nombre: 'Caja',
        //     tipo: 'activo',
        //     debe: 200,
        //     haber: 0,
        // });
        // console.log(cuentaCaja.toJSON());
    });
}
const connection = db_connection_1.default.instancia;
probarconexion(connection);
const server = server_1.default.instancia;
server.start(() => {
    console.log(`El servidor está corriendo en el puerto ${server.port}`);
});
server.app.get('/', (req, res) => {
    res.send('Hello students!');
});
//----------------------------------
// Crear una cuenta
//----------------------------------
server.app.post('/cuentas', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(req.body);
    const nuevaCuenta = req.body;
    yield connection.sequelize.sync();
    const cuenta = yield cuenta_1.default.create(nuevaCuenta);
    res.send('Se ha creado una cuenta');
}));
//----------------------------------
// Listar cuentas
//----------------------------------
server.app.get('/cuentas', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cuentas = yield cuenta_1.default.findAll();
    res.send(cuentas);
}));
//----------------------------------
// Recuperar info de una cuenta
//----------------------------------
server.app.get('/cuentas/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cuenta = yield cuenta_1.default.findByPk(req.params.id);
    res.send(cuenta);
}));
//----------------------------------
// Aumentar el debito de una cuenta
//----------------------------------
server.app.put('/cuentas/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield cuenta_1.default.update({ debe: req.body.debe }, {
        where: {
            id: req.params.id
        }
    });
    // Actualizar toda la cuenta:
    // await Cuenta.update(req.body, {
    //   where: {
    //     id: req.params.id
    //   }
    // });
    res.send('El debito de la cuenta se ha actualizado');
}));
