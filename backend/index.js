const express = require('express');
const sequelize = require('./config/database'); 
const {SongsRouter,PurchaseRouter,UserRouter} = require('./Routes/index')
const morgan = require('morgan');
const { cors } = require('./middleware/cors');
require('./config/associations')

const app = express();
const port =process.env.PORT

//midlewares
app.use(morgan('tiny'))
app.use(express.json())
app.use(cors);

//rutas
app.use(SongsRouter)
app.use(PurchaseRouter)
app.use(UserRouter)

// server
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
