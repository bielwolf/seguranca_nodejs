const PermissaoService = require ('../services/permissaoService')
const permissaoService = new PermissaoService()

class PermissaoController {
    static async cadastrar (req, res) {
        const { nome, descricao } = req.body

        try {
            const permissao = await permissaoService.cadastrar({ nome, descricao })
            
            res.status(201).send(permissao)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    static async buscarTodasPermissoes(req, res) {
        const permissoes = await permissaoService.buscarTodasPermissoes()

        res.status(200).send(permissoes)
    }

    static async buscarPermissaoPorId(req, res) {
        try {
            const { id } = req.params 
            const permissao = await permissaoService.buscarPermissaoPorId(id)
            res.status(200).send(permissao)
        } catch (error) {
            res.status(404).send({ message: error.message })
        }
    }

    static async editarPemissao(req, res) {
        const { id } = req.params
        const { nome, descricao } = req.body
        try {
            const permissao = await permissaoService.editarPemissao({id, nome, descricao})
            
            res.status(200).send(permissao)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    static async deletarPermissao(req, res) {
        const { id } = req.params
        try {
            await permissaoService.deletarPermissao(id)
            res.status(200).send()
        } catch (error) {
            res.status(404).send({ message: error.message })
        }
    }
}

module.exports = PermissaoController