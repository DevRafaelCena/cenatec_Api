const express = require('express')
const formEmail = require('../controllers/formEmail');

const path = require('path')
//const multer = require('multer')

var router = express.Router();
//rotas a partir daqui!
//read
router.get('/', formEmail.teste)
router.post('/', formEmail.enviarEmail)


//route.delete('/deletar/:id', formController.destroy)
//route.Put('/editar/:id', formController.editar)
//route.get('/editar/:id', formController.editar)
//cadastro get e post
//route.get('/cadastro', cardapioController.formCadastro)
//route.post('/cadastro', upload.any(), cardapioController.salvarCadastro)
//delete
//route.delete('/deletar/:posicao', cardapioController.deletarPizza)
//update
//route.get('/alterar/:posicao', cardapioController.formAlteracao)
//route.put('/alterar', cardapioController.alterarPizza)

module.exports = router