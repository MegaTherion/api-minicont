import DbConnection from './classes/db-connection';
import Server from './classes/server';
import Cuenta from './model/cuenta';

// const app = express();

// app.get('/', 
//     (req: any, res: any) => {
    
//         res.send('Hello USFA!')
//     }
//   );

// app.listen(80, () => {
//     console.log('Servidor escuchando en el puerto 80');
// });
async function probarconexion(connection: DbConnection) {
    try {
        await connection.sequelize.authenticate();
        
        console.log('Connection has been established successfully.');
      } catch (error) {
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
}

const connection = DbConnection.instancia;
probarconexion(connection);



const server = Server.instancia;

server.start(() => {
    console.log(`El servidor está corriendo en el puerto ${server.port}`);
});

server.app.get('/', (req, res) => {
  res.send('Hello students!');
});

//----------------------------------
// Crear una cuenta
//----------------------------------
server.app.post('/cuentas', async (req, res) => {  
  // console.log(req.body);
  const nuevaCuenta = req.body;
  await connection.sequelize.sync();
  const cuenta = await Cuenta.create(nuevaCuenta);
  res.send('Se ha creado una cuenta');
});

//----------------------------------
// Listar cuentas
//----------------------------------
server.app.get('/cuentas', async (req, res) => {
  const cuentas = await Cuenta.findAll();
  res.send(cuentas);
});

//----------------------------------
// Recuperar info de una cuenta
//----------------------------------
server.app.get('/cuentas/:id', async (req, res) => {
  const cuenta = await Cuenta.findByPk(req.params.id);
  res.send(cuenta);
});

//----------------------------------
// Aumentar el debito de una cuenta
//----------------------------------
server.app.put('/cuentas/:id', async (req, res) => {

  await Cuenta.update({ debe: req.body.debe }, {
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
  res.send('El debito de la cuenta se ha actualizado')
});
