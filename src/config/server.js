const express = require('express');

const http = require('http');

const app = express();

app.use(express.json());

http.createServer(app).listen(process.env.HTTP, () => {
    console.log(`Server is running in http://${process.env.IP}:${process.env.HTTP}`);
});

module.exports = app