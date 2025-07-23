const database = require ('../models');

const permissoes = (listaPermissoes) => {
    return async (req, res, next) => {
        const { usuarioId } = req;

        const usuario = await database.usuarios.findOne({
            include: [
                {
                    model: database.permissoes,
                    as: 'usuario_permissoes',
                    attributes: ['id', 'nome']
                }
            ],
            where: {
                id: usuarioId
            }
        })

        if(!usuario) {
            return res.status(404).send('Usuário não cadastrado');
        }

        const permissoesCadastradas = usuario.usuario_permissoes
        .map((permissao) => permissao.nome)
        .some((permissao) => listaPermissoes.includes(permissao))

        if(!permissoesCadastradas) {
            return res.status(401).send('Você não tem permissão para acessar essa rotoa')
        }

        return next()
    }
}

module.exports = permissoes