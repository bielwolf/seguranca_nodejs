const { Router } = require('express')
const PermissaoController = require ('../controllers/permissaoController')

const router = Router()

router 
    .post('/permissao', PermissaoController.cadastrar)
    .get('/permissao', PermissaoController.buscarTodasPermissoes)
    .get('/permissao/id/:id',PermissaoController.buscarPermissaoPorId)
    .put('/permissao/id/:id', PermissaoController.editarPemissao)
    .delete('/permissao/id/:id', PermissaoController.deletarPermissao)

module.exports = router 