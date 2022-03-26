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
    
      await connection.sequelize.sync();
      const cuentaCaja = await Cuenta.create({
          nombre: 'Caja',
          tipo: 'activo',
          debe: 200,
          haber: 0,
        
      });
      console.log(cuentaCaja.toJSON());
}

const connection = DbConnection.instancia;
probarconexion(connection);



const server = Server.instancia;

server.start(() => {
    console.log(`El servidor está corriendo en el puerto ${server.port}`);
});