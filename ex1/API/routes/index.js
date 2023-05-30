var express = require('express');
var router = express.Router();
var Exame = require('../controllers/emd')

router.get('/plantas', (req, res) => {
  if(req.query.especie) {
    console.log(req.query.especie)
    Exame.getEspecieEEEE(req.query.especie)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(525).json({erro: erro, mensagem: "Não consegui a lista de modalidades."}))
  }
  else if(req.query.implant) {
    console.log(req.query.implant)
    Exame.getImplanteAAA(req.query.implant)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(521).json({erro: erro, mensagem: "Não consegui obter as plantas desta especie."}))
  }

  else{
    Exame.listplantas()
      .then(dados => res.status(200).json(dados))
      .catch(erro => res.status(525).json({erro: erro, mensagem: "Não consegui a lista de modalidades."}))
    }
  })
  
/*
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
*/

router.get('/plantas/:id', (req,res) => {
  Exame.getPlanta(req.params.id)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(521).json({erro: erro, mensagem: "Não consegui obter a planta com esse id."}))
})

/*
router.get('/plantas?implant=AAA', (req,res) => {
  Exame.getEspecieEEEE(req.params.id)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(521).json({erro: erro, mensagem: "Não consegui obter as plantas desta especie."}))
})*/

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

module.exports = router;
