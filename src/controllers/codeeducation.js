const express = require('express');
const router = express.Router();
const methods = require('../methods/codeeducation');

router.get('/', getAll);
router.post('/', insertRow);

function getAll(req, res, next) {
    methods.getAll()
    .then(([rows]) => {
        res.json(rows);
    })
}

function insertRow(req, res) {
    const nome = req.body.nome;
    //Nome das variaveis que estão sendo passadas para o método deve ser o mesmo do nome da coluna do Banco de Dados
    methods.insertRow({nome}).then(([rows]) => {
        res.send({message: 'adicionado com sucesso'});
    })
}

module.exports = router;
