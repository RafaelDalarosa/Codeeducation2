const express = require('express');
const router = express.Router();
const methods = require('../methods/codeeducation');
const ejs = require('ejs');

router.get('/', getAll);

async function getAll(req, res, next) {

    let [listofnames] = await methods.getAll();
        
    for (let i = 0; i< rows.length; i++){
        listofnames.push(rows[i].name);
    }

    const html = await ejs.renderFile(__dirname + "/template.ejs",
    {name: listofnames}); 

    res.status(200).send(html);
    
}

module.exports = router;
