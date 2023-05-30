var express = require('express');
var router = express.Router();
var Exame = require('../controllers/emd')

router.get('/plantas', (req, res) => {
  if(req.query.especie == 'EEEE') {
    console.log('aqui')
    Exame.getEspecieEEEE()
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(525).json({erro: erro, mensagem: "Não consegui a lista de modalidades."}))
  
  }

})

router.get('/plantas?especie=EEEE', (req,res) => {
  Exame.getEspecieEEEE(req.params.id)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(521).json({erro: erro, mensagem: "Não consegui obter as plantas desta especie."}))
})

router.get('/plantas', function(req, res) {
  Exame.listplantas()
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(520).json({erro: erro, mensagem: "Não consegui obter a lista de plantas."}))
});

router.get('/plantas/:id', (req,res) => {
  Exame.getPlanta(req.params.id)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(521).json({erro: erro, mensagem: "Não consegui obter a planta com esse id."}))
})


router.get('/plantas?implant=AAA', (req,res) => {
  Exame.getEspecieEEEE(req.params.id)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(521).json({erro: erro, mensagem: "Não consegui obter as plantas desta especie."}))
})

router.get('/plantas/freguesias', function(req, res) {
  Exame.listfreguesias()
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(520).json({erro: erro, mensagem: "Não consegui obter a lista de freguesias."}))
});

router.get('/plantas/especies', function(req, res) {
  Exame.listespecies()
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(520).json({erro: erro, mensagem: "Não consegui obter a lista de especies."}))
});

router.post('/plantas', (req,res) => {
  Exame.addPlanta(req.body)
    .then(dados => res.status(201).json(dados))
    .catch(erro => res.status(522).json({erro: erro, mensagem: "Não consegui inserir a planta."}))
})

router.delete('/plantas/:id', (req,res) => {
  Exame.deletePlanta(req.params.id)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(524).json({erro: erro, mensagem: "Não consegui apagar a planta."}))
})





/* GET home page. */
router.get('/emds', function(req, res) {
  Exame.list()
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(520).json({erro: erro, mensagem: "Não consegui obter a lista de exames."}))
});

router.get('/emds/:id', (req,res) => {
  Exame.getExame(req.params.id)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(521).json({erro: erro, mensagem: "Não consegui obter o exame."}))
})

router.post('/emds', (req,res) => {
  Exame.addExame(req.body)
    .then(dados => res.status(201).json(dados))
    .catch(erro => res.status(522).json({erro: erro, mensagem: "Não consegui inserir o exame."}))
})

router.put('/emds/:id', (req,res) => {
  Exame.updateExame(req.body)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(523).json({erro: erro, mensagem: "Não consegui alterar o exame."}))
})

router.delete('/emds/:id', (req,res) => {
  Exame.deleteExame(req.params.id)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(524).json({erro: erro, mensagem: "Não consegui apagar o exame."}))
})

module.exports = router;
