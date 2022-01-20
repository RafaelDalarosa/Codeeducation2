const express = require('express');
const router = express.Router();
const methods = require('../methods/codeeducation');
const ejs = require('ejs');

router.get('/', getAll);

function getAll(req, res, next) {
    methods.getAll()
    .then(([rows]) => {
        let listofnames = [];
        for (let i = 0; i< rows.length; i++){
            listofnames.push(rows[i].name)
        }

        const html = ejs.renderFile(__dirname + "/template.ejs",
        {name: listofnames}); 

        res.send(html);
    })
}

module.exports = router;
