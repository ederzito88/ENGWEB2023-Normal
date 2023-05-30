var Exame = require('../models/emd')


module.exports.listplantas = () => {
    return Exame
            .find()
            .sort({_id:-1})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.getPlanta = id => {
    return Exame.findOne({_id:id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}


module.exports.getEspecieEEEE = specie => {
    return Exame.find({Espécie: specie})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.getImplanteAAA = implant => {
    return Exame.find({Implantação: implant})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.listfreguesias = () => {
    return Exame
        .aggregate(
        { $group: { _id: Freguesia } },
        { $sort: { _id: 1 } }
            )
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.listespecies = () => {
    return Exame
            .distinct('especie').sort()
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.addPlanta = e => {
    return Exame.create(e)
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.deletePlanta = id => {
    return Exame.deleteOne({_id:id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}



// Exame list
module.exports.list = () => {
    return Exame
            .find()
            .sort({dataEMD:-1})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.getExame = id => {
    return Exame.findOne({_id:id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}


module.exports.addExame = e => {
    return Exame.create(e)
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.updateExame = e => {
    return Exame.updateOne({_id:e._id}, e)
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.deleteExame = id => {
    return Exame.deleteOne({_id:id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}