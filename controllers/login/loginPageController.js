const express = require('express')
const app = express()
const {
  Usuario
} = require('../../models')
const session = require('express-session')
const bcrypt = require('bcrypt')
//const cookie = require('cookie-parser')


const loginPageController = {
  teste: (req, res)=>{
    // const db = new Sequelize(config)
         
    
     return res.send('respond with a resource');

 },
  
/*   login: (req, res) => {
    res.render("login/login", {
      titulo: "Acesso"
    })
  }, */

  auth: async (req, res) => {
    const {
      email,
      senha
    } = req.body

    //const remember_me = req.body['remember-me']

    const usuario = await Usuario.findOne({
      where: {
        email
      }
    })

    if (usuario == undefined) {
      let error = 'Usuário não encontrado, por favor contate o síndico'
      return res.status(401).json({
        titulo: "Acesso",
        error: error
      })
    }

    if (usuario.status == false) {
      let error = 'Usuário desativado, por favor contate o adm'
      return res.status(401).json({
        titulo: "Acesso",
        error: error
      })
    }

    if (!bcrypt.compareSync(senha, usuario.senha)) {
      let error = "Senha incorreta, tente novamente ou use a opção 'esqueci minha senha'"
      return res.status(401).json({
        titulo: "Acesso",
        error: error
      })
    }
    usuario.senha = ''

/*     if (remember_me == 'true') {
      res.cookie('user', usuario.token, {
        maxAge: 2 * 10 ** 9
      })
    }
 */
   // req.session.user = usuario
   console.log(usuario)

    switch (usuario.tipo_usuario) {

      case 1:
        res.status(200).json(usuario)
        break;
    }

  },

  logout: (req, res) => {

    req.session.user = ''
    res.cookie('user','',{maxAge: 0})
    return res.redirect('/login')



  }


}
module.exports = loginPageController