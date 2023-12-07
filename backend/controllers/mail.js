const nodemailer = require('nodemailer');

// Configuración del transporter (SMTP)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tomyguagnini@gmail.com',
    pass: 'zbkj hdct leic xzcl',
  },
});
const audioUrl = 'https://firebasestorage.googleapis.com/v0/b/ch-music-5dd34.appspot.com/o/listening%2Fpre%20escucha%20secuencia.mp3?alt=media&token=3023f7b2-6175-4f9f-a0a6-0fb7ee52c343'
// Detalles del correo electrónico con archivo adjunto
const imagenUrl = 'https://firebasestorage.googleapis.com/v0/b/ch-music-5dd34.appspot.com/o/image%2Fimage0%20(1).png?alt=media&token=d9736562-c62a-4159-966a-59cfac865c80'
const mailOptions = {
  from: 'tomyguagnini@gmail.com',
  to: 'tomyguagnini@gmail.com',
  subject: 'Asunto del Correo',
  text: 'Cuerpo del Correo',
  html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <style>
      body{
          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      }
      .container{
          display: flex;
          flex-direction: column;
          gap: 10px;
      }
      .btn{
          display: inline-block;
          padding: 10px 20px;
          font-size: 16px;
          font-weight: bold;
          text-align: center;
          text-decoration: none;
          cursor: pointer;
          border: 2px solid #090909; /* Borde rosa */
          border-radius: 25px; /* Esquinas redondeadas */
          background-color: #101010; /* Fondo rosa */
          color: #fff; /* Texto blanco */
          transition: background-color 0.3s, color 0.3s;
          margin-top: 30px;
      }
  </style>
  <body>
      <h1>Gracias por su compra!<h1>
      <div class="container">
          <img src=${imagenUrl} 
          height=200 width=200/>
          <div>
              <a
              class="btn" 
              href=${audioUrl} 
              download>
              Descargar
          </a>
      </div>
      </div>
  </body>
  </html>`,
  
};

// Envío del correo electrónico
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error al enviar el correo:', error);
  } else {
    console.log('Correo electrónico enviado:', info.response);
  }
});
