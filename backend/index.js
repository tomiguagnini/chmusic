const express = require('express');
const sequelize = require('./config/database'); 
const SongsRouter = require('./Routes/songsRouter');
const PurchaseRouter = require('./Routes/PurchaseRouter');
const UserRouter = require('./Routes/UserRouter');
const morgan = require('morgan')
require('./config/associations')



const app = express();
const port =process.env.PORT

//midlewares
app.use(morgan('tiny'))
app.use(express.json())

//cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
  next();
});

//rutas
app.use(SongsRouter)
app.use(PurchaseRouter)
app.use(UserRouter)

// Inicia tu aplicación Express aquí
app.listen(port, () => {
  console.log('Servidor escuchando en el puerto '+ port);
});

// Sincroniza los modelos con la base de datos
sequelize.sync({ force: false })
  .then(() => {
    console.log('Base de datos y tablas sincronizadas.');
})
.catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
});
