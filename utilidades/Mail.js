process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const nodemailer = require('nodemailer');

const enviarEmail = (correo, asunto, texto) => {


    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    
    const mailOptions = {
        from: process.env.EMAIL,
        to: correo,
        subject: asunto,
        //text: texto,        
        html:"<p>Link para entrar a la página de microlab: <br> <a href='https://redgeodesica.igac.gov.co/recuperarContrasenia.html?token="+texto+"'>asdf</a></p>"
    };

    try {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent:'+ info.response);
            }
        });        
    } catch (error) {
        console.log(error);
    }


    

}


module.exports = {
    enviarEmail
};