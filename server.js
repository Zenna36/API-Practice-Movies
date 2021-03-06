const express = require('express');
const server = express();
const PORT = process.env.PORT || 3012
const router = require('./routes/router')

server.set('view engine', 'ejs');

server.use('/', router);

server.listen(PORT, () => {
    console.log(`I shot the sheriff, but I did not shoot the deputy: ${PORT}`);
});