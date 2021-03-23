var nodemailer = require('nodemailer')

const email = nodemailer.createTransport({
    host:'smtp.umbler.com',
    port: 587,  
    secure: false,
    requireTLS: false,
    tls: {rejectUnauthorized: false},
      
    auth: {
        user: "comercial@cenatecnologia.com.br",
        pass: "Sofia@090209"
    },
    
       
})



module.exports = email;