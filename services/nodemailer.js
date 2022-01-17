const nodemailer = require('nodemailer');

const send = async({to, subject = "Gracias por registrarte 😀", html}) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            auth: {
                user: "cuentaapppresupuesto@gmail.com", //casilla de correo que envia el mail
                pass: "Pass2513", //password
            },
            tls : {
                rejectUnathorized: false, //le digo a mi service que no tengo certificado de seguridad corriendo en el server de donde mando los mails
            }
        });
        const mail = {
            from: '<noreply>ApiDisney<noreply>', 
            to, 
            subject, 
            html: "<b>Bienvenido a la Api de Disney</b>"
        }
        const envio = await transporter.sendMail(mail);
        return envio.messageId;
        
    } catch (e) {
        console.log(e);
    }
}

module.exports = {send};