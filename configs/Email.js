var nodemailer = require('nodemailer')

const email = nodemailer.createTransport({
    service:'gmail',  
    host: "smtp.umbler.com",
    port: "587",  
    auth: {
        user: "comercial@cenatecnologia.com.br",
        pass: "Sofia@090209"
    },
    
       
})



module.exports = email;