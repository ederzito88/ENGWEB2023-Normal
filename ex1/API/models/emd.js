const mongoose = require('mongoose')

var nomeSchema = new mongoose.Schema({
    primeiro: String,
    último: String
})

var emdSchema = new mongoose.Schema({
    numregisto: Number,
    codrua: Number,
    rua: String,
    local: String,
    freguesia: String,
    especie: String,
    nomecient: String,
    origem: String,
    dataplant: String,
    estado: String,
    caldeira: String,
    tutor: String,
    implantacao: String,
    gestor: String,
    dataatualiza: String,
    numinterven: Number,
    _id: Number
});


var emdSchema2 = new mongoose.Schema({
    _id: String,
    index: Number,
    dataEMD: String,
    nome: nomeSchema,
    idade: Number,
    género: String,
    morada: String,
    modalidade: String,
    clube: String,
    email: String,
    federado: Boolean,
    resultado: Boolean
});

module.exports = mongoose.model('planta', emdSchema)