var path = require( 'path' );
const Email = require ('../configs/Email');
const { response } = require('../app');
const email = require('../configs/Email');

let formEmail = {
    teste: (req, res)=>{
        // const db = new Sequelize(config)
             
        
         return res.send('respond with a resource');
 
     },
    enviarEmail:(req,res)=>{
        const {email,nome,telefone,texto} = req.body
        console.log(req.body)
        console.log(req)
        let emailEnvio ={
            from: '"Realizando contato"<'+ email +">", // sender address (who sends)
            to: 'cenatec@outlook.com, rafael.cena@hotmail.com , contatocenatecnologia@gmail.com', // list of receivers (who receives)
            subject: 'Contato subject', // Subject line
            text: 'Email de contato', // plaintext body
            html: `<h1>Meu nome é: ${nome}</h1>
            Texto : 
            ${texto}
            
           <p> email para contato: <strong> ${email} </strong> </p>
           <p> telefone: <strong> ${telefone}  </strong> </p> `// html body

        }
        // send mail with defined transport object
Email.sendMail(emailEnvio, function(error, info){
    if(error){
        console.log("deu erro : " + error)
         return res.status(400).json({
            error: true,
            msg: "Não foi possivel enviar o email!",
          });
    }

    console.log('Message sent: ' + info.response);
    return res.status(200).json({
        error: false,
        msg: "Email enviado",
      });
    
});

    }

}
 


module.exports = formEmail    