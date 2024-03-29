const nodemailer = require("nodemailer");
const Song = require("../models/song");
const { mail_user, mail_pass } = require("../config/variables");
//const { getStorage, ref, getDownloadURL } = require("firebase/storage");


// Configuración del transporter (SMTP)
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: mail_user,
        pass: mail_pass,
    },
});
const imagenUrl =
    "https://firebasestorage.googleapis.com/v0/b/ch-music-5dd34.appspot.com/o/image%2Fimage0.png?alt=media&token=2768b637-53c8-4a43-a2b6-58efdb7ba2e2";

const sendEmailWithFile = async (items, user) => {
    const songs = await Promise.all(
        items.map(async (item) => {
            const song = await Song.findByPk(item.id);
            return song;
        })
    );
    const html = ` <h1>Gracias por su compra!<h1>
  <div class="container">
      <img src=${imagenUrl} 
      height=200 width=200/>
      
      ${songs.map((song) => {
          // const storage = getStorage();
          // const httpsReference = ref(storage, file );
          // getDownloadURL(httpsReference)
          // .then()
          return `<div>
        <a
        class="btn" 
        href=${song.File} 
        download>
        ${song.Title}
        </a>
      </div>`;
      })}
      </div>`;

      const mailOptions = {
        from: mail_user,
        to: user.email,
        subject: "Compra de beats",
        html:html,
        attachments: [
          {
              filename: 'licencia de contrato.pdf',
              path: './assets/licencia estandar.pdf' // Coloca la ruta de tu archivo adjunto aquí
          }
      ]
    };
    
    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error al enviar el correo:', error);
      } else {
        console.log('Correo electrónico enviado:', info.response);
      }
    });
};


module.exports = {
    sendEmailWithFile,
};
