const codeeducation = require('../controllers/codeeducation.js')


module.exports = function (app){
    app.use('/',codeeducation)
}